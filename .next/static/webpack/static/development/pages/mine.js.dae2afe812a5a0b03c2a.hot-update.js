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
/* harmony import */ var _components_tables_self_order_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tables/self-order-table */ "./components/tables/self-order-table.js");
/* harmony import */ var _components_manage_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/manage/index */ "./components/manage/index.js");
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/mine.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_9__["default"])()),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4),
      tabSelectedIndex = _useState2[0],
      setTabSelectedIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      selectStyles = _useState3[0],
      setSelectStyles = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showEditBox = _useState4[0],
      setShowEditBox = _useState4[1];

  console.log(user); // console.log(userInfo)

  var handleSetTabSelectedIndex = function handleSetTabSelectedIndex(index) {
    setTabSelectedIndex(index); // console.log("~~~~~~~~")
  };

  var handleSelectStyleToOrder = function handleSelectStyleToOrder(selectList) {
    setSelectStyles(selectList);
    setTabSelectedIndex(1);
  };

  var handleToSendedOrder = function handleToSendedOrder() {
    setTabSelectedIndex(4);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    className: "wrapper",
    sx: {
      flexGrow: 1,
      "&": {
        ".react-tabs__tab": {
          background: "#000",
          color: "#fff"
        },
        ".react-tabs__tab--selected": {
          flexGrow: 1,
          background: "#FFC1AE !important",
          color: "#000"
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    selectedIndex: tabSelectedIndex,
    style: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    },
    onSelect: handleSetTabSelectedIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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
      lineNumber: 58
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
      lineNumber: 71
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
      lineNumber: 80
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
      lineNumber: 90
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
      lineNumber: 99
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
      lineNumber: 108
    },
    __self: this
  }, "USER MANAGEMENT")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_components_tables_collect_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nextStep: handleSelectStyleToOrder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_components_tables_order_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectStyles: selectStyles,
    nextStep: function nextStep() {
      handleSetTabSelectedIndex(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_components_tables_send_table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    nextStep: function nextStep() {
      handleSetTabSelectedIndex(3);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_components_tables_self_order_table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_components_manage_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    userList: [],
    channelList: [],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))))));
});

/***/ })

})
//# sourceMappingURL=mine.js.dae2afe812a5a0b03c2a.hot-update.js.map