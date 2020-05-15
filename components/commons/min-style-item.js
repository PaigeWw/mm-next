import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import StyleImg from "./style-img"
export default class A extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.svgId !== this.svgId) {
			console.log("render")
			return true
		}
		return false
	}

	render() {
		const { styleList, svgId, margin, width } = this.props
		return (
			<Flex
				flexDirection="column"
				alignItems="center"
				justifyContent="space-evenly"
				margin={margin ? margin : "auto"}
				width={width ? width : "80px"}
			>
				{Array.isArray(styleList) &&
					styleList.map((style, index) => (
						<Box p="13px">
							<StyleImg
								svgId={svgId}
								key={`style-img-${index}`}
								width={
									width
										? `${
												((style.style.scale ? style.style.scale : 58) * 1.6) /
												100
										  }rem`
										: `${style.style.scale ? style.style.scale : 58}px`
								}
								svgUrl={style.style.svgUrl}
								id={style.style._id}
								shadowUrl={style.style.shadowUrl}
								imgValsAttrs={style.style.attrs}
								colors={style.colors}
							/>
						</Box>
					))}
			</Flex>
		)
	}
}
