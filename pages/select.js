import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Router from "next/router"
import { ToastContainer, toast } from "../components/commons/toast"
import Loading from "../components/commons/loading"
import arrayMove from "array-move"
import { SortableContainer, SortableElement } from "react-sortable-hoc"

import Head from "../components/nav"
import GoodsSwitch from "../components/commons/goods-switch"
import SelectBar from "../components/select-bar"
import SelectLine from "../components/select-line"
import SelectAssignTool from "../components/select-assign-tool"
import SelectAssignInfo from "../components/select-assign-tool/select-assign-info"
import SelectAssignGroupTool from "../components/select-assign-tool/group.index"

import request from "../utils/request.js"
import { getPageQuery, guid, baseUrl } from "../utils/helper"

const SortableItem = SortableElement(
	({
		item,
		index,
		handleSelectStyle,
		selectStyles,
		onImageOnLoad,
		row,
		handleChangeCategoryStartIndex,
	}) => (
		<SelectLine
			index={index}
			key={`SelectLine-${index}`}
			row={row}
			setStartIndex={handleChangeCategoryStartIndex}
			kind={item.name}
			lineHeight={item.lineHeight}
			styles={item.styles}
			startIndex={item.startIndex}
			selectStyles={selectStyles}
			onSelect={handleSelectStyle}
			onImageOnLoad={onImageOnLoad}
		></SelectLine>
	)
)

