import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import Head from "../components/nav"
import BigBox from "../components/made-edit-box"
import StyleItem from "../components/made-style-item"
import SelectAssignTool from "../components/select-assign-tool"
export default () => {
	const [showBigBox, setShowBigBox] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	return (
		<>
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
						<StyleItem
							openBigBox={() => {
								setShowBigBox(true)
							}}
							openEditBox={() => setShowEditBox(true)}
						/>
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
				{showBigBox ? (
					<BigBox
						onClose={() => {
							setShowBigBox(false)
						}}
					/>
				) : null}
			</Flex>
		</>
	)
}
