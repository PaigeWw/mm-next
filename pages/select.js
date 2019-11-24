import React, { useEffect } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Input } from "@rebass/forms"
import Head from "../components/nav"
import SelectBar from "../components/select-bar"
import SelectLine from "../components/select-line"
import SelectAssignTool from "../components/select-assign-tool"
export default () => {
	return (
		<Flex flexDirection="column">
			<Head></Head>
			<SelectBar></SelectBar>
			<Box mt="40px" sx={{ position: "relative" }}>
				<SelectLine
					kind="TOPS"
					data={["/3/1.png", "/3/1.png", "/3/1.png", "/3/1.png"]}
				></SelectLine>
				<SelectLine
					kind="BOTTOMS"
					data={["/3/4.png", "/3/4.png", "/3/4.png", "/3/4.png"]}
				></SelectLine>
				<SelectLine
					kind="TOPS"
					data={["/3/2.png", "/3/2.png", "/3/2.png", "/3/2.png"]}
				></SelectLine>
				<SelectAssignTool />
			</Box>
			<Button
				variant="primary"
				height="1.13rem"
				width="19.2rem"
				bg="#FF8E6C"
				color="#000"
				padding="0"
				sx={{
					borderRadius: 0,
					fontSize: "0.27rem",
					cursor: "pointer"
				}}
			>
				NEXT>
			</Button>
		</Flex>
	)
}
