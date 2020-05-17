import React, { useEffect, useState } from "react"
import StyleItem from "../components/commons/demo-style-item"
import { getPageQuery } from "../utils/helper"
import request from "../utils/request.js"

export default () => {
	// const info = useUserInfo()
	const [favorite, setFavorite] = useState(false)

	useEffect(() => {
		const getOrderDetail = async () => {
			const req = await request("order/detail", { _id: getPageQuery().rid })
			// console.log("order/detail", req)
			if (req) {
				let temp = false
				for (var i = 0; i < req.orderData.length; i++) {
					temp = req.orderData[i].items.find(
						(x) => x.favoriteId === getPageQuery().id
					)
					if (temp) {
						break
					}
				}
				setFavorite(temp.favorite)
			}
			// console.log(req)
		}
		getOrderDetail()
	}, [])

	return (
		<React.Fragment>
			{favorite ? (
				<StyleItem
					width={300}
					rowspan={2}
					hasBorder={"1px solid"}
					margin={"1px"}
					key={`favorite-style-img`}
					styleList={favorite.styleAndColor.map((x) => {
						// styleList.push({ style: x.style, colors: x.colorIds })
						return { style: x.styleId, colors: x.colorIds }
					})}
					tool={false}
				/>
			) : null}
		</React.Fragment>
	)
}
