import dynamic from "next/dynamic"

import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import OrderDetail from "./tables/order-detail"
import { getPageQuery } from "../utils/helper"
import request from "../utils/request.js"
import ExcellentExport from "excellentexport"
console.log(ExcellentExport)
export default () => {
	// const info = useUserInfo()
	const [orderDetail, setOrderDetail] = useState(false)
	const [rate, setRate] = useState({ val: 1, sign: "¥" })

	useEffect(() => {
		const { id, rateSign, rateVal } = getPageQuery()
		if (rateSign && rateVal) {
			setRate({
				sign: rateSign,
				val: rateVal
			})
		}

		const getOrderDetail = async () => {
			const req = await request("order/detail", { _id: id })
			if (req) {
				setOrderDetail(req)
			}
			console.log(req)
		}
		getOrderDetail()
	}, [])
	useEffect(() => {
		if (!orderDetail) return
		console.log(orderDetail, "orderDetail")
		let options = {
			anchor: "string",
			format: "xlsx",
			filename: `abc`
		}
		let sheets = {
			name: "Sheet 1",
			from: {
				table: "datatable"
			}
		}
	}, [orderDetail])
	return (
		<React.Fragment>
			<Flex
				height="100vh"
				justifyContent="flex-start"
				flexDirection="column"
				fontSize="0.14rem"
			>
				<div style={{ marginLeft: "20px", marginBottom: "20px" }}>
					<a
						ref={v => (window.aref = v)}
						download="somedata.xls"
						href="#"
						onClick={e => {
							console.log(window.aref, "eeeee")
							ExcellentExport.excel(
								window.aref,
								"one-order-detail",
								"Sheet Name Here"
							)
						}}
					>
						Export to Excel
					</a>
				</div>
				<div style={{ height: "500px" }}>
					{orderDetail ? (
						<OrderDetail OrderDetail={orderDetail} imgToUrl rate={rate} />
					) : null}
				</div>
			</Flex>
		</React.Fragment>
	)
}
