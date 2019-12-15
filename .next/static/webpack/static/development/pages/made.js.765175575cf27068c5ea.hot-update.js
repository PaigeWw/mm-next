webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/made-edit-box.js":
/*!*************************************!*\
  !*** ./components/made-edit-box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleDetails = props.styleDetails;
  console.log("made-edit-box");
  console.log(styleDetails[0].flowerColors);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      curStyleIndex = _useState[0],
      setCurStyleIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([false, false]),
      curStyleImgs = _useState2[0],
      setCurStyleImgs = _useState2[1]; // const [colorList, setColorList] = useState(styleDetails[0].plainColors)


  var handleSelect = function handleSelect(item, type) {
    switch (type) {
      case "color":
        var cIndex = styleDetails[curStyleIndex].plainColors.findIndex(function (x) {
          return x._id === item._id;
        });
        curStyleImgs.splice(curStyleIndex, 1, styleDetails[curStyleIndex].plainColors[cIndex].front);
        console.log("curStyleImgs~~~~");
        console.log(curStyleImgs);
        setCurStyleImgs([].concat(curStyleImgs));
        break;

      case "paint":
        var pIndex = styleDetails[curStyleIndex].flowerColors.findIndex(function (x) {
          return x._id === item._id;
        });
        curStyleImgs.splice(curStyleIndex, 1, styleDetails[curStyleIndex].flowerColors[cIndex].front);
        setCurStyleImgs([].concat(curStyleImgs));
        break;

      default:
        break;
    }
  };

  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "6.75rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(styleDetails) && styleDetails.map(function (style, index) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      width: "6.75rem",
      padding: "1rem 0",
      alignItems: "center",
      justifyContent: "center",
      sx: {
        border: curStyleIndex === index ? "1px solid #000" : "none"
      },
      onClick: function onClick() {
        setCurStyleIndex(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + (curStyleImgs[index] ? curStyleImgs[index] : style.imgUrl),
      sx: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, props.styleNo), __jsx(AisleButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    text: "A"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_5__["ColorList"], {
    colorList: styleDetails[curStyleIndex].plainColors,
    handleSelect: handleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_5__["PaintList"], {
    paintList: styleDetails[curStyleIndex].flowerColors,
    handleSelect: handleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=made.js.765175575cf27068c5ea.hot-update.js.map