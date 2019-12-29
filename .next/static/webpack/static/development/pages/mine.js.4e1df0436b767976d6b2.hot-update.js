webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/number-input.js":
/*!************************************!*\
  !*** ./components/number-input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/number-input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ArrowButton = function ArrowButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "center",
    alignItems: "center",
    variant: "primary",
    padding: "0.16rem 0",
    width: "0.2rem",
    height: "0.2rem",
    sx: {
      color: "#000",
      borderRadius: 0,
      // transform: `rotateZ(${props.deg}deg)`,
      cursor: "pointer"
    },
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    mr: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(ArrowButton, {
    text: "\u25B2",
    onClick: props.upValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    width: "0.6rem",
    height: "0.4rem",
    p: "0",
    textAlign: "center",
    value: props.value,
    sx: {
      apearance: "none"
    },
    onChange: function onChange(e) {
      props.onChange(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(ArrowButton, {
    text: "\u25BC",
    onClick: props.downValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=mine.js.4e1df0436b767976d6b2.hot-update.js.map