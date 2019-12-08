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
						{ name: "NAME", width: "2/22" },
						{ name: "ACCOUNT", width: "4/22" },
						{ name: "PASSWORD", width: "2/22" },
						{ name: "AISLE", width: "1/22" },

						{ name: "CREATION TIME", width: "2/22" },
						{ name: "ORDER", width: "2/22" },
						{ name: "OPERATING", width: "2/22" }
					]}
				>
					<TableLine>
						<Text>01</Text>
						<Text>BENJM</Text>
						<Text>A</Text>
						<Text>XXYZX098</Text>
						<Text>XXYZX098</Text>
						<Text>May 3,2019</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
					<TableLine>
						<Text>02</Text>
						<Text>BENJM</Text>
						<Text>A</Text>
						<Text>XXYZX098</Text>
						<Text>XXYZX098</Text>
						<Text>May 3,2019</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
					<TableLine>
						<Text>03</Text>
						<Text>BENJM</Text>
						<Text>A</Text>
						<Text>XXYZX098</Text>
						<Text>XXYZX098</Text>
						<Text>May 3,2019</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
				</Table>
			</Flex>
		</Flex>
	)
}
