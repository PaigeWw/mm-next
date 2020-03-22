import React, { useState } from "react"
import { Flex, Button, Text, Box, Image } from "rebass"
import { Input, Label, Radio } from "@rebass/forms"
const tags = [
	{ name: "AREA", list: ["SOUTHERN", "NORTH", "CENTER"] },
	{ name: "STYLE", list: ["SIMPLE"] },
	{ name: "AGE", list: ["YOUNG", "MATURE"] }
]
const TabButton = props => (
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
				background: "#FF8E6C"
			}
		}}
		{...props}
	>
		{props.text}
	</Button>
)
const RadioInTab = props => (
	<Box
		sx={{
			"& input[type=radio]:checked + label>div": {
				backgroundColor: "#000",
				boxShadow: "inset"
			},
			"& input[type=radio]": {
				position: "absolute",
				opacity: 0
			}
		}}
	>
		<input type="radio" {...props} />
		<Label for={props.id} alignItems="center">
			<Box
				ml="0.24rem"
				mr="0.08rem"
				sx={{
					borderRadius: "50%",
					border: "1px solid #000",
					width: "0.08rem",
					height: "0.08rem",
					position: "relative"
				}}
			></Box>
			{props.value}
		</Label>
	</Box>
)
export default props => {
	const [tagGroup, setTagGroup] = useState(tags[0])
	return (
		<Flex
			alignItems="center"
			width="100%"
			alignItems="baseline"
			ml="0.9rem"
			fontSize="0.14rem"
			sx={{
				cursor: "pointer",
				"&:hover": {
					background: "rgba(255, 255, 255, 0.5)"
				}
			}}
		>
			<Input
				width="3.38rem"
				height="0.38rem"
				mr={"0.28rem"}
				id="username"
				name="username"
				type="text"
				placeholder="STYLE NUMBER"
				onChange={e => props.onChangeQuery({ styleNo: e.target.value })}
			/>
			<Flex flexDirection="column">
				<Flex>
					{tags.map(({ name }, index) => (
						<TabButton
							text={name}
							onClick={e => {
								setTagGroup(tags[index])
							}}
						/>
					))}
				</Flex>
				<Flex
					alignItems="center"
					width="12rem"
					height="0.38rem"
					sx={{ border: "1px solid #000" }}
				>
					{tagGroup.list.map(tag => (
						<RadioInTab
							onClick={e => props.onChangeQuery({ tags: tag })}
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
