import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
import InputNumber from "../number-input"
import request from "../../utils/request"

export default props => {
	const { selectStyles } = props
	const line = props.selectStyles.length
	console.log(selectStyles)
	const initData = selectStyles.map(x => {
		let sizeInfo = x.details[0].size.values.map(item => ({ ...item, num: 0 }))
		console.log()
		return {
			favoriteId: x.id,
			sizeInfo: sizeInfo,
			total: 0,
			totalPrice: 0,
			signalPrice:
				x.details[0].price + (x.details.length > 1 ? x.details[1].price : 0)
		}
	})
	const [orderData, setOrderData] = useState(initData)
	const [packageCount, setPackageCount] = useState(1)
	const handleChangePackageCount = num => {
		if (num < 1) return
		setPackageCount(num)
		orderData.map((order, index) => {
			order.total = getItemsTotal(index) * num
		})
		setOrderData([].concat(orderData))
	}
	const handleChangeOrder = (styleIndex, sizeIndex, num) => {
		console.log(num)
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
	const getItemsTotal = index => {
		if (index < orderData.length) {
			let count = 0
			orderData[index].sizeInfo.map(size => {
				count += size.num
			})
			return count
		}
	}

	const handleSubmitOrder = async () => {
		const res = await request(
			"/order/add",
			{
				packageCount,
				orderData
			},
			"post"
		)
		if (res) {
			props.nextStep()
		}
	}
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				background: "#FFF0E5"
			}}
		>
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					display: "table"
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
						{ name: "PRICE", width: "4/22" },
						{ name: "TOTAL AMOUN", width: "1/22" },
						{ name: "DELETE", width: "2/22" }
					]}
				>
					{selectStyles.map((collect, index) => (
						<TableLine haveDel key={`selectline-${collect.id}`}>
							<Text>{index}</Text>
							<ProductInfo styleNum="XSJHFH00928" />
							<Flex flexDirection="column">
								<ProductInfo made="2110 YE GREEN" />
								<ProductInfo made="2110 YE GREEN" />
							</Flex>
							<ShowStyle
								key={collect.id}
								imgWidth="0.95rem"
								mode={"POSITIVE"}
								threeViews={collect.threeViews}
								border="none"
								hideInfo
							/>
							<Flex justifyContent="space-between">
								{collect.details[0].size.values.map((size, sizeIndex) => (
									<Flex flexDirection="column">
										<Text mr="10px">{size.name}</Text>
										<InputNumber
											value={orderData[index].sizeInfo[sizeIndex].num}
											onChange={num => {
												handleChangeOrder(index, sizeIndex, num)
												console.log(collect.id, size.name, num)
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
								{/* {console.log(collect.details[0].size)}
								<Flex flexDirection="column">
									<Text mr="10px">S</Text>
									<InputNumber />
								</Flex> */}
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
										onChange={num => {
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
							<Flex flexDirection="column">{orderData[index].signalPrice}</Flex>
							<Text>{orderData[index].totalPrice}</Text>
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
					cursor: "pointer"
				}}
				onClick={handleSubmitOrder}
			>
				COMPLETE
			</Button>
		</Flex>
	)
}
