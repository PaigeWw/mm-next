import React, { useEffect, useState } from "react"
import { ReactSVG } from "react-svg"
import { Flex, Button } from "rebass"
import Head from "../components/head"
import request from "../utils/request.js"
import getUserInfo from "../hooks/getUserInfo"
import { ToastContainer, toast } from "../components/commons/toast"

export default () => {
	const [feedback, setFeedback] = useState("")
	useEffect(() => {}, [])
	const user = getUserInfo()
	const handleSendFeedback = async () => {
		const res = await request(
			"/user/feedback",
			{
				user: user.name,
				feedback,
			},
			"post"
		)
		if (res) {
			toast.notify("Thinks Your Feedback.")
		} else {
			toast.notify("Error")
		}
	}

	return (
		<React.Fragment>
			<Head />
			<ToastContainer />
			<Flex
				fontSize="18px"
				mb="10px"
				color="#fff"
				bg="#000"
				alignItems="center"
				justifyContent="space-between"
				width={[1]}
				sx={{
					cursor: "pointer",
				}}
				onClick={() => {
					window.history.back()
				}}
			>
				<Flex alignItems="center">
					<ReactSVG
						src={"/icon/icon-08.svg"}
						style={{
							width: "50px",
							paddingTop: "8px",
							fill: "#fff",
						}}
					/>
					返回
				</Flex>

				<div>意见反馈</div>
				<div></div>
			</Flex>
			<Flex
				width={[1]}
				flexDirection="column"
				alignItems="center"
				p="4px"
				sx={{}}
			>
				<textarea
					style={{
						width: "360px",
					}}
					rows={20}
					placeholder="内容填写"
					onChange={(e) => {
						setFeedback(e.target.value)
					}}
				/>
				<Button
					variant="primary"
					height="0.4rem"
					width="200px"
					bg="#1B1B1B"
					color="#fff"
					padding="0"
					mt="0.4rem"
					sx={{
						borderRadius: 0,
						fontSize: "0.14rem",
						cursor: "pointer",
					}}
					onClick={() => {
						handleSendFeedback()
					}}
				>
					提交
				</Button>
			</Flex>
		</React.Fragment>
	)
}
