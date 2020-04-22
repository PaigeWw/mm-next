import React, { useState, useEffect } from "react"
import { Flex, Text } from "rebass"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import request from "../utils/request"
import { ToastContainer, toast } from "../components/commons/toast"
import Head from "../components/nav"
import CollectTable from "../components/tables/collect-table"
import OrderTable from "../components/tables/new-order-table"
// import OrderTable from "../components/tables/order-table"
import SendTable from "../components/tables/send-table"
import SelfOrderTable from "../components/tables/self-order-table"
import Manage from "../components/manage/index"
import useUserInfo from "../hooks/getUserInfo"
import useRateInfo from "../hooks/getRateInfo"
import { getPageQuery } from "../utils/helper"
const CurTitlt = (props) => (
	<Text sx={{ fontSize: "0.38rem", textDecoration: "underline" }} pl="18px">
		{props.text}
	</Text>
)
const Titlt = (props) => (
	<Text sx={{ fontSize: "0.2rem" }} pl="18px">
		{props.text}
	</Text>
)

const title = [1, 2, 3, 4]
export default () => {
	const rateInfo = useRateInfo() || []
	const [userInfo, setUserInfo] = useState({})
	const user = useUserInfo()
	const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
	const [selectStyles, setSelectStyles] = useState([])
	const [isEditOrder, setIsEditOder] = useState(false)

	const handleSetTabSelectedIndex = (index) => {
		setTabSelectedIndex(index)
	}
	useEffect(() => {
		if (!user) {
			return
		}
		if (user.role === 1 && title.length < 5) {
			title.push(5)
		}
		setUserInfo(user)
	}, [user])
	const handleSelectStyleToOrder = (selectList) => {
		setSelectStyles(selectList)
		setTabSelectedIndex(1)
		setIsEditOder(false)
	}

	const handleEditOrder = (order) => {
		setIsEditOder(order._id)
		setSelectStyles(order.orderData)
		setTabSelectedIndex(1)
	}

	const handleDelSelectStyle = (index) => {
		selectStyles.splice(index, 1)
		console.log(selectStyles)
		setSelectStyles([...selectStyles])
	}
	useEffect(() => {
		const query = getPageQuery()
		if (query.tab) {
			// console.log("query.tab", query.tab)
			setTabSelectedIndex(parseInt(query.tab))
		} else {
			setTabSelectedIndex(0)
		}
	}, [])
	// console.log("userInfo.currency", userInfo.currency)
	return (
		<>
			<Flex flexDirection="column" height="100%">
				<Head></Head>
				<ToastContainer />
				<Flex
					flexDirection="column"
					className="wrapper"
					sx={{
						flexGrow: 1,
						cursor: "pointer",
						"&": {
							".react-tabs__tab": {
								background: "#000",
								color: "#fff",
							},
							".react-tabs__tab--selected": {
								flexGrow: 1,
								background: "#FFC1AE !important",
								color: "#000",
							},
						},
					}}
				>
					<Flex
						style={{
							height: "0.8rem",
							background: "#FFC1AE",
						}}
						alignItems="center"
						justifyContent="center"
					>
						<Text sx={{ fontSize: "0.3rem" }}>.</Text>
						{title.map((t, index) =>
							index === tabSelectedIndex ? (
								<CurTitlt text={t} />
							) : (
								<Titlt text={t}></Titlt>
							)
						)}
						<Text sx={{ fontSize: "0.3rem" }} pl="18px">
							.
						</Text>
					</Flex>
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

								background: "#FFC1AE",
								fontSize: "0.3rem",
								justifyContent: "space-around",
								listStyleType: "none",
							}}
						>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center",
								}}
							>
								1 MY COLLECTION
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center",
								}}
							>
								2 PRODUCTION ORDER
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center",
								}}
							>
								3 ORDER SENT
							</Tab>
							<Tab
								style={{
									lineHeight: "0.8rem",
									flex: 1,
									textAlign: "center",
								}}
							>
								4 MY ORDER
							</Tab>
							{userInfo.role === 1 ? (
								<Tab
									style={{
										lineHeight: "0.8rem",
										flex: 1,
										textAlign: "center",
									}}
								>
									5 USER MANAGEMENT
								</Tab>
							) : null}
						</TabList>
						<TabPanel>
							<CollectTable
								userInfo={userInfo}
								rate={(userInfo && rateInfo[userInfo.currency]) || {}}
								nextStep={handleSelectStyleToOrder}
							/>
						</TabPanel>
						<TabPanel>
							<OrderTable
								toast={toast}
								rate={(userInfo && rateInfo[userInfo.currency]) || {}}
								isEditOrder={isEditOrder}
								selectStyles={selectStyles}
								onDelSelectStyle={handleDelSelectStyle}
								nextStep={() => {
									setSelectStyles([])
									handleSetTabSelectedIndex(2)
								}}
							/>
						</TabPanel>
						<TabPanel>
							<SendTable
								toast={toast}
								rate={(userInfo && rateInfo[userInfo.currency]) || {}}
								onEditOrder={handleEditOrder}
								nextStep={() => {
									handleSetTabSelectedIndex(3)
								}}
							/>
						</TabPanel>
						<TabPanel>
							<SelfOrderTable
								toast={toast}
								rate={(userInfo && rateInfo[userInfo.currency]) || {}}
							/>
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
