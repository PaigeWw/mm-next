import React, { useEffect, useRef, useMemo } from "react"
import { Flex, Button, Box } from "rebass"
import { Input } from "@rebass/forms"

const ArrowButton = (props) => (
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
			cursor: "pointer",
		}}
		onClick={props.onClick}
	>
		{props.text}
	</Flex>
)

export default (props) => {
	return (
		<Flex flexDirection="column" alignItems="center" mr="10px">
			<ArrowButton text="▲" onClick={props.upValue} />
			<Input
				autofocus="true"
				type="number"
				width="0.6rem"
				height="0.4rem"
				p="0"
				textAlign="center"
				defaultValue={props.value}
				sx={{
					apearance: "none",
				}}
				onChange={(e) => {
					// if(!e.target.value)
					props.onChange(!e.target.value ? 0 : parseInt(e.target.value))
				}}
			/>
			<ArrowButton text="▼" onClick={props.downValue} />
		</Flex>
	)
}
