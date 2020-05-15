import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import Head from "../components/nav"
import EditBox from "../components/made-edit-box"
import BigBox from "../components/made-big-box"
import StyleItem from "../components/made-style-item"
import { getPageQuery } from "../utils/helper"
import Router from "next/router"
import request from "../utils/request.js"
import useUserInfo from "../hooks/getUserInfo"
// import svg2png from "../utils/svg2png"
// import SelectAssignTool from "../components/select-assign-tool"
export default () => {
	const userInfo = useUserInfo()

	const [styleType, setStyleType] = useState("")
	const [styleType2, setStyleType2] = useState("")
	const [goodId, setGoodId] = useState("")
	const [styleDetails, setStyleDetails] = useState([])
	const [showBigBox, setShowBigBox] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	const [curItemIndex, setCurItemIndex] = useState(0)
	const [styleInitData, setStyleInitData] = useState([
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	])
	const [collectList, setCollectList] = useState([])
	useEffect(() => {
		let query = getPageQuery()
		setGoodId(query.goodId)

		setStyleType(query.type)
		if (query.type2) {
			setStyleType2(query.type2)
		}
		const getStyleDetails = async () => {
			// console.log(query)
			let reqList = []
			const req = await request("style/detail", { _id: query.id }, "get")
			reqList.push(req)
			for (let i = 0; i < 8; i++) {
				styleInitData[i].push({
					style: req,
					colors: [],
				})
			}
			if (query.id1) {
				const req1 = await request("style/detail", { _id: query.id1 }, "get")
				reqList.push(req1)
				for (let i = 0; i < 8; i++) {
					styleInitData[i].push({ style: req1, colors: [] })
				}
			}
			setStyleInitData([].concat(styleInitData))
			setStyleDetails(reqList)
		}
		getStyleDetails()
	}, [])

	const handleConfirmMade = (colorsList) => {
		if (!colorsList[0]) return
		styleInitData[curItemIndex] = [
			{ colors: colorsList[0], style: styleDetails[0] },
		]
		if (styleDetails.length > 1) {
			if (!colorsList[1]) return
			styleInitData[curItemIndex].push({
				colors: colorsList[1],
				style: styleDetails[1],
			})
		}
		setStyleInitData([].concat(styleInitData))
	}
	const handleDelFavorite = async (index) => {
		// console.log(item)
		let itemIndex = collectList.findIndex((x) => x.index === index)
		let item = collectList[itemIndex]
		if (itemIndex > -1) {
			const res = await request(
				"/user/deleteFavorite",
				{ _id: item.id },
				"post"
			)
			// console.log("res", res)
			if (res) {
				// console.log("删除他，嘿嘿嘿")
				collectList.splice(itemIndex, 1)
				setCollectList([].concat(collectList))
			}
		}
	}
	const handleAddFavorite = async (index) => {
		if (!styleInitData[index][0].colors.length) return
		let params = [
			{
				styleId: styleDetails[0]._id,
				colorIds: styleInitData[index][0].colors.map((x) => x._id),
			},
		]

		if (styleDetails.length > 1) {
			if (!styleInitData[index][1].colors.length) return
			params.push({
				styleId: styleDetails[1]._id,
				colorIds: styleInitData[index][1].colors.map((x) => x._id),
			})
		}
		const res = await request(
			"/user/addFavorite",
			{ styleAndColor: params },
			"post"
		)
		if (res) {
			collectList.push({ index, id: res.id })
			// collectList.push(index)
			setCollectList([].concat(collectList))
			console.log(res)
		}
	}
	return (
		<>
			<Flex flexDirection="column">
				<Head progress={2}></Head>

				<Flex flexDirection="column" pt="30px">
					<Flex
						justifyContent="space-around"
						alignItems="center"
						fontSize="0.23px"
						bg="#000"
						color="#fff"
						width="19.2rem"
						height="1.12rem"
					>
						{styleDetails.length > 1 ? (
							<>
								<Text>{styleType}</Text>
								<Text>{styleType2}</Text>
							</>
						) : (
							<Text>{styleType}</Text>
						)}
					</Flex>
					<Flex flexWrap="wrap">
						{styleInitData.map((style, index) => (
							<StyleItem
								key={`${index}-style-img`}
								svgId={`${index}-style-img-svg`}
								styleList={style}
								index={index}
								collected={collectList.find((x) => x.index === index)}
								tool={true}
								openBigBox={() => {
									setShowBigBox(true)
								}}
								onAddFavorite={() => {
									if (collectList.find((x) => x.index === index)) {
										handleDelFavorite(index)
									} else {
										handleAddFavorite(index)
									}
								}}
								openEditBox={() => {
									setShowEditBox(true)
									setCurItemIndex(index)
								}}
							/>
						))}
					</Flex>
					<Flex fontSize="0.27rem" color="#fff" justifyContent="">
						<Button
							height="1.13rem"
							width="9.6rem"
							bg="#000"
							variant="primary"
							padding="0"
							height="1.13rem"
							width="9.6rem"
							sx={{
								borderRadius: 0,
								cursor: "pointer",
							}}
							onClick={() => {
								Router.back()
							}}
						>
							{"< 返回"}
						</Button>
						<Button
							height="1.13rem"
							width="9.6rem"
							bg="#FF8E6C"
							variant="primary"
							padding="0"
							height="1.13rem"
							width="9.6rem"
							sx={{
								borderRadius: 0,
								cursor: "pointer",
							}}
							onClick={() => {
								Router.push(`/mine?goodId=${goodId}`)
							}}
						>
							完成
						</Button>
					</Flex>
				</Flex>
				{showBigBox ? (
					<BigBox
						styleDetails={styleDetails}
						curStyle={styleInitData[curItemIndex]}
						onClose={() => {
							setShowBigBox(false)
						}}
					/>
				) : null}
				{showEditBox ? (
					<EditBox
						userInfo={userInfo}
						styleDetails={styleDetails}
						curStyle={styleInitData[curItemIndex]}
						confirmMade={handleConfirmMade}
						onClose={() => {
							setShowEditBox(false)
						}}
					/>
				) : null}
			</Flex>
		</>
	)
}
