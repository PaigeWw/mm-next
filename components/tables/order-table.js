import React from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
import InputNumber from "../number-input"

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
			<Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
				<Table
					sx={{ margin: "0", marginRight: "1px" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "SECTION NUMBER", width: "2/22" },
						{ name: "COLOUR", width: "4/22" },
						{ name: "IMAGE", width: "1/22" },
						{ name: "SIZE", width: "2/22" }
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
					</TableLine>
					<TableLine noEdit={true}>
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
					</TableLine>
					<TableLine noEdit={true}>
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
					</TableLine>
				</Table>

				<Table
					sx={{ height: "100%", margin: "0" }}
					tbSx={{
						border: "1px solid #000",
						borderLeft: "none",
						borderRight: "none"
					}}
					titles={[{ name: "PACKAGES", width: "2/22" }]}
				>
					<TableLine noEdit>
						<Flex
							justifyContent="center"
							alignItems="center"
							sx={{ width: "100%", height: "100%" }}
						>
							<InputNumber />
						</Flex>
					</TableLine>
				</Table>
				<Table
					sx={{ height: "100%", margin: "0" }}
					tbSx={{
						border: "1px solid #000",
						borderLeft: "none",
						borderRight: "none"
					}}
					titles={[
						{ name: "QUANTITY", width: "2/22" },
						{ name: "PRICE", width: "4/22" },
						{ name: "TOTAL AMOUN", width: "1/22" },
						{ name: "DELETE", width: "2/22" }
					]}
				>
					<TableLine hasDel>
						<Text>10</Text>
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<Text>$65.78</Text>
					</TableLine>
					<TableLine>
						<Text>10</Text>
						<Flex flexDirection="column">
							<ProductInfo made="2110 YE GREEN" />
							<ProductInfo made="2110 YE GREEN" />
						</Flex>
						<Text>$65.78</Text>
					</TableLine>
				</Table>
			</Flex>

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
