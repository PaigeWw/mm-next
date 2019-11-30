import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"
const Item = props => (
	<Flex
		width={props.width}
		height={props.height}
		alignItems="center"
		justifyContent="center"
	>
		<Image
			src={props.url}
			sx={{
				width: props.imgWidth,
				minWidth: "14px",
				minHeight: "14px"
			}}
		/>
	</Flex>
)
export default props => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			width={props.width}
			height={props.width}
			sx={{
				cursor: "pointer"
			}}
		>
			<Item {...props} url="/4/style2.png" />
			<Item {...props} url="/4/style1.png" />
		</Flex>
	)
}
