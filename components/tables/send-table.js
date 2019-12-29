import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine } from "./base-table"
import ShowStyle from "../show-style"
import request from "../../utils/request"

export default props => {
	const [orderList, setOrderList] = useState([])
	const [orderDetailList, setOrderDetailList] = useState([])
	const [selectList, setSelectList] = useState([])
	const getOrderList = async () => {
		const res = await request("/order/getMyList", { isSend: 0 })
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
				quantity,
				price,
				threeViewsList,
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
			alignItems="stretch"
			height="100%"
			sx={{
				cursor: "pointer",
				background: "#FFF0E5"
			}}
		>
			<Table
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE PREVIEW", width: "2/22" },
					{ name: "QUANTITY", width: "4/22" },
					{ name: "PRICE", width: "1/22" },
					{ name: "ACTION", width: "5/22" }
				]}
			>
				{orderList.map((order, index) => (
					<TableLine
						key={`order-${index}`}
						isSelect={selectList.findIndex(x => index === x.index) >= 0}
						haveSelect
						onSelect={() => {
							handleSelect(index, order)
						}}
						haveDel
						onDel={() => {
							handleDel(index, {})
						}}
						haveEdit
						onEdit={() => {
							// setEditIndex(index)
							// setShowEditBox(true)
						}}
					>
						<Text style={{ position: "absolute" }}>{index + 1}</Text>
						<Text>{order.date}</Text>
						<Flex justifyContent="center">
							{order.threeViewsList.map((item, index1) => (
								<ShowStyle
									padding="10px"
									key={`order-${index}-${index1}`}
									imgWidth="0.95rem"
									mode={"POSITIVE"}
									threeViews={item}
									border="none"
									hideInfo
								/>
							))}
						</Flex>
						<Text textAlign="center">{order.quantity}</Text>
						<Text textAlign="center">{order.price}</Text>
					</TableLine>
				))}
			</Table>
			<Flex>
				<Button
					variant="primary"
					height="1.5rem"
					width="19.2rem"
					bg="#000"
					color="#fff"
					padding="0"
					sx={{
						borderRadius: 0,
						fontSize: "0.27rem",
						cursor: "pointer"
					}}
					onClick={handleSendOrder}
				>
					SEND ORDERS
				</Button>
			</Flex>
		</Flex>
	)
}
