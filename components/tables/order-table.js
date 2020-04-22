import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"

import Table, { TableLine, ProductInfo } from "./base-table"
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
	const [orderData, setOrderData] = useState(initData.orderData)
	const [styleData, setStyleData] = useState(initData.selectStyles)
	// console.log(styleData)
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
	console.log("after", orderData)
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
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22" },
						{ name: "PACKAGES", width: "2/22" },
						{ name: "QUANTITY", width: "2/22" },
						{ name: `PRICE/${rate.sign}`, width: "4/22" },
						{ name: `TOTAL AMOUN/${rate.sign}`, width: "1/22" },
						{ name: "DELETE", width: "2/22" },
					]}
				>
					{styleData.map((collect, index) => (
						<TableLine
							haveDel
							key={`selectline-${collect.id}`}
							onDel={() => {
								handleDel(index)
							}}
						>
							<Text>{index}</Text>
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
								key={`${index}-order-style-img`}
								styleList={collect.styleList}
								index={index}
								tool={false}
							/>
							<Flex justifyContent="space-between">
								{orderData[index].sizeInfo.map((size, sizeIndex) => (
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
								))}
							</Flex>
							{index > 0 ? null : (
								<Flex
									rowspan={line}
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

							<Text>{orderData[index].total}</Text>
							<Flex flexDirection="column">
								{collect.price.map((price) => (
									<Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
								))}
							</Flex>
							<Text>{(orderData[index].totalPrice * rate.val).toFixed(2)}</Text>
						</TableLine>
					))}
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
