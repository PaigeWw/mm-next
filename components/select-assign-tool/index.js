import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import AisleButton, { Title } from "./aisle-button"
import request from "../../utils/request.js"
import { baseUrl } from "../../utils/helper"
const PagerButton = props => (
	<Button
		width="0.26rem"
		height="0.26rem"
		bg="#000"
		p="0"
		sx={{ borderRadius: 0 }}
	>
		{props.children}
	</Button>
)
const Pager = props => (
	<Flex>
		<PagerButton>{"<"}</PagerButton>
		<Text bg="#EEEEEE" lineHeight="0.26rem" width="0.53rem" textAlign="center">
			{props.current}
		</Text>
		<PagerButton>{">"}</PagerButton>
	</Flex>
)

export default props => {
	const { sid, top, col, styleItem } = props.currentSeleted
	const [showScroll, setShowScroll] = useState(false)
	const [channelList, setChannelList] = useState(false)
	const [colorList, setColorList] = useState([])
	const [paintList, setPaintList] = useState([])
	useEffect(() => {
		const getChannels = async () => {
			const req = await request("channel/getList", {}, "get")
			setChannelList(req)
			console.log(req)
		}
		getChannels()
		// const getColors = async () => {
		// 	const req = await request("color/getList", { type: "0" }, "get")
		// 	if (!req) return
		// 	setColorList(req)
		// 	console.log(req)
		// }
		// getColors()

		// const getPaints = async () => {
		// 	const req = await request("color/getList", { type: "1" }, "get")
		// 	if (!req) return
		// 	setPaintList(req)
		// }
		// getPaints()
	}, [])
	useEffect(() => {
		if (props.currentSeleted) {
			const getStyle = async () => {
				const req = await request("style/detail", { _id: sid }, "get")
				if (!req) return
				console.log("getStyle", req)
				setPaintList(req.flowerColors)
				setColorList(req.plainColors)
			}
			getStyle()
		}
	}, [props.currentSeleted])
	let left = (col + 2) * 3.2
	if (left > 19.2 - 6.4) {
		left = (col - 1) * 3.2
	}

	const handleSelect = (item, type) => {
		switch (type) {
			case "color":
				const cIndex = colorList.findIndex(x => x._id === item._id)
				colorList[cIndex].selected = !colorList[cIndex].selected
				// colorList.splice(index, 1, item.selected=true)
				setColorList([].concat(colorList))
				break
			case "paint":
				const pIndex = paintList.findIndex(x => x._id === item._id)
				paintList[pIndex].selected = !paintList[pIndex].selected
				// colorList.splice(index, 1, item.selected=true)
				setPaintList([].concat(paintList))
				break
			default:
				break
		}
	}
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
				onClose={props.onClose}
			/>
			<Flex flexDirection="column">
				<Box width="100%" mb="0.4rem">
					<Text mb="0.26rem">SIZE「CUP」</Text>
					<Box width="100%" lineHeight="0.36rem">
						<Flex width="100%" justifyContent="space-between">
							<Text>85B</Text>
							<Text>90B</Text>
							<Text>85B</Text>
							<Text>85B</Text>
						</Flex>
						<Flex width="100%" justifyContent="space-between">
							<Text>85C</Text>
							<Text>90B</Text>
							<Text>85B</Text>
							<Text>85B</Text>
						</Flex>
					</Box>
				</Box>
				<Box width="100%" mb="0.4rem">
					<Flex justifyContent="space-between" alignItems="center">
						<Text>COLOUR</Text> <Pager current="01" />
					</Flex>
					<Flex>
						{colorList.map(item => (
							<Box
								sx={{
									cursor: "pointer",
									boxSizing: "content-box",
									backgroundClip: "content-box",
									border: `1px ${item.selected ? "#000" : "#fff"} solid`
								}}
								onClick={() => {
									handleSelect(item, "color")
								}}
								bg={item.value}
								mt="0.2rem"
								mr="0.2rem"
								p="0.08rem"
								width="0.3rem"
								height="0.3rem"
							></Box>
						))}
					</Flex>
				</Box>
				<Box width="100%" mb="0.4rem">
					<Flex justifyContent="space-between" alignItems="center">
						<Text>PRINT</Text> <Pager current="01" />
					</Flex>
					<Flex>
						{paintList.map(item => (
							<Box
								sx={{
									backgroundClip: "content-box !important",
									boxSizing: "content-box",
									cursor: "pointer",
									background: `url(${baseUrl + item.value})`,
									backgroundSize: "100% 100% ",
									border: `1px ${item.selected ? "#000" : "#fff"} solid`
								}}
								onClick={() => {
									handleSelect(item, "paint")
								}}
								mt="0.2rem"
								mr="0.2rem"
								p="0.08rem"
								width="0.3rem"
								height="0.3rem"
							></Box>
						))}
					</Flex>
				</Box>
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
			>
				FINISH
			</Button>
		</Flex>
	)
}
