import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"

// import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import Table, { TableLine, ProductInfo } from "../components/tables/base-table"
import ShowStyle from "../components/show-style"

import request from "../utils/request.js"
export default () => {
	// const info = useUserInfo()
	const [goosList, setGoosList] = useState([])
	const collectList = [{}, {}]
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("goods/getList", "get")
			setGoosList(req)
			console.log(req)
		}
		getGoodsList()
	}, [])

	return (
		<React.Fragment>
			<Head></Head>
			<Flex
				height="100vh"
				justifyContent="space-between"
				flexDirection="column"
			>
				<Flex
					style={{
						display: "flex",
						height: "0.8rem",
						padding: "0",
						margin: "0",
						paddingTop: "0.6rem",
						background: "#FFC1AE",
						fontSize: "0.3rem",

						listStyleType: "none"
					}}
					justifyContent="center"
					alignItems="center"
				>
					EXISTING STYLE SELECTION
				</Flex>
				<Table
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "PICTRUE", width: "2/22" },
						{ name: "PRODUCT INFOMATION", width: "4/22" },
						{ name: "PRICE", width: "1/22" },
						{ name: "COLLECTION", width: "5/22" }
					]}
				>
					{collectList.map(collect => (
						<TableLine isSelect>
							<Text style={{ position: "absolute" }}>01</Text>
							<ShowStyle
								width="2rem"
								imgWidth="0.95rem"
								mode={"POSITIVE"}
								threeViews={[{}, {}]}
								hideInfo
							/>
							<Flex flexDirection="column">
								<ProductInfo
									styleNum="VERSION Y2003"
									made="2110 YE GREEN/2001 YE GREEN"
								/>
								<ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" />
							</Flex>
							<Flex flexDirection="column">
								<Text>$6.7</Text>
								<Text>$6.7</Text>
							</Flex>
						</TableLine>
					))}
				</Table>
			</Flex>
		</React.Fragment>
	)
}
