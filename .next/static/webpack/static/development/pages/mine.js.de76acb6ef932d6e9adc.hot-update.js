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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal */ "./components/modal.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/user-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var infos = [{
    name: "name",
    width: "2/22"
  }, {
    name: "account",
    width: "4/22"
  }, {
    name: "password",
    width: "2/22"
  }, {
    name: "aisle",
    width: "1/22"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editUserInfo = _useState[0],
      setUserEditInfo = _useState[1];

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
      lineNumber: 15
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      padding: "0 18px 18px 18px"
    },
    alignItems: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  }, props.userList.map(function (user, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["TableLine"], {
      haveEdit: true,
      onEdit: function onEdit() {
        setUserEditInfo(user);
      },
      haveDel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: {
        padding: "20px 0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, index), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, user.name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, user.channels[0].code), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, user.account), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, user.password), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, user.createTime), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      onClick: function onClick() {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "CLICK TO VIEW"));
  }))), editUserInfo ? __jsx(_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: function onClose() {
      setUserEditInfo(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, infos.map(function (info) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justifyContent: "space-between",
      pb: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mr: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, info.name.toUpperCase(), ":"), __jsx("input", {
      value: editUserInfo[info.name],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }));
  })) : null);
});

/***/ })

})
//# sourceMappingURL=mine.js.de76acb6ef932d6e9adc.hot-update.js.map