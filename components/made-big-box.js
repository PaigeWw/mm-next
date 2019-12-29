import React, { useState } from "react"
import { Flex, Text, Box, Image } from "rebass"

import Modal from "./modal"
import MadeStyleItem from "./show-style"
import { Color, Paint } from "./color-and-paint"
export default props => {
	const { styleDetails, curStyle } = props
	let tempThreeViews = []
	let index1 = styleDetails[0].plainColors.find(
		x => x.colorId === curStyle[0].colorId
	)
	if (index1) {
		let obj = index1
		tempThreeViews.push({
			POSITIVE: obj.front,
			"SIDE FACE": obj.left,
			BACK: obj.backend
		})
	} else {
		index1 = styleDetails[0].flowerColors.find(
			x => x.colorId === curStyle[0].colorId
		)
		if (!index1) return null
		let obj = index1
		tempThreeViews.push({
			POSITIVE: obj.front,
			"SIDE FACE": obj.left,
			BACK: obj.backend
		})
	}

	if (styleDetails.length > 1 && curStyle.length > 1 && curStyle[1].colorId) {
		let index2 = styleDetails[1].plainColors.find(
			x => x.colorId === curStyle[1].colorId
		)

		if (index2 >= 0) {
			let obj = index2
			tempThreeViews.push({
				POSITIVE: obj.front,
				"SIDE FACE": obj.left,
				BACK: obj.backend
			})
		} else {
			index2 = styleDetails[1].flowerColors.find(
				x => x.colorId === curStyle[1].colorId
			)
			if (!index2) return null
			let obj = index2
			tempThreeViews.push({
				POSITIVE: obj.front,
				"SIDE FACE": obj.left,
				BACK: obj.backend
			})
		}
	}

	const [mode, setMode] = useState("POSITIVE") //POSITIVE, SIDE FACE, BACK
	const [threeViews, setThreeViews] = useState(tempThreeViews)

	console.log(threeViews)
	console.log(curStyle)
	return (
		<Modal onClose={props.onClose}>
			<Box width="14rem" fontSize="0.18rem" color="#000">
				<Flex justifyContent="center">
					<MadeStyleItem
						width="10.2rem"
						height="5.1rem"
						imgWidth="4.99rem"
						border="1px solid #000"
						mode={mode}
						threeViews={threeViews}
						hideRightBorder
					/>
					<Flex flexDirection="column">
						<MadeStyleItem
							width="3.4rem"
							height="1.7rem"
							imgWidth="1.4rem"
							border="1px solid #000"
							toggleMode={() => {
								setMode("POSITIVE")
							}}
							threeViews={threeViews}
							mode={"POSITIVE"}
						/>
						<MadeStyleItem
							width="3.4rem"
							height="1.7rem"
							imgWidth="1.4rem"
							toggleMode={() => {
								setMode("SIDE FACE")
							}}
							mode={"SIDE FACE"}
							threeViews={threeViews}
						/>
						<MadeStyleItem
							width="3.4rem"
							height="1.7rem"
							imgWidth="1.4rem"
							border="1px solid #000"
							toggleMode={() => {
								setMode("BACK")
							}}
							mode={"BACK"}
							threeViews={threeViews}
						/>
					</Flex>
				</Flex>
			</Box>
		</Modal>
	)
}
