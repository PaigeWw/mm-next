import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import NavItem from "../components/nav-item"

const ImageBox = props => (
	<Box
		sx={{
			"& :hover": {
				background: "#FF8E6C"
			}
		}}
	>
		<Image src={props.src} p="0.68rem" sx={{ display: "block" }}></Image>
	</Box>
)
export default props => {
	const [showScroll, setShowScroll] = useState(false)
	return (
		<Flex
			width="100%"
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
			// onMouseOver={() => {
			// 	setShowScroll(true)
			// }}
			// onMouseOut={() => {
			// 	setShowScroll(false)
			// }}
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
				{props.data.map(item => (
					<ImageBox src={item} />
				))}
			</Flex>
			<Flex bg="#000" width="3.22rem" justifyContent="space-between">
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
