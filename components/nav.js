import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Head from "../components/head"
import NavItem from "../components/nav-item"
import getUserInfo from "../hooks/getUserInfo"
import Router from "next/router"

export default props => {
	const user = getUserInfo()
	const [showNav, setShowNav] = useState(false)
	function closeShowNav() {
		setShowNav(false)
	}
	useEffect(() => {
		window.addEventListener("click", closeShowNav)
		return () => {
			window.removeEventListener("click", closeShowNav)
		}
	}, [])
	return (
		<React.Fragment>
			<Flex justifyContent="space-between" width="100%">
				<Head></Head>
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
				<Flex
					onClick={e => {
						e.nativeEvent.stopPropagation()
						setShowNav(true)
					}}
					alignItems="center"
					mr={"0.9rem"}
					sx={{ cursor: "pointer" }}
				>
					<Image
						src="./2/-s-HOME.png"
						mr={"10px"}
						sx={{
							width: "0.18rem",
							minWidth: "14px",
							height: "0.18rem",
							minHeight: "14px"
						}}
					/>
					<Text fontSize="0.14rem">HOME</Text>
				</Flex>
			</Flex>
			{showNav ? (
				<Flex
					onClick={e => {
						e.nativeEvent.stopPropagation()
					}}
					flexDirection="column"
					width="4.5rem"
					height="100%"
					bg="#000"
					pt="80px"
					sx={{
						color: "#fff",
						position: "fixed",
						zIndex: 9999999,
						right: 0,
						top: 0,
						bottom: 0,
						"& .cls-1": {
							fill: "#fff"
						}
					}}
				>
					<NavItem
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
									tab: 3
								}
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
						// url="/icon/icon-04.svg"
						onLinkTo={() => {
							localStorage.clear()
							Router.push("/login")
						}}
					></NavItem>
				</Flex>
			) : null}
		</React.Fragment>
	)
}
