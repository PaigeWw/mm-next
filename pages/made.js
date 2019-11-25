import React, { useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import Head from "../components/nav"
import StyleItem from "../components/made-style-item"
import SelectAssignTool from "../components/select-assign-tool"
export default () => {
	return (
		<Flex flexDirection="column">
			<Head></Head>
			<Flex flexDirection="column">
				<Flex
					justifyContent="space-around"
					alignItems="center"
					fontSize="0.23px"
					bg="#000"
					color="#fff"
					width="19.2rem"
					height="1.12rem"
				>
					<Text>TOPS</Text>
					<Text>BOTTOMS</Text>
				</Flex>
				<Flex flexWrap="wrap">
					<StyleItem />
					<StyleItem />
					<StyleItem />
					<StyleItem />
					<StyleItem />
					<StyleItem />
				</Flex>
				<Flex fontSize="0.27rem" color="#fff" justifyContent="">
					<Button
						height="1.13rem"
						width="9.6rem"
						bg="#000"
						variant="primary"
						padding="0"
						height="1.13rem"
						width="9.6rem"
						sx={{
							borderRadius: 0,
							cursor: "pointer"
						}}
					>
						{"< RETURN"}
					</Button>
					<Button
						height="1.13rem"
						width="9.6rem"
						bg="#FF8E6C"
						variant="primary"
						padding="0"
						height="1.13rem"
						width="9.6rem"
						sx={{
							borderRadius: 0,
							cursor: "pointer"
						}}
					>
						COMPLETE
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}
