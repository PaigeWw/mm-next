import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import arrayMove from "array-move"
import { SortableContainer, SortableElement } from "react-sortable-hoc"

import { ToastContainer, toast } from "../commons/toast"
import { SortableTable, TableLine, ProductInfo } from "./base-table"

import EditBox from "../made-edit-box"
import StyleItem from "../commons/min-style-item"
import request from "../../utils/request"

const Table = SortableTable

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
			item.styleAndColor.map(x => {
				if (!x.style) return
				details.push(x.style)

				price.push(x.style.price)
				date.push(x.style.updateTime)
				colorInfo.push({ colors: x.colorIds })
				let text = ""
				x.colorIds.map((color, index) => {
					if (index) {
						text += "/"
					}
					text = color.code
				})
				prodInfo.push({
					styleNo: x.style.styleNo,
					categoryName: x.style.categoryName,
					color: text,
					id: x.style._id
				})
				// let positive = x.
				styleList.push({ style: x.style, colors: x.colorIds })
			})
			collectDetailsList.push(details)
			setCollectDetailsList([].concat(collectDetailsList))
			return {
				id: item._id,
				colorInfo,
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
		// console.log(item)
		const res = await request("/user/deleteFavorite", { _id: item.id }, "post")
		// console.log("res", res)
		if (res) {
			// console.log("删除他，嘿嘿嘿")
			collectList.splice(index, 1)
			setCollectList([].concat(collectList))
		}
	}
	const handleConfirmMade = async colorIds => {
		// const res = await request("/user/updateFavorite", {  }, "post")
		// console.log(collectList[editIndex])
		if (!colorIds[0]) return
		let params = [
			{
				styleId: collectList[editIndex].prodInfo[0].id,
				colorIds: colorIds[0].map(x => x._id)
			}
		]

		if (collectList[editIndex].styleList.length > 1) {
			// if (! > 2) return
			params.push({
				styleId: collectList[editIndex].prodInfo[1].id,
				colorIds: colorIds[1].map(x => x._id)
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

	const SortableItem = SortableElement(({ indexNo, collect }) => {
		// console.log("SortableItem ", indexNo)
		let index = indexNo
		return (
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
				<Text>{parseInt(index) + 1}</Text>
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
							<ProductInfo styleNum={prodInfo.styleNo} made={prodInfo.color} />
						))}

						{/* <ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" /> */}
					</Box>
				</Flex>
				<Flex flexDirection="column">
					{collect.price.map(price => (
						<Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
					))}
				</Flex>
				<Flex flexDirection="column">
					{collect.date.map(date => (
						<Text p="4px 0">{date}</Text>
					))}
				</Flex>
				<Flex flexDirection="column">
					{collect.prodInfo.map(prodInfo => (
						<Text>{prodInfo.categoryName}</Text>
					))}
				</Flex>
			</TableLine>
		)
	})

	// const SortableList = SortableContainer(() => {
	// 	return (
	// 		<Table
	// 			titles={[
	// 				{ name: "00", width: "2/22", isHide: true },
	// 				{ name: "PICTRUE", width: "2/22" },
	// 				{ name: "PRODUCT INFOMATION", width: "4/22" },
	// 				{ name: `PRICE/${props.rate.sign}`, width: "1/22" },
	// 				{ name: "DATE", width: "2/22" },
	// 				{ name: "STYLE", width: "1/22" },
	// 				{ name: "EDIT", width: "5/22" }
	// 			]}
	// 		>
	// 			{collectList.map((collect, index) => {
	// 				console.log("SortableList map ", index)
	// 				return (
	// 					<SortableItem
	// 						key={`categoryList-item-${index}`}
	// 						index={index}
	// 						indexNo={index}
	// 						collect={collect}
	// 					/>
	// 				)
	// 			})}
	// 		</Table>
	// 	)
	// })

	// console.log("rateInfo", props.rate)
	return collectList.length > 0 ? (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				// height: "100%",
				background: "#FFF0E5"
			}}
		>
			{/* <SortableList
				pressDelay={200}
				onSortEnd={({ oldIndex, newIndex }) => {
					setCollectList(arrayMove(collectList, oldIndex, newIndex))
				}}
			/> */}
			<ToastContainer />
			<Table
				sort={{
					pressDelay: 200,
					onSortEnd: ({ oldIndex, newIndex }) => {
						setCollectList(arrayMove(collectList, oldIndex, newIndex))
					}
				}}
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "PICTRUE", width: "2/22" },
					{ name: "PRODUCT INFOMATION", width: "4/22" },
					{ name: `PRICE/${props.rate.sign}`, width: "1/22" },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE", width: "1/22" },
					{ name: "EDIT", width: "5/22" }
				]}
			>
				{collectList.map((collect, index) => {
					// console.log("SortableList map ", index)
					return (
						<SortableItem
							key={`categoryList-item-${index}`}
							index={index}
							indexNo={index}
							collect={collect}
						/>
					)
				})}
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
					if (selectList.length > 0) {
						props.nextStep(selectList)
					} else {
						toast.notify("Please select a collection.")
					}
				}}
			>
				GENERATE ORDERS
			</Button>
			{showEditBox ? (
				<EditBox
					userInfo={props.userInfo}
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
