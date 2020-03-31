import React, { useState } from "react"
import { Flex, Text, Box, Image } from "rebass"

import Modal from "./modal"
import StyleImg from "../components/commons/style-img"

export default props => {
	const { styleDetails, curStyle } = props
	console.log({ styleDetails, curStyle })
	let tempSelectedIds = [curStyle[0].colors]
	// let tempSelectedImgs = [curStyle[0].imgUrl]
	if (curStyle.length > 1) {
		tempSelectedIds.push(curStyle[1].colors)
		// tempSelectedImgs.push(curStyle[1].imgUrl)
	} else {
		tempSelectedIds.push([])
		// tempSelectedImgs.push(false)
	}
	const [curSelectedColors, setCurSelectedColors] = useState(tempSelectedIds)
	return (
		<Modal onClose={props.onClose}>
			<Flex width="14rem" fontSize="0.18rem" color="#000">
				<Box>
					{Array.isArray(styleDetails) &&
						styleDetails.map((style, index) => (
							<Flex
								width="6.75rem"
								padding="1rem 0"
								alignItems="center"
								justifyContent="center"
							>
								<StyleImg
									width="3.79rem"
									imgValsAttrs={style.attrs}
									colors={curSelectedColors[index]}
									svgId={style._id}
									styleId={style._id}
									shadowUrl={style.shadowUrl}
									svgUrl={style.svgUrl}
									onSetEditSvgGroupIndex={index => setEditSvgGroupIndex(index)}
								/>
							</Flex>
						))}
				</Box>
				<Box>
					{Array.isArray(styleDetails) &&
						styleDetails.map((style, index) => (
							<Flex
								width="6.75rem"
								padding="1rem 0"
								alignItems="center"
								justifyContent="center"
							>
								<StyleImg
									width="3.79rem"
									imgValsAttrs={style.attrs}
									colors={curSelectedColors[index]}
									svgId={style._id}
									styleId={style._id}
									shadowUrl={style.shadowUrlBack}
									svgUrl={style.svgUrlBack}
									onSetEditSvgGroupIndex={index => setEditSvgGroupIndex(index)}
								/>
							</Flex>
						))}
				</Box>
			</Flex>
		</Modal>
	)
}
