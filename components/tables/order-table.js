import React from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
import InputNumber from "../number-input"

export default props => {
	const line = 2
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
			<Box
				sx={{
					padding: "0 18px 18px 18px",
					height: "max-content",
					display: "table"
				}}
			>
				<Table
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22" },
						{ name: "PACKAGES", width: "2/22" },
						{ name: "QUANTITY", width: "2/22" },
						{ name: "PRICE", width: "4/22" },
						{ name: "TOTAL AMOUN", width: "1/22" },
						{ name: "DELETE", width: "2/22" }
					]}
				>
					<TableLine noEdit={true}>
						<Text></Text>
						<Text></Text>
						<Text></Text>
						<Text></Text>
						<Flex justifyContent="space-between">
							<Text mr="10px">XS</Text>
							<Text mr="10px">S</Text>
							<Text mr="10px">M</Text>
							<Text mr="10px">L</Text>
						</Flex>
						<Text></Text>
						<Text></Text>
						<Text></Text>
						<Text></Text>
						<Text></Text>
					</TableLine>
					<TableLine>
						<Text>01</Text>
						<ProductInfo styleNum="XSJHFH00928" />
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<Flex justifyContent="space-between">
							<InputNumber />
							<InputNumber />
							<InputNumber />
							<InputNumber />
						</Flex>
						<Flex
							rowspan={line}
							hasBorder={"1px solid"}
							justifyContent="center"
							alignItems="center"
							sx={{ width: "100%", height: "100%" }}
						>
							<InputNumber />
						</Flex>
						<Text>10</Text>
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<Text>$65.78</Text>
					</TableLine>
					<TableLine>
						<Text>01</Text>
						<ProductInfo styleNum="XSJHFH00928" />
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<Flex justifyContent="space-between">
							<InputNumber />
							<InputNumber />
							<InputNumber />
							<InputNumber />
						</Flex>
						<Text>10</Text>
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<Text>$65.78</Text>
					</TableLine>
				</Table>
			</Box>

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
				COMPLETE
			</Button>
		</Flex>
	)
}
