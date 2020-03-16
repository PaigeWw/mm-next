import React, { useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Router from "next/router"

import { baseUrl } from "../utils/helper"
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
		onClick={() => {
			props.onSelect()
		}}
	>
		{props.text}
	</Button>
)

export default props => {
	const [showSelect, setShowSelect] = useState(false)
	return (
		<Box width={[1, 1 / 3]}>
			<Flex alignItems="baseline" p="0.2rem 0.9rem">
				<Text fontSize="0.22rem">{props.aliasName}</Text>
				<Text fontSize="0.14rem">&nbsp; SERIES</Text>
			</Flex>
			<Box
				width={[1]}
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
						<SelectButton
							text="INDEPENDENT MATCH"
							onSelect={() => {
								Router.push(`/select?id=${props._id}`)
							}}
						/>
						{props.pick ? (
							<SelectButton
								text="PICK EXISTING STYLES"
								onSelect={() => {
									Router.push(`/pick`)
								}}
							/>
						) : null}
						}
					</Flex>
				) : null}
				<Image width={[1, 1]} src={baseUrl + props.imgUrl} />
			</Box>
		</Box>
	)
}
