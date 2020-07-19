import React, { useEffect, useState } from "react"
import { Flex } from "rebass"
import OrderDetail from "./tables/order-detail"
import { getPageQuery, downloadUrl } from "../utils/helper"
import request from "../utils/request.js"
// import ExcellentExport from "excellentexport"

export default () => {
	// const info = useUserInfo()
	const [orderDetail, setOrderDetail] = useState(false)
	const [rate, setRate] = useState({ val: 1, sign: "¥" })

	useEffect(() => {
		const { id, rateSign, rateVal } = getPageQuery()

		if (rateSign && rateVal) {
			setRate({
				sign: rateSign,
				val: rateVal,
			})
		}

		const getOrderDetail = async () => {
			const req = await request("order/detail", { _id: id })
			if (req) {
				setOrderDetail(req)
			}
		}

		const getOrderFile = async () => {
			const req = await request("order/download", {
				_id: id,
				rateSign,
				rateVal,
			})
			if (req) {
				console.log(req)
				window.open(`${downloadUrl}${req.url}`)
			}
		}
		getOrderFile()
		getOrderDetail()
	}, [])
	useEffect(() => {
		if (!orderDetail) return
		let options = {
			anchor: "string",
			format: "xlsx",
			filename: `abc`,
		}
		let sheets = {
			name: "Sheet 1",
			from: {
				table: "datatable",
			},
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
				<div style={{ marginLeft: "20px", marginBottom: "20px" }}></div>
				<div style={{ height: "500px" }}>
					{orderDetail ? (
						<OrderDetail OrderDetail={orderDetail} rate={rate} />
					) : null}
				</div>
			</Flex>
		</React.Fragment>
	)
}
