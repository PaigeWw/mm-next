webpackHotUpdate("static/development/pages/select.js",{

/***/ "./components/select-assign-tool/aisle-button.js":
/*!*******************************************************!*\
  !*** ./components/select-assign-tool/aisle-button.js ***!
  \*******************************************************/
/*! exports provided: Title, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/select-assign-tool/aisle-button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Title = function Title(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "100%",
    sx: {},
    mb: "0.43rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.styleNo), __jsx(AisleButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    text: "A"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/3/close.png",
    width: "0.23rem",
    sx: {
      position: "absolute",
      right: "0.42rem",
      top: "0.41rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

var AisleButton = function AisleButton(props) {
  var channelList = props.channelList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showChannels = _useState[0],
      setShowChannels = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "0.32rem",
    width: "0.88rem",
    bg: "#000",
    color: "#fff",
    padding: "0",
    textAlign: "center",
    lineHeight: "0.32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ALSLE"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    height: "0.32rem",
    width: "0.88rem",
    bg: "#FF8E6C",
    color: "#000",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    onClick: function onClick() {
      setShowChannels(!showChannels);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.text)), showChannels ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, channelList.map(function (channel) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      mr: "10px",
      sx: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, channel.name);
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (AisleButton);

/***/ })

})
//# sourceMappingURL=select.js.a79c29387b075e07cc5b.hot-update.js.map