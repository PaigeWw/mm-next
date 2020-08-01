import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import request from "../../utils/request.js"

export default (props) => {
	const { progress } = props

	const [curGoodId, setCurGoodId] = useState(0)
	const [goodsList, setGoodsList] = useState([])
	const progressInfoList = [
		{ code: "01", text: "选择产品分类" },
		{ code: "02", text: "选择产品款式" },
		{ code: "03", text: "搭配款式效果" },
		{ code: "04", text: "操作订单环节" },
	]

	return (
		<Flex
			justifyContent="space-between"
			mb="10px"
			sx={{
				position: "relative",
				width: "50vw",
				alignSelf: "flex-start",
				color: "#cccccc",
				verticalAlign: "middle",

				userSelect: "none",
			}}
		>
			{progressInfoList.map((info, index) => (
				<Flex
					fontSize="15px"
					pr="10px"
					// p="10px"
					justifyContent="space-between"
					alignItems="center"
					sx={{
						color: progress === index ? "#252525" : "#BFBFBF",
					}}
				>
					<Box
						mr="14px"
						sx={{
							width: "15px",
							height: "15px",
							background: progress === index ? "#FF8E6C" : "#BFBFBF",
							borderRadius: "50%",
						}}
					></Box>
					<Text fontSize="0.23rem">{info.code}</Text>
					<Text fontSize="0.12rem" pl="4px" pr="4px">
						/
					</Text>
					<Text fontSize="0.16rem">{info.text}</Text>
				</Flex>
			))}
		</Flex>
	)
}
