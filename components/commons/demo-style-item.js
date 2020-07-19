import React, { useEffect } from "react"
import { Flex, Box } from "rebass"

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
				width={width ? width : "100px"}
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
												((style.style.scale ? style.style.scale : 58) * width) /
												100
										  }px`
										: `${style.style.scale ? style.style.scale : 58}px`
								}
								styleSize={style.style.styleSize}
								svgUrl={style.style.svgUrl}
								svgUrlBack={style.style.svgUrlBack}
								id={style.style._id}
								styleId={style.style._id}
								shadowUrl={style.style.shadowUrl}
								shadowUrlBack={style.style.shadowUrlBack}
								imgValsAttrs={style.style.attrs}
								colors={style.colors}
							/>
						</Box>
					))}
			</Flex>
		)
	}
}
