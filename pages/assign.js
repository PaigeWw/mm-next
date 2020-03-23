import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image, Select } from "rebass"
import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import AssginItem from "../components/assign-item"

import request from "../utils/request.js"

// 'channel/assignGoods'  channelId goodsId
// 'channel/getAssignGoods'  channelId goodsId
export default () => {
	const info = useUserInfo()
	const [goodsList, setGoodsList] = useState([])
	const [channelList, setChannelList] = useState([])
	const [assignCategoryList, setAssignCategoryList] = useState([])
	const [currentChannel, setCurrentChannel] = useState({})
	const [showChannels, setShowChannels] = useState(false)
	useEffect(() => {
		if (info.role !== 1) return
		const getGoodsList = async () => {
			const req = await request("goods/getList")
			setGoodsList(req || [])
			// console.log(req)
		}
		getGoodsList()
		const getChannels = async () => {
			const req = await request("user/getUserChannels")
			setChannelList(req.channels)
			if (req.channels.length > 0) {
				setCurrentChannel(req.channels[0])
			}
		}
		getChannels()
	}, [info])
	useEffect(() => {
		if (!currentChannel._id || info.role !== 1) return
		const getAssignCategoryList = async () => {
			const req = await request("channel/getAssignCategory", {
				channelId: currentChannel._id
			})
			if (req) {
				setAssignCategoryList(req.categories)
			}
		}
		getAssignCategoryList()
	}, [currentChannel, info])

	const handleAssignCategory = async (categoryId, toggle) => {
		if (toggle) {
			const res1 = await request(
				"channel/unAssignCategory",
				{
					channelId: currentChannel._id,
					categoryId
				},
				"post"
			)
			if (res1) {
				let index = assignCategoryList.indexOf(categoryId)
				if (index >= 0) {
					assignCategoryList.splice(index, 1)
					setAssignCategoryList([...assignCategoryList])
				}
			}
		} else {
			const res = await request(
				"channel/assignCategory",
				{
					channelId: currentChannel._id,
					categoryId
				},
				"post"
			)
			if (res) {
				setAssignCategoryList([...assignCategoryList, categoryId])
			}
		}
	}
	return (
		<React.Fragment>
			{info.role !== 1 ? (
				<Text>No authority！</Text>
			) : (
				<Flex
					height="100vh"
					// justifyContent="space-between"
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
								sx={{
									height: "1.14rem",
									position: "relative",
									cursor: "pointer"
								}}
								color="#fff"
								onClick={() => {
									setShowChannels(true)
								}}
							>
								{/* {console.log(channelList)} */}
								{`${currentChannel.code}(${currentChannel.name})`}
								{showChannels ? (
									<Box
										sx={{
											position: "absolute",
											border: "1px solid #000",
											top: "calc(0.507rem + 20px)"
										}}
										color="#000"
										bg="#fff"
									>
										{channelList.map(channel => (
											<Text
												width="160px"
												lineHeight="32px"
												pl="12px"
												sx={{
													"&:hover": {
														background: "#cccccc",
														color: "#fff"
													}
												}}
												onClick={e => {
													e.nativeEvent.preventDefault()
													e.nativeEvent.stopPropagation()
													setCurrentChannel(channel)
													setShowChannels(false)
												}}
											>{`${channel.code}(${channel.name})`}</Text>
										))}
									</Box>
								) : null}
							</Flex>
						) : null}

						<AssginItem
							goodsList={goodsList}
							assignCategoryList={assignCategoryList || []}
							onAssignCategory={handleAssignCategory}
						></AssginItem>
					</Box>
				</Flex>
			)}
		</React.Fragment>
	)
}
