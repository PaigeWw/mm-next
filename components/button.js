import React, { useEffect } from "react"
import {} from "rebass"

export default props => {
	return (
		<Button
			variant="primary"
			padding="0"
			fontSize="0.14rem"
			sx={{
				borderRadius: 0,
				cursor: "pointer"
			}}
		>
			{props.children}
		</Button>
	)
}
