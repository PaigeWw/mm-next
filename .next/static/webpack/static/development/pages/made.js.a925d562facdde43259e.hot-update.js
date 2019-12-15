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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-style-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleList = props.styleList;
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
      lineNumber: 7
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleList) && styleList.map(function (style) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + style.imgUrl,
      sx: {
        width: "2.15rem",
        minWidth: "14px",
        minHeight: "14px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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
      lineNumber: 45
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
      lineNumber: 57
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
      lineNumber: 68
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/collect.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=made.js.a925d562facdde43259e.hot-update.js.map