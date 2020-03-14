import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Image, Button } from "rebass"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Head from "../components/nav"
import CollectTable from "../components/tables/collect-table"
import OrderTable from "../components/tables/order-table"
import SendTable from "../components/tables/send-table"
import SelfOrderTable from "../components/tables/self-order-table"
import Manage from "../components/manage/index"
import useUserInfo from "../hooks/getUserInfo"
export default () => {
	const [user, setUser] = useState(useUserInfo())
	const [tabSelectedIndex, setTabSelectedIndex] = useState(4)
	const [selectStyles, setSelectStyles] = useState([])
	const [showEditBox, setShowEditBox] = useState(false)
	console.log(user)
	// console.log(userInfo)
	const handleSetTabSelectedIndex = index => {
		setTabSelectedIndex(index)
		// console.log("~~~~~~~~")
	}
	const handleSelectStyleToOrder = selectList => {
		setSelectStyles(selectList)
		setTabSelectedIndex(1)
	}
	const handleToSendedOrder = () => {
		setTabSelectedIndex(4)
	}

	return (
		<>
			<Flex flexDirection="column" height="100%">
				<Head></Head>
				<Flex
					flexDirection="column"
					className="wrapper"
					sx={{
						flexGrow: 1,
						"&": {
							".react-tabs__tab": {
								background: "#000",
								color: "#fff"
							},
							".react-tabs__tab--selected": {
								flexGrow: 1,
								background: "#FFC1AE !important",
								color: "#000"
							}
						}
					}}
				>
					<Tabs
						selectedIndex={tabSelectedIndex}
						style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
						onSelect={handleSetTabSelectedIndex}
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
							<CollectTable nextStep={handleSelectStyleToOrder} />
						</TabPanel>
						<TabPanel>
							<OrderTable
								selectStyles={selectStyles}
								nextStep={() => {
									handleSetTabSelectedIndex(2)
								}}
							/>
						</TabPanel>
						<TabPanel>
							<SendTable
								nextStep={() => {
									handleSetTabSelectedIndex(3)
								}}
							/>
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
