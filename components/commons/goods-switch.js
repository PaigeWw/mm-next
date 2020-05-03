import React, { useEffect, useState } from "react"
import { Flex, Text } from "rebass"
import request from "../../utils/request.js"

export default (props) => {
	const { goodId, onChangeGood, pb, onLoadGoods } = props

	console.log({ goodId })
	const [curGoodId, setCurGoodId] = useState(goodId)
	const [goodsList, setGoodsList] = useState([])
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("goods/getList", "get")
			if (req) {
				setGoodsList(req)
				onLoadGoods && onLoadGoods(req)
			}

			// console.log(req)
		}

		getGoodsList()
	}, [])

	return (
		<Flex
			justifyContent="center"
			bg="#FFD6CA"
			mt="30px"
			pt="30px"
			pb={pb}
			sx={{
				position: "relative",
				display: "block",
				margin: "0 auto",
				width: "100vw",
				color: "#000",
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
						lineHeight: "18px",
						cursor: "pointer",
						borderRight: "1px solid #000",
						fontWeight: option._id === goodId ? "bold" : "normal",
						color: option._id === goodId ? "#FF8E6C" : "#000",
					}}
					ml="10px"
					onClick={() => {
						onChangeGood(option._id)
					}}
				>
					{option.aliasName}
				</Text>
			))}
		</Flex>
	)
}
