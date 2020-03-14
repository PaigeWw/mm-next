webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/user-table.js":
/*!*****************************************!*\
  !*** ./components/tables/user-table.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/user-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    sx: {
      cursor: "pointer",
      height: "100%",
      background: "#FFF0E5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      padding: "0 18px 18px 18px"
    },
    alignItems: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      margin: "0",
      marginRight: "1px",
      width: "100%"
    },
    titles: [{
      name: "00",
      width: "2/22",
      isHide: true
    }, {
      name: "NAME",
      width: "2/22"
    }, {
      name: "ACCOUNT",
      width: "4/22"
    }, {
      name: "PASSWORD",
      width: "2/22"
    }, {
      name: "AISLE",
      width: "1/22"
    }, {
      name: "CREATION TIME",
      width: "2/22"
    }, {
      name: "ORDER",
      width: "2/22"
    }, {
      name: "OPERATING",
      width: "2/22"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.userList.map(function (user, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["TableLine"], {
      hasEdit: true,
      hasDel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: {
        padding: "20px 0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, index), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, user.name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, user.channels[0].code), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, user.account), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, user.password), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, user.createTime), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "CLICK TO VIEW"));
  }))));
});

/***/ })

})
//# sourceMappingURL=mine.js.3b202bc4be5d069c4540.hot-update.js.map