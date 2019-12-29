import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
import InputNumber from "../number-input"
import request from "../../utils/request"

export default props => {
	const [orderList, setOrderList] = useState([])
	const [orderDetailList, setOrderDetailList] = useState([])
	const [selectList, setSelectList] = useState([])
	const getOrderList = async () => {
		const res = await request("/order/getMyList", { isSend: 1 })
		// console.log("----res----", res)
		if (!res) return
		setOrderDetailList(res)
		const data = res.map(order => {
			let orderData = order.orderData
			let threeViewsList = []
			let quantity = 0
			let price = 0
			orderData.map(item => {
				let threeViews = item.favorite.styleAndColor.map(x => {
					return { POSITIVE: x.front }
				})
				quantity += item.total
				price += item.totalPrice
				threeViewsList.push(threeViews)
			})

			return {
				date: order.updateTime,
				id: order._id
			}
		})
		setOrderList(data)
	}
	useEffect(() => {
		getOrderList()
	}, [])
	const handleSelect = (index, item) => {
		const pos = selectList.findIndex(x => x.index === index)
		if (pos < 0) {
			selectList.push({ index, ...item })
		} else {
			selectList.splice(pos, 1)
		}
		setSelectList([].concat(selectList))
	}
	const handleSendOrder = async () => {
		console.log(selectList)

		const res = await request(
			"/order/send",
			{ list: selectList.map(s => s.id) },
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
			<Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
				<Table
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "ORDER NUMBER", width: "2/22" },
						{ name: "ORDER DATE", width: "4/22" },
						{ name: "CLIENT'S NAME", width: "1/22" },
						{ name: "ACTION", width: "2/22" }
					]}
				>
					{orderList.map((order, index) => (
						<TableLine
							haveDel
							onDel={() => {
								handleDel(index, {})
							}}
							Bigger
							// onEdit={() => {
							// 	// setEditIndex(index)
							// 	// setShowEditBox(true)
							// }}
							key={`${index}-my-order`}
						>
							<Text lineHeight="0.6rem">{index}</Text>
							{/* <Text>MRMISS 20191118</Text> */}
							<Text>{order.id}</Text>
							<Text>{order.date}</Text>
							<Text>?</Text>
						</TableLine>
					))}
				</Table>
			</Flex>
		</Flex>
	)
}
