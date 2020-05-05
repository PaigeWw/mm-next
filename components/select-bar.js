import React, { useState } from "react"
import { Flex, Button, Text, Box, Image } from "rebass"
import { Input, Label, Radio } from "@rebass/forms"
const tags = [
	{ name: "AREA", list: ["ALL", "SOUTHERN", "NORTH", "CENTER"] },
	{ name: "STYLE", list: ["SIMPLE"] },
	{ name: "AGE", list: ["YOUNG", "MATURE"] },
]
const TabButton = (props) => (
	<Button
		variant="primary"
		width="1.34rem"
		height="0.38rem"
		bg="#000000"
		color="#ffffff"
		padding="0"
		sx={{
			borderRadius: 0,
			fontSize: "0.14rem",
			"&:hover": {
				background: "#FF8E6C",
			},
		}}
		{...props}
	>
		{props.text}
	</Button>
)
const RadioInTab = (props) => (
	<Box
		sx={{
			"& input[type=radio]:checked + label>div": {
				backgroundColor: "#000",
				boxShadow: "inset",
			},
			"& input[type=radio]": {
				position: "absolute",
				opacity: 0,
			},
		}}
	>
		<input type="radio" {...props} />
		<Label for={props.id} alignItems="center">
			<Box
				ml="0.24rem"
				mr="0.08rem"
				sx={{
					cursor: "pointer",
					borderRadius: "50%",
					border: "1px solid #000",
					width: "4px",
					minWidth: "0.08rem",
					height: "0.08rem",
					minHeight: "4px",
					position: "relative",
				}}
			></Box>
			{props.value}
		</Label>
	</Box>
)
export default (props) => {
	const [tagGroup, setTagGroup] = useState(tags[0])
	return (
		<Flex pt="10px" width="100%" bg="#FFD6CA" fontSize="0.14rem" pb="30px">
			<Flex flexDirection="column" width="100%">
				<Flex
					alignItems="center"
					justifyContent="center"
					width="100%"
					height="0.38rem"
				>
					{tagGroup.list.map((tag) => (
						<RadioInTab
							onClick={(e) => props.onChangeQuery({ tags: tag })}
							name={"curTab"}
							value={tag}
							id={tag}
						/>
					))}
				</Flex>
			</Flex>
		</Flex>
	)
}
