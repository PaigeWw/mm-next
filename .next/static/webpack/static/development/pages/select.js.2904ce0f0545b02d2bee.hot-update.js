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
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/select-assign-tool/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$currentSeleted = props.currentSeleted,
      sid = _props$currentSeleted.sid,
      top = _props$currentSeleted.top,
      col = _props$currentSeleted.col,
      styleItem = _props$currentSeleted.styleItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      curChannelIndex = _useState[0],
      setCurChannelIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      curChannelInfo = _useState2[0],
      setCurChannelInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      channelList = _useState3[0],
      setChannelList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      colorList = _useState4[0],
      setColorList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      paintList = _useState5[0],
      setPaintList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      sizeList = _useState6[0],
      setSizeList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      channelInfoList = _useState7[0],
      setChannelInfoList = _useState7[1];

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
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])("channel/getList", {}, "get");

              case 2:
                req = _context.sent;
                setChannelList(req);
                console.log("getChannels", req);

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

    getChannels();
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
                  return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])("style/detail", {
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
                  setCurChannelIndex(0);
                  setPaintList(req.flowerColors);
                  setColorList(req.plainColors);
                  setColorList(req.plainColors);
                  setChannelInfoList(req.channels);
                  setSizeList(req.size.values);

                case 12:
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

  var handleSelect = function handleSelect(item, type) {
    switch (type) {
      case "color":
        var cIndex = colorList.findIndex(function (x) {
          return x.colorId === item.colorId;
        });
        colorList[cIndex].selected = !colorList[cIndex].selected; // colorList.splice(index, 1, item.selected=true)

        setColorList([].concat(colorList));
        break;

      case "paint":
        var pIndex = paintList.findIndex(function (x) {
          return x.colorId === item.colorId;
        });
        paintList[pIndex].selected = !paintList[pIndex].selected; // colorList.splice(index, 1, item.selected=true)

        setPaintList([].concat(paintList));
        break;

      default:
        break;
    }
  };

  var handleSelectChannelByIndex = function handleSelectChannelByIndex(index) {
    setCurChannelIndex(index);
  };

  var handleCommitSelected = function handleCommitSelected(index) {
    console.log({
      _id: sid,
      channelId: channelList[curChannelIndex]._id,
      plainColorIds: colorList.filter(function (item) {
        return item.selected;
      }).map(function (x) {
        return x.colorId;
      }),
      flowerColorIds: paintList.filter(function (item) {
        return item.selected;
      }).map(function (x) {
        return x.colorId;
      })
    });
    var res = Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])("/style/assign", {
      _id: sid,
      channelId: channelList[curChannelIndex]._id,
      plainColorIds: colorList.filter(function (item) {
        return item.selected;
      }).map(function (x) {
        return x.colorId;
      }),
      flowerColorIds: paintList.filter(function (item) {
        return item.selected;
      }).map(function (x) {
        return x.colorId;
      })
    }, "post");
    setChannelInfoList(res.channels);
    console.log(res);
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
      lineNumber: 96
    },
    __self: this
  }, __jsx(_aisle_button__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    styleNo: styleItem.styleNo,
    channelList: channelList,
    channelInfoList: channelInfoList,
    onClose: props.onClose,
    curChannelIndex: curChannelIndex,
    onSelectChannelByIndex: handleSelectChannelByIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mb: "0.1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "SIZE\u300CCUP\u300D"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: "100%",
    lineHeight: "0.36rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, sizeList.map(function (size) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      mr: "0.2rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, size.name);
  }))), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_5__["ColorList"], {
    colorList: colorList,
    handleSelect: handleSelect,
    channelInfoList: channelInfoList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_5__["PaintList"], {
    paintList: paintList,
    handleSelect: handleSelect,
    channelInfoList: channelInfoList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
    onClick: handleCommitSelected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "FINISH"));
});

/***/ })

})
//# sourceMappingURL=select.js.2904ce0f0545b02d2bee.hot-update.js.map