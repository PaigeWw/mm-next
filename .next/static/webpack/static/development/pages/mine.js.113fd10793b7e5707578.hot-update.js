webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/tables/base-table.js":
/*!*****************************************!*\
  !*** ./components/tables/base-table.js ***!
  \*****************************************/
/*! exports provided: TableLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableLine", function() { return TableLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../column */ "./components/column.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/tables/base-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Title = function Title(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    justifyContent: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.titles.map(function (title, key) {
    return __jsx(_column__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: title.width,
      key: "".concat(title.name, "-").concat(key),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, title.name);
  }));
};

var TableLine = function TableLine(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    style: {
      width: "100%",
      border: "1px solid #000"
    },
    bg: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      "& >img": {
        width: "0.3rem"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/5/edit.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/5/1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/5/2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/7/bigger.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: [1],
    flexDirection: "column",
    sx: {
      cursor: "pointer",
      background: "#FFF0E5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Title, {
    titles: props.titles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      margin: "0 18px 18px 18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.children));
});

/***/ })

})
//# sourceMappingURL=mine.js.113fd10793b7e5707578.hot-update.js.map