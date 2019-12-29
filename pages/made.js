import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import Head from "../components/nav"
import EditBox from "../components/made-edit-box"
import BigBox from "../components/made-big-box"
import StyleItem from "../components/made-style-item"
import { getPageQuery } from "../utils/helper"
import Router from "next/router"
import request from "../utils/request.js"
// import SelectAssignTool from "../components/select-assign-tool"
export default () => {
	const [styleDetails, setStyleDetails] = useState([])
	const [showBigBox, setShowBigBox] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	const [curItemIndex, setCurItemIndex] = useState(0)
	const [styleInitData, setStyleInitData] = useState([[], [], [], [], [], []])
	const [collectList, setCollectList] = useState([])
	useEffect(() => {
		const getStyleDetails = async () => {
			let query = getPageQuery()
			console.log(query)
			let reqList = []
			const req = await request("style/detail", { _id: query.id }, "get")
			reqList.push(req)
			for (let i = 0; i < 6; i++) {
				styleInitData[i].push({ imgUrl: req.imgUrl, value: false })
			}
			if (query.id1) {
				const req1 = await request("style/detail", { _id: query.id1 }, "get")
				reqList.push(req1)
				for (let i = 0; i < 6; i++) {
					styleInitData[i].push({ imgUrl: req1.imgUrl, value: false })
				}
			}
			setStyleInitData([].concat(styleInitData))
			setStyleDetails(reqList)
		}
		getStyleDetails()
	}, [])

	const handleConfirmMade = (colorIds, imgUrls) => {
		console.log(colorIds, imgUrls)
		if (!colorIds[0]) return
		styleInitData[curItemIndex] = [{ colorId: colorIds[0], imgUrl: imgUrls[0] }]
		if (styleDetails.length > 1) {
			if (!colorIds[1]) return
			styleInitData[curItemIndex].push({
				colorId: colorIds[1],
				imgUrl: imgUrls[1]
			})
		}
		setStyleInitData([].concat(styleInitData))
	}

	const handleAddFavorite = async index => {
		if (!styleInitData[index][0].colorId) return
		console.log(styleInitData[index][0])
		let params = [
			{
				styleId: styleDetails[0]._id,
				colorId: styleInitData[index][0].colorId,
				front: styleInitData[index][0].imgUrl
			}
		]
		collectList.push(index)
		setCollectList([].concat(collectList))
		if (styleDetails.length > 1) {
			if (!styleInitData[index][1].colorId) return
			params.push({
				styleId: styleDetails[1]._id,
				colorId: styleInitData[index][1].colorId,
				front: styleInitData[index][1].imgUrl
			})
		}
		const res = await request(
			"/user/addFavorite",
			{ styleAndColor: params },
			"post"
		)
		// setStyleDetails([].concat(styleDetails))
		console.log(res)
	}
	return (
		<>
			<Flex flexDirection="column">
				<Head></Head>
				<Flex flexDirection="column">
					<Flex
						justifyContent="space-around"
						alignItems="center"
						fontSize="0.23px"
						bg="#000"
						color="#fff"
						width="19.2rem"
						height="1.12rem"
					>
						<Text>TOPS</Text>
						<Text>BOTTOMS</Text>
					</Flex>
					<Flex flexWrap="wrap">
						{styleInitData.map((style, index) => (
							<StyleItem
								key={`${index}-style`}
								styleList={style}
								index={index}
								collected={collectList.indexOf(index) >= 0}
								openBigBox={() => {
									setShowBigBox(true)
								}}
								onAddFavorite={() => {
									handleAddFavorite(index)
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
								cursor: "pointer"
							}}
							onClick={() => {
								Router.back()
							}}
						>
							{"< RETURN"}
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
								cursor: "pointer"
							}}
							onClick={() => {
								Router.push("/mine")
							}}
						>
							COMPLETE
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
