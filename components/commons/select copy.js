import React from "react"
import { Box, Modal } from "rebass"

class Modal extends React.Component {
	render() {
		return <Modal>{this.props.children}</Modal>
	}
}

export default Modal
