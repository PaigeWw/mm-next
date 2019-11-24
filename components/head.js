import Head from "next/head"

function IndexPage() {
	return (
		<Head>
			<title>MR MISS</title>
			<style global jsx>{`
				body,
				html,
				#__next {
					height: 100%;
					margin: 0;
					font-size: 0.14rem;
				}
			`}</style>
			<script
				dangerouslySetInnerHTML={{
					__html: `function resizeFontSize() {
                        const docEl = document.documentElement;
                        const { clientWidth } = docEl;
                        if (!clientWidth) return;
                        const fs = 100 * (clientWidth / 1920);
                        docEl.style.fontSize = fs + 'px';
                    }
                    window.onload = resizeFontSize
                    window.onresize = resizeFontSize;`
				}}
			></script>
		</Head>
	)
}

export default IndexPage
