import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import SvgCollect from "./svgCollect"
import StyleImg from "./commons/style-img"
export default props => {
	const { styleList, collected, index, tool, svgId } = props
	// console.log("collected", styleList)
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			height="6.4rem"
			width="6.4rem"
			bg="#E7E7E7"
			sx={{
				cursor: "pointer",
				position: "relative",
				"&:hover": {
					background: "#fff",
					"& .tools": {
						visibility: "visible"
					}
				}
			}}
		>
			{Array.isArray(styleList) &&
				styleList.map((style, index) => (
					<StyleImg
						svgId={svgId}
						styleId={style.style._id}
						key={`style-img-${index}`}
						width="2.21rem"
						svgUrl={style.style.svgUrl}
						shadowUrl={style.style.shadowUrl}
						colors={style.colors}
					/>
				))}
			{tool ? (
				<Flex
					flexDirection="column"
					justifyContent="space-between"
					height="1.5rem"
					className="tools"
					sx={{
						position: "absolute",
						right: "0.3rem",
						top: "0.3rem",
						visibility: "hidden"
					}}
				>
					<Image
						src="./4/edit.png"
						sx={{
							width: "0.3rem",
							minWidth: "14px",
							minHeight: "14px"
						}}
						onClick={() => {
							props.openEditBox()
						}}
					/>
					<Image
						src="./4/bigger.png"
						sx={{
							width: "0.3rem",
							minWidth: "14px",
							minHeight: "14px"
						}}
						onClick={() => {
							props.openBigBox()
						}}
					/>
					<Image
						src={collected ? "./4/collect-1.png" : "./4/collect.png"}
						sx={{
							width: "0.3rem",
							minWidth: "14px",
							minHeight: "14px"
						}}
						onClick={props.onAddFavorite}
					/>
				</Flex>
			) : null}
		</Flex>
	)
}
