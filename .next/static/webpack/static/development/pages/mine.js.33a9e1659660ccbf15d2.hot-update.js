webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/order-table.js":
/*!******************************************!*\
  !*** ./components/tables/order-table.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _show_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../show-style */ "./components/show-style.js");
/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../number-input */ "./components/number-input.js");








var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/order-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var selectStyles = props.selectStyles;
  var line = props.selectStyles.length;
  console.log(selectStyles);
  var initData = selectStyles.map(function (x) {
    var sizeInfo = x.details[0].size.values.map(function (item) {
      return _objectSpread({}, item, {
        num: 0
      });
    });
    console.log();
    return {
      id: x.id,
      sizeInfo: sizeInfo,
      total: 0,
      signalPrice: x.details[0].price + (x.details.length > 1 ? x.details[1].price : 0)
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(initData),
      orderData = _useState[0],
      setOrderData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(1),
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
    orderData[styleIndex].sizeInfo[sizeIndex].num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(num, 10);
    var allNumSum = getItemsTotal(styleIndex);
    console.log("handleChangeOrder", allNumSum);
    orderData[styleIndex].total = allNumSum * packageCount;
    setOrderData([].concat(orderData));
    console.log("orderData", orderData);
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

  var handleSubmitOrder = function handleSubmitOrder() {
    console.log({
      packageCount: packageCount,
      orderData: orderData
    });
  };

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    sx: {
      cursor: "pointer",
      height: "100%",
      background: "#FFF0E5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    sx: {
      padding: "0 18px 18px 18px",
      height: "max-content",
      display: "table"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 75
    },
    __self: this
  }, selectStyles.map(function (collect, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_10__["TableLine"], {
      haveDel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, index), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_10__["ProductInfo"], {
      styleNum: "XSJHFH00928",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_10__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(_base_table__WEBPACK_IMPORTED_MODULE_10__["ProductInfo"], {
      made: "2110 YE GREEN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), __jsx(_show_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: collect.id,
      imgWidth: "0.95rem",
      mode: "POSITIVE",
      threeViews: collect.threeViews,
      border: "none",
      hideInfo: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
      justifyContent: "space-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, collect.details[0].size.values.map(function (size, sizeIndex) {
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        mr: "10px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, size.name), __jsx(_number_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: orderData[index].sizeInfo[sizeIndex].num,
        onChange: function onChange(num) {
          handleChangeOrder(index, sizeIndex, num);
          console.log(collect.id, size.name, num);
        },
        upValue: function upValue() {
          handleChangeOrder(index, sizeIndex, orderData[index].sizeInfo[sizeIndex].num + 1);
        },
        downValue: function downValue() {
          handleChangeOrder(index, sizeIndex, orderData[index].sizeInfo[sizeIndex].num - 1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }));
    })), index > 0 ? null : __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
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
        lineNumber: 140
      },
      __self: this
    }, __jsx(_number_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
      value: packageCount,
      onChange: function onChange(num) {
        handleChangePackageCount(num == "" ? 0 : num);
      },
      upValue: function upValue() {
        handleChangePackageCount(packageCount + 1);
      },
      downValue: function downValue() {
        handleChangePackageCount(packageCount - 1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, orderData[index].total), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, orderData[index].signalPrice), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, orderData[index].signalPrice * orderData[index].total * packageCount));
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
    onClick: handleSubmitOrder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "COMPLETE"));
});

/***/ })

})
//# sourceMappingURL=mine.js.33a9e1659660ccbf15d2.hot-update.js.map