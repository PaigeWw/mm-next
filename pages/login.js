import React, { useEffect } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Input } from "@rebass/forms"
import Head from "../components/head"

export default () => {
	return (
		<React.Fragment>
			<Head></Head>
			<Box height="100vh">
				<Flex flexWrap="wrap" height={["100%", "62.5vh"]}>
					<Flex
						justifyContent="space-between"
						width={[1, 722 / 1920]}
						height={["100%", "62.5vh"]}
						bg="white"
					>
						<Box
							width="1.8rem"
							height="0.53rem"
							sx={{
								margin: "10% 0 0 10%",
								backgroundImage: 'url("/1/LOGO.png")',
								backgroundRepeat: "no-repeat",
								backgroundSize: "100% 100%"
							}}
						/>
						<Box padding="0 0 10% 10%">
							<Flex alignItems="center" mb={"2%"}>
								<Image
									src="./1/user-icon.png"
									mr={"10px"}
									sx={{
										width: "0.18rem",
										minWidth: "14px",
										height: "0.18rem",
										minHeight: "14px"
									}}
								/>
								<Text fontSize="0.14rem">ACCOUNT NUMBER</Text>
							</Flex>

							<Input
								width="3rem"
								height="0.38rem"
								id="username"
								name="username"
								type="text"
							/>

							<Flex alignItems="center" mt="4%" mb={"2%"}>
								<Image
									src="./1/password-icon.png"
									mr={"10px"}
									sx={{
										width: "0.18rem",
										minWidth: "14px",
										height: "0.18rem",
										minHeight: "14px"
									}}
								/>
								<Text fontSize="0.14rem">PASSWORD</Text>
							</Flex>

							<Input
								width="3rem"
								height="0.38rem"
								id="password"
								name="password"
								type="password"
							/>
							<Button
								variant="primary"
								width="1.34rem"
								height="0.38rem"
								bg="#000000"
								color="#ffffff"
								mt={"5.8%"}
								padding="0"
								sx={{
									borderRadius: 0,
									fontSize: "0.14rem"
								}}
							>
								LOADING
							</Button>
						</Box>
					</Flex>
					<Box width={[1, 718 / 1920]} bg="gray"></Box>
					<Box width={[1, 480 / 1920]} bg="black"></Box>
				</Flex>
				<Flex flexWrap="wrap" height={[0, "37.5vh"]}>
					<Box width={[1, 722 / 1920]} bg="#E74C39"></Box>
					<Flex
						alignItems="center"
						justifyContent="center"
						width={[1, 718 / 1920]}
						bg="white"
						fontSize="0.38rem"
					>
						<Flex flexDirection="column">
							<Text
								sx={{
									textDecoration: "underline"
								}}
							>
								AT MRMISS WE LOVE . . .
							</Text>
							<Text>EVERY DESIGN</Text>
							<Text>EVERY PROJECT</Text>
							<Text>EVERY PRO</Text>
						</Flex>
					</Flex>
					<Box width={[1, 480 / 1920]} bg="#DCDCDC"></Box>
				</Flex>
			</Box>
		</React.Fragment>
	)
}
