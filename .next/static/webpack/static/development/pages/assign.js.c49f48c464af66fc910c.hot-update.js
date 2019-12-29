webpackHotUpdate("static/development/pages/assign.js",{

/***/ "./pages/assign.js":
/*!*************************!*\
  !*** ./pages/assign.js ***!
  \*************************/
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
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_assign_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/assign-item */ "./components/assign-item.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/assign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var info = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      goodsList = _useState[0],
      setGoodsList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getGoodsList =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])("goods/getList", "get");

              case 2:
                req = _context.sent;
                setGoodsList(req);
                console.log(req);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getGoodsList() {
        return _ref.apply(this, arguments);
      };
    }();

    getGoodsList();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    height: "100vh",
    justifyContent: "space-between",
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    bg: "#000000",
    width: [1],
    height: "1.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_assign_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
    goodsList: goodsList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=assign.js.c49f48c464af66fc910c.hot-update.js.map