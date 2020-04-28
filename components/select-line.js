import React, { useEffect, useState } from "react"
import { Flex, Box, Button, Image } from "rebass"
import { baseUrl } from "../utils/helper"
import { SerachInput } from "../components/color-and-paint"
const ImageBox = (props) => {
	const { item, id, kind, row, col } = props
	return (
		<Box
			sx={{
				"& :hover": {
					background: "#DCD0DC",
				},
			}}
			onMouseDown={(e) => {
				// console.dir(e.target.offsetTop)
				props.onSelect(id, kind, e.target.offsetTop, col, item)
			}}
		>
			<Image
				bg={props.selected ? "#FF8E6C  !important" : "none"}
				src={baseUrl + props.src}
				p="0.68rem"
				sx={{ display: "block", width: "1.88rem", boxSizing: "content-box" }}
			></Image>
		</Box>
	)
}
export default (props) => {
	const [showScroll] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const [startIndex, setStartIndex] = useState(0)
	const [searchQuery, setSearchQuery] = useState("")
	const [allStyleList, setAllStyleList] = useState([...props.styles])
	const [showStyleList, setShowStyleList] = useState([...props.styles])
	const handleChangeStartIndex = (val) => {
		if (val < 0) return
		if (
			val <
			props.styles.filter((s) => s.styleNo.indexOf(searchQuery) >= 0).length - 2
		) {
			console.log("handleChangeStartIndex", val)
			setStartIndex(val)
		}
	}

	useEffect(() => {
		const temp = allStyleList
			.filter((s) => s.styleNo.indexOf(searchQuery) >= 0)
			.slice(startIndex, startIndex + 4)
		setShowStyleList(temp)
	}, [startIndex, searchQuery])

	return (
		<Flex
			width="100%"
			minHeight="100px"
			bg="#DCDCDC"
			fontSize="0.23rem"
			color="#fff"
			sx={{
				"&:hover": {
					".innerChild": {
						visibility: "visible",
					},
				},
			}}
		>
			<Flex bg="#000" width="3.22rem" justifyContent="space-between">
				<Flex
					flexGrow={1}
					alignItems="center"
					justifyContent="center"
					flexDirection="column"
					sx={{
						position: "relative",
					}}
				>
					<Flex alignItems="center" justifyContent="center">
						{props.kind}{" "}
						<Box
							onClick={() => {
								setShowSearch(!showSearch)
							}}
							ml="6px"
							sx={{
								//   position: "absolute",
								cursor: "pointer",
								width: 0,
								height: 0,
								borderLeft: "6px solid transparent",
								borderRight: "6px solid transparent",
								borderTop: "6px solid #fff",
							}}
						></Box>
					</Flex>

					{showSearch ? (
						<Box height="20px" bg="#fff">
							<SerachInput
								width="120px"
								onChange={(e) => {
									if (!e.target.value) {
									}
									setSearchQuery(e.target.value)
								}}
							/>{" "}
						</Box>
					) : null}
				</Flex>
				<Flex
					alignItems="center"
					justifyContent="center"
					width="0.75rem"
					bg="#313131"
					className="innerChild"
					sx={{
						visibility: "hidden",
						cursor: "pointer",
						// visibility: showScroll ? "visible" : "hidden"
					}}
					onClick={() => {
						handleChangeStartIndex(startIndex - 1)
					}}
				>
					<Image src="/3/left.png" width="0.12rem" height="0.21rem"></Image>
				</Flex>
			</Flex>

			<Flex flex={1} alignItems="center">
				{showStyleList.map((item, index) => (
					<ImageBox
						item={item}
						kind={props.kind}
						col={index}
						row={props.row}
						onSelect={props.onSelect}
						selected={
							Array.isArray(props.selectStyles) &&
							props.selectStyles.indexOf(item._id) > -1
								? true
								: false
						}
						src={item.imgUrl}
						id={item._id}
					/>
				))}
			</Flex>
			<Flex
				bg="#000"
				width="3.22rem"
				justifyContent="space-between"
				sx={{
					background: "no-repeat",
					backgroundSize: "20px 34px",
					backgroundPositionY: "center",
					backgroundPositionX: "70%",
					// backgroundImage: "url(/3/drop.jpeg)"
				}}
			>
				<Flex
					className="innerChild"
					alignItems="center"
					justifyContent="center"
					width="0.75rem"
					bg="#313131"
					sx={{
						visibility: showScroll ? "visible" : "hidden",
					}}
					onClick={() => {
						handleChangeStartIndex(startIndex + 1)
					}}
				>
					<Image src="/3/right.png" width="0.12rem" height="0.21rem"></Image>
				</Flex>
			</Flex>
		</Flex>
	)
}
