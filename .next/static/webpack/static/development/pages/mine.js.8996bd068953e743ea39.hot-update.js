webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./pages/mine.js":
/*!***********************!*\
  !*** ./pages/mine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_tables_collect_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tables/collect-table */ "./components/tables/collect-table.js");
/* harmony import */ var _components_tables_order_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tables/order-table */ "./components/tables/order-table.js");
/* harmony import */ var _components_tables_send_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tables/send-table */ "./components/tables/send-table.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/mine.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showBigBox = _useState[0],
      setShowBigBox = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showEditBox = _useState2[0],
      setShowEditBox = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    sx: {
      flexGrow: 1,
      "& .react-tabs__tab-panel": {},
      "& .react-tabs__tab-panel--selected": {
        flexGrow: 1
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultIndex: 1,
    style: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    style: {
      display: "flex",
      height: "0.8rem",
      padding: "0",
      margin: "0",
      paddingTop: "0.6rem",
      background: "#FFC1AE",
      fontSize: "0.3rem",
      justifyContent: "space-around",
      listStyleType: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    style: {
      lineHeight: "0.8rem",
      flex: 1,
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "1 MY COLLECTION"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    defaultFocus: true,
    style: {
      lineHeight: "0.8rem",
      flex: 1,
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "2 PRODUCTION ORDER"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    style: {
      lineHeight: "0.8rem",
      flex: 1,
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "3 ORDER SENT"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    style: {
      lineHeight: "0.8rem",
      flex: 1,
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "4 MY ORDER"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    style: {
      lineHeight: "0.8rem",
      flex: 1,
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "USER MANAGEMENT")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_tables_collect_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_components_tables_order_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_components_tables_send_table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=mine.js.8996bd068953e743ea39.hot-update.js.map