import React from "react"
import { Flex, Text, Box, Button, Input } from "rebass"
import { filterImageUrl } from "../utils/helper"

export const SerachInput = (props) => {
	return (
		<input
			onChange={props.onChange}
			style={{
				height: "100%",
				width: props.width ? props.width : "3rem",
				background: "no-repeat",
				backgroundSize: "14px 14px",
				backgroundImage: "url(/3/search.png)",
				backgroundPosition: "100% center",
				backgroundColor: "#fff",
			}}
		/>
	)
}

const PagerButton = (props) => (
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
const Pager = (props) => (
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

export const PaintList = (props) => {
	const {
		showColorInfo,
		imgValsAttrs,
		paintList,
		handleSelect,
		selectedList,
		onChangePage,
		page,
		onSearch,
	} = props
	console.log({ imgValsAttrs })

	const temp = imgValsAttrs
		? imgValsAttrs.find((x) => x.colorId === showColorInfo._id)
		: {}
	console.log(temp)
	const usedPlainColorIds = selectedList.map((item) => item._id)
	// if (paintList.length < 1) return null
	return (
		<Box width="100%" mb="0.4rem">
			<Text mb="8px">PRINT</Text>{" "}
			<Flex justifyContent="space-between" alignItems="center">
				<SerachInput
					onChange={(e) => {
						onSearch({ code: e.target.value, type: 1 })
					}}
				/>
				<Pager
					current={page}
					onChangePage={(changeNum) => {
						onChangePage(parseInt(page) + changeNum, 1)
					}}
				/>
			</Flex>
			<Flex width="5rem" height="1.5rem" flexWrap="wrap">
				{paintList.map((item) => (
					<Box
						sx={{
							backgroundClip: "content-box !important",
							boxSizing: "content-box",
							cursor: "pointer",
							background: `url(${filterImageUrl(item.value)})`,
							backgroundSize: "100% 100% ",
							border: `1px ${
								usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff"
							} solid`,
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
			{showColorInfo && showColorInfo.type === 1 ? (
				<Flex>
					<Text fontSize="14px">NUMBER</Text>
					<Text
						ml="6px"
						fontSize="12px"
						sx={{
							borderBottom: "1px solid #000",
						}}
					>
						{showColorInfo.code}
					</Text>
					<Text ml="22px" fontSize="14px">
						SCALE
					</Text>
					<Text
						ml="6px"
						fontSize="12px"
						sx={{
							borderBottom: "1px solid #000",
						}}
					>
						{temp ? temp.scale : 1}
					</Text>
				</Flex>
			) : null}
		</Box>
	)
}

export const ColorList = (props) => {
	const {
		showColorInfo,
		colorList,
		handleSelect,
		selectedList,
		onChangePage,
		page,
		onSearch,
	} = props
	const usedPlainColorIds = selectedList.map((item) => item._id)
	console.log({ selectedList })
	return (
		<Box width="100%" mb="0.4rem">
			<Text mb="8px">COLOUR</Text>
			<Flex justifyContent="space-between" alignItems="center">
				<SerachInput
					onChange={(e) => {
						onSearch({ code: e.target.value, type: 0 })
					}}
				/>
				<Pager
					current={page}
					onChangePage={(changeNum) => {
						onChangePage(parseInt(page) + changeNum, 0)
					}}
				/>
			</Flex>
			<Flex width="5rem" height="1.5rem" flexWrap="wrap">
				{colorList.map((item) => (
					<Box
						sx={{
							cursor: "pointer",
							boxSizing: "content-box",
							backgroundClip: "content-box",
							border: `1px ${
								usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff"
							} solid`,
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
			{showColorInfo && showColorInfo.type === 0 ? (
				<Flex alignItems="center">
					<Box
						mr="20px"
						width="20%"
						height="20px"
						bg={showColorInfo.value}
					></Box>
					<Text fontSize="14px">NUMBER</Text>
					<Text
						ml="6px"
						fontSize="12px"
						sx={{
							borderBottom: "1px solid #000",
						}}
					>
						{showColorInfo.code}
					</Text>{" "}
				</Flex>
			) : null}
		</Box>
	)
}
