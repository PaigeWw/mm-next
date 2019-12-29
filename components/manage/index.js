import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Flex } from "rebass"
import ChannelTable from "../tables/channel-table"
import UserTable from "../tables/user-table"
export default () => {
	return (
		<Flex
			textAlign="center"
			sx={{
				"&": {
					".react-tabs__tab": {
						background: "#FFF0E5",
						color: "#000",
						flexGrow: 1
					},
					".react-tabs__tab--selected": {
						flexGrow: 1,
						background: "#FF8E6C !important"
					}
				}
			}}
		>
			<Tabs style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
				<TabList
					style={{
						display: "flex",
						height: "0.4rem",
						padding: "0",
						margin: "0",
						background: "#FFF0E5",
						fontSize: "0.2rem",
						color: "#000",
						justifyContent: "space-around",
						alignItems: "center",
						listStyleType: "none"
					}}
				>
					<Tab>CHANNEL LIST</Tab>
					<Tab>CUSTOMER LIST</Tab>
				</TabList>
				<TabPanel>
					<ChannelTable></ChannelTable>
				</TabPanel>
				<TabPanel>
					<UserTable />
				</TabPanel>
			</Tabs>
		</Flex>
	)
}
