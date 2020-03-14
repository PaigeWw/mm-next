import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"
const IndexName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export default props => {
	const { goodsList, onAssignCategory, assignCategoryList } = props
	console.log("assignCategoryList", assignCategoryList)
	return (
		<Box
			width={[1]}
			sx={{
				cursor: "pointer",
				"&:hover": {
					background: "rgba(255, 255, 255, 0.5)"
				}
			}}
		>
			{goodsList.map((goods, index) =>
				goods.category.length > 0 ? (
					<Box width={[1]}>
						<Text
							fontWeight="bold"
							textAlign="center"
							lineHeight="0.6rem"
							fontSize="0.22"
							color="#fff"
							bg="#535353"
							sx={{
								height: "0.6rem",
								width: "100%"
							}}
						>
							{`0${index + 1} ${goods.name}`}
						</Text>
						<Flex width={[1]} flexWrap="wrap" bg="#FFF0E5">
							{goods.category.map((category, index) => {
								const isSelected = assignCategoryList.indexOf(category._id) >= 0
								return (
									<Flex
										alignItems="center"
										justifyContent="space-around"
										width={[1 / 5]}
										height="1.5rem"
										fontSize="0.14rem"
										sx={{
											background: isSelected ? "#FFC1AE" : "",
											"&:hover": {
												background: "#FFC1AE"
											}
										}}
										onClick={e => {
											onAssignCategory(category._id, isSelected)
										}}
									>
										<Text fontSize="0.18rem" sx={{ color: "#FF8E6C" }}>
											{IndexName[index]}
										</Text>
										<Text sx={{ color: "#000000" }}>{category.name}</Text>
									</Flex>
								)
							})}
						</Flex>
					</Box>
				) : null
			)}
		</Box>
	)
}
