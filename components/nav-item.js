import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

export default props => {
	return (
		<Flex
			alignItems="center"
			height="80px"
			pl="24px"
			sx={{
				cursor: "pointer",
				"&:hover": {
					background: "rgba(255, 255, 255, 0.5)"
				}
			}}
			onClick={props.onLinkTo}
		>
			<Image
				src={props.url}
				mr={"10px"}
				sx={{
					width: "0.18rem",
					minWidth: "14px",
					height: "0.18rem",
					minHeight: "14px"
				}}
			/>
			<Text fontSize="0.14rem">{props.name}</Text>
		</Flex>
	)
}
