import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import AssginItem from "../components/assign-item"

import request from "../utils/request.js"
export default () => {
	const info = useUserInfo()
	const [goodsList, setGoodsList] = useState([])
	const [channelList, setChannelList] = useState([])
	const [currentChannel, setCurrentChannel] = useState(0)
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("goods/getList", "get")
			setGoodsList(req)
			console.log(req)
		}
		getGoodsList()
		const getChannels = async () => {
			const req = await request("channel/getList", {}, "get")
			setChannelList(req)
			// console.log("getChannels", req)
		}
		getChannels()
	}, [])
	return (
		<React.Fragment>
			<Flex
				height="100vh"
				justifyContent="space-between"
				flexDirection="column"
			>
				<Head></Head>
				<Box width={[1]}>
					{channelList.length > 0 ? (
						<Flex
							bg="#000000"
							width={[1]}
							pl="1.1rem"
							lineHeight="1.14rem"
							sx={{ height: "1.14rem" }}
							color="#fff"
						>
							{/* {console.log(channelList)} */}
							{`${channelList[currentChannel].code}(${channelList[currentChannel].name})`}
						</Flex>
					) : null}

					<AssginItem goodsList={goodsList}></AssginItem>
				</Box>
			</Flex>
		</React.Fragment>
	)
}
