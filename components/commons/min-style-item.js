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
				width={width ? width : "150px"}
			>
				{Array.isArray(styleList) &&
					styleList.map((style, index) => {
						const {
							styleBackSize = 27,
							styleSize = 27,
							scale = 58,
						} = style.style
						return (
							<Box p="13px">
								<StyleImg
									svgId={svgId}
									key={`style-img-${index}`}
									width={width ? `${(scale * 1.6) / 100}rem` : `${scale}px`}
									backWidth={
										width
											? `${(scale * 1.6 * styleBackSize) / styleSize / 100}rem`
											: `${(scale * styleBackSize) / styleSize}px`
									}
									styleSize={style.style.styleSize}
									styleBackSize={style.style.styleBackSize}
									svgUrl={style.style.svgUrl}
									svgUrlBack={style.style.svgUrlBack}
									shadowUrlBack={style.style.shadowUrlBack}
									id={style.style._id}
									styleId={style.style._id}
									shadowUrl={style.style.shadowUrl}
									imgValsAttrs={style.style.attrs}
									colors={style.colors}
								/>
							</Box>
						)
					})}
			</Flex>
		)
	}
}
