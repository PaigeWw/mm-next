import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { baseUrl } from "../utils/helper"
const PagerButton = props => (
	<Button
		width="0.26rem"
		height="0.26rem"
		bg="#000"
		p="0"
		sx={{ borderRadius: 0 }}
		{...props}
	>
		{/* {props.children} */}
	</Button>
)
const Pager = props => (
	<Flex>
		<PagerButton
			onClick={() => {
				props.onChangePage(-1)
			}}
		>
			{"<"}
		</PagerButton>
		<Text bg="#EEEEEE" lineHeight="0.26rem" width="0.53rem" textAlign="center">
			{props.current}
		</Text>
		<PagerButton
			onClick={() => {
				props.onChangePage(1)
			}}
		>
			{">"}
		</PagerButton>
	</Flex>
)

export const PaintList = props => {
	const { paintList, handleSelect, selectedList, onChangePage, page } = props
	// const pIndex = channelInfoList.findIndex(x => x.channelId === curChannelId)
	const usedPlainColorIds = selectedList.map(item => item._id)
	if (paintList.length < 1) return null
	return (
		<Box width="100%" mb="0.4rem">
			<Flex justifyContent="space-between" alignItems="center">
				<Text>PRINT</Text>{" "}
				<Pager
					current={page}
					onChangePage={changeNum => {
						onChangePage(parseInt(page) + changeNum, 1)
					}}
				/>
			</Flex>
			<Flex width="5rem" height="1.5rem" flexWrap="wrap">
				{paintList.map(item => (
					<Box
						sx={{
							backgroundClip: "content-box !important",
							boxSizing: "content-box",
							cursor: "pointer",
							background: `url(${baseUrl + item.value})`,
							backgroundSize: "100% 100% ",
							border: `1px ${
								usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff"
							} solid`
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
	)
}

export const ColorList = props => {
	const { colorList, handleSelect, selectedList, onChangePage, page } = props
	const usedPlainColorIds = selectedList.map(item => item._id)
	console.log(usedPlainColorIds)
	return (
		<Box width="100%" mb="0.4rem">
			<Flex justifyContent="space-between" alignItems="center">
				<Text>COLOUR</Text>{" "}
				<Pager
					current={page}
					onChangePage={changeNum => {
						onChangePage(parseInt(page) + changeNum, 0)
					}}
				/>
			</Flex>
			<Flex width="5rem" height="1.5rem" flexWrap="wrap">
				{colorList.map(item => (
					<Box
						sx={{
							cursor: "pointer",
							boxSizing: "content-box",
							backgroundClip: "content-box",
							border: `1px ${
								usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff"
							} solid`
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
	)
}