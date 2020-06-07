import React, { useEffect, useMemo } from "react"
import { ReactSVG } from "react-svg"
// import { Image } from "rebass"
import { baseUrl } from "../../utils/helper"

export default (props) => {
	const {
		width,
		svgUrl,
		shadowUrl,
		key,
		colors,
		svgId,
		styleId,
		showGroupStroke,
		imgValsAttrs = [],
		curStylesEditGroupIndex,
		onSetEditSvgGroupIndex,
	} = props

	return (
		<div
			style={{
				position: "relative",

				width: width,
			}}
		>
			<img
				src={`${baseUrl}${shadowUrl}`}
				style={{
					width: width,
					position: "absolute",
					left: 0,
					pointerEvents: "none",
				}}
			/>
			<ReactSVG
				style={{
					width: width,
					minWidth: "14px",
					fill: "#fff",
				}}
				afterInjection={(error, svg) => {
					if (error) {
						console.error(error)
						return
					}
					let j = 0
					for (let i = 0; i < svg.children.length; i++) {
						if (
							svg.children[i].tagName === "g" ||
							svg.children[i].tagName === "path"
						) {
							let block = svg.children[i]
							for (let i = 0; i < block.children.length; i++) {
								let cblock = block.children[i]
								cblock.removeAttribute("class")
							}

							if (onSetEditSvgGroupIndex) {
								let jj = j

								block.onclick = (e) => {
									e.stopPropagation()

									onSetEditSvgGroupIndex(jj)
								}

								if (curStylesEditGroupIndex === j && showGroupStroke) {
									block.style.stroke = "khaki"
									block.style.strokeWidth = "8px"
								}
							}
							// svg.children[i].setAttribute('index', j);
							if (
								colors &&
								colors.length > 0 &&
								j < colors.length &&
								colors[j]
							) {
								let block = svg.children[i]
								block.style.fill = colors[j].type
									? `url("#${styleId}-${colors[j]._id}-${j}")`
									: colors[j].value
							}
							j++
						}
					}
				}}
				renumerateIRIElements={false}
				loading={() => {
					return "loading"
				}}
				beforeInjection={(svg) => {
					console.log("curStylesEditGroupIndex", curStylesEditGroupIndex)
					svg.setAttribute("id", svgId || key)
					let svgDefs = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"defs"
					)
					svg.appendChild(svgDefs)
					svg.setAttribute("style", `width: ${width}; height: 100%`)

					for (let i = 0; i < colors.length; i++) {
						let color = colors[i]
						if (color && color.type) {
							let imgVals = imgValsAttrs.find(
								(x) => x.colorId === color._id
							) || {
								scale: 1,
								x: 0,
								y: 0,
							}
							// console.log("imgVals", imgVals)
							let svgPattern = document.createElementNS(
								"http://www.w3.org/2000/svg",
								"pattern"
							)

							svgPattern.setAttribute("id", `${styleId}-${color._id}-${i}`)
							// editPatterns[color._id] = svgPattern
							svgPattern.setAttribute("patternUnits", "userSpaceOnUse")
							svgPattern.setAttribute("patternContentUnits", "userSpaceOnUse")
							if (svg.width.baseVal.unitType === 2) {
								svg.setAttribute("width", `${svg.viewBox.baseVal.width}px`)
							}
							let W =
								((color.size * svg.width.baseVal.value) / 20) * imgVals.scale
							let H = (W * color.height) / color.width

							svgPattern.setAttribute("width", `${W}px`)
							svgPattern.setAttribute("height", `${H}px`)
							svgPattern.x.baseVal.value = imgVals.x
							svgPattern.y.baseVal.value = imgVals.y

							let svgPatternImage = document.createElementNS(
								"http://www.w3.org/2000/svg",
								"image"
							)

							svgPatternImage.setAttribute("width", `${W}px`)
							svgPatternImage.setAttribute("height", `${H}px`)
							svgPatternImage.href.baseVal = `${baseUrl}${color.value}`

							// editSvgs.svgDefs.appendChild(svgPattern)
							svgPattern.appendChild(svgPatternImage)
							svgDefs.appendChild(svgPattern)
						}
					}
				}}
				evalScripts="always"
				src={`${baseUrl}${svgUrl}`}
			/>
		</div>
	)
}
