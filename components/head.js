import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

body,
html,
#__next {
    font-family: "Helvetica Neue", Helvetica, Arial, PingFang, "Microsoft YaHei", 雅黑体, SimHei, sans-serif;
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
*:not(input) {
    user-select: none;
}
:focus {
    outline: 0;
}
*::-webkit-scrollbar {display:none}
.loading{
            
            text-align: center;
        }
        .loading4 >div{
          width: 10px;
          height: 10px;
          margin: 2px;
          }
          .loading5 >div{
          width: 20px;
          height: 20px;
          margin: 8px;
          }
          
        .loading >div{
       
          border-radius: 100%;
          display:inline-block;
          background-color: #fff;
          opacity: 0.5;
          
          -webkit-animation: three 1.4s infinite ease-in-out;
          animation: three 1.4s infinite ease-in-out;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .black >div{
            background-color: #000;
        }
        .loading .three1{
          -webkit-animation-delay: -0.30s;
          animation-delay: -0.30s;
        }
        .loading .three2{
          -webkit-animation-delay: -0.15s;
          animation-delay: -0.15s;
        }
        @-webkit-keyframes three {
          0%, 80%, 100% {-webkit-transform: scale(0.0) }
          40% { -webkit-transform: scale(1.0) }
        }
        @keyframes three {
          0%, 80%, 100% {-webkit-transform: scale(0.0) }
          40% { -webkit-transform: scale(1.0) }
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
					charSet="UTF-8"
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
