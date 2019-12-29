import React from "react"
import { Flex, Text, Box, Image } from "rebass"
import lodash from "lodash"
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
	<Flex alignItems="baseline" flexDirection="column" padding="4px 0">
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
export const TableLine = props => {
	// console.log(props.children)
	// console.log(lodash.compact(props.children))
	return (
		<tr
			style={{ width: "100%", border: "1px solid #000", background: "#fff" }}
			alignItems="center"
		>
			{lodash.compact(props.children).map(child => (
				<td
					style={{
						textAlign: "center",
						border: child.props.hasBorder
					}}
					rowSpan={child.props.rowspan}
				>
					{child}
				</td>
			))}
			{props.noEdit ? null : (
				<td>
					<Flex justifyContent="space-around" alignItems="center">
						{props.haveEdit ? (
							<Image
								className="tool"
								width="0.3rem"
								src="/5/edit.png"
								onClick={props.onEdit}
							/>
						) : null}
						{props.haveSelect ? (
							<Image
								className="tool"
								width="0.3rem"
								src={props.isSelect ? "/5/1-1.png" : "/5/1.png"}
								onClick={props.onSelect}
							/>
						) : null}
						{props.haveDel ? (
							<Image
								className="tool"
								width="0.3rem"
								src="/5/2.png"
								onClick={props.onDel}
							/>
						) : null}
						{props.Bigger ? (
							<Image className="tool" width="0.3rem" src="/7/bigger.png" />
						) : null}
					</Flex>
				</td>
			)}
		</tr>
	)
}
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
