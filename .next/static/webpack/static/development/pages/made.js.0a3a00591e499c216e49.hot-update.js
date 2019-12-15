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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleDetails = props.styleDetails;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([false, false]),
      curSelectedColorIds = _useState[0],
      setCurSelectedColorIds = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      curStyleIndex = _useState2[0],
      setCurStyleIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([false, false]),
      curStyleImgs = _useState3[0],
      setCurStyleImgs = _useState3[1]; // const [colorList, setColorList] = useState(styleDetails[0].plainColors)


  var handleSelect = function handleSelect(item, type) {
    if (item.colorId === curSelectedColorIds[curStyleIndex]) {
      curSelectedColorIds[curStyleIndex] = false;
      setCurSelectedColorIds([].concat(curSelectedColorIds));
      curStyleImgs.splice(curStyleIndex, 1, false);
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
  }; // useEffect(() => {
  // 	setCurSelectedColorId(false)
  // }, [curStyleIndex])


  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "6.75rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleDetails) && styleDetails.map(function (style, index) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
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
        lineNumber: 72
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_6__["baseUrl"] + (curStyleImgs[index] ? curStyleImgs[index] : style.imgUrl),
      sx: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1],
    mb: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, styleDetails[curStyleIndex].styleNo)), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_4__["ColorList"], {
    colorList: styleDetails[curStyleIndex].plainColors,
    handleSelect: handleSelect,
    curChannelId: 0,
    channelInfoList: [{
      channelId: 0,
      plainColorIds: [curSelectedColorIds[curStyleIndex]]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "0.3rem",
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_4__["PaintList"], {
    paintList: styleDetails[curStyleIndex].flowerColors,
    handleSelect: handleSelect,
    curChannelId: 0,
    channelInfoList: [{
      channelId: 0,
      flowerColorIds: [curSelectedColorIds[curStyleIndex]]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "FINISH")))));
});

/***/ })

})
//# sourceMappingURL=made.js.0a3a00591e499c216e49.hot-update.js.map