import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import request from "../../utils/request.js"

export default (props) => {
	const { progress } = props

	const [curGoodId, setCurGoodId] = useState(0)
	const [goodsList, setGoodsList] = useState([])
	const progressInfoList = [
		"01/选择产品分类",
		"02/选择产品款式",
		"03/搭配款式效果",
		"04/操作订单环节",
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
					{info}
				</Flex>
			))}
		</Flex>
	)
}
