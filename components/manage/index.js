import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Flex, Text, Box, Image, Button } from "rebass"
import ChannelTable from "../tables/channel-table"
import UserTable from "../tables/user-table"
export default props => {
	return (
		<Flex>
			<Tabs style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
				<TabList
					style={{
						display: "flex",
						height: "0.4rem",
						padding: "0",
						margin: "0",
						background: "#FF8E6C",
						fontSize: "0.2rem",
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
