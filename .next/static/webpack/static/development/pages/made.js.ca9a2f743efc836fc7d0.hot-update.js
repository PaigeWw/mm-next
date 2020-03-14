webpackHotUpdate("static/development/pages/made.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/color-and-paint.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PagerButton = function PagerButton(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "0.26rem",
    height: "0.26rem",
    bg: "#000",
    p: "0",
    sx: {
      borderRadius: 0
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

var Pager = function Pager(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(PagerButton, {
    onClick: function onClick() {
      props.onChangePage(-1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "<"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    bg: "#EEEEEE",
    lineHeight: "0.26rem",
    width: "0.53rem",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.current), __jsx(PagerButton, {
    onClick: function onClick() {
      props.onChangePage(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "PRINT"), " ", __jsx(Pager, {
    current: page,
    onChangePage: function onChangePage(changeNum) {
      _onChangePage(page + changeNum, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, paintList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: {
        backgroundClip: "content-box !important",
        boxSizing: "content-box",
        cursor: "pointer",
        background: "url(".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + item.value, ")"),
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
        lineNumber: 56
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
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "COLOUR"), " ", __jsx(Pager, {
    current: page,
    onChangePage: function onChangePage(changeNum) {
      _onChangePage2(page + changeNum, 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, colorList.map(function (item) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
        lineNumber: 99
      },
      __self: this
    });
  })));
};

/***/ })

})
//# sourceMappingURL=made.js.ca9a2f743efc836fc7d0.hot-update.js.map