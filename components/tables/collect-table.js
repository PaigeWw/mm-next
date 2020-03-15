import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"

import EditBox from "../made-edit-box"
import StyleItem from "../commons/min-style-item"
import request from "../../utils/request"
export default props => {
	const [showEditBox, setShowEditBox] = useState(false)
	const [editIndex, setEditIndex] = useState(0)
	// const mode = "POSITIVE"
	const [collectList, setCollectList] = useState([])
	const [collectDetailsList, setCollectDetailsList] = useState([])
	const [selectList, setSelectList] = useState([])
	const getCollectList = async () => {
		const res = await request("/user/getFavoriteList")
		// console.log("----res----", res)
		if (!res) return
		const data = res.map(item => {
			let prodInfo = []
			let price = []
			let styleList = []
			let colorInfo = []
			// let colorInfo = []
			let date = []
			let details = []
			let threeViews = item.styleAndColor.map(x => {
				if (!x.style) return
				details.push(x.style)
				prodInfo.push({
					styleNo: x.style.styleNo,
					id: x.style._id
				})
				price.push(x.style.price)
				date.push(x.style.updateTime)
				colorInfo.push(x.colorIds)
				// let positive = x.
				styleList.push({ style: x.style, colors: x.colorIds })
				return { POSITIVE: x.front }
			})
			collectDetailsList.push(details)
			setCollectDetailsList([].concat(collectDetailsList))
			return {
				id: item._id,
				colorInfo,
				threeViews,
				prodInfo,
				price,
				styleList,
				date
			}
		})
		setCollectList(data)
	}

	useEffect(() => {
		getCollectList()
	}, [])

	const handleSelect = (index, item) => {
		const pos = selectList.findIndex(x => x.index === index)
		if (pos < 0) {
			selectList.push({ index, ...item, details: collectDetailsList[index] })
		} else {
			selectList.splice(pos, 1)
		}
		setSelectList([].concat(selectList))
	}

	const handleDel = async (index, item) => {
		console.log(item)
		const res = await request("/user/deleteFavorite", { _id: item.id }, "post")
		// console.log("res", res)
		if (res) {
			console.log("删除他，嘿嘿嘿")
			collectList.splice(index, 1)
			setCollectList([].concat(collectList))
		}
	}
	const handleConfirmMade = async (colorIds, imgUrls) => {
		// const res = await request("/user/updateFavorite", {  }, "post")
		if (!colorIds[0]) return
		let params = [
			{
				styleId: collectList[editIndex].prodInfo[0].id,
				colorId: colorIds[0]
			}
		]

		if (collectList[editIndex].length > 1) {
			// if (! > 2) return
			params.push({
				styleId: collectList[editIndex].prodInfo[1].id,
				colorId: colorIds[1]
			})
		}
		const res = await request(
			"/user/updateFavorite",
			{ _id: collectList[editIndex].id, styleAndColor: params },
			"post"
		)
		// setStyleDetails([].concat(styleDetails))
		if (res) {
			getCollectList()
		}
	}
	console.log("collectList", collectList)
	return collectList.length > 0 ? (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				background: "#FFF0E5"
			}}
		>
			<Table
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "PICTRUE", width: "2/22" },
					{ name: "PRODUCT INFOMATION", width: "4/22" },
					{ name: "PRICE", width: "1/22" },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE", width: "1/22" },
					{ name: "EDIT", width: "5/22" }
				]}
			>
				{collectList.map((collect, index) => (
					<TableLine
						isSelect={selectList.findIndex(x => index === x.index) >= 0}
						haveSelect
						onSelect={() => {
							handleSelect(index, collect)
						}}
						haveDel
						onDel={() => {
							handleDel(index, collect)
						}}
						haveEdit
						onEdit={() => {
							setEditIndex(index)
							setShowEditBox(true)
						}}
					>
						<Text style={{ position: "absolute" }}>{index + 1}</Text>
						<StyleItem
							key={`${index}-style-img`}
							styleList={collect.styleList}
							index={index}
							tool={false}
						/>
						{/* <Text>loading</Text> */}
						<Flex justifyContent="center">
							<Box margin="8px 0">
								{collect.prodInfo.map(prodInfo => (
									<ProductInfo
										styleNum={prodInfo.styleNo}
										made="2110 YE GREEN/2001 YE GREEN"
									/>
								))}

								{/* <ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" /> */}
							</Box>
						</Flex>
						<Flex flexDirection="column">
							{collect.price.map(price => (
								<Text p="4px 0">{price}</Text>
							))}
						</Flex>
						<Flex flexDirection="column">
							{collect.date.map(date => (
								<Text p="4px 0">{date}</Text>
							))}
						</Flex>
						<Flex flexDirection="column">
							<Text>TOPS</Text>
							<Text>BOTTOMS</Text>
						</Flex>
					</TableLine>
				))}
			</Table>
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
				onClick={() => {
					props.nextStep(selectList)
				}}
			>
				GENERATE ORDERS
			</Button>
			{showEditBox ? (
				<EditBox
					styleDetails={collectDetailsList[editIndex]}
					curStyle={collectList[editIndex].colorInfo}
					confirmMade={handleConfirmMade}
					onClose={() => {
						setShowEditBox(false)
					}}
				/>
			) : null}
		</Flex>
	) : null
}
