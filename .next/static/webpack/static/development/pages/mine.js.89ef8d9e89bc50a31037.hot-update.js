webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/order-table.js":
/*!******************************************!*\
  !*** ./components/tables/order-table.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _show_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show-style */ "./components/show-style.js");
/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../number-input */ "./components/number-input.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/order-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var selectStyles = props.selectStyles;
  var line = props.selectStyles.length;
  console.log(selectStyles);
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
      lineNumber: 12
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      padding: "0 18px 18px 18px",
      height: "max-content",
      display: "table"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
      name: "SECTION NUMBER",
      width: "2/22"
    }, {
      name: "COLOUR",
      width: "4/22"
    }, {
      name: "IMAGE",
      width: "1/22"
    }, {
      name: "SIZE",
      width: "2/22"
    }, {
      name: "PACKAGES",
      width: "2/22"
    }, {
      name: "QUANTITY",
      width: "2/22"
    }, {
      name: "PRICE",
      width: "4/22"
    }, {
      name: "TOTAL AMOUN",
      width: "1/22"
    }, {
      name: "DELETE",
      width: "2/22"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, selectStyles.map(function (collect, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["TableLine"], {
      haveDel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, index), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      styleNum: "XSJHFH00928",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx(_show_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: collect.id,
      imgWidth: "0.95rem",
      mode: "POSITIVE",
      threeViews: collect.threeViews,
      border: "none",
      hideInfo: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justifyContent: "space-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mr: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "S"), __jsx(_number_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))), index > 0 ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      rowspan: line,
      hasBorder: "1px solid",
      justifyContent: "center",
      alignItems: "center",
      sx: {
        width: "100%",
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_number_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "10"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "$65.78"));
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    height: "1.13rem",
    width: "19.2rem",
    bg: "#000",
    color: "#fff",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.27rem",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "COMPLETE"));
});

/***/ })

})
//# sourceMappingURL=mine.js.89ef8d9e89bc50a31037.hot-update.js.map