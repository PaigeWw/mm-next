import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

body,
html,
#__next {
    height: 100%;
    margin: 0;
    font-size: 0.14rem;
}
.sortable-helper{
    display: table
}
#one-order-detail th,td{
    padding: 6px;
}

:focus {

outline: 0;

}
`

function IndexPage() {
	return (
		<>
			<Global></Global>
			<Head>
				<title>MR MISS</title>
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<style global jsx>{`
					body,
					html,
					#__next {
						height: 100%;
						margin: 0;
						font-size: 0.14rem;
					}

					input::-webkit-outer-spin-button,
					input::-webkit-inner-spin-button {
						 -webkit-appearance: none;
					}
					input[type="number"] {
						 -moz-appearance: textfield;
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
                    document.addEventListener('DOMContentLoaded', function(event) {
                        console.log('DOMContentLoaded')
                        resizeFontSize();
                      });
                    window.onresize = resizeFontSize;`,
					}}
				></script>
			</Head>
		</>
	)
}

export default IndexPage
