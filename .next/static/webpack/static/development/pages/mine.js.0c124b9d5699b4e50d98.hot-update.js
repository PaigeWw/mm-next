webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/order-detail.js":
/*!*******************************************!*\
  !*** ./components/tables/order-detail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _commons_min_style_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/min-style-item */ "./components/commons/min-style-item.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/order-detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import InputNumber from "../number-input"
// import request from "../../utils/request"

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var OrderDetail = props.OrderDetail;
  var line = props.OrderDetail.orderData.length; // const {orderData} = OrderDetail

  console.log(OrderDetail);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(OrderDetail.orderData),
      orderData = _useState[0],
      setOrderData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(OrderDetail.packageCount),
      packageCount = _useState2[0],
      setPackageCount = _useState2[1];

  var sizeInfoMaxLength = 0;
  orderData.map(function (order) {
    sizeInfoMaxLength = sizeInfoMaxLength > order.sizeInfo.length ? sizeInfoMaxLength : order.sizeInfo.length;
  });
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    sx: {
      cursor: "pointer",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      padding: "0 18px 18px 18px",
      height: "max-content",
      width: "800px",
      display: "table"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hasBorder: "1px solid",
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
      width: "2/22",
      colspan: sizeInfoMaxLength
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
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, orderData.map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["TableLine"], {
      noEdit: true,
      key: "selectline-".concat(item._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      rowspan: 2,
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, index), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      rowspan: 2,
      styleNum: "XSJHFH00928",
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      rowspan: 2,
      flexDirection: "column",
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx(_commons_min_style_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rowspan: 2,
      hasBorder: "1px solid",
      margin: "1px",
      key: "".concat(index, "-style-img"),
      styleList: item.favorite.styleAndColor.map(function (x) {
        // styleList.push({ style: x.style, colors: x.colorIds })
        return {
          style: x.styleId,
          colors: x.colorIds
        };
      }),
      index: index,
      tool: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), item.sizeInfo.map(function (size) {
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexDirection: "column",
        hasBorder: "1px solid",
        width: "28px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, size.name));
    }), index > 0 ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      rowspan: line * 2,
      hasBorder: "1px solid",
      justifyContent: "center",
      alignItems: "center",
      sx: {
        width: "100%",
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, packageCount)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      rowspan: 2,
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, item.total), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      rowspan: 2,
      hasBorder: "1px solid",
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, item.signalPrice), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      rowspan: 2,
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, item.totalPrice)), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_2__["TableLine"], {
      noEdit: true,
      key: "selectline-1-".concat(item._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, item.sizeInfo.map(function (size) {
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        width: "28px",
        justifyContent: "center",
        hasBorder: "1px solid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, size.num));
    })));
  }))));
});

/***/ })

})
//# sourceMappingURL=mine.js.0c124b9d5699b4e50d98.hot-update.js.map