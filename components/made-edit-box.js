import React, { useEffect } from "react"
import { Flex, Text, Box, Image } from "rebass"

import Modal from "./modal"
import { Color, Paint } from "./color-and-paint"
export default props => {
	return (
		<Modal onClose={props.onClose}>
			<Box width="15.4rem" fontSize="0.18rem" color="#000">
				<Flex justifyContent="space-between">
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyContent="space-evenly"
						width="6.75rem"
						sx={{
							cursor: "pointer"
						}}
					>
						<Flex
							width="6.75rem"
							height="4.88rem"
							alignItems="center"
							justifyContent="center"
						>
							<Image
								src="/4/style2.png"
								sx={{
									width: "3.79rem",
									minWidth: "14px",
									minHeight: "14px"
								}}
							/>
						</Flex>
						<Flex
							width="6.75rem"
							height="4.88rem"
							alignItems="center"
							justifyContent="center"
						>
							<Image
								src="./4/style1.png"
								sx={{
									width: "3.89rem",
									minWidth: "14px",
									minHeight: "14px"
								}}
							/>
						</Flex>
					</Flex>

					<Flex flexDirection="column">
						<Color></Color>
						<Paint />
					</Flex>
				</Flex>
			</Box>
		</Modal>
	)
}
