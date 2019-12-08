import React from "react"
import { Flex, Text, Box, Image } from "rebass"
import Column from "../column"

const Title = props => (
	<thead
		width="100%"
		justifyContent="space-around"
		style={{ background: "#FFF0E5" }}
	>
		{props.titles.map((title, key) => (
			<th
				style={{ color: title.isHide ? "#FFF0E5" : "#000" }}
				key={`${title.name}-${key}`}
			>
				{title.name}
			</th>
		))}
	</thead>
)
export const ProductInfo = props => (
	<Flex alignItems="baseline" flexDirection="column">
		<Text fontSize="0.18rem">{props.styleNum}</Text>
		<Text
			fontSize="0.14rem"
			style={{
				lineHeight: "0.34rem"
			}}
		>
			{props.made}
		</Text>
	</Flex>
)
export const TableLine = props => (
	<tr
		style={{ width: "100%", border: "1px solid #000", background: "#fff" }}
		alignItems="center"
		justifyContent="space-between"
	>
		{props.children.map ? (
			props.children.map(child => (
				<td style={{ textAlign: "center" }}>{child}</td>
			))
		) : (
			<td>{props.children}</td>
		)}
		{props.noEdit ? null : (
			<td justifyContent="space-around">
				<Image width="0.3rem" src="/5/edit.png" />
				<Image width="0.3rem" src="/5/1.png" />
				<Image width="0.3rem" src="/5/2.png" />
				<Image width="0.3rem" src="/7/bigger.png" />
			</td>
		)}
	</tr>
)
export default props => {
	const styleProps = props.sx
	const tbStyleProps = props.tbSx
	return (
		<table
			frame="void"
			style={{
				border: "1px",
				margin: "0 18px 18px 18px",
				background: "#fff",
				borderCollapse: "collapse",
				...styleProps
			}}
			flexDirection="column"
		>
			<Title titles={props.titles} />
			<tbody style={{ ...tbStyleProps }}>{props.children}</tbody>
		</table>
	)
}
