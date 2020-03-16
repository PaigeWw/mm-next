import React, { useState, useEffect } from "react"
import { Flex } from "rebass"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import request from "../utils/request"

import Head from "../components/nav"
import CollectTable from "../components/tables/collect-table"
import OrderTable from "../components/tables/order-table"
import SendTable from "../components/tables/send-table"
import SelfOrderTable from "../components/tables/self-order-table"
import Manage from "../components/manage/index"
import useUserInfo from "../hooks/getUserInfo"
import useRateInfo from "../hooks/getRateInfo"
import { getPageQuery } from "../utils/helper"

export default () => {
	const rateInfo = useRateInfo()
	const [userInfo, setUserInfo] = useState({})
	const user = useUserInfo()
	const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
	const [selectStyles, setSelectStyles] = useState([])
	const [isEditOrder, setIsEditOder] = useState(false)

	const handleSetTabSelectedIndex = index => {
		setTabSelectedIndex(index)
		// console.log("~~~~~~~~")
	}
	useEffect(() => {
		if (!user) {
			return
		}
		// console.log(userInfo.channels, "channels")
		async function get() {
			let obj = { ...user }
			if (obj.role !== 1 && obj.channels) {
				const data1 = await request("channel/detail", {
					_id: obj.channels[0]
				})
				obj.currency = data1.currency
			} else {
				obj.currency = 1
			}
			setUserInfo(obj)
			// setUser(obj)
			console.log("---userInfo---", obj)
		}
		get()
	}, [user])
	const handleSelectStyleToOrder = selectList => {
		setSelectStyles(selectList)
		setTabSelectedIndex(1)
		setIsEditOder(false)
	}

	const handleEditOrder = order => {
		setIsEditOder(order._id)
		setSelectStyles(order.orderData)
		setTabSelectedIndex(1)
	}
	useEffect(() => {
		const query = getPageQuery()
		if (query.tab) {
			console.log("query.tab", query.tab)
			setTabSelectedIndex(parseInt(query.tab))
		} else {
			setTabSelectedIndex(0)
		}
	}, [])

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
							{userInfo.role === 1 ? (
								<Tab
									style={{
										lineHeight: "0.8rem",
										flex: 1,
										textAlign: "center"
									}}
								>
									USER MANAGEMENT
								</Tab>
							) : null}
						</TabList>
						<TabPanel>
							<CollectTable
								userInfo={userInfo}
								rate={userInfo && rateInfo[userInfo.currency]}
								nextStep={handleSelectStyleToOrder}
							/>
						</TabPanel>
						<TabPanel>
							<OrderTable
								rate={userInfo && rateInfo[userInfo.currency]}
								isEditOrder={isEditOrder}
								selectStyles={selectStyles}
								nextStep={() => {
									handleSetTabSelectedIndex(2)
								}}
							/>
						</TabPanel>
						<TabPanel>
							<SendTable
								rate={userInfo && rateInfo[userInfo.currency]}
								onEditOrder={handleEditOrder}
								nextStep={() => {
									handleSetTabSelectedIndex(3)
								}}
							/>
						</TabPanel>
						<TabPanel>
							<SelfOrderTable rate={userInfo && rateInfo[userInfo.currency]} />
						</TabPanel>
						{userInfo.role === 1 ? (
							<TabPanel>
								<Manage />
							</TabPanel>
						) : null}
					</Tabs>
				</Flex>
			</Flex>
		</>
	)
}
