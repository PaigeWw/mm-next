import React from "react"
import { Box } from "rebass"

export default (props) => (
	<div class={`loading ${props.type}`}>
		<div class="three1"></div>
		<div class="three2"></div>
		<div class="three3"></div>
	</div>
)
