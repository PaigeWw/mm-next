import React, { useState, useEffect } from "react"
import request from "../utils/request"
import Router from "next/router"

function useUserInfo() {
	const [info, setInfo] = useState({})

	useEffect(() => {
		;(async function getData() {
			const data = await request("user/getCurrentUser")
			console.log(data, "data")
			if (data) {
				setInfo(data)
			} else {
				Router.push("/login")
			}
		})()
	}, [])

	return info
}

export default useUserInfo
