import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import SelectBox from "../components/main-kind-box"

import request from "../utils/request.js"
export default () => {
	const info = useUserInfo()
	const [goosList, setgoosList] = useState([])
	console.log("test test test test")
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("goods/getList", "get")
			if (req) {
				setgoosList(req)
			}
			// console.log(req)
		}
		getGoodsList()
	}, [info])

	return (
		<React.Fragment>
			<Flex
				height="100vh"
				justifyContent="space-between"
				flexDirection="column"
			>
				<Head></Head>
				<Flex maxHeight="65%">
					{goosList.map((item) => (
						<SelectBox {...item} item={item} pick={info.role !== 1} />
					))}
				</Flex>
			</Flex>
		</React.Fragment>
	)
}
