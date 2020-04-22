import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import _ from "lodash"
import arrayMove from "array-move"
import { TableLine, ProductInfo, SortableTable } from "./base-table"
const Table = SortableTable
import { SortableElement } from "react-sortable-hoc"

import InputNumber from "../number-input"
import request from "../../utils/request"
import StyleItem from "../commons/min-style-item"

export default (props) => {
	const { selectStyles, isEditOrder, rate, toast } = props
	const line = props.selectStyles.length
	let initData = {
		orderData: [],
		selectStyles: [...selectStyles],
	}
	if (isEditOrder) {
		initData.orderData = selectStyles.map((x, index) => {
			// let sizeInfo = x.details[0].size.values.map(item => ({ ...item, num: 0 }))
			// console.log(x)
			let stylePrice = x.favorite.styleAndColor[0].styleId.price
			x.favorite.styleAndColor.length > 1
				? (stylePrice += x.favorite.styleAndColor[1].styleId.price)
				: null

			let styleList = []
			let prodInfo = []
			let price = []
			x.favorite.styleAndColor.map((item) => {
				styleList.push({
					style: item.styleId,
					colors: item.colorIds,
				})
				let text = ""
				item.colorIds.map((c, index) => {
					if (index > 0) {
						text = text + "/" + c.code
					} else {
						text = c.code
					}
				})
				prodInfo.push({
					styleNo: item.styleId.styleNo,
					color: text,
				})
				price.push(item.styleId.price)
			})
			initData.selectStyles[index] = { styleList, prodInfo, price }
			return {
				favoriteId: x.favoriteId,
				sizeInfo: x.sizeInfo,
				total: x.total,
				totalPrice: x.totalPrice,
				signalPrice: stylePrice,
			}
		})
	} else {
		initData.orderData = selectStyles.map((x) => {
			let sizeInfo = x.details[0].size.values.map((item) => ({
				...item,
				num: 0,
			}))
			console.log("initData")
			return {
				favoriteId: x.id,
				sizeInfo: sizeInfo,
				total: 0,
				totalPrice: 0,
				signalPrice:
					x.details[0].price + (x.details.length > 1 ? x.details[1].price : 0),
			}
		})
	}

	// const [showOrderDetail, setShowOrderDetail] = useState(false)
	// const [groupOrderDataByStyleNo, setGroupOrderDataByStyleNo] = useState(_.groupBy(initData.orderData))
	const [orderData, setOrderData] = useState(initData.orderData)
	const [styleData, setStyleData] = useState(initData.selectStyles)
	let resGroup = _.groupBy(styleData, (x) => x.prodInfo.map((i) => i.styleNo))
	const [styleDataGroupByStyleNo, setStyleDataGroupByStyleNo] = useState(
		resGroup
	)

	const [packageCount, setPackageCount] = useState(1)
	const handleChangePackageCount = (num) => {
		if (num < 1) return
		setPackageCount(num)
		orderData.map((order, index) => {
			order.total = getItemsTotal(index) * num
			order.totalPrice = (order.signalPrice * order.total).toFixed(2)
		})
		setOrderData([].concat(orderData))
	}
	const handleChangeOrder = (styleIndex, sizeIndex, num) => {
		// console.log(num)
		if (num < 0) return
		orderData[styleIndex].sizeInfo[sizeIndex].num = parseInt(num, 10)
		let allNumSum = getItemsTotal(styleIndex)
		orderData[styleIndex].total = allNumSum * packageCount
		let temp = new Number(
			allNumSum * packageCount * orderData[styleIndex].signalPrice
		)
		orderData[styleIndex].totalPrice = temp.toFixed(2)
		setOrderData([].concat(orderData))
		// console.log("orderData", orderData)
	}
	const getItemsTotal = (index) => {
		if (index < orderData.length) {
			let count = 0
			orderData[index].sizeInfo.map((size) => {
				count += size.num
			})
			return count
		}
	}
	const handleUpdateOrder = async () => {
		const res = await request(
			"/order/update",
			{
				_id: isEditOrder,
				packageCount,
				orderData,
			},
			"post"
		)
		if (res) {
			props.nextStep()
		}
	}

	const handleSubmitOrder = async () => {
		console.log("handleSubmitOrder", orderData[0].total)
		for (let i = 0; i < orderData.length; i++) {
			if (orderData[i].total < 1) {
				console.log(i)
				console.log(orderData[i])
				toast.notify("There is one item not empty here, please check.")
				return
			}
		}
		if (isEditOrder) {
			handleUpdateOrder()
			return
		}
		const res = await request(
			"/order/add",
			{
				packageCount,
				orderData,
			},
			"post"
		)
		if (res) {
			toast.notify("Completed.", { type: "success", duration: 2 })
			props.nextStep()
		}
	}

	const handleDel = async (index) => {
		// onDelSelectStyle(index)
		styleData.splice(index, 1)
		orderData.splice(index, 1)
		setStyleData([].concat(styleData))
		setOrderData([].concat(orderData))
	}
	const SortableTitleItem = SortableElement(({ collect, keys }) => {
		return (
			<TableLine noEdit key={`selectline-keys-${collect.id}`}>
				<Box colspan="4">{`StyleNo:${keys}`}</Box>
				<Box colspan="6">{`StyleNo:${keys}`}</Box>
			</TableLine>
		)
	})
	const SortableItem = SortableElement(
		({ indexNo, collect, styleGroupLength }) => {
			// console.log("SortableItem ", collect)
			// console.log("SortableItem ", collect.id)
			// let index = indexNo
			if (!collect) return <div></div>
			return (
				<TableLine
					haveDel
					key={`selectline-${collect.id}`}
					onDel={() => {
						handleDel(indexNo)
					}}
				>
					<Text>{indexNo}</Text>
					<Flex flexDirection="column">
						{collect.prodInfo.map((x) => (
							<ProductInfo styleNum={x.styleNo} />
						))}
					</Flex>
					<Flex flexDirection="column">
						{collect.prodInfo.map((x) => (
							<ProductInfo made={x.color} />
						))}
					</Flex>
					<StyleItem
						key={`${indexNo}-order-style-img`}
						styleList={collect.styleList}
						index={indexNo}
						tool={false}
					/>
					<Flex justifyContent="space-between">
						{/* {styleGroup[index].sizeInfo.map((size, sizeIndex) => (
											<Flex flexDirection="column">
												<Text mr="10px">{size.name}</Text>
												<InputNumber
													value={orderData[index].sizeInfo[sizeIndex].num}
													onChange={(num) => {
														handleChangeOrder(index, sizeIndex, num)
														// console.log(collect.id, size.name, num)
													}}
													upValue={() => {
														handleChangeOrder(
															index,
															sizeIndex,
															orderData[index].sizeInfo[sizeIndex].num + 1
														)
													}}
													downValue={() => {
														handleChangeOrder(
															index,
															sizeIndex,
															orderData[index].sizeInfo[sizeIndex].num - 1
														)
													}}
												/>
											</Flex>
										))} */}
						comming soon...
					</Flex>
					{indexNo > 0 ? null : (
						<Flex
							rowspan={styleGroupLength}
							hasBorder={"1px solid"}
							justifyContent="center"
							alignItems="center"
							sx={{ width: "100%", height: "100%" }}
						>
							<InputNumber
								value={packageCount}
								onChange={(num) => {
									handleChangePackageCount(
										num == "" || !num ? 0 : parseInt(num)
									)
								}}
								upValue={() => {
									handleChangePackageCount(packageCount + 1)
								}}
								downValue={() => {
									handleChangePackageCount(packageCount - 1)
								}}
							/>
						</Flex>
					)}

					<Text>{orderData[indexNo].total}</Text>
					<Flex flexDirection="column">
						{collect.price.map((price) => (
							<Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
						))}
					</Flex>
					<Text>{(orderData[indexNo].totalPrice * rate.val).toFixed(2)}</Text>
				</TableLine>
			)
		}
	)
	const findStyleBySortIndex = (findIndex) => {
		let count = 0
		const styleNoKeys = Object.keys(styleDataGroupByStyleNo)
		for (let i = 0; i < styleNoKeys.length; i++) {
			let index = i
			let styleNo = styleNoKeys[i]
			count += styleDataGroupByStyleNo[styleNo].length
			const originIndex = findIndex - index - 1
			console.log("originIndex----", originIndex)
			if (
				originIndex >= 0 &&
				originIndex < styleDataGroupByStyleNo[styleNo].length
			) {
				return {
					styleNo: styleNo,
					originIndex: originIndex,
					item: styleDataGroupByStyleNo[originIndex],
				}
			}
		}
	}
	function swapArray(arr, index1, index2) {
		if (index > tindex) {
			arr.splice(tindex, 0, arr[index])
			arr.splice(index + 1, 1)
		} else {
			//如果当前元素在拖动目标位置的上方，先将当前元素从数组拿出，数组长度-1，我们直接给数组拖动目标位置+1的地方新增一个和当前元素值一样的元素，
			//这时，数组len不变，我们再把数组之前的那个拖动的元素删除掉，下标还是index
			arr.splice(tindex + 1, 0, arr[index])
			arr.splice(index, 1)
		}
	}

	let sortIndex = 0
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				width: "100%",
				background: "#FFF0E5",
			}}
		>
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					width: "100%",
					display: "table",
				}}
			>
				<Table
					sort={{
						pressDelay: 200,
						onSortEnd: ({ oldIndex, newIndex }) => {
							console.log(oldIndex, newIndex)
							//查询 styleNo
							const old = findStyleBySortIndex(oldIndex)
							const neo = findStyleBySortIndex(newIndex)
							if (old.styleNo === neo.styleNo) {
								// if()
								styleDataGroupByStyleNo[old.styleNo] = arrayMove(
									styleDataGroupByStyleNo[old.styleNo],
									old.originIndex,
									neo.originIndex
								)
								// [old.originIndex] = neo.item
								// styleDataGroupByStyleNo[old.styleNo][neo.originIndex] = old.item
								setStyleDataGroupByStyleNo({ ...styleDataGroupByStyleNo })
							}
						},
					}}
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22", onClick: () => {} },
						{ name: "PACKAGES", width: "2/22" },
						{ name: "QUANTITY", width: "2/22" },
						{ name: `PRICE/${rate.sign}`, width: "4/22" },
						{ name: `TOTAL AMOUN/${rate.sign}`, width: "1/22" },
						{ name: "DELETE", width: "2/22" },
					]}
				>
					{_.flatten(
						Object.keys(styleDataGroupByStyleNo).map((styleKey) => {
							let styleGroup = styleDataGroupByStyleNo[styleKey]
							let keys = styleKey

							return styleGroup.map((collect, index) => {
								console.log(sortIndex)
								return (
									<>
										{index !== 0 ? null : (
											<SortableTitleItem
												disabled
												indexNo={index}
												collect={collect}
												keys={keys}
												key={`categoryList-item-title-${sortIndex}`}
												index={sortIndex++}
											/>
										)}
										<SortableItem
											indexNo={index}
											collect={collect}
											key={`categoryList-item-${sortIndex}`}
											index={sortIndex++}
											styleGroupLength={index === 0 ? styleGroup.length : 0}
										></SortableItem>
									</>
								)
							})
						})
					)}
				</Table>
			</Box>

			<Button
				variant="primary"
				height="1.13rem"
				width="19.2rem"
				bg="#000"
				color="#fff"
				padding="0"
				sx={{
					borderRadius: 0,
					fontSize: "0.27rem",
					cursor: "pointer",
				}}
				onClick={handleSubmitOrder}
			>
				COMPLETE
			</Button>
		</Flex>
	)
}
