import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Router from "next/router"
import { toast, ToastContainer } from "react-nextjs-toast"

import Head from "../components/nav"
import SelectBar from "../components/select-bar"
import SelectLine from "../components/select-line"
import SelectAssignTool from "../components/select-assign-tool"

import useUserInfo from "../hooks/getUserInfo"
import request from "../utils/request.js"
import { getPageQuery } from "../utils/helper"
export default () => {
	const info = useUserInfo()
	// console.log(info)
	const [categoryList, setGategoryList] = useState([{ styles: [] }])
	const [currentSeleted, setCurrentSeleted] = useState(false)
	const [selectStyles, setSelectStyles] = useState([])
	const [selectStylesType, setSelectStylesType] = useState([])
	const [showToast, setShowToast] = useState(false)
	const [queryKey, setQueryKey] = useState(false)
	useEffect(() => {
		const getGategoryList = async () => {
			let query = getPageQuery()
			let options = { _id: query.id }
			if (queryKey) {
				options.tag = queryKey
			}
			const req = await request("goods/detail", options, "get")
			if (!req) return
			setGategoryList(req.category)
		}
		getGategoryList()
	}, [queryKey])
	// const info = useUserInfo()
	const handleSelectStyle = (sid, type, top, col, styleItem) => {
		let pos = selectStyles.indexOf(sid)
		if (pos > -1) {
			//已选中 则去除 选中
			if (selectStyles.length > 1) {
				let savePos = (pos + 1) % 2

				setSelectStyles(selectStyles.slice(savePos, savePos + 1))
				setSelectStylesType(selectStylesType.slice(savePos, savePos + 1))
			} else {
				setSelectStyles([])
				setSelectStylesType([])
			}
			setCurrentSeleted(false)
		} else {
			//未选中 则 设置为选中
			console.log(selectStyles, type)
			setCurrentSeleted({ sid, type, top, col, styleItem })
			let topsPos = selectStylesType.indexOf("TOPS")
			let bottomsPos = selectStylesType.indexOf("BOTTOMS")
			if (topsPos > -1 && type == "BOTTOMS") {
				let saveTemps = selectStyles.slice(topsPos, topsPos + 1)
				saveTemps.push(sid)
				setSelectStyles(saveTemps)
				setSelectStylesType(["TOPS", type])
				return
			}
			if (bottomsPos > -1 && type == "TOPS") {
				let saveTemps = selectStyles.slice(bottomsPos, bottomsPos + 1)
				saveTemps.push(sid)
				setSelectStyles(saveTemps)
				setSelectStylesType(["BOTTOMS", type])
				return
			}
			setSelectStyles([sid])
			setSelectStylesType([type])
		}
	}
	const handleChangeQuery = e => {
		setQueryKey(e.target.value)
	}
	return (
		<Flex flexDirection="column">
			<Head></Head>

			<SelectBar onChangeQuery={handleChangeQuery}></SelectBar>
			<Box mt="40px" sx={{ position: "relative" }}>
				{categoryList.map((item, index) => (
					<SelectLine
						key={index + item._id}
						row={index}
						kind={item.name}
						styles={item.styles}
						selectStyles={selectStyles}
						onSelect={handleSelectStyle}
					></SelectLine>
				))}
				{currentSeleted && info.role === 1 ? (
					<SelectAssignTool
						channels={info.channels}
						currentSeleted={currentSeleted}
						onClose={() => {
							setCurrentSeleted(false)
						}}
					/>
				) : null}
			</Box>
			<Button
				variant="primary"
				height="1.13rem"
				width="19.2rem"
				bg="#FF8E6C"
				color="#000"
				padding="0"
				sx={{
					borderRadius: 0,
					fontSize: "0.27rem",
					cursor: "pointer"
				}}
				onClick={() => {
					// console.log('selectStylesselectStylesselectStyles')
					if (selectStyles.length > 0) {
						Router.push(
							`/made?type=${selectStylesType[0]}&id=${selectStyles[0]}${
								selectStyles.length > 1 ? "&id1=" + selectStyles[1] : ""
							}`
						)
					} else {
						toast.notify("Please select a style.", {
							duration: 5,
							type: "warning"
						})
						// setToast({ type: "error", info: "Please Select Style." })
					}
				}}
			>
				NEXT>
			</Button>
			<ToastContainer />
		</Flex>
	)
}
