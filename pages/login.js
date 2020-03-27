import React, { useState, useRef, useEffect } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Input } from "@rebass/forms"
import Head from "../components/head"
import request from "../utils/request.js"
import useUserInfo from "../hooks/getUserInfo"
import Router from "next/router"
import Svg from "../components/svg"
export default () => {
	const nameRef = useRef(null)
	const passwordRef = useRef(null)
	const [modal, setMadal] = useState(0) // 0, 1, 2, 3
	const [svgColor, setSvgColor] = useState(false)
	const showInfoList = [
		{
			signal: "AT MRMISS WE LOVE . . .",
			leftColor: "#E74C39",
			rightColor: "#231815",
			imgUrl: "./1/t-1.png"
		},
		{
			signal: "EVERY DESIGN",
			leftColor: "#FF8E6C",
			rightColor: "#B6141E",
			imgUrl: "./1/t2.png"
		},
		{
			signal: "EVERY PROJECT",
			leftColor: "#434343",
			rightColor: "#784E38",
			imgUrl: "./1/t3.png"
		},
		{
			signal: "EVERY PRO",
			leftColor: "#000000",
			rightColor: "#374E4B",
			imgUrl: "./1/t4.png"
		}
	]

	const handleLogin = async () => {
		// console.log("user/login")
		console.log(nameRef.current)
		let account = nameRef.current.value

		let password = passwordRef.current.value
		const req = await request(
			"user/login",
			{
				account,
				password
			},
			"post"
		)
		// console.log(req)
		if (req && req.role % 2 === 1) {
			Router.push("/")
		}
	}
	const userInfo = useUserInfo()

	useEffect(() => {
		let num = 0
		const interval = setInterval(() => {
			num++
			setSvgColor(false)
			setMadal(num % 4)
		}, 5000)
		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<React.Fragment>
			<Head></Head>
			<Box height="100vh">
				<Flex flexWrap="wrap" height={["100%", "62.5vh"]}>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						width={[1, 722 / 1920]}
						height={["100%", "62.5vh"]}
						bg="white"
						// onMouseEnter={() => {
						// 	setSvgColor("#FFF")
						// }}
					>
						<img
							// width="1.8rem"
							// height="0.53rem"
							src="./1/LOGO.png"
							style={{
								width: "2rem",
								margin: "0.9rem 0 0.9rem 0.9rem",
								// backgroundImage: 'url("/1/LOGO.png")',
								// backgroundRepeat: "no-repeat",
								// backgroundSize: "100% 100%",
								cursor: "pointer"
							}}
							onClick={() => {
								Router.push("/")
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
								minHeight="28px"
								minWidth="200px"
								id="username"
								name="username"
								type="text"
								ref={ref => (nameRef.current = ref)}
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
								minHeight="28px"
								minWidth="200px"
								id="password"
								name="password"
								type="password"
								ref={ref => (passwordRef.current = ref)}
							/>
							<Button
								variant="primary"
								width="1.34rem"
								height="0.38rem"
								minHeight="28px"
								minWidth="80px"
								bg="#000000"
								color="#ffffff"
								mt={"5.8%"}
								onClick={() => handleLogin()}
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
					<Box width={[0, 718 / 1920]} bg="gray">
						<Image
							minHeight="100%"
							src={showInfoList[modal].imgUrl}
							mr={"10px"}
							sx={{ objectFit: "cover" }}
						/>
					</Box>
					<Box
						onMouseEnter={() => {
							setSvgColor(showInfoList[modal].rightColor)
						}}
						width={[1, 480 / 1920]}
						bg={showInfoList[modal].rightColor}
					></Box>
				</Flex>
				<Flex
					flexWrap="wrap"
					height={[0, "37.5vh"]}
					style={{ overflow: "hidden" }}
				>
					<Box
						width={[0, 722 / 1920]}
						bg={showInfoList[modal].leftColor}
						onMouseEnter={() => {
							setSvgColor(showInfoList[modal].leftColor)
						}}
					></Box>
					<Flex
						alignItems="center"
						justifyContent="center"
						width={[0, 718 / 1920]}
						bg="white"
						fontSize="0.38rem"
					>
						<Flex flexDirection="column">
							{showInfoList.map((info, index) => (
								<Text
									sx={{
										cursor: "pointer",
										textDecoration: index === modal ? "underline" : "none"
									}}
									// onMouseEnter={() => {
									// 	setSvgColor(false)
									// 	setMadal(index)
									// }}
								>
									{info.signal}
								</Text>
							))}
						</Flex>
					</Flex>
					<Flex
						width={[0, 480 / 1920]}
						bg="#DCDCDC"
						justifyContent="center"
						alignItems="center"
					>
						<Svg color={svgColor ? svgColor : showInfoList[modal].rightColor} />
					</Flex>
				</Flex>
			</Box>
		</React.Fragment>
	)
}
