import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import StyleItem from "../commons/min-style-item"
// import InputNumber from "../number-input"
// import request from "../../utils/request"

export default props => {
	const { OrderDetail } = props
	const line = props.OrderDetail.orderData.length
	// const {orderData} = OrderDetail
	console.log(OrderDetail)
	const [orderData, setOrderData] = useState(OrderDetail.orderData)
	const [packageCount, setPackageCount] = useState(OrderDetail.packageCount)
	let sizeInfoMaxLength = 0
	orderData.map(order => {
		sizeInfoMaxLength =
			sizeInfoMaxLength > order.sizeInfo.length
				? sizeInfoMaxLength
				: order.sizeInfo.length
	})

	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%"
			}}
		>
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					width: "800px",
					display: "table"
				}}
			>
				<Table
					hasBorder={"1px solid"}
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22", colspan: sizeInfoMaxLength },
						{ name: "PACKAGES", width: "2/22" },
						{ name: "QUANTITY", width: "2/22" },
						{ name: "PRICE", width: "4/22" },
						{ name: "TOTAL AMOUN", width: "1/22" }
					]}
				>
					{orderData.map((item, index) => (
						<>
							<TableLine noEdit key={`selectline-${item._id}`}>
								<Text rowspan={2} hasBorder={"1px solid"}>
									{index}
								</Text>
								<ProductInfo
									rowspan={2}
									styleNum="XSJHFH00928"
									hasBorder={"1px solid"}
								/>
								<Flex
									rowspan={2}
									flexDirection="column"
									hasBorder={"1px solid"}
								>
									<ProductInfo made="2110 YE GREEN" />
									<ProductInfo made="2110 YE GREEN" />
								</Flex>
								<StyleItem
									rowspan={2}
									hasBorder={"1px solid"}
									margin={"1px"}
									key={`${index}-style-img`}
									styleList={item.favorite.styleAndColor.map(x => {
										// styleList.push({ style: x.style, colors: x.colorIds })
										return { style: x.styleId, colors: x.colorIds }
									})}
									index={index}
									tool={false}
								/>
								{item.sizeInfo.map(size => (
									<Flex
										flexDirection="column"
										hasBorder={"1px solid"}
										width="28px"
									>
										<Text>{size.name}</Text>
									</Flex>
								))}
								{index > 0 ? null : (
									<Flex
										rowspan={line * 2}
										hasBorder={"1px solid"}
										justifyContent="center"
										alignItems="center"
										sx={{ width: "100%", height: "100%" }}
									>
										<Text>{packageCount}</Text>
									</Flex>
								)}
								<Text rowspan={2} hasBorder={"1px solid"}>
									{item.total}
								</Text>
								<Flex
									rowspan={2}
									hasBorder={"1px solid"}
									flexDirection="column"
								>
									{item.signalPrice}
								</Flex>
								<Text rowspan={2} hasBorder={"1px solid"}>
									{item.totalPrice}
								</Text>
							</TableLine>
							<TableLine noEdit key={`selectline-1-${item._id}`}>
								{item.sizeInfo.map(size => (
									<Flex
										width="28px"
										justifyContent="center"
										hasBorder={"1px solid"}
									>
										<Text>{size.num}</Text>
									</Flex>
								))}
							</TableLine>
						</>
					))}
				</Table>
			</Box>
		</Flex>
	)
}
