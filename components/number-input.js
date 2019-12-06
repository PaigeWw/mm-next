import React from "react"
import { Flex, Button, Box } from "rebass"
import { Input } from "@rebass/forms"

const ArrowButton = props => (
	<Flex
		justifyContent="center"
		alignItems="center"
		variant="primary"
		padding="0.16rem 0"
		width="0.2rem"
		height="0.2rem"
		sx={{
			color: "#000",
			borderRadius: 0,
			// transform: `rotateZ(${props.deg}deg)`,
			cursor: "pointer"
		}}
	>
		{props.text}
	</Flex>
)

export default props => {
	return (
		<Flex flexDirection="column" alignItems="center" mr="10px">
			<ArrowButton text="▲" />
			<Input
				type="number"
				width="0.3rem"
				height="0.16rem"
				sx={{
					apearance: "none"
				}}
			/>
			<ArrowButton text="▼" />
		</Flex>
	)
}
