webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/commons/min-style-item.js":
/*!**********************************************!*\
  !*** ./components/commons/min-style-item.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _style_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-img */ "./components/commons/style-img.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/commons/min-style-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleList = props.styleList,
      collected = props.collected,
      svgId = props.svgId;
  console.log("collected", collected);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "auto",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "50px",
    mt: "16px",
    mb: "16px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleList) && styleList.map(function (style, index) {
    return __jsx(_style_img__WEBPACK_IMPORTED_MODULE_3__["default"], {
      svgId: svgId,
      key: "style-img-".concat(index),
      width: "50px",
      svgUrl: style.style.svgUrl,
      shadowUrl: style.style.shadowUrl,
      colors: style.colors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  })));
});

/***/ })

})
//# sourceMappingURL=mine.js.677e55643f646dc1d7e6.hot-update.js.map