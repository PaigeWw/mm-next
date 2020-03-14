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





 // 'channel/assignGoods'  channelId goodsId
// 'channel/getAssignGoods'  channelId goodsId

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var info = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      goodsList = _useState[0],
      setGoodsList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      channelList = _useState2[0],
      setChannelList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      assignGoodsList = _useState3[0],
      setAssignGoodsList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      currentChannel = _useState4[0],
      setCurrentChannel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showChannels = _useState5[0],
      setShowChannels = _useState5[1];

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
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])("goods/getList");

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

    var getChannels =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])("user/getUserChannels");

              case 2:
                req = _context2.sent;
                setChannelList(req.channels);

                if (req.channels.length > 0) {
                  setCurrentChannel(req.channels[0]);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getChannels() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getAssignGoodsList =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])("channel/getAssignGoods");

              case 2:
                req = _context3.sent;
                setAssignGoodsList(req);
                console.log(req);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAssignGoodsList() {
        return _ref3.apply(this, arguments);
      };
    }();

    getChannels();
    getAssignGoodsList();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    height: "100vh" // justifyContent="space-between"
    ,
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, channelList.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    bg: "#000000",
    width: [1],
    pl: "1.1rem",
    lineHeight: "1.14rem",
    sx: {
      height: "1.14rem",
      position: "relative",
      cursor: "pointer"
    },
    color: "#fff",
    onClick: function onClick() {
      setShowChannels(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "".concat(currentChannel.code, "(").concat(currentChannel.name, ")"), showChannels ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: {
      position: "absolute",
      border: "1px solid #000",
      top: "calc(0.507rem + 20px)"
    },
    color: "#000",
    bg: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, channelList.map(function (channel) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      width: "160px",
      lineHeight: "32px",
      pl: "12px",
      sx: {
        "&:hover": {
          background: "#cccccc",
          color: "#fff"
        }
      },
      onClick: function onClick(e) {
        e.nativeEvent.preventDefault();
        e.nativeEvent.stopPropagation();
        setCurrentChannel(channel);
        setShowChannels(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "".concat(channel.code, "(").concat(channel.name, ")"));
  })) : null) : null, __jsx(_components_assign_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
    goodsList: goodsList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=assign.js.b7932ffe0e60fec7c939.hot-update.js.map