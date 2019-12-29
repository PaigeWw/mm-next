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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-table */ "./components/tables/base-table.js");
/* harmony import */ var _show_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../show-style */ "./components/show-style.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/send-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = useState([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      selectList = _useState4[0],
      setSelectList = _useState4[1];

  var getOrderList =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_request__WEBPACK_IMPORTED_MODULE_7__["default"])("/order/getList");

            case 2:
              res = _context.sent;

              if (res) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              setOrderList(data);

            case 6:
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getOrderList();
  }, []);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
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
      lineNumber: 20
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 30
    },
    __self: this
  }, __jsx(_base_table__WEBPACK_IMPORTED_MODULE_5__["TableLine"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      position: "absolute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "02"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "OCT 20,2019"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "OCT 20,2019")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "50"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "50")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "$126.7"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
      lineNumber: 61
    },
    __self: this
  }, "GENERATE ORDERS"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
      lineNumber: 76
    },
    __self: this
  }, "GENERATE ORDERS")));
});

/***/ })

})
//# sourceMappingURL=mine.js.dd343bf51a070ee33f00.hot-update.js.map