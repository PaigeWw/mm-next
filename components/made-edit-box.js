import React, { useEffect, useState } from "react"
// import ReactSVG from "../components/commons/react-svg"
import StyleImg from "../components/commons/style-img"
import { Flex, Text, Box, Button } from "rebass"

import Modal from "./modal"
import { ColorList, PaintList } from "./grid-color-and-paint"

import request from "../utils/request.js"

export default (props) => {
	const { styleDetails, curStyle, userInfo = { channels: [] } } = props

	let tempSelectedIds = [curStyle[0].colors]
	// let tempSelectedImgs = [curStyle[0].imgUrl]
	if (curStyle.length > 1) {
		tempSelectedIds.push(curStyle[1].colors)
		// tempSelectedImgs.push(curStyle[1].imgUrl)
	} else {
		tempSelectedIds.push([])
		// tempSelectedImgs.push(false)
	}
	const [showGroupStroke, setShowGroupStroke] = useState(false)
	const [curSelectedColors, setCurSelectedColors] = useState(tempSelectedIds)
	const [curStyleIndex, setCurStyleIndex] = useState(0)
	console.log(curSelectedColors)
	const [tempShowColorInfo, setTempShowColorInfo] = useState({})
	const [assignInfoSource, setAssignInfoSource] = useState({})
	const [assignInfo, setAssignInfo] = useState({})
	const [curStylesEditGroupIndex, setEditSvgGroupIndex] = useState(0)
	const [plainColors, setPlainColors] = useState({ docs: [] })
	const [flowerColors, setFlowerColors] = useState({ docs: [] })
	const [pcode, setPcode] = useState("")
	const [fcode, setFcode] = useState("")
	const getColorList = async (page) => {
		let options = { type: 0, page: page, limit: 30 }
		if (pcode) {
			options.code = pcode
		}
		const req = await request("color/getList", options, "get")
		setPlainColors({ docs: req.docs, page: req.page, pages: req.pages })
		// console.log("getChannels", req)
	}
	const getPaintList = async (page) => {
		let options = { type: 1, page: page, limit: 30 }
		if (fcode) {
			options.code = fcode
		}
		const req = await request("color/getList", options, "get")
		setFlowerColors({ docs: req.docs, page: req.page, pages: req.pages })
		// console.log("getChannels", req)
	}
	useEffect(() => {
		if (userInfo.role === 1) {
			getColorList(1)
		} else {
			if (assignInfoSource && assignInfoSource.plainColors) {
				let ans = assignInfoSource.plainColors.filter(
					(x) => x.code.indexOf(pcode) > -1
				)
				setAssignInfo({
					...assignInfo,
					plainColors: ans,
				})
				handleChangeColorPage(1, 0)
			}
		}
	}, [pcode])
	useEffect(() => {
		if (assignInfo.plainColors) {
			handleChangeColorPage(1, 0)
			handleChangeColorPage(1, 1)
		}
	}, [assignInfo])
	useEffect(() => {
		if (userInfo.role === 1) {
			getPaintList(1)
		} else {
			if (assignInfoSource && assignInfoSource.flowerColors) {
				let ans = assignInfoSource.flowerColors.filter(
					(x) => x.code.indexOf(fcode) > -1
				)
				setAssignInfo({
					...assignInfo,
					flowerColors: ans,
				})
				handleChangeColorPage(1, 1)
			}
		}
	}, [fcode])
	const handleChangeColorPage = (page, type) => {
		if (page < 1) return
		if (userInfo.role === 1) {
			if (type === 0) {
				if (plainColors.pages >= page) {
					getColorList(page)
				}
			} else if (flowerColors.pages >= page) {
				getPaintList(page)
			}
		} else {
			if (type === 0) {
				setPlainColors({
					docs: assignInfo.plainColors.slice((page - 1) * 30, page * 30),
					page: page,
				})
			} else {
				setFlowerColors({
					docs: assignInfo.flowerColors.slice((page - 1) * 30, page * 30),
					page: page,
				})
			}

			// setAssignInfo(req)
		}
	}
	const handleSelect = (item) => {
		// console.log({ curSelectedColors })
		if (
			curSelectedColors[curStyleIndex][curStylesEditGroupIndex] &&
			item._id === curSelectedColors[curStyleIndex][curStylesEditGroupIndex]._id
		) {
		} else {
			setTempShowColorInfo(item)
			curSelectedColors[curStyleIndex][curStylesEditGroupIndex] = item
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
					channelId,
				},
				"get"
			)
			if (!req) {
				setPlainColors({
					docs: [],
					page: 1,
				})
				setFlowerColors({
					docs: [],
					page: 1,
				})
			} else {
				setPlainColors({
					docs: req.plainColors.slice(0, 30),
					page: 1,
				})
				setFlowerColors({
					docs: req.flowerColors.slice(0, 30),
					page: 1,
				})
				setAssignInfo(req)
				setAssignInfoSource(req)
			}
		}

		if (userInfo.role === 1) {
			// 产品经理
			// getColorList(1)
			// getPaintList(1)
		} else {
			// 客户
			getChannelsAssign(styleDetails[curStyleIndex]._id, userInfo.channels[0])
		}
	}, [curStyleIndex])

	const handleOnSearch = (options) => {
		if (options.type === 0) {
			setPcode(options.code)
		} else {
			setFcode(options.code)
		}
	} //
	return (
		<Modal onClose={props.onClose}>
			<Box width="14rem" fontSize="0.18rem" color="#000">
				<Flex justifyContent="space-between">
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						width="6.75rem"
						sx={{
							cursor: "pointer",
						}}
						onClick={() => {
							setShowGroupStroke(false)
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
												: "1px solid #A0A0A0",
									}}
									onClick={() => {
										setCurStyleIndex(index)
									}}
								>
									<StyleImg
										width={`${((style.scale ? style.scale : 58) * 5) / 100}rem`}
										imgValsAttrs={style.attrs}
										colors={curSelectedColors[index]}
										svgId={style._id}
										styleId={style._id}
										styleSize={style.styleSize}
										shadowUrlBack={style.shadowUrlBack}
										shadowUrl={style.shadowUrl}
										svgUrlBack={style.svgUrlBack}
										svgUrl={style.svgUrl}
										showGroupStroke={showGroupStroke}
										curStylesEditGroupIndex={curStylesEditGroupIndex}
										onSetEditSvgGroupIndex={(gindex) => {
											console.log("onSetEditSvgGroupIndex -- gindex", gindex)
											setCurStyleIndex(index)
											setEditSvgGroupIndex(gindex)
											setShowGroupStroke(true)
										}}
									/>
								</Flex>
							))}
					</Flex>

					<Flex
						flexDirection="column"
						flexGrow={1}
						pl="0.6rem"
						width={[1 / 2]}
						sx={{ position: "relative" }}
					>
						<Box width={[1]} mb="0.6rem">
							<Text id="section" fontSize="0.18rem" fontWeight="bolder">
								样衣编码
							</Text>
							<Text fontSize="0.1rem" m="0.16rem 0">
								{styleDetails[curStyleIndex].styleNo}
							</Text>
						</Box>
						<ColorList
							colorList={plainColors.docs || []}
							handleSelect={handleSelect}
							curChannelId={0}
							showColorInfo={tempShowColorInfo}
							selectedList={[tempShowColorInfo]}
							page={plainColors.page}
							onChangePage={handleChangeColorPage}
							onSearch={handleOnSearch}
						/>
						<Box height="0.3rem" width={[1]} />
						<PaintList
							paintList={flowerColors.docs || []}
							handleSelect={handleSelect}
							curChannelId={0}
							showColorInfo={tempShowColorInfo}
							imgValsAttrs={styleDetails[curStyleIndex].attrs}
							selectedList={[tempShowColorInfo]}
							page={flowerColors.page}
							onChangePage={handleChangeColorPage}
							onSearch={handleOnSearch}
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
								cursor: "pointer",
							}}
							onClick={() => {
								if (!curSelectedColors[0]) return
								if (styleDetails.length > 1 && !curSelectedColors[1]) return
								props.confirmMade(curSelectedColors)
								props.onClose()
							}}
						>
							完成
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Modal>
	)
}
