import React, { useMemo } from "react"
import { ReactSVG } from "react-svg"
// export default props => {
// 	const memoDom = useMemo(() => {
// 		return <ReactSVG {...props} />
// 	}, [props.src])
// 	return memoDom
// }

class svg extends React.Component {
	shouldComponentUpdate(nextProps) {
		if (nextProps.src !== this.props.src) {
			// console.log("nextProps.src !== this.props.src")
			return true
		} else {
			return false
		}
	}

	render() {
		return <ReactSVG {...this.props} />
	}
}

export default svg
