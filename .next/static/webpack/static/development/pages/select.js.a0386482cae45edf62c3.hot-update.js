webpackHotUpdate("static/development/pages/select.js",{

/***/ "./components/select-assign-tool/index.js":
/*!************************************************!*\
  !*** ./components/select-assign-tool/index.js ***!
  \************************************************/
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
/* harmony import */ var _aisle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aisle-button */ "./components/select-assign-tool/aisle-button.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/select-assign-tool/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PagerButton = function PagerButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    width: "0.26rem",
    height: "0.26rem",
    bg: "#000",
    p: "0",
    sx: {
      borderRadius: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children);
};

var Pager = function Pager(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "<"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    bg: "#EEEEEE",
    lineHeight: "0.26rem",
    width: "0.53rem",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.current), __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, ">"));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$currentSeleted = props.currentSeleted,
      sid = _props$currentSeleted.sid,
      top = _props$currentSeleted.top,
      col = _props$currentSeleted.col,
      styleItem = _props$currentSeleted.styleItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showScroll = _useState[0],
      setShowScroll = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      channelList = _useState2[0],
      setChannelList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      colorList = _useState3[0],
      setColorList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      paintList = _useState4[0],
      setPaintList = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getChannels =
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
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("channel/getList", {}, "get");

              case 2:
                req = _context.sent;
                setChannelList(req);
                console.log(req);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getChannels() {
        return _ref.apply(this, arguments);
      };
    }();

    getChannels(); // const getColors = async () => {
    // 	const req = await request("color/getList", { type: "0" }, "get")
    // 	if (!req) return
    // 	setColorList(req)
    // 	console.log(req)
    // }
    // getColors()
    // const getPaints = async () => {
    // 	const req = await request("color/getList", { type: "1" }, "get")
    // 	if (!req) return
    // 	setPaintList(req)
    // }
    // getPaints()
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (props.currentSeleted) {
      var getStyle =
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
                  return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("style/detail", {
                    _id: sid
                  }, "get");

                case 2:
                  req = _context2.sent;

                  if (req) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return");

                case 5:
                  console.log("getStyle", req);
                  setPaintList(req.flowerColors);
                  setColorList(req.plainColors);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getStyle() {
          return _ref2.apply(this, arguments);
        };
      }();

      getStyle();
    }
  }, [props.currentSeleted]);
  var left = (col + 2) * 3.2;

  if (left > 19.2 - 6.4) {
    left = (col - 1) * 3.2;
  }

  var handleSelect = function handleSelect(item) {
    var index = colorList.findIndex(function (x) {
      return x._id === item._id;
    });
    colorList[index].selected = true; // colorList.splice(index, 1, item.selected=true)

    setColorList([].concat(colorList));
  };

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: "6.4rem",
    bg: "#fff",
    flexDirection: "column",
    fontSize: "0.18rem",
    color: "#000",
    p: "0.5rem 0.7rem 0 0.7rem",
    sx: {
      position: "absolute",
      top: "".concat(top, "px"),
      left: "".concat(left, "rem")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_aisle_button__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    styleNo: styleItem.styleNo,
    channelList: channelList,
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mb: "0.26rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "SIZE\u300CCUP\u300D"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    lineHeight: "0.36rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "90B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "85B")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: "100%",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "85C"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "90B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "85B"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "85B")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "COLOUR"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, colorList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      sx: {
        cursor: "pointer",
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "1px ".concat(item.selected ? "#000" : "#fff", " solid")
      },
      onClick: function onClick() {
        handleSelect(item);
      },
      bg: item.value,
      mt: "0.2rem",
      mr: "0.2rem",
      p: "0.08rem",
      width: "0.3rem",
      height: "0.3rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    });
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "PRINT"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, paintList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      sx: {
        backgroundClip: "content-box",
        boxSizing: "content-box",
        cursor: "pointer",
        background: "url(".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_6__["baseUrl"] + item.value, ")"),
        backgroundSize: "100% 100% "
      },
      bg: "url(".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_6__["baseUrl"] + item.value, ")"),
      mt: "0.3rem",
      mr: "0.2rem",
      width: "0.3rem",
      height: "0.3rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    });
  })))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    height: "0.7rem",
    width: "6.4rem",
    bg: "#1B1B1B",
    color: "#fff",
    padding: "0",
    ml: "-0.7rem",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "FINISH"));
});

/***/ })

})
//# sourceMappingURL=select.js.a0386482cae45edf62c3.hot-update.js.map