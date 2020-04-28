import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import StyleItem from "../commons/min-style-item"
// import InputNumber from "../number-input"
// import request from "../../utils/request"

export default (props) => {
	const { OrderDetail, rate = { val: 1, sign: "¥" } } = props
	const line = props.OrderDetail.orderData.length
	// const {orderData} = OrderDetail
	console.log(OrderDetail)
	let tempStyleGroupList = []
	const [orderData, setOrderData] = useState(OrderDetail.orderData)
	let sizeInfoMaxLength = 0
	let titleIndex = 0
	orderData.map((group) => {
		sizeInfoMaxLength =
			sizeInfoMaxLength > group.size.values.length
				? sizeInfoMaxLength
				: group.size.values.length
		const sizeVal = group.size.values.map((v) => v.name)
		tempStyleGroupList.push({
			type: "title",
			packageCount: group.packageCount,
			packageCount: group.styleNos,
			sizeVal: sizeVal,
			cnts: group.cnts,
			index: titleIndex,
			key: group.styleNos,
			styleNos: group.styleNos,
			count: group.items.length,
		})
		titleIndex += group.items.length + 1
		group.items.map((item, index) => {
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
				id: item._id,
				styleList,
				price,
				prodInfo,
				sizeVal: sizeVal,
				isFrist: index === 0,
				itemsCount: group.items.length,
				packageCount: group.packageCount,

				cnts: group.cnts,
			})
		})
	})
	const [styleGroupList, setStyleGroupList] = useState(tempStyleGroupList)
	console.log(OrderDetail)
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				width: "100%",
			}}
		>
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					width: "800px",
					display: "table",
				}}
			>
				<Table
					id={"one-order-detail"}
					hasBorder={"1px solid"}
					sx={{
						margin: "0",
						marginRight: "1px",
						width: "100%",
						"&": {
							th: {
								padding: "14px",
							},
						},
					}}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22", colspan: sizeInfoMaxLength },
						{ name: "PACKAGES", width: "2/22" },
						{ name: "CNTS", width: "2/22" },
						{ name: "QUANTITY", width: "2/22" },
						{ name: `PRICE/${rate.sign}`, width: "4/22" },
						{ name: `TOTAL AMOUN/${rate.sign}`, width: "1/22" },
					]}
				>
					{styleGroupList.map((item, index) =>
						item.type === "title" ? (
							<TableLine gary noEdit key={`selectline-keys-${index}`}>
								<Box colspan="4">{`StyleNo:${item.styleNos}`}</Box>
								<Flex colspan={sizeInfoMaxLength} justifyContent="center">
									{item.sizeVal.join("/")}
								</Flex>
								<Box colspan="5"></Box>
							</TableLine>
						) : (
							<>
								{" "}
								<TableLine noEdit key={`selectline-${item._id}`}>
									<Text rowspan={2} hasBorder={"1px solid"}>
										{index + 1}
									</Text>
									<Flex justifyContent="center" rowspan={2}>
										<Box margin="8px 0">
											{item.favorite.styleAndColor.map((x) => {
												return <ProductInfo styleNum={x.styleId.styleNo} />
											})}

											{/* <ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" /> */}
										</Box>
									</Flex>
									<Flex
										rowspan={2}
										flexDirection="column"
										hasBorder={"1px solid"}
									>
										{item.favorite.styleAndColor.map((x) => {
											return x.colorIds.map((c) => (
												<ProductInfo made={c.code}></ProductInfo>
											))
										})}
									</Flex>
									{props.imgToUrl ? (
										<a
											rowspan={2}
											href={`${window.location.origin}/demo?id=${item.favorite._id}&rid=${OrderDetail._id}`}
										>
											款式图
										</a>
									) : (
										<StyleItem
											rowspan={2}
											hasBorder={"1px solid"}
											margin={"1px"}
											key={`${index}-style-img`}
											styleList={item.favorite.styleAndColor.map((x) => {
												// styleList.push({ style: x.style, colors: x.colorIds })
												return { style: x.styleId, colors: x.colorIds }
											})}
											index={index}
											tool={false}
										/>
									)}

									{item.sizeVal.map((size) => (
										<Flex
											flexDirection="column"
											hasBorder={"1px solid"}
											width="28px"
										>
											<Text>{size}</Text>
										</Flex>
									))}
									{!item.isFrist ? null : (
										<Flex
											rowspan={item.itemsCount * 2}
											hasBorder={"1px solid"}
											justifyContent="center"
											alignItems="center"
											sx={{ width: "100%", height: "100%" }}
										>
											<Text>{item.packageCount}</Text>
										</Flex>
									)}
									{!item.isFrist ? null : (
										<Flex
											rowspan={item.itemsCount * 2}
											hasBorder={"1px solid"}
											justifyContent="center"
											alignItems="center"
											sx={{ width: "100%", height: "100%" }}
										>
											<Text>{item.cnts}</Text>
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
										{item.favorite.styleAndColor.map((x) => (
											<Text>{(x.styleId.price * rate.val).toFixed(2)}</Text>
										))}
									</Flex>
									<Text rowspan={2} hasBorder={"1px solid"}>
										{(item.totalPrice * rate.val).toFixed(2)}
									</Text>
								</TableLine>
								<TableLine noEdit key={`selectline-1-${item._id}`}>
									{item.sizeInfo.map((info) => (
										<Flex
											width="28px"
											justifyContent="center"
											hasBorder={"1px solid"}
										>
											<Text>{info}</Text>
										</Flex>
									))}
								</TableLine>
							</>
						)
					)}
				</Table>
			</Box>
		</Flex>
	)
}
