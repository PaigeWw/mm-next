webpackHotUpdate("static/development/pages/assign.js",{

/***/ "./pages/assign.js":
/*!*************************!*\
  !*** ./pages/assign.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_assign_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/assign-item */ "./components/assign-item.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/assign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





 // 'channel/assignGoods'  channelId goodsId
// 'channel/getAssignGoods'  channelId goodsId

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var info = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      goodsList = _useState[0],
      setGoodsList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      channelList = _useState2[0],
      setChannelList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      assignCategoryList = _useState3[0],
      setAssignCategoryList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      currentChannel = _useState4[0],
      setCurrentChannel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showChannels = _useState5[0],
      setShowChannels = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getGoodsList =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("goods/getList");

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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("user/getUserChannels");

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

    getChannels();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!currentChannel._id) return;

    var getAssignCategoryList =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("channel/getAssignCategory", {
                  channelId: currentChannel._id
                });

              case 2:
                req = _context3.sent;

                if (req) {
                  setAssignCategoryList(req.categories);
                }

                console.log(req);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAssignCategoryList() {
        return _ref3.apply(this, arguments);
      };
    }();

    getAssignCategoryList();
  }, [currentChannel]);

  var handleAssignCategory =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(categoryId, toggle) {
      var res, index;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("channel/assignCategory", {
                channelId: currentChannel._id,
                categoryId: categoryId
              }, "post");

            case 2:
              res = _context4.sent;

              if (res) {
                if (toggle) {
                  index = assignCategoryList.indexOf(categoryId);

                  if (index >= 0) {
                    assignCategoryList.splice(index, 1);
                    setAssignCategoryList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(assignCategoryList));
                  }
                } else {
                  setAssignCategoryList([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(assignCategoryList), [categoryId]));
                }
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleAssignCategory(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    height: "100vh" // justifyContent="space-between"
    ,
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, channelList.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
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
      lineNumber: 80
    },
    __self: this
  }, "".concat(currentChannel.code, "(").concat(currentChannel.name, ")"), showChannels ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    sx: {
      position: "absolute",
      border: "1px solid #000",
      top: "calc(0.507rem + 20px)"
    },
    color: "#000",
    bg: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, channelList.map(function (channel) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
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
        lineNumber: 108
      },
      __self: this
    }, "".concat(channel.code, "(").concat(channel.name, ")"));
  })) : null) : null, __jsx(_components_assign_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
    goodsList: goodsList,
    assignCategoryList: assignCategoryList || [],
    onAssignCategory: handleAssignCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=assign.js.51b467345d6345c6e7da.hot-update.js.map