import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"

import Modal from "./modal"
import { ColorList, PaintList } from "./color-and-paint"

import { baseUrl } from "../utils/helper"
export default props => {
	const { styleDetails, curStyle } = props
	console.log(styleDetails, curStyle)
	let tempSelectedIds = [curStyle[0].colorId]
	let tempSelectedImgs = [curStyle[0].imgUrl]
	if (curStyle.length > 1) {
		tempSelectedIds.push(curStyle[1].colorId)
		tempSelectedImgs.push(curStyle[1].imgUrl)
	} else {
		tempSelectedIds.push(false)
		tempSelectedImgs.push(false)
	}
	const [curSelectedColorIds, setCurSelectedColorIds] = useState(
		tempSelectedIds
	)
	const [curStyleIndex, setCurStyleIndex] = useState(0)
	const [curStyleImgs, setCurStyleImgs] = useState(tempSelectedImgs)
	// const [colorList, setColorList] = useState(styleDetails[0].plainColors)
	const handleSelect = (item, type) => {
		if (item.colorId === curSelectedColorIds[curStyleIndex]) {
			curSelectedColorIds[curStyleIndex] = false
			setCurSelectedColorIds([].concat(curSelectedColorIds))
			curStyleImgs.splice(curStyleIndex, 1, false)
			setCurStyleImgs([].concat(curStyleImgs))
		} else {
			curSelectedColorIds[curStyleIndex] = item.colorId
			setCurSelectedColorIds([].concat(curSelectedColorIds))
			// setCurSelectedColorId()
			switch (type) {
				case "color":
					const cIndex = styleDetails[curStyleIndex].plainColors.findIndex(
						x => x.colorId === item.colorId
					)
					curStyleImgs.splice(
						curStyleIndex,
						1,
						styleDetails[curStyleIndex].plainColors[cIndex].front
					)

					setCurStyleImgs([].concat(curStyleImgs))
					break
				case "paint":
					const pIndex = styleDetails[curStyleIndex].flowerColors.findIndex(
						x => x.colorId === item.colorId
					)

					curStyleImgs.splice(
						curStyleIndex,
						1,
						styleDetails[curStyleIndex].flowerColors[pIndex].front
					)
					setCurStyleImgs([].concat(curStyleImgs))
					break
				default:
					break
			}
		}
	}
	return <Modal onClose={props.onClose}></Modal>
}
