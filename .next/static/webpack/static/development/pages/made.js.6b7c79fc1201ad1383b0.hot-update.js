webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/made-style-item.js":
/*!***************************************!*\
  !*** ./components/made-style-item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _svgCollect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgCollect */ "./components/svgCollect.js");
/* harmony import */ var _commons_style_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commons/style-img */ "./components/commons/style-img.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-style-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleList = props.styleList,
      collected = props.collected,
      index = props.index;
  console.log("collected", collected);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "6.4rem",
    width: "6.4rem",
    bg: "#E7E7E7",
    sx: {
      cursor: "pointer",
      position: "relative",
      "&:hover": {
        background: "#fff",
        "& .tools": {
          visibility: "visible"
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleList) && styleList.map(function (style, index) {
    return __jsx(_commons_style_img__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "style-img-".concat(index),
      width: "2.21rem",
      svgUrl: style.style.svgUrl,
      shadowUrl: style.style.shadowUrl,
      color: style.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "1.5rem",
    className: "tools",
    sx: {
      position: "absolute",
      right: "0.3rem",
      top: "0.3rem",
      visibility: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/edit.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: function onClick() {
      props.openEditBox();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/bigger.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: function onClick() {
      console.log("bigger-click");
      props.openBigBox();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_svgCollect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: collected ? "#FF8E6C" : "#231815" // collected={collected}
    ,
    index: index,
    sx: {
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: props.onAddFavorite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=made.js.6b7c79fc1201ad1383b0.hot-update.js.map