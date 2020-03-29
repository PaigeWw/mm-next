import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { baseUrl } from "../utils/helper"

const ImageBox = props => {
	const { item, id, kind, row, col } = props
	return (
		<Box
			sx={{
				"& :hover": {
					background: "#DCD0DC"
				}
			}}
			onMouseDown={e => {
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
export default props => {
	const [showScroll] = useState(false)
	// console.log(props.selectStyles)
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
						visibility: "visible"
					}
				}
			}}
		>
			<Flex bg="#000" width="3.22rem" justifyContent="space-between">
				<Flex flexGrow={1} alignItems="center" justifyContent="center">
					{props.kind}
				</Flex>
				<Flex
					alignItems="center"
					justifyContent="center"
					width="0.75rem"
					bg="#313131"
					className="innerChild"
					sx={{
						visibility: "hidden",
						cursor: "pointer"
						// visibility: showScroll ? "visible" : "hidden"
					}}
				>
					<Image src="/3/left.png" width="0.12rem" height="0.21rem"></Image>
				</Flex>
			</Flex>

			<Flex flex={1}>
				{props.styles.map((item, index) => (
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
					backgroundPositionX: "70%"
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
						visibility: showScroll ? "visible" : "hidden"
					}}
				>
					<Image src="/3/right.png" width="0.12rem" height="0.21rem"></Image>
				</Flex>
			</Flex>
		</Flex>
	)
}