const SortableList = SortableContainer(
	({
		categoryList,
		handleSelectStyle,
		onImageOnLoad,
		selectStyles,
		handleChangeCategoryStartIndex,
	}) => {
		return (
			<div>
				{categoryList.map((item, index) => (
					<SortableItem
						handleSelectStyle={handleSelectStyle}
						onImageOnLoad={onImageOnLoad}
						handleChangeCategoryStartIndex={handleChangeCategoryStartIndex}
						selectStyles={selectStyles}
						key={`categoryList-item-${guid()}`}
						index={index}
						row={index}
						item={item}
					/>
				))}
			</div>
		)
	}
)
class Select extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			info: {},
			isLoad: false,
			assignMode: false,
			assignGroupModal: false,
			categoryList: [{ styles: [] }],
			currentSeleted: false,
			goodId: false,
			selectAssignStyleIds: [],
			selectAssignStyles: [],
			selectStyles: [],
			selectStylesType: [],
			tagList: [],
			queryKey: { tags: "ALL" },
		}

		this.getUserInfo()
	}
	// componentWillUpdate(nextProps, nextState) {
	// 	if (this.state.goodId !== nextState.goodId) {
	// 		this.getGategoryList({}, nextState.goodId)
	// 	}
	// }

	componentDidMount() {
		// this.info = useUserInfo()()
		let query = getPageQuery()
		// setGoodId(query.id)
		this.setState(
			{
				...this.state,
				goodId: query.id,
			},
			() => {
				this.getGategoryList(this.state.queryKey, this.state.goodId)
				this.getTagList()
			}
		)
	}
	async getTagList() {
		const req = await request("style/getStyleTagList")
		if (req) {
			console.log(req)
			this.setState({
				...this.state,
				tagList: req.map((r) => r.name),
			})
		}
	}

	async getGategoryList(queryKey, goodId) {
		// const { queryKey, goodId } = this.state

		let options = { _id: goodId }

		if (queryKey.tags) {
			options.tag = queryKey.tags === "ALL" ? "" : queryKey.tags
			options.styleNo = queryKey.styleNo
		}
		if (queryKey.styleNo) {
			options.styleNo = queryKey.styleNo
		}
		this.setState({
			...this.state,
			isLoad: true,
		})
		const req = await request("goods/detail", options, "get")
		if (!req) return
		const categoryList = req.category.map((c) => {
			return {
				...c,
				startIndex: 0,
			}
		})
		this.setState({
			...this.state,
			categoryList,
			isLoad: false,
		})
	}

	handleChangeCategoryStartIndex(index, categoryIndex) {
		let { categoryList } = this.state
		categoryList[categoryIndex].startIndex = index
		this.setState({
			...this.state,
			categoryList: [...categoryList],
		})
	}

	handleImageOnLoad({ height }, categoryIndex) {
		let { categoryList } = this.state
		const id = categoryList[categoryIndex]._id

		let h = window.localStorage.getItem(id)

		if (h === "null" || !h) {
			h = height
			window.localStorage.setItem(id, h)
		}

		if (categoryList[categoryIndex].lineHeight === h) {
			return
		}

		categoryList[categoryIndex].lineHeight = h
		this.setState({
			...this.state,
			categoryList: [...categoryList],
		})
	}
	async getUserInfo() {
		const data = await request("user/getCurrentUser")
		this.setState({
			...this.state,
			info: data,
		})
		if (!data) {
			Router.push("/login")
		}
	}
	handleAssginSelectStyle(sid, type, top, col, styleItem, row) {
		console.log({ styleItem })
		let { selectAssignStyleIds, selectAssignStyles } = this.state
		let pos = selectAssignStyleIds.indexOf(sid)

		if (pos > -1) {
			selectAssignStyles.splice(pos, 1)
			selectAssignStyleIds.splice(pos, 1)
			this.setState({
				...this.state,
				selectAssignStyles: [...selectAssignStyles],
				selectAssignStyleIds: [...selectAssignStyleIds],
			})
		} else {
			this.setState({
				...this.state,
				selectAssignStyles: [styleItem, ...selectAssignStyles],
				selectAssignStyleIds: [sid, ...selectAssignStyleIds],
			})
		}
	}
	handleSelectStyle(sid, type, top, col, styleItem, row) {
		let {
			selectStyles,
			selectStylesType,
			categoryList,
			assignMode,
		} = this.state
		if (assignMode) {
			this.handleAssginSelectStyle(sid, type, top, col, styleItem, row)
			return
		}
		const isLast = row >= categoryList.length - 3 && categoryList.length > 3
		// console.log({ isLast, row })
		// console.log(categoryList.length)
		let pos = selectStyles.indexOf(sid)
		if (pos > -1) {
			//已选中 则去除 选中
			if (selectStyles.length > 1) {
				let savePos = (pos + 1) % 2

				// setSelectStyles(selectStyles.slice(savePos, savePos + 1))
				// setSelectStylesType(selectStylesType.slice(savePos, savePos + 1))
				this.setState({
					...this.state,
					selectStyles: selectStyles.slice(savePos, savePos + 1),
					selectStylesType: selectStylesType.slice(savePos, savePos + 1),
					currentSeleted: false,
				})
			} else {
				// setSelectStyles([])
				// setSelectStylesType([])
				this.setState({
					...this.state,
					selectStyles: [],
					selectStylesType: [],
					currentSeleted: false,
				})
			}
		} else {
			//未选中 则 设置为选中
			// console.log(selectStyles, type)
			// name;
			// setCurrentSeleted({ sid, type, top, col, styleItem })
			let topsPos = selectStylesType.findIndex(
				(stype) => stype.indexOf("单衣") >= 0
			)
			let bottomsPos = selectStylesType.findIndex(
				(stype) => stype.indexOf("单裤") >= 0
			)
			if (topsPos > -1 || bottomsPos > -1) {
			}
			if (
				topsPos > -1 &&
				type.indexOf("单裤") > -1 &&
				selectStylesType[topsPos].replace("单衣", "") ===
					type.replace("单裤", "")
			) {
				let saveTemps = selectStyles.slice(topsPos, topsPos + 1)
				saveTemps.push(sid)
				this.setState({
					...this.state,
					selectStyles: saveTemps,
					selectStylesType: [selectStylesType[topsPos], type],
					currentSeleted: { sid, type, top, col, styleItem, isLast },
				})
				return
			}
			if (
				bottomsPos > -1 &&
				type.indexOf("单衣") > -1 &&
				selectStylesType[bottomsPos].replace("单裤", "") ===
					type.replace("单衣", "")
			) {
				let saveTemps = selectStyles.slice(bottomsPos, bottomsPos + 1)
				saveTemps.unshift(sid)
				this.setState({
					...this.state,
					selectStyles: saveTemps,
					selectStylesType: [type, selectStylesType[bottomsPos]],
					currentSeleted: { sid, type, top, col, styleItem, isLast },
				})
				return
			}
			this.setState({
				...this.state,
				selectStyles: [sid],
				selectStylesType: [type],
				currentSeleted: { sid, type, top, col, styleItem, isLast },
			})
		}
	}

	handleChangeQuery(options) {
		this.getGategoryList(options, this.state.goodId)
		this.setState({
			...this.state,
			queryKey: options,
		})
	}
	render() {
		const {
			assignMode,
			assignGroupModal,
			info,
			goodId,
			selectStyles,
			selectStylesType,
			selectAssignStyles,
			selectAssignStyleIds,
			categoryList,
			currentSeleted,
			isLoad,
			tagList,
		} = this.state

		return (
			<Flex flexDirection="column">
				<Head progress={1}></Head>
				<ToastContainer />

				<GoodsSwitch
					goodId={goodId}
					onChangeGood={(id) => {
						console.log("goodId", id)
						this.setState(
							{
								...this.state,
								goodId: id,
								queryKey: { tags: "ALL" },
							},
							() => {
								this.getGategoryList({}, id)
							}
						)
						//
					}}
				/>
				{info.role === 1 || info.role === "1" ? (
					<Flex
						alignItems="center"
						sx={{
							position: "absolute",
							right: "10px",
							top: "calc(230px)",
						}}
					>
						<input
							style={{
								height: "20px",
								width: "20px",
							}}
							type="checkbox"
							name="Assign"
							value="Assign"
							onChange={(e) => {
								this.setState({
									...this.state,
									assignMode: e.target.checked,
								})
							}}
						/>
						多款同时分配模式
					</Flex>
				) : null}
				{tagList.length > 0 ? (
					<SelectBar
						tagList={tagList}
						onChangeQuery={this.handleChangeQuery.bind(this)}
					/>
				) : null}

				<Box sx={{ position: "relative" }} mb={"1.13rem"}>
					{isLoad ? (
						<Box
							sx={{
								position: "absolute",
								left: "50%",
								transform: "translateX(-50%)",
							}}
						>
							<Loading type="loading5" />{" "}
						</Box>
					) : null}
					<SortableList
						selectStyles={assignMode ? selectAssignStyleIds : selectStyles}
						categoryList={categoryList}
						onImageOnLoad={this.handleImageOnLoad.bind(this)}
						handleSelectStyle={this.handleSelectStyle.bind(this)}
						handleChangeCategoryStartIndex={this.handleChangeCategoryStartIndex.bind(
							this
						)}
						pressDelay={200}
						onSortEnd={({ oldIndex, newIndex }) => {
							// console.log("oldIndex, newIndex")
							this.setState({
								...this.state,
								categoryList: arrayMove(categoryList, oldIndex, newIndex),
							})
						}}
					/>

					{currentSeleted && (info.role === 1 || info.role === "1") ? (
						<SelectAssignTool
							channels={info.channels}
							role={info.role}
							currentSeleted={currentSeleted}
							onClose={() => {
								this.setState({
									...this.state,
									currentSeleted: false,
								})
								// setCurrentSeleted(false)
							}}
						/>
					) : null}
					{currentSeleted && info.role !== 1 && info.role !== "1" ? (
						<SelectAssignInfo
							curChannel={info.channels[0]}
							// role={info.role}
							currentSeleted={currentSeleted}
							onClose={() => {
								this.setState({
									...this.state,
									currentSeleted: false,
								})
								// setCurrentSeleted(false)
							}}
						/>
					) : null}
					{assignGroupModal ? (
						<SelectAssignGroupTool
							curChannel={info.channels[0]}
							role={info.role}
							// currentSeleted={currentSeleted}
							onClose={() => {
								this.setState({
									...this.state,
									currentSeleted: false,
								})
								// setCurrentSeleted(false)
							}}
							onClose={() => {
								this.setState({
									...this.state,
									assignGroupModal: false,
								})
								// setCurrentSeleted(false)
							}}
							selectAssignStyles={selectAssignStyles}
						/>
					) : null}
				</Box>
				{assignMode ? (
					<Flex
						height="2rem"
						width="19.2rem"
						bg="#FFD6CA"
						alignItems="center"
						sx={{
							borderRadius: 0,
							fontSize: "0.27rem",
							position: "fixed",
							bottom: 0,
						}}
					>
						<Box
							alignItems="center"
							sx={{
								width: "calc(19.2rem - 3.22rem)",
								overflow: "scroll",
							}}
						>
							<Flex alignItems="center" width="max-content">
								{selectAssignStyles.map((item) => (
									<Box p="10px">
										<Image
											src={baseUrl + item.imgUrl}
											width={`${
												((item.scale ? item.scale : 58) * 1.4) / 100
											}rem`}
										/>
									</Box>
								))}
							</Flex>
						</Box>
						<Button
							variant="primary"
							height="2rem"
							width="3.22rem"
							bg="#FF8E6C"
							color="#000"
							padding="0"
							sx={{
								borderRadius: 0,
								fontSize: "0.27rem",
								cursor: "pointer",
							}}
							onClick={() => {
								this.setState({
									...this.state,
									assignGroupModal: true,
								})
							}}
						>
							分配
						</Button>
					</Flex>
				) : (
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
							cursor: "pointer",
							position: "fixed",
							bottom: 0,
						}}
						onClick={() => {
							if (selectStyles.length > 0) {
								Router.push(
									`/made?goodId=${goodId}&type=${selectStylesType[0]}&id=${
										selectStyles[0]
									}${
										selectStyles.length > 1
											? `&id1=${selectStyles[1]}&type2=${selectStylesType[1]}`
											: ""
									}`
								)
							} else {
								toast.notify("请选择一个款式.")
							}
						}}
					>
						下一步>
					</Button>
				)}
			</Flex>
		)
	}
}

