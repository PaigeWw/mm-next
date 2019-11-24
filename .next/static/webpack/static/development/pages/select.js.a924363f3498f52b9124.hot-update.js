webpackHotUpdate("static/development/pages/select.js",{

/***/ "./components/select-line.js":
/*!***********************************!*\
  !*** ./components/select-line.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _components_nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-item */ "./components/nav-item.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/nextjs/components/select-line.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ImageBox = function ImageBox(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      "& :hover": {
        background: "#FF8E6C"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.src,
    p: "0.68rem",
    sx: {
      display: "block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    bg: "#DCDCDC",
    mt: "40px",
    sx: {},
    fontSize: "0.23rem",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    bg: "#000",
    width: "3.22rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.kind), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/3/left.png",
    width: "0.12rem",
    height: "0.21rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.data.map(function (item) {
    return __jsx(ImageBox, {
      src: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    bg: "#000",
    width: "3.22rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/3/right.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=select.js.a924363f3498f52b9124.hot-update.js.map