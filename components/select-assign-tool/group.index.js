import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Title } from "./aisle-button"
import Modal from "../modal"
import { ColorList, PaintList } from "../grid-color-and-paint"
import request from "../../utils/request.js"
import { baseUrl } from "../../utils/helper.js"

export default (props) => {
	const { role, selectAssignStyles } = props

	const sid = "0000"

	const [curChannel, setCurChannel] = useState({})
	const [channelList, setChannelList] = useState([])
	const [colorList, setColorList] = useState([])
	const [paintList, setPaintList] = useState([])
	const [pcode, setPcode] = useState("")
	const [fcode, setFcode] = useState("")
	const [curChannelAssign, setCurChannelAssign] = useState({
		plainColors: [],
		flowerColors: [],
	})
	const getColorList = async (page) => {
		let options = { type: 0, page: page, limit: 30 }
		if (pcode) {
			options.code = pcode
		}
		const req = await request("color/getList", options, "get")
		setColorList({ docs: req.docs, page: req.page })
		// console.log("getChannels", req)
	}
	const getPaintList = async (page) => {
		let options = { type: 1, page: page, limit: 30 }
		if (fcode) {
			options.code = fcode
		}
		const req = await request("color/getList", options, "get")
		setPaintList({ docs: req.docs, page: req.page })
		// console.log("getChannels", req)
	}
	useEffect(() => {
		const getChannels = async () => {
			const req = await request("user/getUserChannels", "get")
			if (req) {
				setChannelList(req.channels)
				if (req.channels.length > 0) {
					setCurChannel(req.channels[0])
					// getChannelsAssign(sid, req.docs[0]._id)
				}
			}
		}

		getChannels()
		getColorList()
		getPaintList()
	}, [])
	useEffect(() => {
		getColorList(1)
	}, [pcode])

	useEffect(() => {
		getPaintList(1)
	}, [fcode])

	// const getChannelsAssign = async (styleId, channelId) => {
	// 	const req = await request(
	// 		"channel/getAssign",
	// 		{
	// 			styleId,
	// 			channelId,
	// 		},
	// 		"get"
	// 	)
	// 	if (!req) {
	// 		setCurChannelAssign({
	// 			plainColors: [],
	// 			flowerColors: [],
	// 		})
	// 	} else {
	// 		setCurChannelAssign(req)
	// 	}
	// }
	// useEffect(() => {
	// 	if (!curChannel._id) return
	// 	// console.log("curChannel->", curChannel.code)

	// 	getChannelsAssign(sid, curChannel._id)
	// }, [curChannel, sid])

	const handleSelect = async (item, type) => {
		switch (type) {
			case "color":
				const cIndex = curChannelAssign.plainColors.findIndex(
					(x) => x._id === item._id
				)
				for (let i = 0; i < selectAssignStyles.length; i++) {
					let sid = selectAssignStyles[i]._id
					let options = {
						styleId: sid,
						channelId: curChannel._id,
						plainColor: item._id,
					}
					if (cIndex < 0) {
						curChannelAssign.plainColors.push(item)
						const res = await request("/channel/assign", options, "post")
					} else {
						const _res = await request("/channel/unassign", options, "post")
						curChannelAssign.plainColors.splice(cIndex, 1)
					}
				}

				setCurChannelAssign({
					...curChannelAssign,
					plainColors: [].concat(curChannelAssign.plainColors),
				})
				break
			case "paint":
				const pIndex = curChannelAssign.flowerColors.findIndex(
					(x) => x._id === item._id
				)
				for (let i = 0; i < selectAssignStyles.length; i++) {
					let sid = selectAssignStyles[i]._id
					let _options = {
						styleId: sid,
						channelId: curChannel._id,
						flowerColor: item._id,
					}
					if (pIndex < 0) {
						curChannelAssign.flowerColors.push(item)
						const res1 = request("/channel/assign", _options, "post")
					} else {
						const _res1 = request("/channel/unassign", _options, "post")
						curChannelAssign.flowerColors.splice(pIndex, 1)
					}
				}
				setCurChannelAssign({
					...curChannelAssign,
					flowerColors: [].concat(curChannelAssign.flowerColors),
				})
				break
			default:
				break
		}
	}

	const handleSelectAll = async (bool) => {
		setColorList({
			...colorList,
			loading: true,
		})
		if (bool) {
			for (let i = 0; i < colorList.docs.length; i++) {
				let item = colorList.docs[i]
				const cIndex = curChannelAssign.plainColors.findIndex(
					(x) => x._id === item._id
				)
				if (cIndex < 0) {
					curChannelAssign.plainColors.push(item)
					for (let j = 0; j < selectAssignStyles.length; j++) {
						let sid = selectAssignStyles[j]._id
						let options = {
							styleId: sid,
							channelId: curChannel._id,
							plainColor: item._id,
						}
						const res1 = await request("/channel/assign", options, "post")
					}
				}
			}
		} else {
			for (let i = 0; i < colorList.docs.length; i++) {
				let item = colorList.docs[i]
				const cIndex = curChannelAssign.plainColors.findIndex(
					(x) => x._id === item._id
				)
				if (cIndex >= 0) {
					curChannelAssign.plainColors.splice(cIndex, 1)
					for (let j = 0; j < selectAssignStyles.length; j++) {
						let sid = selectAssignStyles[j]._id
						let options = {
							styleId: sid,
							channelId: curChannel._id,
							plainColor: item._id,
						}
						const res1 = await request("/channel/unassign", options, "post")
					}
				}
			}
		}
		setColorList({
			...colorList,
			loading: false,
		})
		setCurChannelAssign({
			...curChannelAssign,
			plainColors: [].concat(curChannelAssign.plainColors),
		})
	}
	const handleSelectAllPaint = async (bool) => {
		setPaintList({
			...paintList,
			loading: true,
		})
		if (bool) {
			for (let i = 0; i < paintList.docs.length; i++) {
				let item = paintList.docs[i]
				const cIndex = curChannelAssign.flowerColors.findIndex(
					(x) => x._id === item._id
				)
				if (cIndex < 0) {
					curChannelAssign.flowerColors.push(item)
					let options = {
						styleId: sid,
						channelId: curChannel._id,
						flowerColor: item._id,
					}
					const res1 = await request("/channel/assign", options, "post")
				}
			}
		} else {
			for (let i = 0; i < paintList.docs.length; i++) {
				let item = paintList.docs[i]
				const cIndex = curChannelAssign.flowerColors.findIndex(
					(x) => x._id === item._id
				)
				if (cIndex >= 0) {
					curChannelAssign.flowerColors.splice(cIndex, 1)

					let options = {
						styleId: sid,
						channelId: curChannel._id,
						flowerColor: item._id,
					}
					const res1 = await request("/channel/unassign", options, "post")
				}
			}
		}
		setPaintList({
			...paintList,
			loading: false,
		})
		setCurChannelAssign({
			...curChannelAssign,
			flowerColors: [].concat(curChannelAssign.flowerColors),
		})
	}
	const handleSelectChannel = (channel) => {
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

	const handleOnSearch = (options) => {
		if (options.type === 0) {
			setPcode(options.code)
		} else {
			setFcode(options.code)
		}
	}
	// const handleCommitSelected = index => {}
	if (!channelList) return null
	// console.log({ styleItem })
	return (
		<Modal onClose={props.onClose}>
			<Flex
				width="12.8rem"
				bg="#fff"
				flexDirection="column"
				fontSize="0.18rem"
				color="#000"
			>
				<Title
					// shadowUrlBack={styleItem.shadowUrlBack}
					channelList={channelList}
					role={role}
					// channelInfoList={curChannelAssign.plainColors}

					curChannel={curChannel}
					onSelectChannel={handleSelectChannel}
				/>
				<Flex justifyContent="space-between">
					<Box>
						<Flex
							width="6.2rem"
							flexWrap="wrap"
							bg="#DCDCDC"
							alignItems="center"
						>
							{selectAssignStyles.map((item) => (
								<Box p="10px">
									<Image
										src={baseUrl + item.imgUrl}
										width={`${((item.scale ? item.scale : 58) * 1.4) / 100}rem`}
									/>
								</Box>
							))}
						</Flex>
					</Box>

					{channelList.length > 0 ? (
						<Flex flexDirection="column" width="6.4rem">
							<ColorList
								colorList={colorList.docs || []}
								loading={colorList.loading}
								page={colorList.page}
								handleSelect={handleSelect}
								handleSelectAll={handleSelectAll}
								curChannelId={curChannel._id}
								selectedList={curChannelAssign.plainColors}
								onChangePage={handleChangeColorPage}
								onSearch={handleOnSearch}
							/>
							<PaintList
								hoverAttrs={[]}
								paintList={paintList.docs || []}
								loading={paintList.loading}
								page={paintList.page}
								handleSelect={handleSelect}
								handleSelectAll={handleSelectAllPaint}
								curChannelId={curChannel._id}
								selectedList={curChannelAssign.flowerColors}
								onChangePage={handleChangeColorPage}
								onSearch={handleOnSearch}
							/>
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
									cursor: "pointer",
								}}
								onClick={props.onClose}
							>
								完成
							</Button>
						</Flex>
					) : null}
				</Flex>
			</Flex>
		</Modal>
	)
}
