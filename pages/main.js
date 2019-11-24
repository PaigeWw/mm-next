import React, { useEffect } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Input } from "@rebass/forms"
import Head from "../components/nav"
import SelectBox from "../components/main-kind-box"
export default () => {
	return (
		<React.Fragment>
			<Flex
				height="100vh"
				justifyContent="space-between"
				flexDirection="column"
			>
				<Head></Head>
				<Flex>
					<SelectBox imgUrl="/2/1-1.png" />
					<SelectBox imgUrl="/2/2-1.png" />
					<SelectBox imgUrl="/2/3-1.png" />
				</Flex>
			</Flex>
		</React.Fragment>
	)
}
