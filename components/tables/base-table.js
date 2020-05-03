import React from "react"
import { Flex, Text, Box, Image } from "rebass"
import lodash from "lodash"
import { SortableContainer, SortableElement } from "react-sortable-hoc"

import ActionEditCom from "./action-edit"

const Title = (props) => (
	<thead
		width="100%"
		justifyContent="space-around"
		style={{ background: "#FFF0E5" }}
	>
		{props.titles.map((title, key) => (
			<th
				style={{
					whiteSpace: "nowrap",
					color: title.isHide ? "#FFF0E5" : "#000",
					border: props.haveBorder ? "1px solid #000" : "none",
					padding: "10px",
				}}
				key={`${title.name}-${key}`}
				colSpan={title.colspan}
				onClick={title.onClick}
			>
				{title.name}
			</th>
		))}
	</thead>
)
export const ProductInfo = (props) => (
	<Flex alignItems="baseline" flexDirection="column" padding="4px 0">
		<Text fontSize="0.18rem">{props.styleNum}</Text>
		<Text
			fontSize="0.14rem"
			style={{
				lineHeight: "0.34rem",
			}}
		>
			{props.made}
		</Text>
	</Flex>
)
export const TableLine = (props) => {
	// console.log(props.children)
	// console.log(lodash.compact(props.children))
	const { gary } = props
	return (
		<tr
			style={{
				width: "100%",
				border: "1px solid #000",
				background: gary ? "#ccc" : "#fff",
			}}
			alignItems="center"
		>
			{lodash.flatten(lodash.compact(props.children)).map((child) => {
				return (
					<td
						style={{
							textAlign: "center",
							border: child.props.hasBorder,
						}}
						align="center"
						valign="middle"
						rowSpan={child.props.rowspan}
						colSpan={child.props.colspan}
					>
						{child}
					</td>
				)
			})}
			{props.noEdit ? null : (
				<td>
					<ActionEditCom {...props}></ActionEditCom>
				</td>
			)}
		</tr>
	)
}

export const SortableTable = (props) => {
	const styleProps = props.sx
	const tbStyleProps = props.tbSx
	const haveBorder = props.hasBorder
	const sortProps = props.sort
	const SortableList = SortableContainer(() => {
		return (
			<tbody id="sortable-parent" style={{ ...tbStyleProps }}>
				{props.children}
			</tbody>
		)
	})
	return (
		<table
			id={props.id}
			frame="void"
			style={{
				width: "calc(100% - 36px)",
				border: "1px",
				margin: "0 18px 18px 18px",
				background: "#fff",
				borderCollapse: "collapse",
				...styleProps,
			}}
			flexDirection="column"
		>
			<Title titles={props.titles} haveBorder={haveBorder} />
			<SortableList
				helperContainer={() => {
					return document.getElementById("sortable-parent")
				}}
				helperClass="sortable-helper"
				pressDelay={200}
				{...sortProps}
			/>
		</table>
	)
}

export default (props) => {
	const styleProps = props.sx
	const tbStyleProps = props.tbSx
	const haveBorder = props.hasBorder
	return (
		<table
			id={props.id}
			frame="void"
			style={{
				width: "calc(100% - 36px)",
				border: "1px",
				margin: "0 18px 18px 18px",
				background: "#fff",
				borderCollapse: "collapse",
				...styleProps,
			}}
			flexDirection="column"
		>
			<Title titles={props.titles} haveBorder={haveBorder} />
			<tbody style={{ ...tbStyleProps }}>{props.children}</tbody>
		</table>
	)
}
