import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Head from "../components/head"
import NavItem from "../components/nav-item"
export default () => {
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
				<Box
					width="1.8rem"
					height="0.53rem"
					sx={{
						margin: "0.9rem 0 0.9rem 0.9rem",
						backgroundImage: 'url("/1/LOGO.png")',
						backgroundRepeat: "no-repeat",
						backgroundSize: "100% 100%"
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
						bottom: 0
					}}
				>
					<NavItem name="MIME"></NavItem>
					<NavItem name="ORDER"></NavItem>
					<NavItem name="USER"></NavItem>
					<NavItem name="MY COLLECTION"></NavItem>
				</Flex>
			) : null}
		</React.Fragment>
	)
}
