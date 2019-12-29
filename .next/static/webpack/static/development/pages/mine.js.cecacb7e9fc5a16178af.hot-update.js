webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/send-table.js":
/*!*****************************************!*\
  !*** ./components/tables/send-table.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _show_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../show-style */ "./components/show-style.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/send-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      orderList = _useState[0],
      setOrderList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      orderDetailList = _useState2[0],
      setOrderDetailList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectList = _useState3[0],
      setSelectList = _useState3[1];

  var getOrderList =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_request__WEBPACK_IMPORTED_MODULE_6__["default"])("/order/getMyList");

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
                var threeViewsList = [];
                var quantity = 0;
                var price = 0;
                orderData.map(function (item) {
                  var threeViews = item.favorite.styleAndColor.map(function (x) {
                    return {
                      POSITIVE: x.front
                    };
                  });
                  quantity += item.total;
                  price += item.totalPrice;
                  threeViewsList.push(threeViews);
                });
                return {
                  quantity: quantity,
                  price: price,
                  threeViewsList: threeViewsList,
                  date: order.updateTime
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getOrderList();
  }, []);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
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
      lineNumber: 43
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 53
    },
    __self: this
  }, orderList.map(function (order, index) {
    return __jsx(_base_table__WEBPACK_IMPORTED_MODULE_4__["TableLine"], {
      key: "order-".concat(index),
      isSelect: selectList.findIndex(function (x) {
        return index === x.index;
      }) >= 0,
      haveSelect: true,
      onSelect: function onSelect() {
        handleSelect(index, collect);
      },
      haveDel: true,
      onDel: function onDel() {
        handleDel(index, collect);
      },
      haveEdit: true,
      onEdit: function onEdit() {
        setEditIndex(index);
        setShowEditBox(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      style: {
        position: "absolute"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, index + 1), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, order.date), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      justifyContent: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, order.threeViewsList.map(function (item, index1) {
      return __jsx(_show_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "order-".concat(index, "-").concat(index1),
        imgWidth: "0.95rem",
        mode: "POSITIVE",
        threeViews: item,
        border: "none",
        hideInfo: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      });
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, order.quantity), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      textAlign: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, order.price));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    height: "1.13rem",
    width: "9.6rem",
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
      lineNumber: 101
    },
    __self: this
  }, "GENERATE ORDERS"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    height: "1.13rem",
    width: "9.6rem",
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
      lineNumber: 116
    },
    __self: this
  }, "GENERATE ORDERS")));
});

/***/ })

})
//# sourceMappingURL=mine.js.cecacb7e9fc5a16178af.hot-update.js.map