import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import StyleImg from "./commons/style-img"
export default (props) => {
	const { styleList, collected, index, tool, svgId } = props

	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-evenly"
			height="4.8rem"
			width="6.4rem"
			bg="#E7E7E7"
			sx={{
				cursor: "pointer",
				position: "relative",
				"&:hover": {
					background: "#fff",
					"& .tools": {
						visibility: "visible",
					},
				},
			}}
		>
			<Flex
				flexDirection="column"
				justifyContent="space-evenly"
				height="4.8rem"
			>
				{Array.isArray(styleList) &&
					styleList.map((style, index) => {
						const {
							styleBackSize = 27,
							styleSize = 27,
							scale = 58,
						} = style.style
						return (
							<StyleImg
								imgValsAttrs={style.style.attrs}
								svgId={svgId}
								styleSize={style.style.styleSize}
								styleId={style.style._id}
								vposition={style.style.vposition}
								key={`style-img-${index}`}
								width={`${(scale * 3) / 100}rem`}
								backWidth={`${
									(((scale * 3) / 100) * styleBackSize) / styleSize
								}rem`}
								svgUrl={style.style.svgUrl}
								shadowUrl={style.style.shadowUrl}
								shadowUrlBack={style.style.shadowUrlBack}
								svgUrlBack={style.style.svgUrlBack}
								styleBackSize={style.style.styleBackSize}
								colors={style.colors}
							/>
						)
					})}
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
							visibility: "hidden",
						}}
					>
						<Image
							src="./4/edit.png"
							sx={{
								width: "0.3rem",
								minWidth: "14px",
								minHeight: "14px",
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
								minHeight: "14px",
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
								minHeight: "14px",
								opacity: "0.6",
							}}
							onClick={props.onAddFavorite}
						/>
					</Flex>
				) : null}
			</Flex>
		</Flex>
	)
}
