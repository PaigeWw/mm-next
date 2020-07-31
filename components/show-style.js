import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"
import { filterImageUrl } from "../utils/helper"
const Item = (props) => (
	<Flex
		width={props.width}
		height={props.height}
		alignItems="center"
		justifyContent="center"
	>
		<Image
			src={filterImageUrl(props.url)}
			sx={{
				width: props.imgWidth,
				minWidth: "14px",
				minHeight: "14px",
			}}
		/>
	</Flex>
)
export default (props) => {
	const { threeViews, mode } = props
	// console.log("threeViews", threeViews)
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			width={props.width}
			height={props.width}
			sx={{
				cursor: "pointer",
				padding: props.padding ? props.padding : 0,
				border: props.border ? props.border : "1px solid #000",
				borderTop: props.border ? "" : "none",
				borderBottom: props.border ? "" : "none",
				borderRight: props.hideRightBorder ? "none" : "",
			}}
			onClick={props.toggleMode ? props.toggleMode : null}
		>
			{threeViews.map((item, index) => (
				<Item {...props} url={item[mode]} />
			))}

			{/* <Item {...props} url="/4/style1.png" /> */}
			{props.hideInfo ? null : <Text alignSelf="flex-end">{mode}</Text>}
		</Flex>
	)
}
