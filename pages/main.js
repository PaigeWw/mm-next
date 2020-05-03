import dynamic from "next/dynamic"
import { Box } from "rebass"
const SliderComponentWithNoSSR = dynamic(import("../components/carousel"), {
	ssr: false,
})

export default () => (
	<div>
		<SliderComponentWithNoSSR responsive={true}>
			<Box width="200px" height="400px" bg="#eee">
				<h3>1</h3>
			</Box>
			<Box width="200px" height="400px" bg="#efe">
				<h3>2</h3>
			</Box>
			<Box width="200px" height="400px" bg="#fee">
				<h3>3</h3>
			</Box>
			<Box width="200px" height="400px" bg="#0ee">
				<h3>4</h3>
			</Box>
			<Box width="200px" height="400px" bg="#00e">
				<h3>5</h3>
			</Box>
			<Box width="200px" height="400px" bg="#efc">
				<h3>6</h3>
			</Box>
		</SliderComponentWithNoSSR>
	</div>
)