export default Select
// export default () => {
// 	// console.log(info)
// 	const [categoryList, setGategoryList] = useState([{ styles: [] }])
// 	const [currentSeleted, setCurrentSeleted] = useState(false)
// 	const [goodId, setGoodId] = useState(false)
// 	const [selectStyles, setSelectStyles] = useState([])
// 	const [selectStylesType, setSelectStylesType] = useState([])
// 	const [queryKey, setQueryKey] = useState({
// 		tags: "ALL",
// 	})

// 	useEffect(() => {
// 		let query = getPageQuery()
// 		setGoodId(query.id)
// 	}, [])
// 	useEffect(() => {
// 		const getGategoryList = async () => {
// 			let options = { _id: goodId }

// 			if (queryKey.tags) {
// 				options.tag = queryKey.tags === "ALL" ? "" : queryKey.tags
// 				options.styleNo = queryKey.styleNo
// 			}
// 			if (queryKey.styleNo) {
// 				options.styleNo = queryKey.styleNo
// 			}

// 			const req = await request("goods/detail", options, "get")
// 			if (!req) return
// 			setGategoryList(req.category)
// 		}
// 		if (goodId) {
// 			getGategoryList()
// 		}
// 	}, [queryKey, goodId])
// 	// const info = useUserInfo()
// 	const handleSelectStyle = (sid, type, top, col, styleItem) => {
// 		let pos = selectStyles.indexOf(sid)
// 		if (pos > -1) {
// 			//已选中 则去除 选中
// 			if (selectStyles.length > 1) {
// 				let savePos = (pos + 1) % 2

