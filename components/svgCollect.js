import React from "react"

export default props => {
	const { color, index, width } = props
	return (
		<svg
			width={width}
			id="图层_1"
			data-name="图层 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 56.69 56.69"
			transform="scale(3)"
			onClick={props.onClick}
		>
			<defs>
				<style>{`.cls-${index}{fill:${color};}`}</style>
			</defs>
			<title>icon</title>
			<path
				class={`cls-${index}`}
				d="M24.42,32.69l.73-4.24-3.08-3,4.26-.62L28.23,21l1.91,3.86,4.25.62-3.08,3L32,32.69l-3.81-2Zm3.81-3.13,2.48,1.3-.47-2.76,2-2-2.77-.4-1.24-2.51L27,25.74l-2.77.4,2,2-.48,2.76Z"
			/>
			<path
				class={`cls-${index}`}
				d="M19.73,37.64V19.05H37V37.63l-8.72-3.18Zm8.5-4.26L36,36.2V20.05H20.73V36.2Z"
			/>
		</svg>
	)
}
