webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/commons/style-img.js":
/*!*****************************************!*\
  !*** ./components/commons/style-img.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/commons/style-img.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import React, { useEffect, useMemo } from 'react';
// import { ReactSVG } from 'react-svg';
// // import { Image } from 'rebass';
// import { api } from '@/utils/apiconfig';

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var width = props.width,
      svgUrl = props.svgUrl,
      shadowUrl = props.shadowUrl,
      key = props.key,
      colors = props.colors,
      svgId = props.svgId,
      styleId = props.styleId,
      imgVals = props.imgVals,
      onSetEditSvgGroupIndex = props.onSetEditSvgGroupIndex;
  return __jsx("div", {
    style: {
      position: "relative",
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(api, "/").concat(shadowUrl),
    style: {
      width: width,
      position: "absolute",
      left: 0,
      pointerEvents: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    style: {
      width: width,
      minWidth: "14px"
    },
    afterInjection: function afterInjection(error, svg) {
      if (error) {
        console.error(error);
        return;
      }

      if (colors && colors.length > 0) {
        var j = 0;

        for (var i = 0; i < svg.children.length; i++) {
          if (svg.children[i].tagName === "g" || svg.children[i].tagName === "path") {
            if (onSetEditSvgGroupIndex) {
              (function () {
                var jj = j;

                svg.children[i].onclick = function (e) {
                  // console.log(e.target)
                  onSetEditSvgGroupIndex(jj);
                };
              })();
            } // svg.children[i].setAttribute('index', j);


            if (j < colors.length && colors[j]) {
              svg.children[i].style.fill = colors[j].type ? "url(\"#".concat(styleId, "-").concat(colors[j]._id, "-").concat(j, "\")") : colors[j].value;
            }

            j++;
          }
        }
      }
    },
    renumerateIRIElements: false,
    loading: function loading() {
      console.log("loading");
      return "loading";
    },
    beforeInjection: function beforeInjection(svg) {
      svg.setAttribute("id", svgId || key);
      var svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.appendChild(svgDefs);
      svg.setAttribute("style", "width: ".concat(width, "; height: 100%"));

      for (var i = 0; i < colors.length; i++) {
        var color = colors[i];

        if (color && color.type) {
          console.log("imgVals", imgVals);
          var svgPattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
          svgPattern.setAttribute("id", "".concat(styleId, "-").concat(color._id, "-").concat(i)); // editPatterns[color._id] = svgPattern

          svgPattern.setAttribute("patternUnits", "userSpaceOnUse");
          svgPattern.setAttribute("patternContentUnits", "userSpaceOnUse");

          if (svg.width.baseVal.unitType === 2) {
            svg.setAttribute("width", "".concat(svg.viewBox.baseVal.width, "px"));
          }

          var W = color.size * svg.width.baseVal.value / 20 * imgVals.scale;
          var H = W * color.height / color.width;
          svgPattern.setAttribute("width", "".concat(W, "px"));
          svgPattern.setAttribute("height", "".concat(H, "px"));
          svgPattern.x.baseVal.value = imgVals.x;
          svgPattern.y.baseVal.value = imgVals.y;
          var svgPatternImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
          svgPatternImage.setAttribute("width", "".concat(W, "px"));
          svgPatternImage.setAttribute("height", "".concat(H, "px"));
          svgPatternImage.href.baseVal = "".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(color.value); // editSvgs.svgDefs.appendChild(svgPattern)

          svgPattern.appendChild(svgPatternImage);
          svgDefs.appendChild(svgPattern);
        }
      }
    },
    evalScripts: "always",
    src: "".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(svgUrl),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
}); // export default props => {
// 	const { width, svgUrl, shadowUrl, key, colors, svgId, styleId } = props
// 	console.log(colors)
// 	let svgElement = false
// 	useEffect(() => {
// 		// if()
// 		// ;`url(${colors[0]._id})`
// 	}, [])
// 	useEffect(() => {
// 		// if()
// 		if (!svgElement || !colors) return
// 		let j = 0
// 		for (let i = 0; i < svgElement.children.length; i++) {
// 			if (
// 				svgElement.children[i].tagName === "g" ||
// 				(svgElement.children[i].tagName === "path" && j < colors.length)
// 			) {
// 				svgElement.children[i].style.fill = colors[i].type
// 					? `url("#${styleId}-${colors[j]._id}-${i}")`
// 					: colors[j].value
// 				j++
// 			}
// 		}
// 	}, [colors])
// 	return (
// 		<div
// 			style={{
// 				position: "relative",
// 				width: width
// 			}}
// 		>
// 			<Image
// 				src={baseUrl + shadowUrl}
// 				sx={{
// 					width: width,
// 					position: "absolute",
// 					left: 0
// 				}}
// 			/>
// 			<ReactSVG
// 				style={{
// 					width: width,
// 					minWidth: "14px"
// 				}}
// 				afterInjection={(error, svg) => {
// 					if (error) {
// 						console.error(error)
// 						return
// 					}
// 					if (colors && colors.length > 0 && colors[0]) {
// 						let j = 0
// 						for (let i = 0; i < svg.children.length; i++) {
// 							if (
// 								svg.children[i].tagName === "g" ||
// 								svg.children[i].tagName === "path"
// 							) {
// 								console.log(colors)
// 								svg.children[i].style.fill = colors[j].type
// 									? `url("#${styleId}-${colors[j]._id}-${j}")`
// 									: colors[j].value
// 								j++
// 							}
// 						}
// 					}
// 				}}
// 				renumerateIRIElements={false}
// 				loading={() => {
// 					console.log("loading")
// 					return "loading"
// 				}}
// 				beforeInjection={svg => {
// 					svg.setAttribute("id", svgId || key)
// 					let svgDefs = document.createElementNS(
// 						"http://www.w3.org/2000/svg",
// 						"defs"
// 					)
// 					svg.appendChild(svgDefs)
// 					svg.setAttribute("style", `width: ${width}; height: 100%`)
// 					for (let i = 0; i < colors.length; i++) {
// 						let color = colors[i]
// 						if (color.type) {
// 							let svgPattern = document.createElementNS(
// 								"http://www.w3.org/2000/svg",
// 								"pattern"
// 							)
// 							svgPattern.setAttribute("id", `${styleId}-${color._id}-${i}`)
// 							// editPatterns[color._id] = svgPattern
// 							svgPattern.setAttribute("patternUnits", "userSpaceOnUse")
// 							svgPattern.setAttribute("patternContentUnits", "userSpaceOnUse")
// 							const imgVals = { scale: 1 }
// 							let W =
// 								((color.size * svg.width.baseVal.value) / 20) * imgVals.scale
// 							let H = (W * color.height) / color.width
// 							svgPattern.setAttribute("width", `${W}px`)
// 							svgPattern.setAttribute("height", `${H}px`)
// 							let svgPatternImage = document.createElementNS(
// 								"http://www.w3.org/2000/svg",
// 								"image"
// 							)
// 							svgPatternImage.setAttribute("width", `${W}px`)
// 							svgPatternImage.setAttribute("height", `${H}px`)
// 							svgPatternImage.href.baseVal = `${baseUrl}${color.value}`
// 							// editSvgs.svgDefs.appendChild(svgPattern)
// 							svgPattern.appendChild(svgPatternImage)
// 							svgDefs.appendChild(svgPattern)
// 						}
// 					}
// 				}}
// 				evalScripts="always"
// 				src={baseUrl + svgUrl}
// 			/>
// 		</div>
// 	)
// }

/***/ })

})
//# sourceMappingURL=made.js.e30c7f60a4515edd13e4.hot-update.js.map