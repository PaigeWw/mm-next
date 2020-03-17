import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Title } from "./aisle-button"
import { ColorList, PaintList } from "../color-and-paint"
import request from "../../utils/request.js"
import { baseUrl } from "../../utils/helper"

export default props => {
	const { sid, top, col, styleItem, channels = [] } = props.currentSeleted
	const [curChannel, setCurChannel] = useState({})
	const [channelList, setChannelList] = useState([])
	const [colorList, setColorList] = useState([])
	const [paintList, setPaintList] = useState([])
	const [sizeList, setSizeList] = useState([])
	const [curChannelAssign, setCurChannelAssign] = useState({
		plainColors: [],
		flowerColors: []
	})
	const getColorList = async page => {
		const req = await request(
			"color/getList",
			{ type: 0, page: page, limit: 14 },
			"get"
		)
		setColorList({ docs: req.docs, page: req.page })
		// console.log("getChannels", req)
	}
	const getPaintList = async page => {
		const req = await request(
			"color/getList",
			{ type: 1, page: page, limit: 14 },
			"get"
		)
		setPaintList({ docs: req.docs, page: req.page })
		// console.log("getChannels", req)
	}
	useEffect(() => {
		const getChannels = async () => {
			const req = await request("channel/getList", {}, "get")
			const assignChannelList = req.docs.filter(
				x => channels.indexOf(x._id) > -1
			)
			setChannelList(assignChannelList)
			if (assignChannelList.length > 0) {
				setCurChannel(assignChannelList[0])
				// getChannelsAssign(sid, req.docs[0]._id)
			}
		}
		getChannels()
		getColorList()
		getPaintList()
	}, [])

	useEffect(() => {
		if (props.currentSeleted) {
			const getStyle = async () => {
				const req = await request("style/detail", { _id: sid }, "get")
				if (!req) return
				// setCurChannelIndex(0)
				setSizeList(req.size.values)
			}
			getStyle()
		}
	}, [props.currentSeleted])

	useEffect(() => {
		if (!curChannel._id) return
		console.log("curChannel->", curChannel.code)
		const getChannelsAssign = async (styleId, channelId) => {
			const req = await request(
				"channel/getAssign",
				{
					styleId,
					channelId
				},
				"get"
			)
			if (!req) {
				setCurChannelAssign({
					plainColors: [],
					flowerColors: []
				})
			} else {
				setCurChannelAssign(req)
			}
		}
		getChannelsAssign(sid, curChannel._id)
	}, [curChannel])

	let left = (col + 2) * 3.2
	if (left > 19.2 - 6.4) {
		left = (col - 1) * 3.2
	}

	const handleSelect = (item, type) => {
		switch (type) {
			case "color":
				const cIndex = curChannelAssign.plainColors.findIndex(
					x => x._id === item._id
				)
				console.log("cIndex", cIndex)
				if (cIndex < 0) {
					curChannelAssign.plainColors.push(item)
				} else {
					curChannelAssign.plainColors.splice(cIndex, 1)
				}
				const res = request(
					"/channel/assign",
					{
						styleId: sid,
						channelId: curChannel._id,
						plainColor: item._id
					},
					"post"
				)
				setCurChannelAssign({
					...curChannelAssign,
					plainColors: [].concat(curChannelAssign.plainColors)
				})
				break
			case "paint":
				const pIndex = curChannelAssign.flowerColors.findIndex(
					x => x._id === item._id
				)
				console.log("cIndex", cIndex)
				if (pIndex < 0) {
					curChannelAssign.flowerColors.push(item)
				} else {
					curChannelAssign.flowerColors.splice(pIndex, 1)
				}
				const res1 = request(
					"/channel/assign",
					{
						styleId: sid,
						channelId: curChannel._id,
						flowerColor: item._id
					},
					"post"
				)
				setCurChannelAssign({
					...curChannelAssign,
					flowerColors: [].concat(curChannelAssign.flowerColors)
				})
				break
			default:
				break
		}
	}

	const handleSelectChannel = channel => {
		setCurChannel(channel)
	}
	const handleChangeColorPage = (page, type) => {
		console.log(page, type)
		if (type === 0) {
			getColorList(page)
		} else {
			getPaintList(page)
		}
	}
	// const handleCommitSelected = index => {}
	if (!channelList) return null
	console.log(curChannel)
	return (
		<Flex
			width="6.4rem"
			bg="#fff"
			flexDirection="column"
			fontSize="0.18rem"
			color="#000"
			p="0.5rem 0.7rem 0 0.7rem"
			sx={{
				position: "absolute",
				top: `${top}px`,
				left: `${left}rem`
			}}
		>
			<Title
				styleNo={styleItem.styleNo}
				channelList={channelList}
				// channelInfoList={curChannelAssign.plainColors}
				onClose={props.onClose}
				curChannel={curChannel}
				onSelectChannel={handleSelectChannel}
			/>
			{channelList.length > 0 ? (
				<>
					<Flex flexDirection="column">
						<Box width="100%" mb="0.4rem">
							<Text mb="0.1rem">SIZE「CUP」</Text>
							<Flex width="100%" lineHeight="0.36rem">
								{sizeList.map(size => (
									<Text mr="0.2rem">{size.name}</Text>
								))}
							</Flex>
						</Box>
						<ColorList
							colorList={colorList.docs || []}
							page={colorList.page}
							handleSelect={handleSelect}
							curChannelId={curChannel._id}
							selectedList={curChannelAssign.plainColors}
							onChangePage={handleChangeColorPage}
						/>
						<PaintList
							paintList={paintList.docs || []}
							page={paintList.page}
							handleSelect={handleSelect}
							curChannelId={curChannel._id}
							selectedList={curChannelAssign.flowerColors}
							onChangePage={handleChangeColorPage}
						/>
					</Flex>
					<Button
						variant="primary"
						height="0.7rem"
						width="6.4rem"
						bg="#1B1B1B"
						color="#fff"
						padding="0"
						ml="-0.7rem"
						sx={{
							borderRadius: 0,
							fontSize: "0.14rem",
							cursor: "pointer"
						}}
						onClick={props.onClose}
					>
						FINISH
					</Button>
				</>
			) : null}
		</Flex>
	)
}
