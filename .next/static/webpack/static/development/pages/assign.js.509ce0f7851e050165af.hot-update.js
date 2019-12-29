webpackHotUpdate("static/development/pages/assign.js",{

/***/ "./components/assign-item.js":
/*!***********************************!*\
  !*** ./components/assign-item.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/assign-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var goodsList = props.goodsList;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1],
    sx: {
      cursor: "pointer",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.5)"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, goodsList.map(function (goods) {
    return goods.category.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "0.22",
      color: "#fff",
      bg: "#535353",
      sx: {
        height: "0.6rem",
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, goods.name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      width: [1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, goods.category.map(function (category) {
      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        alignItems: "center",
        justifyContent: "space-around",
        width: [1 / 5],
        height: "1.5rem",
        fontSize: "0.14rem",
        bg: "#FFF0E5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, category.name);
    }))) : null;
  }));
});

/***/ })

})
//# sourceMappingURL=assign.js.509ce0f7851e050165af.hot-update.js.map