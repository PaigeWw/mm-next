import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import StyleImg from "./style-img"
export default props => {
	const { styleList, collected, svgId, margin, width } = props
	console.log("collected", collected)
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			margin={margin ? margin : "auto"}
			width={width ? width : "80px"}
		>
			<Box width={width ? width : "50px"} mt="16px" mb="16px">
				{Array.isArray(styleList) &&
					styleList.map((style, index) => (
						<StyleImg
							svgId={svgId}
							key={`style-img-${index}`}
							width={width ? width : "50px"}
							svgUrl={style.style.svgUrl}
							id={style.style._id}
							shadowUrl={style.style.shadowUrl}
							colors={style.colors}
						/>
					))}
			</Box>
		</Flex>
	)
}
