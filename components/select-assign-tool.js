import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import NavItem from "../components/nav-item"

const PagerButton = props => (
	<Button
		width="0.26rem"
		height="0.26rem"
		bg="#000"
		p="0"
		sx={{ borderRadius: 0 }}
	>
		{props.children}
	</Button>
)
const Pager = props => (
	<Flex>
		<PagerButton>{"<"}</PagerButton>
		<Text bg="#EEEEEE" lineHeight="0.26rem" width="0.53rem" textAlign="center">
			{props.current}
		</Text>
		<PagerButton>{">"}</PagerButton>
	</Flex>
)
const AisleButton = props => (
	<Flex>
		<Box
			height="0.32rem"
			width="0.88rem"
			bg="#000"
			color="#fff"
			padding="0"
			textAlign="center"
			lineHeight="0.32rem"
		>
			ALSLE
		</Box>
		<Button
			variant="primary"
			height="0.32rem"
			width="0.88rem"
			bg="#FF8E6C"
			color="#000"
			padding="0"
			sx={{
				borderRadius: 0,
				fontSize: "0.14rem",
				cursor: "pointer"
			}}
		>
			{props.text}
		</Button>
	</Flex>
)
const AssignItem = props => (
	<Box
		sx={{
			"& :hover": {
				background: "#FF8E6C"
			}
		}}
	>
		<Text fontSize="0.18rem" fontWeight="bolder">
			{props.title}
		</Text>
	</Box>
)
const Title = props => (
	<Flex width="100%" sx={{}} mb="0.43rem">
		<Box>
			<Text fontSize="0.18rem" fontWeight="bolder">
				SECTION NUMBER
			</Text>
			<Text fontSize="0.1rem" m="0.16rem 0">
				2010000XJLS
			</Text>
			<AisleButton text="A" />
		</Box>
		<Image
			src="/3/close.png"
			width="0.23rem"
			sx={{ position: "absolute", right: "0.42rem", top: "0.41rem" }}
		></Image>
	</Flex>
)
export default props => {
	const [showScroll, setShowScroll] = useState(false)
	return (
		<Flex
			width="6.4rem"
			bg="#fff"
			flexDirection="column"
			fontSize="0.18rem"
			color="#000"
			p="0.5rem 0.7rem 0 0.7rem"
			sx={{
				position: "absolute",
				top: "40px",
				left: "calc(6.4rem)"
			}}
		>
			<Title></Title>
			<Flex flexDirection="column">
				<Box width="100%" mb="0.4rem">
					<Text mb="0.26rem">SIZE「CUP」</Text>
					<Box width="100%" lineHeight="0.36rem">
						<Flex width="100%" justifyContent="space-between">
							<Text>85B</Text>
							<Text>90B</Text>
							<Text>85B</Text>
							<Text>85B</Text>
						</Flex>
						<Flex width="100%" justifyContent="space-between">
							<Text>85C</Text>
							<Text>90B</Text>
							<Text>85B</Text>
							<Text>85B</Text>
						</Flex>
					</Box>
				</Box>
				<Box width="100%" mb="0.4rem">
					<Text mb="0.26rem">COLOUR</Text>
					<Flex justifyContent="space-between" alignItems="center">
						<AisleButton text="A" /> <Pager current="01" />
					</Flex>
				</Box>
				<Box width="100%" mb="0.4rem">
					<Text mb="0.26rem">PRINT</Text>
					<Flex justifyContent="space-between" alignItems="center">
						<AisleButton text="A" /> <Pager current="01" />
					</Flex>
				</Box>
			</Flex>
			<Button
				variant="primary"
				height="0.7rem"
				width="6.4rem"
				bg="#1B1B1B"
				color="#fff"
				padding="0"
				ml="-0.7rem"
				sx={{
					borderRadius: 0,
					fontSize: "0.14rem",
					cursor: "pointer"
				}}
			>
				FINISH
			</Button>
		</Flex>
	)
}
