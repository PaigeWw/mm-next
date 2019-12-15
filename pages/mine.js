import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Head from "../components/nav"
import CollectTable from "../components/tables/collect-table"
import OrderTable from "../components/tables/order-table"
import SendTable from "../components/tables/send-table"
import SelfOrderTable from "../components/tables/self-order-table"
import Manage from "../components/manage/index"
export default () => {
	const [showBigBox, setShowBigBox] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	return (
		<>
			<Flex flexDirection="column" height="100%">
				<Head></Head>
				<Flex
					flexDirection="column"
					sx={{
						flexGrow: 1,
						"& .react-tabs__tab-panel": {},
						"& .react-tabs__tab-panel--selected": {
							flexGrow: 1
						}
					}}
				>
					<Tabs
						defaultIndex={1}
						style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
					>
						<TabList
							style={{
								display: "flex",
								height: "0.8rem",
								padding: "0",
								margin: "0",
								paddingTop: "0.6rem",
								background: "#FFC1AE",
								fontSize: "0.3rem",
								justifyContent: "space-around",
								listStyleType: "none"
							}}
						>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								1 MY COLLECTION
							</Tab>
							<Tab
								defaultFocus={true}
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								2 PRODUCTION ORDER
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								3 ORDER SENT
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								4 MY ORDER
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								USER MANAGEMENT
							</Tab>
						</TabList>
						<TabPanel>
							<CollectTable />
						</TabPanel>
						<TabPanel>
							<OrderTable />
						</TabPanel>
						<TabPanel>
							<SendTable />
						</TabPanel>
						<TabPanel>
							<SelfOrderTable />
						</TabPanel>
						<TabPanel>
							<Manage />
						</TabPanel>
					</Tabs>
				</Flex>
			</Flex>
		</>
	)
}
