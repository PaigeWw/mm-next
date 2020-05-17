import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Title } from "./aisle-button"
import { ColorList, PaintList } from "../grid-color-and-paint"
import request from "../../utils/request.js"
import { baseUrl } from "../../utils/helper.js"

export default (props) => {
	const { role, currentSeleted, curChannel } = props
	const { sid, top, col, styleItem, channels = [], isLast } = currentSeleted
	// const [curChannel, setCurChannel] = useState({})
	const [channelList, setChannelList] = useState([])

	const [plainColors, setPlainColors] = useState({ docs: [], page: 1 })
	const [flowerColors, setFlowerColors] = useState({ docs: [], page: 1 })

	const [pcode, setPcode] = useState("")
	const [fcode, setFcode] = useState("")
	const [assignInfoSource, setAssignInfoSource] = useState({
		plainColors: [],
		flowerColors: [],
	})
	const [curChannelAssign, setCurChannelAssign] = useState({
		plainColors: [],
		flowerColors: [],
	})

	useEffect(() => {}, [])
	useEffect(() => {
		// getColorList(1)
		if (assignInfoSource && assignInfoSource.plainColors) {
			let ans = assignInfoSource.plainColors.filter(
				(x) => x.code.indexOf(pcode) > -1
			)
			setCurChannelAssign({
				...curChannelAssign,
				plainColors: ans,
			})
		}
	}, [pcode])

	useEffect(() => {
		if (assignInfoSource && assignInfoSource.flowerColors) {
			let ans = assignInfoSource.flowerColors.filter(
				(x) => x.code.indexOf(fcode) > -1
			)
			setCurChannelAssign({
				...curChannelAssign,
				flowerColors: ans,
			})
		}
	}, [fcode])

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
			setCurChannelAssign({
				plainColors: [],
				flowerColors: [],
			})
		} else {
			setCurChannelAssign(req)
			setAssignInfoSource(req)
		}
	}
	useEffect(() => {
		console.log({ currentSeleted })
		if (!curChannel) return
		getChannelsAssign(sid, curChannel)
	}, [curChannel, sid])

	useEffect(() => {
		setFlowerColors({
			docs: curChannelAssign.flowerColors,
			page: 1,
		})
		setPlainColors({
			docs: curChannelAssign.plainColors,
			page: 1,
		})
	}, [curChannelAssign])

	let left = (col + 2) * 3.2
	if (left > 19.2 - 6.4) {
		left = (col - 1) * 3.2
	}

	const handleChangeColorPage = (page, type) => {
		console.log(page, type)
		if (type === 0) {
			setPlainColors({
				docs: curChannelAssign.plainColors.slice((page - 1) * 30, page * 30),
				page: page,
			})
		} else {
			setFlowerColors({
				docs: curChannelAssign.flowerColors.slice((page - 1) * 30, page * 30),
				page: page,
			})
		}
	}

	const handleOnSearch = (options) => {
		if (options.type === 0) {
			setPcode(options.code)
		} else {
			setFcode(options.code)
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
				top: `${isLast ? "" : top}px`,
				left: `${left}rem`,
				bottom: `${isLast ? 0 : ""}`,
			}}
		>
			<Flex width={[1]}>
				<Box width={[3 / 5]}>
					<Text fontSize="0.18rem" fontWeight="bolder">
						样衣编码
					</Text>
					<Text fontSize="0.1rem" m="0.16rem 0">
						{styleItem.styleNo}
					</Text>
				</Box>
				<Flex justifyContent="center" alignItems="center" width={[2 / 5]}>
					<Image src={`${baseUrl}${styleItem.shadowUrlBack}`} width="70%" />
				</Flex>
				<Image
					src="/3/close.png"
					width="0.23rem"
					onClick={() => {
						props.onClose()
					}}
					sx={{ position: "absolute", right: "0.42rem", top: "0.41rem" }}
				></Image>
			</Flex>

			<Flex flexDirection="column">
				{assignInfoSource.plainColors.length > 0 ? (
					<ColorList
						colorList={plainColors.docs}
						page={plainColors.page}
						selectedList={[]}
						onChangePage={handleChangeColorPage}
						onSearch={handleOnSearch}
						handleSelect={() => {}}
					/>
				) : null}
				{assignInfoSource.flowerColors.length > 0 ? (
					<PaintList
						paintList={flowerColors.docs || []}
						page={flowerColors.page}
						selectedList={[]}
						onChangePage={handleChangeColorPage}
						onSearch={handleOnSearch}
						handleSelect={() => {}}
					/>
				) : null}
			</Flex>
		</Flex>
	)
}
