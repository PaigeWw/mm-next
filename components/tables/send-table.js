import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine } from "./base-table"
import Loading from "../commons/loading"
import request from "../../utils/request"
import Modal from "../modal"
import OrderDetail from "./order-detail"
import StyleItem from "../commons/min-style-item"

export default (props) => {
	const { rate, toast, goodId } = props
	const [orderDetailMode, setOrderDetailMode] = useState({
		visible: false,
		detail: {},
	})
	const [orderList, setOrderList] = useState([])
	const [orderDetailList, setOrderDetailList] = useState([])
	const [selectList, setSelectList] = useState([])
	const [loading, setLoading] = useState(false)
	const getOrderList = async () => {
		setLoading(true)
		const res = await request("/order/getMyList", {
			isSend: 0,
			goodsId: goodId,
		})
		setLoading(false)
		if (!res) return
		setOrderDetailList(res)
		const data = res.map((order) => {
			let orderData = order.orderData
			let styleListArr = []

			let quantity = 0
			let price = 0
			orderData.map((packageItem) => {
				packageItem.items.map((item) => {
					let styleList = []
					item.favorite.styleAndColor.map((x) => {
						styleList.push({ style: x.styleId, colors: x.colorIds })
						// styleList.push({ style: x.style, colors: x.colorIds })
						// return { style: x.styleId, colors: x.colorIds };
					})
					styleListArr.push(styleList)
					quantity += item.total
					price += item.totalPrice
				})
			})

			return {
				quantity,
				price,
				styleListArr,
				date: order.updateTime.substring(0, 10),
				id: order._id,
			}
		})
		setOrderList(data)
	}
	useEffect(() => {
		if (goodId) {
			getOrderList()
		}
	}, [goodId])
	const handleSelect = (index, item) => {
		const pos = selectList.findIndex((x) => x.index === index)
		if (pos < 0) {
			selectList.push({ index, ...item })
		} else {
			selectList.splice(pos, 1)
		}
		setSelectList([].concat(selectList))
	}
	const handleSendOrder = async () => {
		// console.log(selectList)
		const res = await request(
			"/order/send",
			{ list: selectList.map((s) => s.id) },
			"post"
		)
		if (res) {
			// Sent successfully
			toast.notify("发送成功", { type: "success", duration: 2 })
			getOrderList()
			props.nextStep()
		} else {
		}
	}
	const handleDel = async (index) => {
		// console.log(orderList[index])
		const res = await request(
			"/order/delete",
			{ _id: orderList[index].id },
			"post"
		)
		if (res) {
			getOrderList()
		}
	}
	const handleCheckDetail = (index) => {
		setOrderDetailMode({ visible: true, detail: orderDetailList[index] })
	}
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			alignItems="stretch"
			height="100%"
			sx={{
				cursor: "pointer",
				background: "#FFF0E5",
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
			<Table
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "制作日期", width: "2/22" },
					{ name: "图片", width: "2/22" },
					{ name: "总数量", width: "4/22" },
					{ name: `总金额/${rate.sign}`, width: "1/22" },
					{ name: "操作按钮", width: "5/22" },
				]}
			>
				{orderList.map((order, index) => (
					<TableLine
						key={`order-${index}`}
						isSelect={selectList.findIndex((x) => index === x.index) >= 0}
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
							props.onEditOrder(orderDetailList[index])
						}}
						Bigger
						onBiger={() => {
							handleCheckDetail(index)
						}}
					>
						<Text style={{ position: "absolute" }}>{index + 1}</Text>
						<Text>{order.date}</Text>
						<Flex justifyContent="flex-start" flexWrap="wrap">
							{order.styleListArr.map((item, col) => (
								<StyleItem
									margin={"1px"}
									key={`${col}-${index}-style-img`}
									styleList={item}
									index={index}
									tool={false}
								/>
							))}
						</Flex>
						<Text textAlign="center">{order.quantity}</Text>
						<Text textAlign="center">
							{(order.price * rate.val).toFixed(2)}
						</Text>
					</TableLine>
				))}
			</Table>
			{loading ? <Loading type="loading5 black" /> : null}
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
						cursor: "pointer",
					}}
					onClick={handleSendOrder}
				>
					发送订单
				</Button>
			</Flex>
		</Flex>
	)
}
