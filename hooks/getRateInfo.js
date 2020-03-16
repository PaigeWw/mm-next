import React, { useState, useEffect } from "react"
import axios from "axios"
import { instance2 } from "../utils/request"
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
			const data = axios.get("https://api.exchangeratesapi.io/latest?base=USD")
			console.log(data, "data")
			if (data && data.rates) {
				setRate([
					{ val: data.rates["CNY"], sign: "¥" }, //CNY
					{ val: data.rates["USD"], sign: "$" }, // USD
					{ val: data.rates["EUR"], sign: "€" } //EUR
				])
			} else {
				setRate([
					{ val: 6.9873018732, sign: "¥" }, //CNY
					{ val: 1, sign: "$" }, // USD
					{ val: 0.9005763689, sign: "€" } //EUR
				])
			}
		})()
	}, [])

	return rate
}

export default useRateInfo
