import React, { useState } from "react"
import Head from "../components/head"
import NumberInput from "../components/number-input"
import { SortableElement } from "react-sortable-hoc"
import arrayMove from "array-move"
import { SortableTable, TableLine } from "../components/tables/base-table"
import { Text, Flex } from "rebass"

export default () => {
	const [collectList, setCollectList] = useState([
		{ name: "Style_A", title: true, nosort: true, style: "", xiang: 9 },
		{ name: "A_1", rowspan: 2, style: "Style_A" },
		{ name: "A_2", style: "Style_A" },
		{ name: "Style_B", title: true, nosort: true, style: "" },
		{ name: "B_1", rowspan: 3, style: "Style_B" },
		{ name: "B_2", style: "Style_B" },
		{ name: "B_3", style: "Style_B" },
		{ name: "Style_C", title: true, nosort: true },
		{ name: "C_1", rowspan: 1, style: "Style_C", style: "" },
	])
	const handleAdd = () => {
		setCollectList([...collectList, { name: "", title: true, nosort: true }])
	}
	const SortableItem = SortableElement(({ indexNo, collect }) => {
		// console.log("SortableItem ", indexNo)
		let index = indexNo
		let { rowspan, title } = collect
		return (
			<TableLine
				gary={title}
				haveDel
				onDel={() => {
					handleDel(index, collect)
				}}
			>
				<Text sx={{ lineHeight: "40px" }} colspan={title ? 2 : 1}>
					{collect.name ? collect.name : "New Package"}
				</Text>
				{rowspan ? (
					<Flex
						justifyContent="center"
						rowspan={rowspan}
						hasBorder={"1px solid"}
					>
						<NumberInput />
					</Flex>
				) : null}
				{index === 0 ? (
					<Flex
						justifyContent="center"
						rowspan={collectList.length}
						hasBorder={"1px solid"}
					>
						<NumberInput />
					</Flex>
				) : null}
			</TableLine>
		)
	})
	return (
		<React.Fragment>
			<Head />
			<SortableTable
				sort={{
					pressDelay: 200,
					onSortEnd: ({ oldIndex, newIndex }) => {
						let newList = arrayMove(collectList, oldIndex, newIndex)
						let findList = []
						for (let i = 0; i < newList.length; i++) {
							if (newList[i].title) {
								findList.push({
									index: i,
									node: newList[i],
								})
								if (!newList[i].name && i + 1 < newList.length) {
									newList[i].name = newList[i + 1].style
								}
							} else {
								newList[i].rowspan = false
							}
						}
						for (let i = 0; i < findList.length; i++) {
							let curFindIndex = findList[i].index
							if (i + 1 < findList.length) {
								let temp = findList[i + 1].index - curFindIndex - 1
								if (temp > 0) {
									newList[curFindIndex + 1].rowspan = temp
								}
							} else {
								let temp = newList.length - 1 - curFindIndex
								if (temp > 0) {
									newList[curFindIndex + 1].rowspan = temp
								}
							}
						}

						console.log(findList)
						setCollectList(newList)
					},
				}}
				titles={[
					{ name: "STYLE_NO" },
					{ name: "PACKAGE" },
					{ name: "CTNS" },
					{ name: "ACTION" },
				]}
			>
				{collectList.map((collect, index) => (
					<SortableItem
						disabled={collect.nosort ? true : false}
						key={`categoryList-item-${index}`}
						index={index}
						collect={collect}
						indexNo={index}
					/>
				))}
			</SortableTable>
			<Flex
				sx={{
					border: "dashed 1px #000",
					justifyContent: "center",
					lineHeight: "28px",
					margin: "0 20px",
					width: "calc(100% - 40px)",
				}}
				onClick={() => {
					handleAdd()
				}}
			>
				ADD NEW PACKAGE
			</Flex>
		</React.Fragment>
	)
}
