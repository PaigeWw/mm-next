import React, { useEffect, useState, useMemo } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Head from "../components/head"
import NavItem from "../components/nav-item"
import getUserInfo from "../hooks/getUserInfo"
import Router from "next/router"
import Modal from "../components/modal"
import { ToastContainer, toast } from "./commons/toast"
import ProgressLine from "./commons/progress-line"
import { ReactSVG } from "react-svg"
import request from "../utils/request"

function resizeFontSize() {
	const docEl = document.documentElement
	const { clientWidth } = docEl
	if (!clientWidth) return
	const fs = 100 * (clientWidth / 1920)
	docEl.style.fontSize = fs + "px"
}

export default (props) => {
	const user = getUserInfo()
	const [showNav, setShowNav] = useState(false)
	const [showFeedbackModal, setShowFeedbackModal] = useState(false)
	const [feedback, setFeedback] = useState("")
	function closeShowNav() {
		setShowNav(false)
	}
	useEffect(() => {
		resizeFontSize()
		window.onresize = resizeFontSize
		window.addEventListener("click", closeShowNav)
		return () => {
			window.removeEventListener("click", closeShowNav)
		}
	}, [])

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
			setShowFeedbackModal(false)
			toast.notify("Thinks Your Feedback.")
		} else {
			toast.notify("Error")
		}
	}

	let head = useMemo(() => <Head></Head>)

	return (
		<React.Fragment>
			{head}
			<ToastContainer />
			<Flex width={[1]} justifyContent="space-between" p="0 0.6rem" pt="48px">
				<ReactSVG
					src="./icon/logo.svg"
					onClick={() => {
						Router.push("/")
					}}
				/>
				<ProgressLine progress={props.progress}></ProgressLine>
				<Flex
					alignItems="center"
					sx={{
						cursor: "pointer",
						alignSelf: "flex-start",
					}}
				>
					<Image
						onClick={(e) => {
							e.nativeEvent.stopPropagation()
							setShowNav(!showNav)
						}}
						mr="10px"
						src="./2/-s-HOME.png"
						sx={{
							width: "0.18rem",
							minWidth: "14px",
							height: "0.18rem",
							minHeight: "14px",
						}}
					/>
					<Text
						fontSize="0.14rem"
						onClick={(e) => {
							e.nativeEvent.stopPropagation()
							setShowNav(!showNav)
						}}
					>
						{user.name}
					</Text>
					<Box
						style={{
							cursor: "pointer",
							textDecoration: "underline",
						}}
						pl="10px"
						onClick={() => {
							setShowFeedbackModal(true)
						}}
					>
						Feedback
					</Box>
				</Flex>
			</Flex>
			{showNav ? (
				<Flex
					onClick={(e) => {
						e.nativeEvent.stopPropagation()
					}}
					flexDirection="column"
					width="4.5rem"
					height="100%"
					bg="rgba(0,0,0,0.9)"
					sx={{
						color: "#fff",
						position: "fixed",
						zIndex: 9999999,
						right: 0,
						top: 0,
						bottom: 0,
						paddingTop: "calc(1.225rem - 30px)",
						"& .cls-1": {
							fill: "#fff",
						},
					}}
				>
					<NavItem
						// mt="-10px"
						name="MIME"
						url="/icon/icon-01.svg"
						onLinkTo={() => {
							Router.push("/mine").then(() => {
								Router.reload()
							})
						}}
					></NavItem>
					<NavItem
						name="ORDER"
						url="/icon/icon-02.svg"
						onLinkTo={() => {
							Router.push({
								pathname: "/mine",
								query: {
									tab: 3,
								},
							}).then(() => {
								Router.reload()
							})
						}}
					></NavItem>
					{user.role === 1 ? (
						<NavItem
							name="USER"
							url="/icon/icon-03.svg"
							onLinkTo={() => {
								Router.push("/mine?tab=4").then(() => {
									Router.reload()
								})
							}}
						></NavItem>
					) : null}
					<NavItem
						name="MY COLLECTION"
						url="/icon/icon-04.svg"
						onLinkTo={() => {
							Router.push("/mine?tab=0").then(() => {
								Router.reload()
							})
						}}
					></NavItem>
					{user.role === 1 ? (
						<NavItem
							name="PRODUCT MANAGER"
							url="/icon/icon-05.svg"
							onLinkTo={() => {
								Router.push("/assign")
							}}
						></NavItem>
					) : null}
					<NavItem
						name="Logout"
						url="/icon/icon-8.svg"
						onLinkTo={() => {
							localStorage.clear()
							Router.push("/login")
						}}
					></NavItem>
				</Flex>
			) : null}
			{showFeedbackModal ? (
				<Modal
					onClose={() => {
						setShowFeedbackModal(false)
					}}
				>
					<Flex
						width="500px"
						flexDirection="column"
						alignItems="center"
						p="4px"
						sx={{}}
					>
						<textarea
							style={{
								width: "320px",
							}}
							rows={8}
							placeholder="FeedBack"
							onChange={(e) => {
								setFeedback(e.target.value)
							}}
						/>
						<Button
							variant="primary"
							height="0.4rem"
							width="50%"
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
							Commit
						</Button>
					</Flex>
				</Modal>
			) : null}
		</React.Fragment>
	)
}
