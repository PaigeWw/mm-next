import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"

import Modal from "./modal"
import { ColorList, PaintList } from "./color-and-paint"

import request from "../utils/request.js"
import { baseUrl } from "../utils/helper"
export default props => {
	const { styleDetails, curStyle } = props
	console.log(styleDetails, curStyle)
	let tempSelectedIds = [curStyle[0].colorId]
	let tempSelectedImgs = [curStyle[0].imgUrl]
	if (curStyle.length > 1) {
		tempSelectedIds.push(curStyle[1].colorId)
		tempSelectedImgs.push(curStyle[1].imgUrl)
	} else {
		tempSelectedIds.push(false)
		tempSelectedImgs.push(false)
	}
	const [curSelectedColorIds, setCurSelectedColorIds] = useState(
		tempSelectedIds
	)
	const [curStyleIndex, setCurStyleIndex] = useState(0)
	const [curStyleImgs, setCurStyleImgs] = useState(tempSelectedImgs)
	// const [colorList, setColorList] = useState(styleDetails[0].plainColors)
	const handleSelect = (item, type) => {
		if (item.colorId === curSelectedColorIds[curStyleIndex]) {
			curSelectedColorIds[curStyleIndex] = false
			setCurSelectedColorIds([].concat(curSelectedColorIds))
			curStyleImgs.splice(curStyleIndex, 1, false)
			setCurStyleImgs([].concat(curStyleImgs))
		} else {
			curSelectedColorIds[curStyleIndex] = item.colorId
			setCurSelectedColorIds([].concat(curSelectedColorIds))
			// setCurSelectedColorId()
			switch (type) {
				case "color":
					const cIndex = styleDetails[curStyleIndex].plainColors.findIndex(
						x => x.colorId === item.colorId
					)
					curStyleImgs.splice(
						curStyleIndex,
						1,
						styleDetails[curStyleIndex].plainColors[cIndex].front
					)

					setCurStyleImgs([].concat(curStyleImgs))
					break
				case "paint":
					const pIndex = styleDetails[curStyleIndex].flowerColors.findIndex(
						x => x.colorId === item.colorId
					)

					curStyleImgs.splice(
						curStyleIndex,
						1,
						styleDetails[curStyleIndex].flowerColors[pIndex].front
					)
					setCurStyleImgs([].concat(curStyleImgs))
					break
				default:
					break
			}
		}
	}
	// useEffect(() => {
	// 	setCurSelectedColorId(false)
	// }, [curStyleIndex])
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
										border:
											curStyleIndex === index
												? "1px solid #000"
												: "1px solid #A0A0A0"
									}}
									onClick={() => {
										setCurStyleIndex(index)
									}}
								>
									<Image
										src={
											baseUrl +
											(curStyleImgs[index] ? curStyleImgs[index] : style.imgUrl)
										}
										sx={{
											width: "3.79rem",
											minWidth: "14px",
											minHeight: "14px"
										}}
									/>
								</Flex>
							))}
						{/* 
						<Flex
							width="6.75rem"
							height="4.88rem"
							alignItems="center"
							justifyContent="center"
						>
							<Image
								src="./4/style1.png"
								sx={{
									width: "3.89rem",
									minWidth: "14px",
									minHeight: "14px"
								}}
							/>
						</Flex> */}
					</Flex>

					<Flex flexDirection="column" flexGrow={1} pl="0.6rem">
						<Box width={[1]} mb="0.6rem">
							<Text fontSize="0.18rem" fontWeight="bolder">
								SECTION NUMBER
							</Text>
							<Text fontSize="0.1rem" m="0.16rem 0">
								{styleDetails[curStyleIndex].styleNo}
							</Text>
						</Box>
						<ColorList
							colorList={styleDetails[curStyleIndex].plainColors}
							handleSelect={handleSelect}
							curChannelId={0}
							channelInfoList={[
								{
									channelId: 0,
									plainColorIds: [curSelectedColorIds[curStyleIndex]]
								}
							]}
						/>
						<Box height="0.3rem" width={[1]} />
						<PaintList
							paintList={styleDetails[curStyleIndex].flowerColors}
							handleSelect={handleSelect}
							curChannelId={0}
							channelInfoList={[
								{
									channelId: 0,
									flowerColorIds: [curSelectedColorIds[curStyleIndex]]
								}
							]}
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
								if (styleDetails.length > 1 && !curStyleImgs[1]) return
								props.confirmMade(curSelectedColorIds, curStyleImgs)
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
