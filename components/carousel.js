import React, { Component } from "react"
import Slider from "react-slick"
import { Flex, Box } from "rebass"
import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"

export default class CenterMode extends Component {
	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
		}
		return (
			<div style={{ width: "1000px", height: "900px" }}>
				<h2>Center Mode</h2>
				<Slider {...settings}>
					<Box width="600px" height="400px" bg="#eee">
						<h3>1</h3>
					</Box>
					<Box width="600px" height="400px" bg="#efe">
						<h3>2</h3>
					</Box>
					<Box width="600px" height="400px" bg="#fee">
						<h3>3</h3>
					</Box>
					<Box width="600px" height="400px" bg="#0ee">
						<h3>4</h3>
					</Box>
					<Box width="600px" height="400px" bg="#00e">
						<h3>5</h3>
					</Box>
					<Box width="600px" height="400px" bg="#efc">
						<h3>6</h3>
					</Box>
				</Slider>
			</div>
		)
	}
}
