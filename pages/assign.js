import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image, Select } from "rebass"
import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import AssginItem from "../components/assign-item"
import { ReactSVG } from "react-svg"
import request from "../utils/request.js"
import Router from "next/router"
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
			const req = await request("goods/getVisibleList")
			setGoodsList(req || [])
			// console.log(req)
		}
		getGoodsList()
		const getChannels = async () => {
			const req = await request("user/getUserChannels")
			if (req) {
				setChannelList(req.channels)
				if (req.channels.length > 0) {
					setCurrentChannel(req.channels[0])
				}
			}
		}
		getChannels()
	}, [info])
	useEffect(() => {
		if (!currentChannel._id || info.role !== 1) return
		const getAssignCategoryList = async () => {
			const req = await request("channel/getAssignCategory", {
				channelId: currentChannel._id,
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
					categoryId,
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
					categoryId,
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
								lineHeight="1.14rem"
								sx={{
									height: "1.14rem",
									position: "relative",
								}}
								color="#fff"
							>
								<ReactSVG
									onClick={() => {
										Router.push("/mine?tab=4")
									}}
									src={"/icon/icon-08.svg"}
									style={{
										width: "50px",
										paddingTop: "8px",
										fill: "#fff",
										cursor: "pointer",
									}}
								/>
								<Flex
									sx={{
										height: "1.14rem",
										paddingRight: "30px",
										paddingLeft: "30px",
										position: "relative",
										cursor: "pointer",
									}}
									onClick={() => {
										setShowChannels(!showChannels)
									}}
								>
									{`${currentChannel.code}(${currentChannel.name})`}
									<Box
										sx={{
											position: "absolute",
											top: "calc(50% - 3px)",
											right: 0,
											width: 0,
											height: 0,
											borderLeft: "6px solid transparent",
											borderRight: "6px solid transparent",
											borderTop: "6px solid #fff",
										}}
									></Box>
								</Flex>

								{/* {console.log(channelList)} */}

								{showChannels ? (
									<Box
										sx={{
											position: "absolute",
											border: "1px solid #000",
											top: "calc(0.507rem + 20px)",
										}}
										color="#000"
										bg="#fff"
									>
										{channelList.map((channel) => (
											<Text
												width="160px"
												lineHeight="32px"
												pl="12px"
												sx={{
													"&:hover": {
														background: "#cccccc",
														color: "#fff",
													},
												}}
												onClick={(e) => {
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
