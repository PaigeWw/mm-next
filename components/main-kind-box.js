import React, { useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Head from "../components/nav"

const SelectButton = props => (
	<Button
		variant="primary"
		height="0.45rem"
		width="2rem"
		bg="#000000"
		color="#ffffff"
		mt={"5.8%"}
		padding="0"
		sx={{
			borderRadius: 0,
			fontSize: "0.14rem",
			"&:hover": {
				background: "#FF8E6C"
			}
		}}
	>
		{props.text}
	</Button>
)

export default props => {
	const [showSelect, setShowSelect] = useState(false)
	return (
		<React.Fragment>
			<Box
				width={[1, 1 / 3]}
				height="fit-content"
				sx={{
					position: "relative"
				}}
				onMouseOver={e => {
					setShowSelect(true)
				}}
				onMouseLeave={e => {
					setShowSelect(false)
				}}
			>
				{showSelect ? (
					<Flex
						bg="rgba(0,0,0,0.5)"
						width="100%"
						height="100%"
						justifyContent="space-evenly"
						alignItems="center"
						sx={{ position: "absolute" }}
					>
						<SelectButton text="INDEPENDENT MATCH" />
						<SelectButton text="PICK EXISTING STYLES" />
					</Flex>
				) : null}
				<Image width={[1, 1]} src={props.imgUrl} />
			</Box>
		</React.Fragment>
	)
}
