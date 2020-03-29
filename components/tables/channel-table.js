import React from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import ShowStyle from "../show-style"
import InputNumber from "../number-input"
const info = ["RMB", "USB", "ESD"]
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
					{props.channelList.map((channel, index) => (
						<TableLine noEdit>
							<Text>{index}</Text>
							<Text>{channel.code}</Text>
							<Text style={{ padding: "20px 0" }}>
								<input value={channel.name} />
							</Text>
							<Flex
								width="100%"
								sx={{
									justifyContent: "center"
								}}
							>
								<Box
									width="140px"
									sx={{
										height: "24px",
										lineHeight: "24px",
										border: "1px solid #000",
										position: "relative"
									}}
								>
									{info[channel.currency]}
									<img
										src="./8/bg.jpeg"
										height="22px"
										height="27.5px"
										style={{
											position: "absolute",
											right: 0
										}}
									></img>
								</Box>
							</Flex>

							<Text>
								<a href={`./assign?channelId=${channel._id}`}>CLICK TO VIEW</a>
							</Text>
						</TableLine>
					))}
				</Table>
			</Flex>
		</Flex>
	)
}
