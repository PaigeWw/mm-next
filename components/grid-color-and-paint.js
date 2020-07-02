import React, { useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { baseUrl } from "../utils/helper"
import Modal from "../components/modal"
import Loading from "../components/commons/loading"

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
		loading,
		onSearch,
		handleSelectAll,
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
			<Box width="100%" mb="0.4rem" sx={{ position: "relative" }}>
				<Flex mb="8px" justifyContent="space-between" alignItems="center">
					<Text>印花</Text>
					{handleSelectAll ? (
						<Flex
							sx={{
								fontSize: "10px",
								textDecoration: "underline",
							}}
						>
							<Text
								mr="8px"
								onClick={() => {
									handleSelectAll(true)
								}}
							>
								全选
							</Text>{" "}
							<Text
								onClick={() => {
									handleSelectAll(false)
								}}
							>
								全不选
							</Text>
						</Flex>
					) : null}
				</Flex>
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
				{loading ? (
					<Box
						width="100%"
						height="100%"
						bg="rgba(255,255,255,0.6)"
						sx={{
							position: "absolute",
						}}
					>
						<Loading type="loading5 black" />
					</Box>
				) : null}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(10, 10%)",
						gridTemplateRows: "repeat(3, 33.33%)",
					}}
					// onMouseMoveCapture
					// onMouseLeave
					onMouseLeave={() => {
						console.log("Box onMouseMove")
						setHoverInfo(false)
					}}
					width="100%"
					height="1.9rem"
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
							onMouseMove={(e) => {
								e.nativeEvent.stopPropagation()
								e.nativeEvent.preventDefault()
							}}
							onMouseEnter={(e) => {
								const domRect = e.target.getBoundingClientRect()

								setHoverInfo({
									_id: item._id,
									top: domRect.top + e.target.offsetHeight,
									left: domRect.left + domRect.width,
									value: `${baseUrl}${item.value}`,
									code: item.code,
								})
							}}
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
			{hoverInfo ? (
				<Modal
					noPointer
					padding="0"
					overflow="hidden"
					{...hoverInfo}
					onClose={null}
				>
					<Box
						bg="#fff"
						sx={{
							// position: "absolute",
							// top: `${hoverInfo.top}px`,
							// left: `${hoverInfo.left}px`,
							bottom: `0.7rem`,
							left: `5.7rem`,
							padding: "10px",
							border: "1px solid #ccc",
							margin: "0",
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
							sx={{ objectFit: "cover", width: "100px", height: "100px" }}
							src={hoverInfo.value}
						/>
					</Box>
				</Modal>
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
		handleSelectAll,
		handleEnlarge,
		selectedList,
		onChangePage,
		page,
		loading,
		onSearch,
	} = props
	const usedPlainColorIds = selectedList.map((item) => item._id)
	const [hoverInfo, setHoverInfo] = useState(false)
	// console.log({ selectedList })
	return (
		<>
			<Box width="100%" mb="0.4rem" sx={{ position: "relative" }}>
				<Flex mb="8px" justifyContent="space-between" alignItems="center">
					<Text>颜色</Text>
					{handleSelectAll ? (
						<Flex
							sx={{
								fontSize: "10px",
								textDecoration: "underline",
							}}
						>
							<Text
								mr="8px"
								onClick={() => {
									handleSelectAll(true)
								}}
							>
								全选
							</Text>{" "}
							<Text
								onClick={() => {
									handleSelectAll(false)
								}}
							>
								全不选
							</Text>
						</Flex>
					) : null}
				</Flex>
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
					onMouseLeave={() => {
						setHoverInfo(false)
					}}
					width="100%"
					height="1.9rem"
				>
					{loading ? (
						<Box
							width="100%"
							height="100%"
							bg="rgba(255,255,255,0.6)"
							sx={{
								position: "absolute",
							}}
						>
							<Loading type="loading5 black" />
						</Box>
					) : null}
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
							onMouseEnter={(e) => {
								const domRect = e.target.getBoundingClientRect()

								setHoverInfo({
									_id: item._id,
									top: domRect.top + e.target.offsetHeight,
									left: domRect.left + domRect.width,
									value: item.value,
									code: item.code,
								})
							}}
							bg={item.value}
							mt="0.2rem"
							mr="0.2rem"
							p="4px"
							width="0.3rem"
							height="0.3rem"
						></Box>
					))}
				</Box>
				{hoverInfo ? (
					<Modal
						padding="0"
						overflow="hidden"
						noPointer
						{...hoverInfo}
						onClose={null}
					>
						<Box
							bg="#fff"
							sx={{
								// top: `${hoverInfo.top}px`,
								// left: `${hoverInfo.left}px`,

								padding: "10px",
								minWidth: "120px",
								border: "1px solid #ccc",
							}}
						>
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
					</Modal>
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
