webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/send-table.js":
/*!*****************************************!*\
  !*** ./components/tables/send-table.js ***!
  \*****************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal */ "./components/modal.js");
/* harmony import */ var _order_detail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-detail */ "./components/tables/order-detail.js");
/* harmony import */ var _commons_min_style_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commons/min-style-item */ "./components/commons/min-style-item.js");









var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/send-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    visible: false,
    detail: {}
  }),
      orderDetailMode = _useState[0],
      setOrderDetailMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      orderDetailList = _useState3[0],
      setOrderDetailList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      selectList = _useState4[0],
      setSelectList = _useState4[1];

  var getOrderList =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_request__WEBPACK_IMPORTED_MODULE_12__["default"])("/order/getMyList", {
                isSend: 0
              });

            case 2:
              res = _context.sent;

              if (res) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              setOrderDetailList(res);
              data = res.map(function (order) {
                var orderData = order.orderData;
                var styleListArr = [];
                var styleList = [];
                var quantity = 0;
                var price = 0;
                orderData.map(function (item) {
                  var styleList = item.favorite.styleAndColor.map(function (x) {
                    // styleList.push({ style: x.style, colors: x.colorIds })
                    return {
                      style: x.style,
                      colors: x.colorIds
                    };
                  });
                  quantity += item.total;
                  price += item.totalPrice;
                  styleListArr.push(threeViews);
                });
                return {
                  quantity: quantity,
                  price: price,
                  styleListArr: styleListArr,
                  date: order.updateTime,
                  id: order._id
                };
              });
              setOrderList(data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getOrderList() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    getOrderList();
  }, []);

  var handleSelect = function handleSelect(index, item) {
    var pos = selectList.findIndex(function (x) {
      return x.index === index;
    });

    if (pos < 0) {
      selectList.push(_objectSpread({
        index: index
      }, item));
    } else {
      selectList.splice(pos, 1);
    }

    setSelectList([].concat(selectList));
  };

  var handleSendOrder =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(selectList);
              _context2.next = 3;
              return Object(_utils_request__WEBPACK_IMPORTED_MODULE_12__["default"])("/order/send", {
                list: selectList.map(function (s) {
                  return s.id;
                })
              }, "post");

            case 3:
              res = _context2.sent;

              if (res) {
                props.nextStep();
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSendOrder() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleCheckDetail = function handleCheckDetail(index) {
    setOrderDetailMode({
      visible: true,
      detail: orderDetailList[index]
    });
  };

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: "100%",
    sx: {
      cursor: "pointer",
      background: "#FFF0E5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, orderDetailMode.visible ? __jsx(_modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClose: function onClose() {
      setOrderDetailMode({
        visible: false,
        detail: {}
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_order_detail__WEBPACK_IMPORTED_MODULE_14__["default"], {
    OrderDetail: orderDetailMode.detail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })) : null, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_11__["default"], {
    titles: [{
      name: "00",
      width: "2/22",
      isHide: true
    }, {
      name: "DATE",
      width: "2/22"
    }, {
      name: "STYLE PREVIEW",
      width: "2/22"
    }, {
      name: "QUANTITY",
      width: "4/22"
    }, {
      name: "PRICE",
      width: "1/22"
    }, {
      name: "ACTION",
      width: "5/22"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, orderList.map(function (order, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_11__["TableLine"], {
      key: "order-".concat(index),
      isSelect: selectList.findIndex(function (x) {
        return index === x.index;
      }) >= 0,
      haveSelect: true,
      onSelect: function onSelect() {
        handleSelect(index, order);
      },
      haveDel: true,
      onDel: function onDel() {
        handleDel(index, {});
      },
      haveEdit: true,
      onEdit: function onEdit() {// setEditIndex(index)
        // setShowEditBox(true)
      },
      Bigger: true,
      onBiger: function onBiger() {
        handleCheckDetail(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Text"], {
      style: {
        position: "absolute"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, index + 1), __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, order.date), __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Flex"], {
      justifyContent: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, order.styleListArr.map(function (item, index1) {
      return __jsx(_commons_min_style_item__WEBPACK_IMPORTED_MODULE_15__["default"], {
        key: "".concat(index, "-style-img"),
        styleList: item,
        index: index,
        tool: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      });
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Text"], {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, order.quantity), __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Text"], {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, order.price));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    variant: "primary",
    height: "1.5rem",
    width: "19.2rem",
    bg: "#000",
    color: "#fff",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.27rem",
      cursor: "pointer"
    },
    onClick: handleSendOrder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "SEND ORDERS")));
});

/***/ })

})
//# sourceMappingURL=mine.js.342dc0719a6d7b96bd08.hot-update.js.map