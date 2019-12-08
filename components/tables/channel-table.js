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
						{ name: "CHANNEL NUMBER", width: "2/22" },
						{ name: "CHANNEL NUMBER", width: "4/22" },
						{ name: "USE CURRENCY", width: "1/22" },
						{ name: "VISIBLE PRODUCT CLASSIFICICATION", width: "2/22" }
					]}
				>
					<TableLine noEdit>
						<Text>01</Text>
						<Text>A</Text>
						<Text>
							<input value={"通道名称"} />
						</Text>
						<Text>
							<select>
								<option>RMB</option>
								<option>USD</option>
								<option>ESD</option>
							</select>
						</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
					<TableLine noEdit>
						<Text>02</Text>
						<Text>A</Text>
						<Text>
							<input value={"通道名称"} />
						</Text>
						<Text>
							<select>
								<option>RMB</option>
								<option>USD</option>
								<option>ESD</option>
							</select>
						</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
					<TableLine noEdit>
						<Text>02</Text>
						<Text>A</Text>
						<Text>
							<input value={"通道名称"} />
						</Text>
						<Text>
							<select>
								<option>RMB</option>
								<option>USD</option>
								<option>ESD</option>
							</select>
						</Text>
						<Text>CLICK TO VIEW</Text>
					</TableLine>
				</Table>
			</Flex>
		</Flex>
	)
}