// 				setSelectStyles(selectStyles.slice(savePos, savePos + 1))
// 				setSelectStylesType(selectStylesType.slice(savePos, savePos + 1))
// 			} else {
// 				setSelectStyles([])
// 				setSelectStylesType([])
// 			}
// 			setCurrentSeleted(false)
// 		} else {
// 			//未选中 则 设置为选中
// 			// console.log(selectStyles, type)
// 			setCurrentSeleted({ sid, type, top, col, styleItem })
// 			let topsPos = selectStylesType.indexOf("TOPS")
// 			let bottomsPos = selectStylesType.indexOf("BOTTOMS")
// 			if (topsPos > -1 && type == "BOTTOMS") {
// 				let saveTemps = selectStyles.slice(topsPos, topsPos + 1)
// 				saveTemps.push(sid)
// 				setSelectStyles(saveTemps)
// 				setSelectStylesType(["TOPS", type])
// 				return
// 			}
// 			if (bottomsPos > -1 && type == "TOPS") {
// 				let saveTemps = selectStyles.slice(bottomsPos, bottomsPos + 1)
// 				saveTemps.push(sid)
// 				setSelectStyles(saveTemps)
// 				setSelectStylesType(["BOTTOMS", type])
// 				return
// 			}
// 			setSelectStyles([sid])
// 			setSelectStylesType([type])
// 		}
// 	}
// 	const handleChangeQuery = (options) => {
// 		// console.log(options)
// 		setQueryKey({
// 			...queryKey,
// 			...options,
// 		})
// 	}

