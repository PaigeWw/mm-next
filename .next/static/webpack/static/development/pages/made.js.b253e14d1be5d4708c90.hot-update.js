webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/made-edit-box.js":
/*!*************************************!*\
  !*** ./components/made-edit-box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleDetails = props.styleDetails;
  console.log("made-edit-box");
  console.log(styleDetails[0].flowerColors);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      curStyleIndex = _useState[0],
      setCurStyleIndex = _useState[1]; // const [colorList, setColorList] = useState(styleDetails[0].plainColors)


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(styleDetails[0].flowerColors),
      paintList = _useState2[0],
      setPaintList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (styleDetails && styleDetails.length > 0) {
      setPaintList(styleDetails[0].flowerColors);
      setColorList(styleDetails[0].plainColors);
    }
  }, [styleDetails]);
  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "6.75rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "6.75rem",
    height: "4.88rem",
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/4/style2.png",
    sx: {
      width: "3.79rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "6.75rem",
    height: "4.88rem",
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "./4/style1.png",
    sx: {
      width: "3.89rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_3__["ColorList"], {
    colorList: styleDetails[curStyleIndex].plainColors,
    handleSelect: function handleSelect() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_3__["PaintList"], {
    paintList: styleDetails[curStyleIndex].flowerColors,
    handleSelect: function handleSelect() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=made.js.b253e14d1be5d4708c90.hot-update.js.map