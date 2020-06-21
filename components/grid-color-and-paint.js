import React, { useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { baseUrl } from "../utils/helper"

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
	const [hoverInfo, setHoverInfo] = useState(false)
	const {
		showColorInfo,
		imgValsAttrs,
		hoverAttrs,
		paintList,
		handleSelect,
		selectedList,
		onChangePage,
		page,
		onSearch,
	} = props

	const temp = imgValsAttrs
		? imgValsAttrs.find((x) => x.colorId === showColorInfo._id)
		: {}
	const hoverTemp =
		hoverAttrs && hoverInfo
			? hoverAttrs.find((x) => x.colorId === hoverInfo._id)
			: { scale: 1 }
	const usedPlainColorIds = selectedList.map((item) => item._id)
	// if (paintList.length < 1) return null
	return (
		<>
			<Box width="100%" mb="0.4rem">
				<Text mb="8px">印花</Text>{" "}
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
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(10, 10%)",
						gridTemplateRows: "repeat(3, 33.33%)",
					}}
					width="100%"
					height="1.5rem"
				>
					{paintList.map((item) => (
						<Box
							sx={{
								backgroundClip: "content-box !important",
								boxSizing: "content-box",
								cursor: "pointer",
								background: `url(${baseUrl + item.value})`,
								backgroundSize: "100% 100% ",
								border: `1px ${
									usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff"
								} solid`,
							}}
							// onMouseEnter={(e) => {
							// 	setHoverInfo({
							// 		_id: item._id,
							// 		top: e.target.offsetTop,
							// 		left: e.target.offsetLeft + e.target.offsetWidth,
							// 		value: `${baseUrl}${item.value}`,
							// 		code: item.code,
							// 	})
							// }}
							onClick={() => {
								handleSelect(item, "paint")
							}}
							mt="0.2rem"
							mr="0.2rem"
							p="4px"
							width="0.3rem"
							height="0.3rem"
						/>
					))}
				</Box>
			</Box>
			{false ? (
				<Box
					bg="#fff"
					sx={{
						position: "absolute",
						// top: `${hoverInfo.top}px`,
						// left: `${hoverInfo.left}px`,
						bottom: `0.7rem`,
						left: `5.7rem`,
						padding: "10px",

						border: "1px solid #ccc",
					}}
				>
					<Box alignItems="center" height="40px">
						<Flex alignItems="center">
							<Text fontSize="12px">花号</Text>
							<Text
								ml="6px"
								fontSize="10px"
								sx={{
									borderBottom: "1px solid #000",
								}}
							>
								{hoverInfo.code}
							</Text>
						</Flex>
						<Flex alignItems="center">
							<Text fontSize="12px">缩放比例</Text>
							<Text
								ml="6px"
								fontSize="10px"
								sx={{
									borderBottom: "1px solid #000",
								}}
							>
								{hoverTemp ? hoverTemp.scale : 1}
							</Text>
						</Flex>
					</Box>
					<Image
						src="/3/close.png"
						width="10px"
						onClick={() => {
							setHoverInfo(false)
						}}
						sx={{ position: "absolute", right: "2px", top: "2px" }}
					></Image>
					<Image
						sx={{ objectFit: "cover", width: "100px", height: "100px" }}
						src={hoverInfo.value}
					/>
				</Box>
			) : null}
			<Flex alignItems="center" height="20px">
				{showColorInfo && showColorInfo.type === 1 ? (
					<>
						<Text fontSize="14px">花号</Text>
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
							缩放比例
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
					</>
				) : null}
			</Flex>
		</>
	)
}

export const ColorList = (props) => {
	const {
		showColorInfo,
		colorList,
		handleSelect,
		handleEnlarge,
		selectedList,
		onChangePage,
		page,
		onSearch,
	} = props
	const usedPlainColorIds = selectedList.map((item) => item._id)
	const [hoverInfo, setHoverInfo] = useState(false)
	// console.log({ selectedList })
	return (
		<>
			<Box width="100%" mb="0.4rem" sx={{ position: "relative" }}>
				<Text mb="8px">颜色</Text>
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
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(10, 10%)",
						gridTemplateRows: "repeat(3, 33.33%)",
					}}
					width="100%"
					height="1.5rem"
				>
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
							// onMouseEnter={(e) => {
							// 	setHoverInfo({
							// 		_id: item._id,
							// 		top: e.target.offsetTop,
							// 		left: e.target.offsetLeft + e.target.offsetWidth,
							// 		code: item.code,
							// 	})
							// }}
							bg={item.value}
							mt="0.2rem"
							mr="0.2rem"
							p="4px"
							width="0.3rem"
							height="0.3rem"
						></Box>
					))}
				</Box>
				{false ? (
					<Box
						bg="#fff"
						sx={{
							position: "absolute",
							// top: `${hoverInfo.top}px`,
							// left: `${hoverInfo.left}px`,
							bottom: `0.4rem`,
							left: `5.7rem`,
							padding: "10px",
							minWidth: "120px",
							border: "1px solid #ccc",
						}}
					>
						<Image
							src="/3/close.png"
							width="10px"
							onClick={() => {
								setHoverInfo(false)
							}}
							sx={{ position: "absolute", right: "2px", top: "2px" }}
						></Image>
						<Flex alignItems="center" mt="10px" height="20px">
							<Text fontSize="12px">色号</Text>
							<Text
								ml="6px"
								fontSize="10px"
								sx={{
									borderBottom: "1px solid #000",
								}}
							>
								{hoverInfo.code}
							</Text>
						</Flex>
					</Box>
				) : null}
			</Box>

			<Flex alignItems="center" height="20px">
				{showColorInfo && showColorInfo.type === 0 ? (
					<>
						<Box
							mr="20px"
							width="20%"
							height="20px"
							bg={showColorInfo.value}
						></Box>
						<Text fontSize="14px">色号</Text>
						<Text
							ml="6px"
							fontSize="12px"
							sx={{
								borderBottom: "1px solid #000",
							}}
						>
							{showColorInfo.code}
						</Text>{" "}
					</>
				) : null}
			</Flex>
		</>
	)
}
