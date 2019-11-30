import React from "react"
import { Flex, Text, Box, Image, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
export default props => {
	return (
		<Flex
			sx={{
				cursor: "pointer",
				background: "#FFF0E5"
			}}
		>
			<Table
				titles={[
					{ name: "PICTRUE", width: "2/22" },
					{ name: "PRODUCT INFOMATION", width: "4/22" },
					{ name: "PRICE", width: "1/22" },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE", width: "1/22" },
					{ name: "EDIT", width: "5/22" }
				]}
			>
				<TableLine justifyContent="space-between">
					<ShowStyle width="2rem" imgWidth="0.95rem" />
					<Flex flexDirection="column">
						<ProductInfo
							styleNum="VERSION Y2003"
							made="2110 YE GREEN/2001 YE GREEN"
						/>
						<ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" />
					</Flex>
					<Flex flexDirection="column" alignItems="center">
						<Text>$6.7</Text>
						<Text>$6.7</Text>
					</Flex>
					<Flex flexDirection="column" alignItems="center">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex flexDirection="column" alignItems="center">
						<Text>TOPS</Text>
						<Text>BOTTOMS</Text>
					</Flex>
				</TableLine>
			</Table>
		</Flex>
	)
}
