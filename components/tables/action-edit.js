import { Flex, Text, Box, Image } from "rebass"

import React, { Component } from "react"

export default class ActionEdit extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.isSelect !== nextProps.isSelect) {
			return true
		}
		return false
	}
	render() {
		const { props } = this
		return (
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
					<Image
						className="tool"
						width="0.3rem"
						src="/7/bigger.png"
						onClick={props.onBiger}
					/>
				) : null}
			</Flex>
		)
	}
}
