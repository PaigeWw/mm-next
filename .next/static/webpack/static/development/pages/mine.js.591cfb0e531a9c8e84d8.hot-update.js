webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/order-detail.js":
/*!*******************************************!*\
  !*** ./components/tables/order-detail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _commons_min_style_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/min-style-item */ "./components/commons/min-style-item.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/order-detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import InputNumber from "../number-input"
// import request from "../../utils/request"

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var OrderDetail = props.OrderDetail;
  var line = props.OrderDetail.orderData.length; // const {orderData} = OrderDetail

  console.log(OrderDetail);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(OrderDetail.orderData),
      orderData = _useState[0],
      setOrderData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(OrderDetail.packageCount),
      packageCount = _useState2[0],
      setPackageCount = _useState2[1];

  var handleChangePackageCount = function handleChangePackageCount(num) {
    if (num < 1) return;
    setPackageCount(num);
    orderData.map(function (order, index) {
      order.total = getItemsTotal(index) * num;
    });
    setOrderData([].concat(orderData));
  };

  var handleChangeOrder = function handleChangeOrder(styleIndex, sizeIndex, num) {
    console.log(num);
    if (num < 0) return;
    orderData[styleIndex].sizeInfo[sizeIndex].num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(num, 10);
    var allNumSum = getItemsTotal(styleIndex);
    orderData[styleIndex].total = allNumSum * packageCount;
    var temp = new Number(allNumSum * packageCount * orderData[styleIndex].signalPrice);
    orderData[styleIndex].totalPrice = temp.toFixed(2);
    setOrderData([].concat(orderData)); // console.log("orderData", orderData)
  };

  var getItemsTotal = function getItemsTotal(index) {
    if (index < orderData.length) {
      var count = 0;
      orderData[index].sizeInfo.map(function (size) {
        count += size.num;
      });
      return count;
    }
  };

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    sx: {
      cursor: "pointer",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      padding: "0 18px 18px 18px",
      height: "max-content",
      width: "800px",
      display: "table"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    haveBorder: true,
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
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, orderData.map(function (item, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_3__["TableLine"], {
      noEdit: true,
      key: "selectline-".concat(item._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      rowspan: 2,
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, index), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_3__["ProductInfo"], {
      rowspan: 2,
      styleNum: "XSJHFH00928",
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      rowspan: 2,
      flexDirection: "column",
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_3__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_3__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), __jsx(_commons_min_style_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        lineNumber: 92
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justifyContent: "space-between",
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, item.sizeInfo.map(function (size, sizeIndex) {
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        hasBorder: "1px solid",
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, size.name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, item.sizeInfo[sizeIndex].num));
    })), index > 0 ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
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
        lineNumber: 115
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, packageCount)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, item.total), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      hasBorder: "1px solid",
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, item.signalPrice), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      hasBorder: "1px solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, item.totalPrice));
  }))));
});

/***/ })

})
//# sourceMappingURL=mine.js.591cfb0e531a9c8e84d8.hot-update.js.map