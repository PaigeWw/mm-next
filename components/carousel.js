import React, { Component } from "react"
import Slider from "react-slick"
import { Flex, Box } from "rebass"
import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"

export default class CenterMode extends Component {
	render() {
		const { settings } = this.props
		return <Slider {...settings}>{this.props.children}</Slider>
	}
}
