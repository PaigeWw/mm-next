import React, { useEffect, useState } from "react"
import { Flex, Text } from "rebass"
import request from "../../utils/request.js"

export default (props) => {
	const { options } = props

	const [curGoodId, setCurGoodId] = useState(0)
	const [goodsList, setGoodsList] = useState([])
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("goods/getList", "get")
			if (req) {
				setGoodsList(req)
			}
			window.localStorage.setItem("curGoodId", req[0]._id)

			setCurGoodId(req[0]._id)
			// console.log(req)
		}

		getGoodsList()
	}, [])

	return (
		<Flex
			justifyContent="center"
			mb="10px"
			sx={{
				position: "relative",
				display: "block",
				margin: "0 auto",
				width: "100vw",
				color: "#cccccc",
				verticalAlign: "middle",
				textAlign: "left",
				userSelect: "none",
			}}
		>
			{goodsList.map((option, index) => (
				<Text
					fontSize="18px"
					pr="10px"
					// p="10px"
					sx={{
						cursor: "pointer",
						borderRight: "1px solid #000",
						color: option._id === curGoodId ? "#FFC1AE" : "#000",
					}}
					ml="10px"
				>
					{option.aliasName}
				</Text>
			))}
		</Flex>
	)
}
