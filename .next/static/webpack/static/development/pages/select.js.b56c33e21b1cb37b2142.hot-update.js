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




var PagerButton = function PagerButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    width: "0.26rem",
    height: "0.26rem",
    bg: "#000",
    p: "0",
    sx: {
      borderRadius: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.children);
};

var Pager = function Pager(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "<"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    bg: "#EEEEEE",
    lineHeight: "0.26rem",
    width: "0.53rem",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.current), __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, ">"));
};

var AisleButton = function AisleButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "0.32rem",
    width: "0.88rem",
    bg: "#000",
    color: "#fff",
    padding: "0",
    textAlign: "center",
    lineHeight: "0.32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "ALSLE"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    height: "0.32rem",
    width: "0.88rem",
    bg: "#FF8E6C",
    color: "#000",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.text));
};

var AssignItem = function AssignItem(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      "& :hover": {
        background: "#FF8E6C"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.title));
};

var Title = function Title(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    sx: {},
    mb: "0.43rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "2010000XJLS"), __jsx(AisleButton, {
    text: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/3/close.png",
    width: "0.23rem",
    sx: {
      position: "absolute",
      right: "0.42rem",
      top: "0.41rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showScroll = _useState[0],
      setShowScroll = _useState[1];

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "6.4rem",
    bg: "#fff",
    flexDirection: "column",
    fontSize: "0.18rem",
    color: "#000",
    p: "0.5rem 0.7rem ",
    sx: {
      position: "absolute",
      top: "40px",
      left: "calc(6.4rem)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mb: "0.26rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "SIZE\u300CCUP\u300D"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    lineHeight: "0.36rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "90B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "85B")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "85C"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "90B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "85B")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mb: "0.26rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "COLOUR"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(AisleButton, {
    text: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mb: "0.26rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "PRINT"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(AisleButton, {
    text: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    height: "0.32rem",
    width: "0.88rem",
    bg: "#1B1B1B",
    color: "#000",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "FINISH")));
});

/***/ })

})
//# sourceMappingURL=select.js.b56c33e21b1cb37b2142.hot-update.js.map