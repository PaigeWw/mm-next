import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Flex, Text, Box, Image, Button } from "rebass"

export default props => {
	return (
		<Flex>
			<Tabs>
				<TabList>
					<Tab>CHANNEL LIST</Tab>
					<Tab>CUSTOMER LIST</Tab>
				</TabList>
				<TabPanel></TabPanel>
			</Tabs>
		</Flex>
	)
}
