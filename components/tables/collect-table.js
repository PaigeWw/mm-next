import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import arrayMove from "array-move"
import { SortableElement } from "react-sortable-hoc"
import Modal from "../modal"
import { ToastContainer, toast } from "../commons/toast"
import Loading from "../commons/loading"
import { SortableTable, TableLine, ProductInfo } from "./base-table"

import EditBox from "../made-edit-box"
import StyleItem from "../commons/min-style-item"
import request from "../../utils/request"
import { guid } from "../../utils/helper"

const Table = SortableTable

export default (props) => {
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	const [editIndex, setEditIndex] = useState(0)
	const [editId, setEditId] = useState(null)
	// const mode = "POSITIVE"
	const [loading, setLoading] = useState(false)
	const [collectList, setCollectList] = useState([])
	const [collectDetailsList, setCollectDetailsList] = useState([])
	const [selectList, setSelectList] = useState([])
	const getCollectList = async () => {
		setLoading(true)
		const res = await request("/user/getFavoriteList", {
			goodsId: props.goodId,
		})
		setLoading(false)
		// console.log("----res----", res)
		if (!res) return
		const data = res.map((item) => {
			let prodInfo = []
			let price = []
			let styleList = []
			let colorInfo = []
			// let colorInfo = []
			let date = []
			let details = []
			item.styleAndColor.map((x) => {
				if (!x.style) return
				details.push(x.style)

				price.push(x.style.price)
				date.push(x.style.updateTime.substring(0, 10))
				colorInfo.push({ colors: x.colorIds })
				let text = ""
				x.colorIds.map((color, index) => {
					if (index) {
						text += "/"
					}
					text += `${color.code}`
				})
				prodInfo.push({
					styleNo: x.style.styleNo,
					categoryName: x.style.categoryName,
					color: text,
					id: x.style._id,
				})
				// let positive = x.
				styleList.push({ style: x.style, colors: x.colorIds })
			})
			collectDetailsList.push({ id: item._id, details })
			setCollectDetailsList([].concat(collectDetailsList))
			return {
				id: item._id,
				colorInfo,
				prodInfo,
				price,
				styleList,
				date,
			}
		})
		setCollectList(data)
	}

	useEffect(() => {
		if (props.goodId) {
			getCollectList()
		}
	}, [props.goodId])

	const handleSelect = (index, item) => {
		const pos = selectList.findIndex((x) => x.index === index)
		if (pos < 0) {
			selectList.push({
				index,
				...item,
				details: collectDetailsList[index].details,
			})
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
			collectList.splice(index, 1)
			setCollectList([].concat(collectList))
		}
	}
	const getCollectById = (cid) => {
		return collectList.find((c) => c.id === cid)
	}

	const getCollectDetailsById = (cid) => {
		return collectDetailsList.find((c) => c.id === cid)
	}
	const handleConfirmMade = async (colorIds) => {
		// const res = await request("/user/updateFavorite", {  }, "post")
		// console.log(collectList[editIndex])

		if (!colorIds[0]) return
		const editCollect = getCollectById(editId)
		let params = [
			{
				styleId: editCollect.prodInfo[0].id,
				colorIds: colorIds[0].map((x) => x._id),
			},
		]

		if (editCollect.styleList.length > 1) {
			// if (! > 2) return
			params.push({
				styleId: editCollect.prodInfo[1].id,
				colorIds: colorIds[1].map((x) => x._id),
			})
		}
		const res = await request(
			"/user/updateFavorite",
			{ _id: editCollect.id, styleAndColor: params },
			"post"
		)
		// setStyleDetails([].concat(styleDetails))
		// if (res) {
		//   getCollectList();
		// }
	}

	const SortableItem = SortableElement(({ indexNo, collect }) => {
		// console.log("SortableItem ", indexNo)
		let index = indexNo
		return (
			<TableLine
				key={`categoryList-line-item-${index}}`}
				isSelect={selectList.findIndex((x) => index === x.index) >= 0}
				haveSelect
				onSelect={() => {
					handleSelect(index, collect)
				}}
				haveDel
				onDel={() => {
					setShowConfirmModal({ callback: () => handleDel(index, collect) })
				}}
				haveEdit
				onEdit={() => {
					setEditIndex(index)
					setEditId(collect.id)
					setShowEditBox(true)
				}}
			>
				<Text tdWidth="calc(0.6rem - 18px)">{parseInt(index) + 1}</Text>
				<StyleItem
					tdWidth="1.6rem"
					width="0.9rem"
					key={`${index}-style-img`}
					styleList={collect.styleList}
					index={index}
					tool={false}
				/>
				{/* <Text>loading</Text> */}
				<Flex justifyContent="center">
					<Box margin="8px 0">
						{collect.prodInfo.map((prodInfo) => (
							<ProductInfo styleNum={prodInfo.styleNo} made={prodInfo.color} />
						))}
					</Box>
				</Flex>
				<Flex flexDirection="column">
					{collect.price.map((price) => (
						<Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
					))}
				</Flex>
				<Flex flexDirection="column">
					{collect.date.map((date) => (
						<Text p="4px 0">{date}</Text>
					))}
				</Flex>
				<Flex flexDirection="column">
					{collect.prodInfo.map((prodInfo) => (
						<Text>{prodInfo.categoryName}</Text>
					))}
				</Flex>
			</TableLine>
		)
	})
	return collectList.length > 0 ? (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				// height: "100%",
				background: "#FFF0E5",
			}}
		>
			{/* <Loading type="loading5 black" /> */}

			{showConfirmModal ? (
				<Modal
					onClose={() => {
						setShowConfirmModal(false)
					}}
				>
					<Flex flexDirection="column" alignItems="center">
						确认删除?
						<Button
							variant="primary"
							height="30px"
							width="68px"
							bg="#000"
							color="#fff"
							padding="0"
							sx={{
								borderRadius: 0,
								fontSize: "20",
								cursor: "pointer",
								marginTop: "12px",
							}}
							onClick={() => {
								showConfirmModal.callback()
								setShowConfirmModal(false)
							}}
						>
							YES
						</Button>
					</Flex>
				</Modal>
			) : null}
			<ToastContainer />
			<Table
				sort={{
					pressDelay: 200,
					onSortEnd: ({ oldIndex, newIndex }) => {
						setCollectList(arrayMove(collectList, oldIndex, newIndex))
					},
				}}
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "图片", width: "2/22" },
					{ name: "款式资料", width: "4/22" },
					{ name: `单价/${props.rate.sign}`, width: "1/22" },
					{ name: "开发日期", width: "2/22" },
					{ name: "类别", width: "1/22" },
					{ name: "操作按钮", width: "5/22" },
				]}
			>
				{collectList.map((collect, index) => (
					<SortableItem
						key={`collectList-item-${guid()}`}
						index={index}
						indexNo={index}
						collect={collect}
					/>
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
					cursor: "pointer",
				}}
				onClick={() => {
					if (selectList.length > 0) {
						props.nextStep(selectList)
					} else {
						toast.notify("Please select a collection.")
					}
				}}
			>
				进入订单制作
			</Button>
			{showEditBox ? (
				<EditBox
					goodsId={props.goodId}
					userInfo={props.userInfo}
					styleDetails={getCollectDetailsById(editId).details}
					curStyle={getCollectById(editId).colorInfo}
					confirmMade={handleConfirmMade}
					onClose={() => {
						setShowEditBox(false)
					}}
				/>
			) : null}
		</Flex>
	) : loading ? (
		<Loading type="loading5 black" />
	) : null
}
