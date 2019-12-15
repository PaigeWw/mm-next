webpackHotUpdate("static/development/pages/select.js",{

/***/ "./components/color-and-paint.js":
/*!***************************************!*\
  !*** ./components/color-and-paint.js ***!
  \***************************************/
/*! exports provided: PaintList, ColorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintList", function() { return PaintList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorList", function() { return ColorList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/color-and-paint.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PagerButton = function PagerButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    width: "0.26rem",
    height: "0.26rem",
    bg: "#000",
    p: "0",
    sx: {
      borderRadius: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children);
};

var Pager = function Pager(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "<"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    bg: "#EEEEEE",
    lineHeight: "0.26rem",
    width: "0.53rem",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.current), __jsx(PagerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, ">"));
};

var PaintList = function PaintList(props) {
  var paintList = props.paintList,
      handleSelect = props.handleSelect,
      channelInfoList = props.channelInfoList,
      curChannelId = props.curChannelId; // let curChannelId = channelList[curChannelId]._id

  var pIndex = channelInfoList.findIndex(function (x) {
    return x.channelId === curChannelId;
  });
  console.log(pIndex);
  console.log(channelInfoList); // if (cIndex >= 0)

  var usedPlainColorIds = cIndex >= 0 ? channelInfoList[cIndex].flowerColors : [];
  if (paintList.length < 1) return null;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "PRINT"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, paintList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: {
        backgroundClip: "content-box !important",
        boxSizing: "content-box",
        cursor: "pointer",
        background: "url(".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + item.value, ")"),
        backgroundSize: "100% 100% ",
        border: "1px ".concat(item.selected || usedPlainColorIds.indexOf(item.colorId) >= 0 ? "#000" : "#fff", " solid")
      },
      onClick: function onClick() {
        handleSelect(item, "paint");
      },
      mt: "0.2rem",
      mr: "0.2rem",
      p: "0.08rem",
      width: "0.3rem",
      height: "0.3rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  })));
};
var ColorList = function ColorList(props) {
  var colorList = props.colorList,
      handleSelect = props.handleSelect,
      channelInfoList = props.channelInfoList,
      curChannelId = props.curChannelId; // let curChannelId = channelList[curChannelId]._id

  var cIndex = channelInfoList.findIndex(function (x) {
    return x.channelId === curChannelId;
  });
  console.log(cIndex);
  console.log(channelInfoList); // if (cIndex >= 0)

  var usedPlainColorIds = cIndex >= 0 ? channelInfoList[cIndex].plainColorIds : [];
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "COLOUR"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, colorList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: {
        cursor: "pointer",
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "1px ".concat(item.selected || usedPlainColorIds.indexOf(item.colorId) >= 0 ? "#000" : "#fff", " solid")
      },
      onClick: function onClick() {
        handleSelect(item, "color");
      },
      bg: item.value,
      mt: "0.2rem",
      mr: "0.2rem",
      p: "0.08rem",
      width: "0.3rem",
      height: "0.3rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    });
  })));
};

/***/ })

})
//# sourceMappingURL=select.js.5ee28a1dec8466a69fcf.hot-update.js.map