// 	const SortableItem = SortableElement(({ item, index }) => (
// 		<SelectLine
// 			key={index + item._id}
// 			row={index}
// 			kind={item.name}
// 			styles={item.styles}
// 			selectStyles={selectStyles}
// 			onSelect={handleSelectStyle}
// 		></SelectLine>
// 	))

// 	const SortableList = SortableContainer(() => {
// 		return (
// 			<div>
// 				{categoryList.map((item, index) => (
// 					<SortableItem
// 						key={`categoryList-item-${index}`}
// 						index={index}
// 						item={item}
// 					/>
// 				))}
// 			</div>
// 		)
// 	})
// 	return (
// 		<Flex flexDirection="column">
// 			<Head progress={1}></Head>
// 			<ToastContainer />
// 			<GoodsSwitch
// 				goodId={goodId}
// 				onChangeGood={(id) => {
// 					setGoodId(id)
// 				}}
// 			/>
// 			<SelectBar onChangeQuery={handleChangeQuery}></SelectBar>
// 			<Box sx={{ position: "relative" }} mb="1.13rem">
// 				<SortableList
// 					pressDelay={300}
// 					onSortEnd={({ oldIndex, newIndex }) => {
// 						setGategoryList(arrayMove(categoryList, oldIndex, newIndex))
// 					}}
// 				/>

// 				{currentSeleted ? (
// 					<SelectAssignTool
// 						channels={info.channels}
// 						role={info.role}
// 						currentSeleted={currentSeleted}
// 						onClose={() => {
// 							setCurrentSeleted(false)
// 						}}
// 					/>
// 				) : null}
// 			</Box>
// 			<Button
// 				variant="primary"
// 				height="1.13rem"
// 				width="19.2rem"
// 				bg="#FF8E6C"
// 				color="#000"
// 				padding="0"
// 				sx={{
// 					borderRadius: 0,
// 					fontSize: "0.27rem",
// 					cursor: "pointer",
// 					position: "fixed",
// 					bottom: 0,
// 				}}
// 				onClick={() => {
// 					// console.log('selectStylesselectStylesselectStyles')
// 					if (selectStyles.length > 0) {
// 						Router.push(
// 							`/made?type=${selectStylesType[0]}&id=${selectStyles[0]}${
// 								selectStyles.length > 1 ? "&id1=" + selectStyles[1] : ""
// 							}`
// 						)
// 					} else {
// 						toast.notify("Please select a style.")
// 					}
// 				}}
// 			>
// 				NEXT>
// 			</Button>
// 			{/* <ToastContainer /> */}
// 		</Flex>
// 	)
// }
