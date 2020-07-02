import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Flex, Image } from "rebass"

export default (props) => {
	const { left, top, padding, onClose, noPointer, overflow } = props
	// const { left, top } = props
	return ReactDOM.createPortal(
		<Flex
			bg="#fff"
			flexDirection="column"
			fontSize="0.18rem"
			color="#000"
			p={padding ? padding : "0.9rem"}
			sx={{
				position: "fixed",
				pointerEvents: noPointer ? "none" : "auto",
				maxHeight: "100%",
				zIndex: 999999999,
				overflow: overflow ? overflow : "scroll",
				top: top ? `${top}px` : "50%",
				left: left ? `${left}px` : "50%",
				transform: top ? "" : "translate(-50%, -50%)",
				boxShadow: "0px 14px 44px 5px rgba(0, 0, 0, 0.11)",
			}}
		>
			{onClose ? (
				<Image
					onClick={onClose}
					src="/3/close.png"
					width="0.23rem"
					sx={{
						position: "absolute",
						right: "0.42rem",
						top: "0.41rem",
						zIndex: 99999,
					}}
				/>
			) : null}

			{props.children}
		</Flex>,
		document.body
	)
}
