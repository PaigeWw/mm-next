import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import OrderDetail from "./order-detail"
import Modal from "../modal"
import request from "../../utils/request"

export default props => {
	const { rate } = props
	const [orderDetailMode, setOrderDetailMode] = useState({
		visible: false,
		detail: {}
	})
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
				quantity += item.total
				price += item.totalPrice
				// threeViewsList.push(threeViews)
			})

			return {
				date: order.updateTime,
				user: order.user.name,
				id: order._id
			}
		})
		setOrderList(data)
	}
	useEffect(() => {
		getOrderList()
	}, [])

	const handleCheckDetail = index => {
		setOrderDetailMode({ visible: true, detail: orderDetailList[index] })
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
			{orderDetailMode.visible ? (
				<Modal
					onClose={() => {
						setOrderDetailMode({ visible: false, detail: {} })
					}}
				>
					<OrderDetail OrderDetail={orderDetailMode.detail} rate={rate} />
				</Modal>
			) : null}
			<Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
				<Table
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "ORDER NUMBER", width: "2/22" },
						{ name: "ORDER DATE", width: "4/22" },
						{ name: "CLIENT'S NAME", width: "1/22" },
						{ name: "DOWNLOAD", width: "2/22" },
						{ name: "FILE PREVIEW", width: "2/22" }
					]}
				>
					{orderList.map((order, index) => (
						<TableLine
							Bigger
							onBiger={() => {
								handleCheckDetail(index)
							}}
							key={`${index}-my-order`}
						>
							<Text lineHeight="0.6rem">{index + 1}</Text>
							{/* <Text>MRMISS 20191118</Text> */}
							<Text>{order.id}</Text>
							<Text>{order.date}</Text>
							<Text>{order.user}</Text>
							<Text>
								<a href={`./download?id=${order.id}`}>DOWNLOAD</a>
							</Text>
						</TableLine>
					))}
				</Table>
			</Flex>
		</Flex>
	)
}
