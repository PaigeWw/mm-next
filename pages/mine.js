import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Head from "../components/nav"
import CollectTable from "../components/tables/collect-table"

export default () => {
	const [showBigBox, setShowBigBox] = useState(false)
	const [showEditBox, setShowEditBox] = useState(false)
	return (
		<>
			<Flex flexDirection="column">
				<Head></Head>
				<Flex flexDirection="column">
					<Tabs>
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
								defaultFocus={true}
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
								defaultFocus={true}
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								3 ORDER SENT
							</Tab>
							<Tab
								defaultFocus={true}
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center"
								}}
							>
								4 MY ORDER
							</Tab>
						</TabList>
						<TabPanel>
							<CollectTable />
						</TabPanel>
						<TabPanel>
							<h2>Any content 2</h2>
						</TabPanel>
						<TabPanel />
						<TabPanel />
					</Tabs>
				</Flex>
			</Flex>
		</>
	)
}
