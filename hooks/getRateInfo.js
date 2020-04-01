import React, { useState, useEffect } from "react"
import axios from "axios"
import request from "../utils/request"
// import Router from "next/router"

// 汇率信息
function useRateInfo() {
	const [rate, setRate] = useState([
		{ val: 6.9873018732, sign: "¥" }, //CNY
		{ val: 1, sign: "$" }, // USD
		{ val: 0.9005763689, sign: "€" } //EUR
	])

	useEffect(() => {
		;(async function getData() {
			//../system/detail
			const data = await request("system/detail")
			// console.log(data, "data")
			if (data && data.length) {
				setRate([
					{ val: 1, sign: "¥" }, //CNY
					{ val: 1 / data[0].meiyuan, sign: "$" }, // USD
					{ val: 1 / data[0].ouyuan, sign: "€" } //EUR
				])
			} else {
				setRate([
					{ val: 1, sign: "¥" }, //CNY
					{ val: 6.9, sign: "$" }, // USD
					{ val: 7.6, sign: "€" } // EUR
				])
			}
		})()
	}, [])

	return rate
}

export default useRateInfo
