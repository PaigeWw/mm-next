webpackHotUpdate("static/development/pages/select.js",{

/***/ "./components/select-assign-tool.js":
/*!******************************************!*\
  !*** ./components/select-assign-tool.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _components_nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-item */ "./components/nav-item.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/nextjs/components/select-assign-tool.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AssignItem = function AssignItem(props) {
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

var Title = function Title(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    height: "1rem",
    width: "100%",
    sx: {
      "& :hover": {
        background: "#FF8E6C"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.18rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "2010000XJLS")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/3/close.png",
    p: "0.68rem",
    sx: {
      display: "block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showScroll = _useState[0],
      setShowScroll = _useState[1];

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    bg: "#fff",
    fontSize: "0.18rem",
    color: "#000",
    sx: {
      position: "absolute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/select.js":
/*!*************************!*\
  !*** ./pages/select.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_select_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/select-bar */ "./components/select-bar.js");
/* harmony import */ var _components_select_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select-line */ "./components/select-line.js");
/* harmony import */ var _components_select_assign_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/select-assign-tool */ "./components/select-assign-tool.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/nextjs/pages/select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    sx: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_select_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_select_line__WEBPACK_IMPORTED_MODULE_5__["default"], {
    kind: "TOPS",
    data: ["/3/1.png", "/3/1.png", "/3/1.png", "/3/1.png"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_select_line__WEBPACK_IMPORTED_MODULE_5__["default"], {
    kind: "BOTTOMS",
    data: ["/3/4.png", "/3/4.png", "/3/4.png", "/3/4.png"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_select_line__WEBPACK_IMPORTED_MODULE_5__["default"], {
    kind: "TOPS",
    data: ["/3/2.png", "/3/2.png", "/3/2.png", "/3/2.png"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(_components_select_assign_tool__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=select.js.421110d60cae46ac774a.hot-update.js.map