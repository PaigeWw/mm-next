import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

export default props => {
	const { goodsList } = props
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
							{`0${index} ${goods.name}`}
						</Text>
						<Flex width={[1]} flexWrap="wrap" bg="#FFF0E5">
							{goods.category.map((category, index) => (
								<Flex
									alignItems="center"
									justifyContent="space-around"
									width={[1 / 5]}
									height="1.5rem"
									fontSize="0.14rem"
								>
									{`0${index} ${category.name}`}
								</Flex>
							))}
						</Flex>
					</Box>
				) : null
			)}
		</Box>
	)
}
