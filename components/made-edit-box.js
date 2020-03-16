import React, { useEffect, useState } from "react"
// import ReactSVG from "../components/commons/react-svg"
import StyleImg from "../components/commons/style-img"
import { Flex, Text, Box, Image, Button } from "rebass"

import Modal from "./modal"
import { ColorList, PaintList } from "./color-and-paint"

import request from "../utils/request.js"
// import { baseUrl } from "../utils/helper"

export default props => {
	const { styleDetails, curStyle, userInfo } = props

	console.log({ styleDetails, curStyle, userInfo })
	let tempSelectedIds = [curStyle[0].colors]
	// let tempSelectedImgs = [curStyle[0].imgUrl]
	if (curStyle.length > 1) {
		tempSelectedIds.push(curStyle[1].colors)
		// tempSelectedImgs.push(curStyle[1].imgUrl)
	} else {
		tempSelectedIds.push([])
		// tempSelectedImgs.push(false)
	}
	const [curSelectedColors, setCurSelectedColors] = useState(tempSelectedIds)
	const [curStyleIndex, setCurStyleIndex] = useState(0)
	const [curStylesEditGroupIndex, setEditSvgGroupIndex] = useState([0, 0])
	const [plainColors, setPlainColors] = useState({ docs: [] })
	const [flowerColors, setFlowerColors] = useState({ docs: [] })
	const [imgVals, setImgVals] = useState({ scale: 1, x: 0, y: 0 })
	const getColorList = async page => {
		const req = await request(
			"color/getList",
			{ type: 0, page, limit: 14 },
			"get"
		)
		setPlainColors(req)
		// console.log("getChannels", req)
	}
	const getPaintList = async page => {
		const req = await request(
			"color/getList",
			{ type: 1, page, limit: 14 },
			"get"
		)
		setFlowerColors(req)
		// console.log("getChannels", req)
	}

	const handleChangeColorPage = (page, type) => {
		console.log(page, type)
		if (type === 0) {
			getColorList(page)
		} else {
			getPaintList(page)
		}
	}
	const handleSelect = item => {
		// console.log(curSelectedColors)
		if (
			curSelectedColors[curStyleIndex][curStylesEditGroupIndex] &&
			item._id === curSelectedColors[curStyleIndex][curStylesEditGroupIndex]._id
		) {
		} else {
			// console.log(curStyle[curStyleIndex])
			// let tempAttrs =
			curSelectedColors[curStyleIndex].splice(curStylesEditGroupIndex, 1, item)
			// console.log(curSelectedColors[curStyleIndex])
			setCurSelectedColors([].concat(curSelectedColors))
		}
	}

	useEffect(() => {
		if (userInfo.role === 1) {
			// 产品经理
			getColorList(1)
			getPaintList(1)
		} else {
			// 客户
			// getChannelsAssign(curStyle[0]._id, userInfo.channels[0])
		}
	}, [])

	useEffect(() => {
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
				setPlainColors({
					docs: [],
					page: 1
				})
				setFlowerColors({
					docs: [],
					page: 1
				})
			} else {
				setPlainColors({
					docs: req.plainColors,
					page: 1
				})
				setFlowerColors({
					docs: req.flowerColors,
					page: 1
				})
			}
		}

		if (userInfo.role === 1) {
			// 产品经理
			// getColorList(1)
			// getPaintList(1)
		} else {
			// 客户
			console.log(styleDetails)
			console.log(curStyleIndex)
			console.log(styleDetails[curStyleIndex])
			getChannelsAssign(styleDetails[curStyleIndex]._id, userInfo.channels[0])
		}
	}, [curStyleIndex])
	return (
		<Modal onClose={props.onClose}>
			<Box width="14rem" fontSize="0.18rem" color="#000">
				<Flex justifyContent="space-between">
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyContent="space-evenly"
						width="6.75rem"
						sx={{
							cursor: "pointer"
						}}
					>
						{Array.isArray(styleDetails) &&
							styleDetails.map((style, index) => (
								<Flex
									width="6.75rem"
									padding="1rem 0"
									alignItems="center"
									justifyContent="center"
									sx={{
										position: "relative",
										border:
											curStyleIndex === index
												? "1px solid #000"
												: "1px solid #A0A0A0"
									}}
									onClick={() => {
										setCurStyleIndex(index)
									}}
								>
									<StyleImg
										width="3.79rem"
										imgValsAttrs={style.attrs}
										colors={curSelectedColors[index]}
										svgId={style._id}
										styleId={style._id}
										shadowUrl={style.shadowUrl}
										svgUrl={style.svgUrl}
										onSetEditSvgGroupIndex={index =>
											setEditSvgGroupIndex(index)
										}
									/>
								</Flex>
							))}
					</Flex>

					<Flex flexDirection="column" flexGrow={1} pl="0.6rem">
						<Box width={[1]} mb="0.6rem">
							<Text id="section" fontSize="0.18rem" fontWeight="bolder">
								SECTION NUMBER
							</Text>
							<Text fontSize="0.1rem" m="0.16rem 0">
								{styleDetails[curStyleIndex].styleNo}
							</Text>
						</Box>
						<ColorList
							colorList={plainColors.docs || []}
							handleSelect={handleSelect}
							curChannelId={0}
							selectedList={[curSelectedColors[curStyleIndex] || {}]}
							page={plainColors.page}
							onChangePage={handleChangeColorPage}
						/>
						<Box height="0.3rem" width={[1]} />
						<PaintList
							paintList={flowerColors.docs || []}
							handleSelect={handleSelect}
							curChannelId={0}
							selectedList={[curSelectedColors[curStyleIndex] || {}]}
							page={flowerColors.page}
							onChangePage={handleChangeColorPage}
						/>
						<Button
							variant="primary"
							height="0.7rem"
							width="100%"
							bg="#1B1B1B"
							color="#fff"
							padding="0"
							mt="0.7rem"
							sx={{
								borderRadius: 0,
								fontSize: "0.14rem",
								cursor: "pointer"
							}}
							onClick={() => {
								if (!curSelectedColors[0]) return
								if (styleDetails.length > 1 && !curSelectedColors[1]) return
								props.confirmMade(curSelectedColors)
								props.onClose()
							}}
						>
							FINISH
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Modal>
	)
}
