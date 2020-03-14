import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

export default props => {
	return (
		<Flex
			bg="#fff"
			flexDirection="column"
			fontSize="0.18rem"
			color="#000"
			p="0.9rem"
			sx={{
				position: "fixed",
				zIndex: 999999999,
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				boxShadow: "0px 14px 44px 5px rgba(0, 0, 0, 0.11)"
			}}
		>
			<Image
				onClick={() => {
					props.onClose()
				}}
				src="/3/close.png"
				width="0.23rem"
				sx={{ position: "absolute", right: "0.42rem", top: "0.41rem" }}
			></Image>
			{props.children}
		</Flex>
	)
}
