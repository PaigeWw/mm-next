import React from "react"
import { Select } from "@rebass/forms"

export default props => {
	const { options } = props
	return (
		<Select
			sx={{
				position: "relative",
				display: "block",
				margin: "0 auto",
				width: "100%",
				maxWidth: "325px",
				color: "#cccccc",
				verticalAlign: "middle",
				textAlign: "left",
				userSelect: "none"
			}}
		>
			{options.map(option => (
				<option value={option.value}>{option.name}</option>
			))}
		</Select>
	)
}
