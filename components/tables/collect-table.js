import React from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
export default props => {
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				background: "#FFF0E5"
			}}
		>
			<Table
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "PICTRUE", width: "2/22" },
					{ name: "PRODUCT INFOMATION", width: "4/22" },
					{ name: "PRICE", width: "1/22" },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE", width: "1/22" },
					{ name: "EDIT", width: "5/22" }
				]}
			>
				<TableLine>
					<Text style={{ position: "absolute" }}>01</Text>
					<ShowStyle width="2rem" imgWidth="0.95rem" />
					<Flex flexDirection="column">
						<ProductInfo
							styleNum="VERSION Y2003"
							made="2110 YE GREEN/2001 YE GREEN"
						/>
						<ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" />
					</Flex>
					<Flex flexDirection="column">
						<Text>$6.7</Text>
						<Text>$6.7</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>TOPS</Text>
						<Text>BOTTOMS</Text>
					</Flex>
				</TableLine>
				<TableLine>
					<Text style={{ position: "absolute" }}>01</Text>
					<ShowStyle width="2rem" imgWidth="0.95rem" />
					<Flex flexDirection="column">
						<ProductInfo
							styleNum="VERSION Y2003"
							made="2110 YE GREEN/2001 YE GREEN"
						/>
						<ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" />
					</Flex>
					<Flex flexDirection="column">
						<Text>$6.7</Text>
						<Text>$6.7</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>TOPS</Text>
						<Text>BOTTOMS</Text>
					</Flex>
				</TableLine>
				<TableLine>
					<Text style={{ position: "absolute" }}>01</Text>
					<ShowStyle width="2rem" imgWidth="0.95rem" />
					<Flex flexDirection="column">
						<ProductInfo
							styleNum="VERSION Y2003"
							made="2110 YE GREEN/2001 YE GREEN"
						/>
						<ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" />
					</Flex>
					<Flex flexDirection="column">
						<Text>$6.7</Text>
						<Text>$6.7</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text>TOPS</Text>
						<Text>BOTTOMS</Text>
					</Flex>
				</TableLine>
			</Table>
			<Button
				variant="primary"
				height="1.13rem"
				width="19.2rem"
				bg="#000"
				color="#fff"
				padding="0"
				sx={{
					borderRadius: 0,
					fontSize: "0.27rem",
					cursor: "pointer"
				}}
			>
				GENERATE ORDERS
			</Button>
		</Flex>
	)
}
