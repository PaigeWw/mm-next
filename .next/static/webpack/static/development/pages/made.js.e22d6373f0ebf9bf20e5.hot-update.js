webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/made-edit-box.js":
/*!*************************************!*\
  !*** ./components/made-edit-box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleDetails = props.styleDetails,
      curStyle = props.curStyle,
      userInfo = props.userInfo;
  console.log(styleDetails, curStyle);
  var tempSelectedIds = [curStyle[0].colorId];
  var tempSelectedImgs = [curStyle[0].imgUrl];

  if (curStyle.length > 1) {
    tempSelectedIds.push(curStyle[1].colorId);
    tempSelectedImgs.push(curStyle[1].imgUrl);
  } else {
    tempSelectedIds.push(false);
    tempSelectedImgs.push(false);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tempSelectedIds),
      curSelectedColorIds = _useState[0],
      setCurSelectedColorIds = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      curStyleIndex = _useState2[0],
      setCurStyleIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tempSelectedImgs),
      curStyleImgs = _useState3[0],
      setCurStyleImgs = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    docs: []
  }),
      plainColors = _useState4[0],
      setPlainColors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    docs: []
  }),
      flowerColors = _useState5[0],
      setFlowerColors = _useState5[1]; // const [colorList, setColorList] = useState(styleDetails[0].plainColors)


  var handleSelect = function handleSelect(item, type) {
    if (item.colorId === curSelectedColorIds[curStyleIndex]) {
      curSelectedColorIds[curStyleIndex] = false;
      setCurSelectedColorIds([].concat(curSelectedColorIds));
      curStyleImgs.splice(curStyleIndex, 1, false);
      setCurStyleImgs([].concat(curStyleImgs));
    } else {
      curSelectedColorIds[curStyleIndex] = item.colorId;
      setCurSelectedColorIds([].concat(curSelectedColorIds)); // setCurSelectedColorId()

      switch (type) {
        case "color":
          var cIndex = styleDetails[curStyleIndex].plainColors.findIndex(function (x) {
            return x.colorId === item.colorId;
          });
          curStyleImgs.splice(curStyleIndex, 1, styleDetails[curStyleIndex].plainColors[cIndex].front);
          setCurStyleImgs([].concat(curStyleImgs));
          break;

        case "paint":
          var pIndex = styleDetails[curStyleIndex].flowerColors.findIndex(function (x) {
            return x.colorId === item.colorId;
          });
          curStyleImgs.splice(curStyleIndex, 1, styleDetails[curStyleIndex].flowerColors[pIndex].front);
          setCurStyleImgs([].concat(curStyleImgs));
          break;

        default:
          break;
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // if (!curChannel._id) return
    // console.log("curChannel->", curChannel.code)
    var getChannelsAssign =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(styleId, channelId) {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("channel/getAssign", {
                  styleId: styleId,
                  channelId: channelId
                }, "get");

              case 2:
                req = _context.sent;

                if (!req) {
                  setPlainColors({
                    docs: [],
                    page: 1
                  });
                  setFlowerColors({
                    docs: [],
                    page: 1
                  });
                } else {
                  setPlainColors({
                    docs: req.plainColors,
                    page: 1
                  });
                  setFlowerColors({
                    docs: req.flowerColors,
                    page: 1
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getChannelsAssign(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var getColorList =
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
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("color/getList", {
                  type: 0,
                  page: 1,
                  limit: 14
                }, "get");

              case 2:
                req = _context2.sent;
                setPlainColors(req); // console.log("getChannels", req)

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getColorList() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getPaintList =
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
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("color/getList", {
                  type: 1,
                  page: 1,
                  limit: 14
                }, "get");

              case 2:
                req = _context3.sent;
                setFlowerColors(req); // console.log("getChannels", req)

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getPaintList() {
        return _ref3.apply(this, arguments);
      };
    }();

    if (userInfo.role === 0) {
      // 客户
      getChannelsAssign(sid, userInfo.channels[0]);
    } else {
      // 产品经理
      getColorList();
      getPaintList();
    }
  }, []);
  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "6.75rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleDetails) && styleDetails.map(function (style, index) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
      width: "6.75rem",
      padding: "1rem 0",
      alignItems: "center",
      justifyContent: "center",
      sx: {
        border: curStyleIndex === index ? "1px solid #000" : "1px solid #A0A0A0"
      },
      onClick: function onClick() {
        setCurStyleIndex(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + (curStyleImgs[index] ? curStyleImgs[index] : style.imgUrl),
      sx: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px",
        position: "absolute"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), __jsx(react_svg__WEBPACK_IMPORTED_MODULE_4__["ReactSVG"], {
      sx: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px"
      },
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + styleDetails[curStyleIndex].svgUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1],
    mb: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, styleDetails[curStyleIndex].styleNo)), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_7__["ColorList"], {
    colorList: plainColors.docs || [],
    handleSelect: handleSelect,
    curChannelId: 0,
    selectedList: [] // channelInfoList={[
    // 	{
    // 		channelId: 0,
    // 		plainColorIds: [curSelectedColorIds[curStyleIndex]]
    // 	}
    // ]}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    height: "0.3rem",
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_7__["PaintList"], {
    paintList: flowerColors.docs || [],
    handleSelect: handleSelect,
    curChannelId: 0,
    selectedList: [] // channelInfoList={[
    // 	{
    // 		channelId: 0,
    // 		flowerColorIds: [curSelectedColorIds[curStyleIndex]]
    // 	}
    // ]}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    height: "0.7rem",
    width: "100%",
    bg: "#1B1B1B",
    color: "#fff",
    padding: "0",
    mt: "0.7rem",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    onClick: function onClick() {
      if (styleDetails.length > 1 && !curStyleImgs[1]) return;
      props.confirmMade(curSelectedColorIds, curStyleImgs);
      props.onClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "FINISH")))));
});

/***/ })

})
//# sourceMappingURL=made.js.e22d6373f0ebf9bf20e5.hot-update.js.map