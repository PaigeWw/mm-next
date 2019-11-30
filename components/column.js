import React from "react"
import { Flex } from "rebass"

export default props => {
	console.log(props.width)
	return (
		<Flex
			width={props.width}
			sx={{
				textAlign: "center",
				fontSize: "0.22rem",
				lineHeight: "0.54rem"
			}}
		>
			{props.children}
		</Flex>
	)
}
