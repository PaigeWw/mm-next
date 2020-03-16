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

	useEffect(() => {
		const getOrderDetail = async () => {
			const req = await request("order/detail", { _id: getPageQuery().id })
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
				<div style={{ height: "500px" }}>
					{orderDetail ? (
						<OrderDetail OrderDetail={orderDetail} imgToUrl />
					) : null}
				</div>
				<div onClick={e => console.log(e, "div e")}>
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
			</Flex>
		</React.Fragment>
	)
}
