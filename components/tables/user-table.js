import React from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
export default props => {
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			alignItems="stretch"
			height="100%"
			sx={{
				cursor: "pointer",

				background: "#FFF0E5"
			}}
		>
			<Table
				titles={[
					{ name: "00", width: "2/22", isHide: true },
					{ name: "DATE", width: "2/22" },
					{ name: "STYLE PREVIEW", width: "2/22" },
					{ name: "QUANTITY", width: "4/22" },
					{ name: "PRICE", width: "1/22" },
					{ name: "ACTION", width: "5/22" }
				]}
			>
				<TableLine>
					<Text style={{ position: "absolute" }}>02</Text>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex justifyContent="center">
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
					</Flex>

					<Flex flexDirection="column" alignItems="center">
						<Text>50</Text>
						<Text>50</Text>
					</Flex>
					<Text textAlign="center">$126.7</Text>
				</TableLine>

				<TableLine>
					<Text style={{ position: "absolute" }}>02</Text>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex justifyContent="center">
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
					</Flex>

					<Flex flexDirection="column" alignItems="center">
						<Text>50</Text>
						<Text>50</Text>
					</Flex>
					<Text textAlign="center">$126.7</Text>
				</TableLine>
				<TableLine>
					<Text style={{ position: "absolute" }}>02</Text>
					<Flex flexDirection="column">
						<Text>OCT 20,2019</Text>
						<Text>OCT 20,2019</Text>
					</Flex>
					<Flex justifyContent="center">
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
						<ShowStyle width="2rem" imgWidth="0.95rem" />
					</Flex>

					<Flex flexDirection="column" alignItems="center">
						<Text>50</Text>
						<Text>50</Text>
					</Flex>
					<Text textAlign="center">$126.7</Text>
				</TableLine>
			</Table>
			<Flex>
				<Button
					variant="primary"
					height="1.13rem"
					width="9.6rem"
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
				<Button
					variant="primary"
					height="1.13rem"
					width="9.6rem"
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
		</Flex>
	)
}
