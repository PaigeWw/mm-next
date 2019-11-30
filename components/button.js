import React from "react"
import { Button } from "rebass"

export default props => {
	return (
		<Button
			variant="primary"
			padding="0"
			height="1.13rem"
			width="9.6rem"
			sx={{
				borderRadius: 0,
				cursor: "pointer"
			}}
		>
			{props.children}
		</Button>
	)
}
