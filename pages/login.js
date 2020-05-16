import React, { useState, useRef, useEffect } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { Input } from "@rebass/forms"
import Head from "../components/head"
import Loading from "../components/commons/loading"
import request from "../utils/request.js"
import { baseUrl } from "../utils/helper.js"
import useUserInfo from "../hooks/getUserInfo"
import Router from "next/router"
import { ReactSVG } from "react-svg"

export default () => {
	const nameRef = useRef(null)
	const passwordRef = useRef(null)
	const [styleImg, setStyleImg] = useState(null)
	const [loading, setLoading] = useState(false)
	const handleLogin = async () => {
		let account = nameRef.current.value
		let password = passwordRef.current.value
		setLoading(true)
		const req = await request(
			"user/login",
			{
				account,
				password,
			},
			"post"
		)
		// console.log(req)
		setLoading(false)
		if (req && req.role % 2 === 1) {
			Router.push("/")
		}
	}
	const userInfo = useUserInfo()

	useEffect(() => {
		const getLoginStyleImg = async () => {
			const req = await request("system/detail")
			if (req) {
				setStyleImg(req[0].img)
			}
		}
		getLoginStyleImg()
	}, [])
	return (
		<React.Fragment>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					backgroundImage: `url(${baseUrl}${styleImg})`,
					backgroundSize: "cover",
				}}
			>
				<Flex width={[1]} justifyContent="space-between" p="0 0.6rem" pt="48px">
					<ReactSVG src="./icon/logo.svg" />
					<Flex
						justifyContent="space-between"
						sx={{
							width: "40%",
						}}
					>
						<Text>帮助</Text>
						<Text>关于我们</Text>
						<Text>联系我们</Text>
						<Text>CN/EN</Text>
					</Flex>
				</Flex>

				<Flex
					flexDirection="column"
					alignItems="center"
					justifyContent="flex-end"
					p="0.3rem"
					sx={{
						position: "fixed",
						bottom: "48px",
						right: "0.6rem",
						width: "6rem",
						height: "5.25rem",

						background: "rgba(255,255,255,1)",
						boxShadow: "-1px 16px 43px 4px rgba(65,63,63,0.28)",
						opacity: 0.95,
					}}
				>
					<Box>
						<Flex alignItems="center">
							<Image
								src="./1/user-icon.png"
								mr={"10px"}
								sx={{
									width: "0.18rem",
									minWidth: "14px",
									height: "0.18rem",
									minHeight: "14px",
								}}
							/>
							<Text fontSize="0.14rem">用户名</Text>
						</Flex>

						<Input
							width="5.38rem"
							height="0.53rem"
							p="0"
							pt="0.18rem"
							pb="0.02rem"
							minHeight="28px"
							minWidth="200px"
							id="username"
							name="username"
							type="text"
							sx={{
								outline: "none",
								border: "none",
								borderBottom: "solid 1px #000",
							}}
							ref={(ref) => (nameRef.current = ref)}
						/>
					</Box>

					<Box>
						<Flex alignItems="center" mt="0.5rem">
							<Image
								src="./1/password-icon.png"
								mr={"10px"}
								sx={{
									width: "0.18rem",
									minWidth: "14px",
									height: "0.18rem",
									minHeight: "14px",
								}}
							/>
							<Text fontSize="0.14rem">密码</Text>
						</Flex>

						<Input
							width="5.38rem"
							height="0.53rem"
							p="0"
							pt="0.18rem"
							pb="0.02rem"
							minHeight="28px"
							minWidth="200px"
							id="password"
							name="password"
							type="password"
							sx={{
								outline: "none",
								border: "none",
								borderBottom: "solid 1px #000",
								backgroundColor: "#fff !important",
							}}
							ref={(ref) => (passwordRef.current = ref)}
						/>
					</Box>

					<Button
						variant="primary"
						width="1.34rem"
						height="0.44rem"
						minHeight="28px"
						minWidth="80px"
						bg="#000000"
						color="#ffffff"
						mt="0.55rem"
						onClick={loading ? null : () => handleLogin()}
						p="0"
						mb="0.35rem"
						sx={{
							borderRadius: "0.22rem",
							fontSize: "0.14rem",
						}}
					>
						{loading ? <Loading type="loading4" /> : "登陆"}
					</Button>
				</Flex>
			</Box>
			<Head></Head>
		</React.Fragment>
	)
}
