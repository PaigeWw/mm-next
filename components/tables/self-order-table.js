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
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "ORDER NUMBER", width: "2/22" },
						{ name: "ORDER DATE", width: "4/22" },
						{ name: "CLIENT'S NAME", width: "1/22" },
						{ name: "ACTION", width: "2/22" }
					]}
				>
					<TableLine>
						<Text>01</Text>
						<Text>MRMISS 20191118</Text>
						<Text>OCT 20,2019</Text>
						<Text>ZXL DNJ</Text>
					</TableLine>
					<TableLine>
						<Text>02</Text>
						<Text>MRMISS 20191118</Text>
						<Text>OCT 20,2019</Text>
						<Text>ZXL DNJ</Text>
					</TableLine>
					<TableLine>
						<Text>02</Text>
						<Text>MRMISS 20191118</Text>
						<Text>OCT 20,2019</Text>
						<Text>ZXL DNJ</Text>
					</TableLine>
				</Table>
			</Flex>
		</Flex>
	)
}
