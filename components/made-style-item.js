import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

export default props => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			height="6.4rem"
			width="6.4rem"
			bg="#E7E7E7"
			sx={{
				cursor: "pointer",
				"&:hover": {
					position: "relative",
					background: "#fff"
				}
			}}
		>
			<Image
				src="/4/style2.png"
				sx={{
					width: "2.15rem",
					minWidth: "14px",
					minHeight: "14px"
				}}
			/>
			<Image
				src="./4/style1.png"
				sx={{
					width: "2.21rem",
					minWidth: "14px",
					minHeight: "14px"
				}}
			/>
			<Flex
				flexDirection="column"
				justifyContent="space-between"
				height="1.5rem"
				sx={{ position: "absolute", right: "0.3rem", top: "0.3rem" }}
			>
				<Image
					src="./4/edit.png"
					sx={{
						width: "0.3rem",
						minWidth: "14px",
						minHeight: "14px"
					}}
				/>
				<Image
					src="./4/bigger.png"
					sx={{
						width: "0.3rem",
						minWidth: "14px",
						minHeight: "14px"
					}}
				/>
				<Image
					src="./4/collect.png"
					sx={{
						width: "0.3rem",
						minWidth: "14px",
						minHeight: "14px"
					}}
				/>
			</Flex>
		</Flex>
	)
}
