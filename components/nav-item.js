import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"
import { ReactSVG } from "react-svg"
export default props => {
	return (
		<Flex
			alignItems="center"
			height="80px"
			pl="24px"
			mt={props.mt}
			sx={{
				cursor: "pointer",
				"&:hover": {
					background: "rgba(255, 255, 255, 0.5)"
				}
			}}
			onClick={props.onLinkTo}
		>
			<ReactSVG
				src={props.url}
				color="#ffffff"
				style={{
					height: "36px",
					width: "36px"
				}}
			/>
			<Text fontSize="0.14rem">{props.name}</Text>
		</Flex>
	)
}
