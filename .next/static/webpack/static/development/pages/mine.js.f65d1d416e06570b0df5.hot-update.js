webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/show-style.js":
/*!**********************************!*\
  !*** ./components/show-style.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/show-style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Item = function Item(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: props.width,
    height: props.height,
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + props.url,
    sx: {
      width: props.imgWidth,
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var threeViews = props.threeViews,
      mode = props.mode; // console.log("threeViews", threeViews)

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: props.width,
    height: props.width,
    sx: {
      cursor: "pointer",
      padding: props.padding ? props.padding : 0,
      border: props.border ? props.border : "1px solid #000",
      borderTop: props.border ? "" : "none",
      borderBottom: props.border ? "" : "none",
      borderRight: props.hideRightBorder ? "none" : ""
    },
    onClick: props.toggleMode ? props.toggleMode : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, threeViews.map(function (item, index) {
    return __jsx(Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      url: item[mode],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  }), props.hideInfo ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    alignSelf: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, mode));
});

/***/ })

})
//# sourceMappingURL=mine.js.f65d1d416e06570b0df5.hot-update.js.map