import React from "react"
import { Flex, Text, Box, Image } from "rebass"
import Column from "../column"

const Title = props => (
	<Flex width="100%" justifyContent="space-around">
		{props.titles.map((title, key) => (
			<Column width={title.width} key={`${title.name}-${key}`}>
				{title.name}
			</Column>
		))}
	</Flex>
)
export const ProductInfo = props => (
	<Flex alignItems="baseline" flexDirection="column">
		<Text fontSize="0.18rem">{props.styleNum}</Text>
		<Text
			fontSize="0.14rem"
			style={{
				lineHeight: "0.34rem"
			}}
		>
			{props.made}
		</Text>
	</Flex>
)
export const TableLine = props => (
	<Flex
		style={{ width: "100%", border: "1px solid #000" }}
		bg="#fff"
		alignItems="center"
	>
		{props.children}
		<Box>
			<Image width="0.3rem" src="/5/edit.png" />
			<Image width="0.3rem" src="/5/1.png" />
			<Image width="0.3rem" src="/5/2.png" />
			<Image width="0.3rem" src="/7/bigger.png" />
		</Box>
	</Flex>
)
export default props => {
	return (
		<Flex
			width={[1]}
			flexDirection="column"
			sx={{
				cursor: "pointer",
				background: "#FFF0E5"
			}}
		>
			<Title titles={props.titles} />
			<Box style={{ margin: "0 18px 18px 18px" }}>{props.children}</Box>
		</Flex>
	)
}
