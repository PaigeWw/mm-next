import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import Modal from "./modal"
import MadeStyleItem from "./show-style"
import { Color, Paint } from "./color-and-paint"
export default props => {
	return (
		<Modal onClose={props.onClose}>
			<Box width="14rem" fontSize="0.18rem" color="#000">
				<Flex justifyContent="space-between">
					<MadeStyleItem width="10.2rem" height="5.1rem" imgWidth="4.99rem" />
					<Flex flexDirection="column">
						<MadeStyleItem width="3.4rem" height="1.7rem" imgWidth="1.4rem" />
						<MadeStyleItem width="3.4rem" height="1.7rem" imgWidth="1.4rem" />
						<MadeStyleItem width="3.4rem" height="1.7rem" imgWidth="1.4rem" />
					</Flex>
				</Flex>
			</Box>
		</Modal>
	)
}
