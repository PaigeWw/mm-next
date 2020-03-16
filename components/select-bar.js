import React, { useEffect } from "react"
import { Flex, Button, Text, Box, Image } from "rebass"
import { Input, Label, Radio } from "@rebass/forms"

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
			/>
			<Flex flexDirection="column">
				<Flex>
					<TabButton text="AREA" />
					<TabButton text="STYLE" />
					<TabButton text="AGE" />
				</Flex>
				<Flex
					alignItems="center"
					width="12rem"
					height="0.38rem"
					sx={{ border: "1px solid #000" }}
				>
					<RadioInTab
						onClick={props.onChangeQuery}
						name={"curTab"}
						value="SOUTHERN"
						id="SOUTHERN"
					/>
					<RadioInTab
						onClick={props.onChangeQuery}
						name={"curTab"}
						value="NORTH"
						id="NORTH"
					/>
					<RadioInTab
						onClick={props.onChangeQuery}
						name={"curTab"}
						value="CENTER"
						id="CENTER"
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}
