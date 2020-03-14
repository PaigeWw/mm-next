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
    onClick: function onClick() {
      props.onChangePage(-1);
    },
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
      lineNumber: 24
    },
    __self: this
  }, props.current), __jsx(PagerButton, {
    onClick: function onClick() {
      props.onChangePage(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, ">"));
};

var PaintList = function PaintList(props) {
  var paintList = props.paintList,
      handleSelect = props.handleSelect,
      selectedList = props.selectedList,
      _onChangePage = props.onChangePage,
      page = props.page; // const pIndex = channelInfoList.findIndex(x => x.channelId === curChannelId)

  var usedPlainColorIds = selectedList.map(function (item) {
    return item._id;
  });
  if (paintList.length < 1) return null;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "PRINT"), " ", __jsx(Pager, {
    current: page,
    onChangePage: function onChangePage(changeNum) {
      return _onChangePage(page + changeNum, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
        border: "1px ".concat(usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff", " solid")
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
        lineNumber: 53
      },
      __self: this
    });
  })));
};
var ColorList = function ColorList(props) {
  var colorList = props.colorList,
      handleSelect = props.handleSelect,
      selectedList = props.selectedList,
      _onChangePage2 = props.onChangePage,
      page = props.page;
  var usedPlainColorIds = selectedList.map(function (item) {
    return item._id;
  });
  console.log(usedPlainColorIds);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "COLOUR"), " ", __jsx(Pager, {
    current: page,
    onChangePage: function onChangePage(changeNum) {
      return _onChangePage2(page + changeNum, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, colorList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: {
        cursor: "pointer",
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "1px ".concat(usedPlainColorIds.indexOf(item._id) >= 0 ? "#000" : "#fff", " solid")
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
        lineNumber: 94
      },
      __self: this
    });
  })));
};

/***/ })

})
//# sourceMappingURL=select.js.58b1d954f558c06bdbc5.hot-update.js.map