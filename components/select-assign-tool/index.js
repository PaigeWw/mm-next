import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Title } from "./aisle-button"
import { ColorList, PaintList } from "../color-and-paint"
import request from "../../utils/request.js"
import { baseUrl } from "../../utils/helper"

export default props => {
	const { sid, top, col, styleItem } = props.currentSeleted
	const [curChannelIndex, setCurChannelIndex] = useState(0)
	// const [curChannelInfo, setCurChannelInfo] = useState({})
	const [channelList, setChannelList] = useState(false)
	const [colorList, setColorList] = useState([])
	const [paintList, setPaintList] = useState([])
	const [sizeList, setSizeList] = useState([])
	const [channelInfoList, setChannelInfoList] = useState([])
	useEffect(() => {
		const getChannels = async () => {
			const req = await request("channel/getList", {}, "get")
			setChannelList(req)
			// console.log("getChannels", req)
		}
		getChannels()
	}, [])
	useEffect(() => {
		if (props.currentSeleted) {
			const getStyle = async () => {
				const req = await request("style/detail", { _id: sid }, "get")
				if (!req) return
				// console.log("getStyle", req)
				setCurChannelIndex(0)
				setPaintList(req.flowerColors)
				setColorList(req.plainColors)
				setColorList(req.plainColors)
				setChannelInfoList(req.channels)
				setSizeList(req.size.values)
			}
			getStyle()
		}
	}, [props.currentSeleted])
	let left = (col + 2) * 3.2
	if (left > 19.2 - 6.4) {
		left = (col - 1) * 3.2
	}

	const handleSelect = (item, type) => {
		let curChannelId = channelList[curChannelIndex]._id
		let Index = channelInfoList.findIndex(x => x.channelId === curChannelId)
		// if (cIndex >= 0)
		console.log("curChannelId", curChannelId)
		console.log("Index", channelInfoList)
		// console.log("Index", channelInfoList[Index])
		let curChannelInfo = Index >= 0 ? channelInfoList[Index] : {}
		switch (type) {
			case "color":
				// const cIndex = colorList.findIndex(x => x.colorId === item.colorId)
				// colorList[cIndex].selected = !colorList[cIndex].selected
				// colorList.splice(index, 1, item.selected=true)
				// setColorList([].concat(colorList))

				const cIndex = curChannelInfo.plainColorIds.indexOf(item.colorId)
				// console.log(cIndex)
				if (cIndex < 0) {
					curChannelInfo.plainColorIds.push(item.colorId)
				} else {
					curChannelInfo.plainColorIds.splice(cIndex, 1)
				}
				setChannelInfoList([].concat(channelInfoList))
				break
			case "paint":
				const pIndex = curChannelInfo.flowerColorIds.indexOf(item.colorId)
				if (pIndex < 0) {
					curChannelInfo.flowerColorIds.push(item.colorId)
				} else {
					curChannelInfo.flowerColorIds.splice(pIndex, 1)
				}
				setChannelInfoList([].concat(channelInfoList))
				break
			default:
				break
		}
	}
	const handleSelectChannelByIndex = index => {
		setCurChannelIndex(index)
	}
	const handleCommitSelected = index => {
		let curChannelId = channelList[curChannelIndex]._id
		let Index = channelInfoList.findIndex(x => x.channelId === curChannelId)
		// if (cIndex >= 0)
		let curChannelInfo = Index >= 0 ? channelInfoList[Index] : {}
		console.log({
			_id: sid,
			channelId: channelList[curChannelIndex]._id,
			plainColorIds: curChannelInfo.plainColorIds,
			flowerColorIds: curChannelInfo.flowerColorIds
		})
		const res = request(
			"/style/assign",
			{
				_id: sid,
				channelId: channelList[curChannelIndex]._id,
				plainColorIds: curChannelInfo.plainColorIds,
				flowerColorIds: curChannelInfo.flowerColorIds
			},
			"post"
		)
		// setChannelInfoList(res.channels)
		// console.log(res)
	}
	if (!channelList) return null
	// console.log(channelList, curChannelIndex)
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
				channelInfoList={channelInfoList}
				onClose={props.onClose}
				curChannelIndex={curChannelIndex}
				onSelectChannelByIndex={handleSelectChannelByIndex}
			/>
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
					colorList={colorList}
					handleSelect={handleSelect}
					curChannelId={channelList[curChannelIndex]._id}
					channelInfoList={channelInfoList}
				/>
				<PaintList
					paintList={paintList}
					handleSelect={handleSelect}
					curChannelId={channelList[curChannelIndex]._id}
					channelInfoList={channelInfoList}
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
				onClick={handleCommitSelected}
			>
				FINISH
			</Button>
		</Flex>
	)
}
