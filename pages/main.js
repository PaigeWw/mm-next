import dynamic from "next/dynamic"

const SliderComponentWithNoSSR = dynamic(import("../components/carousel"), {
	ssr: false,
})

export default () => (
	<div>
		<SliderComponentWithNoSSR responsive={true} />
	</div>
)
