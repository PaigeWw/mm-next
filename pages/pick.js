import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"

// import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import Table, { TableLine, ProductInfo } from "../components/tables/base-table"
import StyleItem from "../components/commons/min-style-item"

import request from "../utils/request.js"
export default () => {
	// const info = useUserInfo()
	const [favoriteList, setFavoriteList] = useState([])
	const handleCollect = async favoriteId => {
		const req = await request("user/selectFavoriteList", { favoriteId }, "post")
	}
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("user/selectFavoriteList")
			setFavoriteList(req || [])
			console.log(req)
		}
		getGoodsList()
	}, [])

	return (
		<React.Fragment>
			<Head></Head>
			<Flex height="100vh" flexDirection="column">
				<Flex
					style={{
						display: "flex",
						height: "0.8rem",
						padding: "0",
						margin: "0",
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
					sx={{ margin: 0 }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "PICTRUE", width: "2/22" },
						{ name: "PRODUCT INFOMATION", width: "4/22" },
						{ name: "PRICE", width: "1/22" },
						{ name: "COLLECTION", width: "5/22" }
					]}
				>
					{favoriteList.map((favorite, index) => (
						<TableLine isSelect>
							<Text style={{ position: "absolute" }}>01</Text>
							<Flex justifyContent="center">
								<StyleItem
									rowspan={2}
									hasBorder={"1px solid"}
									margin={"1px"}
									key={`${index}-style-img`}
									styleList={favorite.styleAndColor.map(x => {
										// styleList.push({ style: x.style, colors: x.colorIds })
										return { style: x.style, colors: x.colorIds }
									})}
									index={index}
									tool={false}
								/>
							</Flex>

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
							<Flex justifyContent="center">
								<Text
									onClick={e => {
										handleCollect(favorite._id)
									}}
								>
									收藏
								</Text>
							</Flex>
						</TableLine>
					))}
				</Table>
			</Flex>
		</React.Fragment>
	)
}
