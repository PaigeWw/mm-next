import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"

// import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import Table, { TableLine, ProductInfo } from "../components/tables/base-table"
import StyleItem from "../components/commons/min-style-item"
import BigBox from "../components/made-big-box"
import useUserInfo from "../hooks/getUserInfo"
import useRateInfo from "../hooks/getRateInfo"
import request from "../utils/request.js"

export default () => {
	const userInfo = useUserInfo()
	const rateInfo = useRateInfo()
	const [favoriteList, setFavoriteList] = useState([])
	// const [favoriteList, setFavoriteList] = useState([])
	const [showBigBox, setShowBigBox] = useState(false)
	const [collectDetailsList, setCollectDetailsList] = useState([])
	const [mySelectFavorite, setMySelectFavorite] = useState([])
	const handleCollect = async favoriteId => {
		const req = await request(
			"user/addSelectFavorite",
			{ _id: favoriteId },
			"post"
		)
		if (req) {
			// console.log({ id: req.id })
			setMySelectFavorite([...mySelectFavorite, { id: req.extend }])
		}
	}
	useEffect(() => {
		const getGoodsList = async () => {
			const req = await request("user/selectFavoriteList")
			const data = req.map(item => {
				let prodInfo = []
				let price = []
				let styleList = []
				let colorInfo = []
				let colorTexts = []
				// let colorInfo = []
				let date = []
				let details = []
				// let curStyle = [{ colors: [] }]
				item.styleAndColor.map(x => {
					if (!x.style) return
					details.push(x.style)
					// curStyle.push({ colors: x.colorIds })

					price.push(x.style.price)
					date.push(x.style.updateTime)
					colorInfo.push({ colors: x.colorIds })
					let text = ""
					x.colorIds.map((color, index) => {
						if (index) {
							text += "/"
						}
						text = color.code
					})
					prodInfo.push({
						styleNo: x.style.styleNo,
						categoryName: x.style.categoryName,
						color: text,
						id: x.style._id
					})
					// let positive = x.
					styleList.push({ style: x.style, colors: x.colorIds })
				})
				// collectDetailsList.push(details)
				// setCollectDetailsList([].concat(collectDetailsList))
				return {
					_id: item._id,
					colorInfo,
					prodInfo,
					price,
					styleList,
					details,
					// curStyle,
					date
				}
			})
			// setCollectList(data)
			setFavoriteList(data || [])
			// console.log(req)
		}
		getGoodsList()
		const getMyList = async () => {
			const req = await request("user/getMySelectFavorite")
			setMySelectFavorite(req || [])
			// console.log(req)
		}
		getMyList()
	}, [])

	return (
		<React.Fragment>
			<Head></Head>
			<Flex flexDirection="column">
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
						{
							name: `PRICE/${
								rateInfo[userInfo.currency]
									? rateInfo[userInfo.currency].sign
									: ""
							}`,
							width: "1/22"
						},
						{ name: "COLLECTION", width: "5/22" }
					]}
				>
					{favoriteList.map((favorite, index) => {
						let selected = mySelectFavorite.find(x => x.id === favorite._id)
						return (
							<TableLine isSelect>
								<Text>{`${index + 1}`}</Text>
								<Flex justifyContent="center">
									<StyleItem
										width="100px"
										rowspan={2}
										hasBorder={"1px solid"}
										margin={"1px"}
										key={`${index}-style-img`}
										styleList={favorite.styleList}
										index={index}
										tool={false}
									/>
									<Image
										src={"./8/bigger.png"}
										sx={{
											width: "26px",
											height: "26px",
											minWidth: "14px",
											minHeight: "14px",
											alignSelf: "flex-end",
											cursor: "pointer"
										}}
										onClick={e => {
											setShowBigBox({
												styleDetails: favorite.details,
												curStyle: favorite.styleList
											})
										}}
									/>
								</Flex>
								{showBigBox ? (
									<BigBox
										styleDetails={showBigBox.styleDetails}
										curStyle={showBigBox.curStyle}
										onClose={() => {
											setShowBigBox(false)
										}}
									/>
								) : null}
								<Flex justifyContent="center">
									<Box margin="8px 0">
										{favorite.prodInfo.map(prodInfo => (
											<ProductInfo
												styleNum={prodInfo.styleNo}
												made={prodInfo.color}
											/>
										))}
									</Box>
								</Flex>
								<Flex flexDirection="column">
									{/* <Text>$€¥6.7</Text> */}
									{favorite.price.map(price => (
										<Text p="4px 0">{price}</Text>
									))}
								</Flex>
								<Flex justifyContent="center">
									<Image
										src={selected ? "./4/collect-1.png" : "./4/collect.png"}
										sx={{
											width: "0.3rem",
											height: "0.3rem",
											minWidth: "14px",
											minHeight: "14px"
										}}
										onClick={e => {
											selected ? null : handleCollect(favorite._id)
										}}
									/>
								</Flex>
							</TableLine>
						)
					})}
				</Table>
			</Flex>
		</React.Fragment>
	)
}
