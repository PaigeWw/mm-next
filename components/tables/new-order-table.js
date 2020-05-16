import React, { useState, useEffect, useMemo } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import _ from "lodash"
import arrayMove from "array-move"
import Table, { TableLine, ProductInfo, SortableTable } from "./base-table"
import { SortableElement } from "react-sortable-hoc"
//\

import InputNumber from "../number-input"
import request from "../../utils/request"
import StyleItem from "../commons/min-style-item"
import Modal from "../../components/modal"
export default (props) => {
	const { selectStyles, isEditOrder, rate, toast, goodId } = props
	let initData = {
		orderData: [],
		itemsOrderSizeNums: {},
		selectStyles: [...selectStyles],
	}
	let tempStyleGroupList = []
	if (isEditOrder) {
		let titleIndex = 0
		initData.selectStyles.map((group) => {
			tempStyleGroupList.push({
				type: "title",
				packageCount: group.packageCount,
				cnts: group.cnts,
				index: titleIndex,
				key: group.styleNos,
				styleNos: group.styleNos,
				count: group.items.length,
				size: group.sizeId,
			})
			titleIndex += group.items.length + 1
			group.items.map((item) => {
				let styleList = []
				let price = []
				let prodInfo = []
				item.favorite.styleAndColor.map((x) => {
					if (!x.styleId) return
					price.push(x.styleId.price)
					let text = ""
					x.colorIds.map((color, index) => {
						if (index) {
							text += "/"
						}
						text = color.code
					})
					prodInfo.push({
						styleNo: x.styleId.styleNo,
						categoryName: x.styleId.categoryName,
						color: text,
						id: x.styleId._id,
					})
					// let positive = x.
					styleList.push({ style: x.styleId, colors: x.colorIds })
				})
				tempStyleGroupList.push({
					...item,
					id: item.favoriteId,
					styleList,
					price,
					prodInfo,
				})
				initData.itemsOrderSizeNums[item.favoriteId] = item.sizeInfo
			})
		})
	} else {
		initData.selectStyles.map((x) => {
			// console.log("initData itemsOrderSizeNumsitemsOrderSizeNums");
			initData.itemsOrderSizeNums[x.id] = [0, 0, 0, 0]
		})

		let tempStyleDate = initData.selectStyles.map((s) => {
			s.styleNos = s.prodInfo.map((i) => i.styleNo)
			return s
		})
		let resGroup = _.groupBy(tempStyleDate, (x) =>
			x.prodInfo.map((i) => i.styleNo)
		)

		let resGroupList = Object.values(resGroup)
		let resGroupKeys = Object.keys(resGroup)
		let tempTitleIndexs = []

		for (let i = 0; i < resGroupList.length; i++) {
			tempTitleIndexs = [...tempTitleIndexs, tempStyleGroupList.length]
			tempStyleGroupList = [
				...tempStyleGroupList,
				{
					type: "title",
					packageCount: 1,
					cnts: 1,
					index: tempTitleIndexs[i],
					key: resGroupKeys[i],
					styleNos: resGroupKeys[i],
					count: resGroupList[i].length,
					size: "5e6e1d51ab374bec68f4981d",
				},
				...resGroupList[i],
			]
		}
	}

	const [itemsOrderSizeNums, setItemsOrderSizeNums] = useState(
		initData.itemsOrderSizeNums
	)

	const [sizeChartModal, setSizeChartModal] = useState(false)

	const [sizeArrList, setSizeArrList] = useState({
		"5e6e1d51ab374bec68f4981d": ["32A", "32B", "32C", "32D"],
	})

	const [styleGroupList, setStyleGroupList] = useState(tempStyleGroupList)

	const sum = (arr) => {
		var s = 0
		for (var i = arr.length - 1; i >= 0; i--) {
			s += arr[i]
		}
		return s
	}
	useEffect(() => {
		const getSizeList = async () => {
			const res = await request("/goodsbase/size/getList", {
				goods: goodId,
			})
			let r = {}
			res.map((s) => {
				r[s._id] = s.values.map((v) => v.name)
				// console.log({ r })
			})
			setSizeArrList(r)
		}
		getSizeList()
	}, [])

	useEffect(() => {
		if (!isEditOrder) {
			const curSize = Object.keys(sizeArrList)[0]
			styleGroupList.map((temp) => {
				if (temp.type === "title") {
					temp.size = curSize
				}
			})
			Object.keys(itemsOrderSizeNums).map((key) => {
				let tempSizeVals = Object.keys(sizeArrList[curSize]).map((v) => 0)
				itemsOrderSizeNums[key] = tempSizeVals
			})
		}
		setItemsOrderSizeNums({ ...itemsOrderSizeNums })
		setStyleGroupList([...styleGroupList])
	}, [sizeArrList])
	useEffect(() => {
		let title = {}
		for (let i = 0; i < styleGroupList; i++) {
			styleGroupList[i].type === "title" ? (title = styleGroupList[i]) : null
			title.total += sum(itemsOrderSizeNums[styleGroupList[i].id])
		}
		setStyleGroupList([...styleGroupList])
	}, [itemsOrderSizeNums])

	const handleChangePackageCount = (num, index) => {
		if (num < 1) return
		styleGroupList[index].packageCount = num
		setStyleGroupList([].concat(styleGroupList))
	}

	const handleChangeCnts = (num, index) => {
		if (num < 1) return
		styleGroupList[index].cnts = num
		setStyleGroupList([].concat(styleGroupList))
	}
	const handleChangeOrder = (id, sizeIndex, num) => {
		if (num < 0) return

		itemsOrderSizeNums[id][sizeIndex] = num ? num : 0
		setItemsOrderSizeNums({ ...itemsOrderSizeNums })
	}

	const handleUpdateItemSizeArr = (titleIndex, sizeId) => {
		styleGroupList[titleIndex].size = sizeId
		for (let i = titleIndex + 1; i < styleGroupList.length; i++) {
			let temp = styleGroupList[i]
			if (temp.type === "title") {
				return
			}
			itemsOrderSizeNums[temp.id] = sizeArrList[sizeId].map((x) => 0)
		}
		setItemsOrderSizeNums({ ...itemsOrderSizeNums })

		setStyleGroupList([...styleGroupList])
	}

	const getOrderData = () => {
		let orderData = []
		let curTitle = {}
		for (let i = 0; i < styleGroupList.length; i++) {
			let temp = styleGroupList[i]
			if (temp.type === "title") {
				orderData.push({
					styleNos: temp.styleNos,
					sizeId: temp.size,
					packageCount: temp.packageCount,
					cnts: temp.cnts,
					items: [],
				})
				curTitle = temp
			} else {
				let lastIndex = orderData.length - 1
				let sizeInfo = itemsOrderSizeNums[temp.id]
				if (lastIndex < 0 || sum(sizeInfo) === 0) continue
				const amount = sum(sizeInfo) * curTitle.packageCount * curTitle.cnts
				orderData[lastIndex].items.push({
					favoriteId: temp.id,
					sizeInfo: sizeInfo,
					total: amount,
					totalPrice: (sum(temp.price) * amount).toFixed(2),
				})
			}
		}
		orderData = orderData.filter((g) => g.items.length > 0)
		console.log(orderData)
		return orderData
	}
	const handleSubmitOrder = async () => {
		toast.notify("comming soon...", "warn")

		// 数据格式
		/* 
      
      orderData: [
        {
          sizeId: id,
          styleNos: string,
          packageCount: number,
          cnts: number,
          items: [
            { 
              favoriteId: ,
              sizeInfo: [3, 2, 3, 4]
            },
            { 
              favoriteId: ,
              sizeInfo: [2, 3, 4]
            },
          ]
        }
      ]
     */
		// getOrderData();

		// return
		const res = await request(
			"/order/add",
			{
				orderGoodNo: 1,
				goodId: window.localStorage.getItem("curGoodId"),
				orderData: getOrderData(),
			},
			"post"
		)
		if (res) {
			toast.notify("Completed.", {
				type: "success",
				duration: 2,
			})
			props.nextStep()
		}
	}
	const handleUpdateOrder = async () => {
		const res = await request(
			"/order/update",
			{
				_id: isEditOrder,
				orderData: getOrderData(),
			},
			"post"
		)
		if (res) {
			props.nextStep()
		}
	}
	const handleDel = async (index) => {
		// onDelSelectStyle(index)
		let titleIndex = getPackageSpace(index)
		styleGroupList[titleIndex].count -= 1
		for (let i = index + 1; i < styleGroupList.length; i++) {
			if (styleGroupList[i].type === "title") {
				styleGroupList[i].index -= 1
			}
		}
		styleGroupList.splice(index, 1)
		setStyleGroupList([].concat(styleGroupList))
		// setOrderData([].concat(orderData));
	}
	const SortableTitleItem = SortableElement(({ keys, collect }) => {
		return (
			<TableLine gary noEdit key={`selectline-keys-${keys}`}>
				<Box colspan="4">{`款式编号：${keys}`}</Box>
				<Flex colspan="1" justifyContent="center">
					{sizeArrList[collect.size] && sizeArrList[collect.size].join("/")}
					<Text
						pl="6px"
						fontSize="10px"
						sx={{
							textDecoration: "underline",
						}}
						onClick={() => {
							setSizeChartModal(collect)
						}}
					>
						change
					</Text>
				</Flex>
				<Box colspan="6"></Box>
			</TableLine>
		)
	})
	// const MemoInput = useMemo(() => <InputNumber />)
	const SortableItem = SortableElement(
		({
			indexNo,
			collect,
			styleGroupLength,
			packageCount,
			cnts,
			titleIndex,
			sizeId,
		}) => {
			if (!collect) return <div></div>
			const amount = sum(itemsOrderSizeNums[collect.id]) * packageCount * cnts
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
					<Flex justifyContent="flex-start">
						{sizeArrList[sizeId] &&
							sizeArrList[sizeId].map((size, sizeIndex) => (
								<Flex flexDirection="column">
									<Text mr="10px">{size}</Text>
									{useMemo(() => (
										<InputNumber
											value={
												itemsOrderSizeNums[collect.id]
													? itemsOrderSizeNums[collect.id][sizeIndex]
													: 0
											}
											onChange={(num) => {
												handleChangeOrder(collect.id, sizeIndex, num)
												// console.log(collect.id, size.name, num)
											}}
											upValue={() => {
												handleChangeOrder(
													collect.id,
													sizeIndex,
													itemsOrderSizeNums[collect.id][sizeIndex] + 1
												)
											}}
											downValue={() => {
												handleChangeOrder(
													collect.id,
													sizeIndex,
													itemsOrderSizeNums[collect.id][sizeIndex] - 1
												)
											}}
										/>
									))}
								</Flex>
							))}
					</Flex>
					{styleGroupLength <= 0 ? null : (
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
										num == "" || !num ? 0 : parseInt(num),
										titleIndex
									)
								}}
								upValue={() => {
									handleChangePackageCount(packageCount + 1, titleIndex)
								}}
								downValue={() => {
									handleChangePackageCount(packageCount - 1, titleIndex)
								}}
							/>
						</Flex>
					)}
					{styleGroupLength <= 0 ? null : (
						<Flex
							rowspan={styleGroupLength}
							hasBorder={"1px solid"}
							justifyContent="center"
							alignItems="center"
							sx={{ width: "100%", height: "100%" }}
						>
							<InputNumber
								value={cnts}
								onChange={(num) => {
									handleChangeCnts(
										num == "" || !num ? 0 : parseInt(num, titleIndex)
									)
								}}
								upValue={() => {
									handleChangeCnts(cnts + 1, titleIndex)
								}}
								downValue={() => {
									handleChangeCnts(cnts - 1, titleIndex)
								}}
							/>
						</Flex>
					)}
					<Text>{amount}</Text>
					<Flex flexDirection="column">
						{collect.price.map((price) => (
							<Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
						))}
					</Flex>
					<Text>
						{
							(sum(collect.price) * amount * props.rate.val).toFixed(2)
							// (orderData[indexNo].totalPrice * rate.val).toFixed(2)
						}
					</Text>
				</TableLine>
			)
		}
	)

	const handleCreateNewPackage = () => {
		let newPackageName = `New Package`

		setStyleGroupList([
			...styleGroupList,
			{
				type: "title",
				size: "5e6e1d51ab374bec68f4981d",
				packageCount: 1,
				cnts: 1,
				index: styleGroupList.length,
				key: newPackageName,
				styleNos: "",
				count: 0,
			},
		])
	}
	const getPackageSpace = (index) => {
		let space = -1
		for (let i = index; i >= 0; i--) {
			if (styleGroupList[i].type === "title") {
				return i
			}
		}
		return space
	}
	let title = { index: 0, count: 1 }
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
			{sizeChartModal ? (
				<Modal
					onClose={() => {
						setSizeChartModal(false)
					}}
				>
					{Object.keys(sizeArrList).map((sizeId, index) => {
						const sizeArr = sizeArrList[sizeId]
						return (
							<Flex
								alignItems="center"
								justifyContent="space-between"
								pr="6px"
								style={{ border: "1px solid #000" }}
							>
								<Flex style={{ padding: "12px", lineHeight: "22px" }}>
									{sizeArr.join("/")}
								</Flex>
								<Text
									style={{ textDecoration: "underline" }}
									onClick={() => {
										handleUpdateItemSizeArr(sizeChartModal.index, sizeId)
										setSizeChartModal(false)
									}}
								>
									select
								</Text>
							</Flex>
						)
					})}
				</Modal>
			) : null}
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					width: "100%",
					display: "table",
				}}
			>
				<SortableTable
					sort={{
						pressDelay: 200,
						onSortEnd: ({ oldIndex, newIndex }) => {
							if (newIndex <= 0) return
							let oldSpace = getPackageSpace(oldIndex)
							let newSpace = getPackageSpace(newIndex)

							if (newSpace === newIndex && oldIndex > newIndex) {
								// newIndex = newIndex - 1
								newSpace = getPackageSpace(newIndex - 1)
							}
							if (
								styleGroupList[newSpace].size &&
								sizeArrList[styleGroupList[newSpace].size]
							) {
								itemsOrderSizeNums[styleGroupList[oldIndex].id] = sizeArrList[
									styleGroupList[newSpace].size
								].map((x) => 0)
							} else {
								itemsOrderSizeNums[styleGroupList[oldIndex].id] = []
							}

							if (oldSpace === newSpace) {
								setItemsOrderSizeNums({ ...itemsOrderSizeNums })
								setStyleGroupList(arrayMove(styleGroupList, oldIndex, newIndex))
								return
							}

							if (
								styleGroupList[oldSpace].styleNos ===
								styleGroupList[newSpace].styleNos
							) {
								styleGroupList[oldSpace].count--
								styleGroupList[newSpace].count++

								let start = oldIndex > newIndex ? newIndex : oldIndex
								let end = oldIndex < newIndex ? newIndex : oldIndex
								let change = oldIndex > newIndex ? 1 : -1
								for (let i = start; i <= end; i++) {
									if (styleGroupList[i].type === "title") {
										styleGroupList[i].index += change
									}
								}
								setItemsOrderSizeNums({ ...itemsOrderSizeNums })
								setStyleGroupList(arrayMove(styleGroupList, oldIndex, newIndex))
								return
							}
							if (styleGroupList[newSpace].styleNos === "") {
								styleGroupList[newSpace].styleNos =
									styleGroupList[oldSpace].styleNos
								styleGroupList[newSpace].key = styleGroupList[oldSpace].styleNos
								styleGroupList[oldSpace].count--
								styleGroupList[newSpace].count++
								let start = oldIndex > newIndex ? newIndex : oldIndex
								let end = oldIndex < newIndex ? newIndex : oldIndex
								let change = oldIndex > newIndex ? 1 : -1
								for (let i = start; i <= end; i++) {
									if (styleGroupList[i].type === "title") {
										styleGroupList[i].index += change
									}
								}
								setItemsOrderSizeNums({ ...itemsOrderSizeNums })
								setStyleGroupList(arrayMove(styleGroupList, oldIndex, newIndex))
							}
						},
					}}
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "样衣编号", width: "2/22" },
						{ name: "颜色", width: "4/22" },
						{ name: "图片", width: "1/22" },
						{ name: "尺码/配比", width: "2/22" },

						{ name: "中包数", width: "2/22" },
						{ name: "箱数", width: "2/22" },
						{ name: "件数", width: "2/22" },
						{ name: `单价/${rate.sign}`, width: "4/22" },
						{ name: `金额/${rate.sign}`, width: "1/22" },
						{ name: "删除", width: "2/22" },
					]}
				>
					{styleGroupList.map((collect, index) => {
						if (collect.type === "title") {
							title = collect
							return (
								<SortableTitleItem
									disabled
									indexNo={0}
									collect={collect}
									keys={collect.key}
									key={`categoryList-item-title-${index}`}
									index={index}
								/>
							)
						}
						return (
							<SortableItem
								indexNo={index}
								collect={collect}
								key={`categoryList-item-${index}`}
								index={index}
								packageCount={title.packageCount}
								sizeId={title.size}
								cnts={title.cnts}
								titleIndex={title.index}
								styleGroupLength={index === title.index + 1 ? title.count : 0}
							></SortableItem>
						)
					})}
				</SortableTable>
			</Box>
			<Button
				variant="primary"
				width="19.2rem"
				bg="#fff"
				color="#000"
				sx={{
					borderRadius: 0,
					fontSize: "16px",
					border: "dashed 1px #000",
					padding: "10px 0",
					cursor: "pointer",
				}}
				onClick={handleCreateNewPackage}
			>
				生成一个新的中包
			</Button>
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
				onClick={isEditOrder ? handleUpdateOrder : handleSubmitOrder}
			>
				制作完成
			</Button>
		</Flex>
	)
}
