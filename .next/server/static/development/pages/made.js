module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/color-and-paint.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PagerButton = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
  __self: undefined
}, props.children);

const Pager = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(PagerButton, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "<"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  bg: "#EEEEEE",
  lineHeight: "0.26rem",
  width: "0.53rem",
  textAlign: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, props.current), __jsx(PagerButton, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, ">"));

const PaintList = props => {
  const {
    paintList,
    handleSelect,
    channelInfoList,
    curChannelId
  } = props;
  const pIndex = channelInfoList.findIndex(x => x.channelId === curChannelId);
  const usedPlainColorIds = pIndex >= 0 ? channelInfoList[pIndex].flowerColorIds : [];
  if (paintList.length < 1) return null;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "PRINT"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, paintList.map(item => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      backgroundClip: "content-box !important",
      boxSizing: "content-box",
      cursor: "pointer",
      background: `url(${_utils_helper__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + item.value})`,
      backgroundSize: "100% 100% ",
      border: `1px ${usedPlainColorIds.indexOf(item.colorId) >= 0 ? "#000" : "#fff"} solid`
    },
    onClick: () => {
      handleSelect(item, "paint");
    },
    mt: "0.2rem",
    mr: "0.2rem",
    p: "0.08rem",
    width: "0.3rem",
    height: "0.3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))));
};
const ColorList = props => {
  const {
    colorList,
    handleSelect,
    channelInfoList,
    curChannelId
  } = props;
  const cIndex = channelInfoList.findIndex(x => x.channelId === curChannelId);
  const usedPlainColorIds = cIndex >= 0 ? channelInfoList[cIndex].plainColorIds : [];
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    mb: "0.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "COLOUR"), " ", __jsx(Pager, {
    current: "01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "5rem",
    height: "1.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, colorList.map(item => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      cursor: "pointer",
      boxSizing: "content-box",
      backgroundClip: "content-box",
      border: `1px ${usedPlainColorIds.indexOf(item.colorId) >= 0 ? "#000" : "#fff"} solid`
    },
    onClick: () => {
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
      lineNumber: 76
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/head.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function IndexPage() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1708391394",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "MR MISS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1708391394",
    __self: this
  }, "body,html,#__next{height:100%;margin:0;font-size:0.14rem;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;}input[type=\"number\"]{-moz-appearance:textfield;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWlnZS9EZXNrdG9wL3dvcmtzcGFjZS9tbS1uZXh0L2NvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNc0IsQUFLa0IsQUFNYSxBQUdFLFlBUmxCLFNBQ1MsR0FLbkIsRUFHQSxhQVBBIiwiZmlsZSI6Ii9Vc2Vycy9wYWlnZS9EZXNrdG9wL3dvcmtzcGFjZS9tbS1uZXh0L2NvbXBvbmVudHMvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5mdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+TVIgTUlTUzwvdGl0bGU+XG5cdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHRodG1sLFxuXHRcdFx0XHQjX19uZXh0IHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC4xNHJlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcblx0XHRcdFx0aW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRcdFx0XHRcdMKgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuXHRcdFx0XHRcdMKgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzY3JpcHRcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRfX2h0bWw6IGBmdW5jdGlvbiByZXNpemVGb250U2l6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCB9ID0gZG9jRWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNsaWVudFdpZHRoKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcyA9IDEwMCAqIChjbGllbnRXaWR0aCAvIDE5MjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jRWwuc3R5bGUuZm9udFNpemUgPSBmcyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubG9hZCA9IHJlc2l6ZUZvbnRTaXplXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUZvbnRTaXplO2Bcblx0XHRcdFx0fX1cblx0XHRcdD48L3NjcmlwdD5cblx0XHQ8L0hlYWQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/paige/Desktop/workspace/mm-next/components/head.js */"), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: `function resizeFontSize() {
                        const docEl = document.documentElement;
                        const { clientWidth } = docEl;
                        if (!clientWidth) return;
                        const fs = 100 * (clientWidth / 1920);
                        docEl.style.fontSize = fs + 'px';
                    }
                    window.onload = resizeFontSize
                    window.onresize = resizeFontSize;`
    },
    className: "jsx-1708391394",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/made-big-box.js":
/*!************************************!*\
  !*** ./components/made-big-box.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _show_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-style */ "./components/show-style.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-big-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_show_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "10.2rem",
    height: "5.1rem",
    imgWidth: "4.99rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_show_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "3.4rem",
    height: "1.7rem",
    imgWidth: "1.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_show_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "3.4rem",
    height: "1.7rem",
    imgWidth: "1.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_show_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "3.4rem",
    height: "1.7rem",
    imgWidth: "1.4rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })))));
});

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    styleDetails,
    curStyle
  } = props;
  let tempSelectedIds = [curStyle[0].value];
  let tempSelectedImgs = [curStyle[0].imgUrl];

  if (curStyle.length > 1) {
    tempSelectedIds.push(curStyle[1].value);
    tempSelectedImgs.push(curStyle[1].imgUrl);
  } else {
    tempSelectedIds.push(false);
    tempSelectedImgs.push(false);
  }

  const {
    0: curSelectedColorIds,
    1: setCurSelectedColorIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(tempSelectedIds);
  const {
    0: curStyleIndex,
    1: setCurStyleIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: curStyleImgs,
    1: setCurStyleImgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(tempSelectedImgs); // const [colorList, setColorList] = useState(styleDetails[0].plainColors)

  const handleSelect = (item, type) => {
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
          const cIndex = styleDetails[curStyleIndex].plainColors.findIndex(x => x.colorId === item.colorId);
          curStyleImgs.splice(curStyleIndex, 1, styleDetails[curStyleIndex].plainColors[cIndex].front);
          setCurStyleImgs([].concat(curStyleImgs));
          break;

        case "paint":
          const pIndex = styleDetails[curStyleIndex].flowerColors.findIndex(x => x.colorId === item.colorId);
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
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
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
      lineNumber: 73
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleDetails) && styleDetails.map((style, index) => __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "6.75rem",
    padding: "1rem 0",
    alignItems: "center",
    justifyContent: "center",
    sx: {
      border: curStyleIndex === index ? "1px solid #000" : "1px solid #A0A0A0"
    },
    onClick: () => {
      setCurStyleIndex(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_6__["baseUrl"] + (curStyleImgs[index] ? curStyleImgs[index] : style.imgUrl),
    sx: {
      width: "3.79rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  })))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1],
    mb: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
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
      lineNumber: 139
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "0.3rem",
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
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
      lineNumber: 151
    },
    __self: undefined
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
    onClick: () => {
      props.confirmMade(curSelectedColorIds, curStyleImgs);
      props.onClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "FINISH")))));
});

/***/ }),

/***/ "./components/made-style-item.js":
/*!***************************************!*\
  !*** ./components/made-style-item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-style-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    styleList
  } = props;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "6.4rem",
    width: "6.4rem",
    bg: "#E7E7E7",
    sx: {
      cursor: "pointer",
      position: "relative",
      "&:hover": {
        background: "#fff",
        "& .tools": {
          visibility: "visible"
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleList) && styleList.map(style => __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + style.imgUrl,
    sx: {
      width: "2.15rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "1.5rem",
    className: "tools",
    sx: {
      position: "absolute",
      right: "0.3rem",
      top: "0.3rem",
      visibility: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/edit.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: () => {
      props.openEditBox();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/bigger.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: () => {
      console.log("bigger-click");
      props.openBigBox();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "./4/collect.png",
    sx: {
      width: "0.3rem",
      minWidth: "14px",
      minHeight: "14px"
    },
    onClick: props.onAddFavorite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    bg: "#fff",
    flexDirection: "column",
    fontSize: "0.18rem",
    color: "#000",
    p: "0.9rem",
    sx: {
      position: "absolute",
      zIndex: 999999999,
      top: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      margin: "0 auto",
      boxShadow: "0px 14px 44px 5px rgba(0, 0, 0, 0.11)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    onClick: () => {
      props.onClose();
    },
    src: "/3/close.png",
    width: "0.23rem",
    sx: {
      position: "absolute",
      right: "0.42rem",
      top: "0.41rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), props.children);
});

/***/ }),

/***/ "./components/nav-item.js":
/*!********************************!*\
  !*** ./components/nav-item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/nav-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    height: "80px",
    pl: "24px",
    sx: {
      cursor: "pointer",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.5)"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "./1/password-icon.png",
    mr: "10px",
    sx: {
      width: "0.18rem",
      minWidth: "14px",
      height: "0.18rem",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, props.name));
});

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav-item */ "./components/nav-item.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: showNav,
    1: setShowNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showToast,
    1: setShowToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeShowNav() {
    setShowNav(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("click", closeShowNav);
    return () => {
      window.removeEventListener("click", closeShowNav);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "1.8rem",
    height: "0.53rem",
    sx: {
      margin: "0.9rem 0 0.9rem 0.9rem",
      backgroundImage: 'url("/1/LOGO.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    onClick: e => {
      e.nativeEvent.stopPropagation();
      setShowNav(true);
    },
    alignItems: "center",
    mr: "0.9rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "./2/-s-HOME.png",
    mr: "10px",
    sx: {
      width: "0.18rem",
      minWidth: "14px",
      height: "0.18rem",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "HOME"))), showNav ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    onClick: e => {
      e.nativeEvent.stopPropagation();
    },
    flexDirection: "column",
    width: "4.5rem",
    height: "100%",
    bg: "#000",
    pt: "80px",
    sx: {
      color: "#fff",
      position: "fixed",
      zIndex: 9999999,
      right: 0,
      top: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MIME",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "ORDER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "USER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MY COLLECTION",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })) : null);
});

/***/ }),

/***/ "./components/show-style.js":
/*!**********************************!*\
  !*** ./components/show-style.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/show-style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Item = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
  width: props.width,
  height: props.height,
  alignItems: "center",
  justifyContent: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
  src: props.url,
  sx: {
    width: props.imgWidth,
    minWidth: "14px",
    minHeight: "14px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: props.width,
    height: props.width,
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    url: "/4/style2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    url: "/4/style1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/made.js":
/*!***********************!*\
  !*** ./pages/made.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_made_edit_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/made-edit-box */ "./components/made-edit-box.js");
/* harmony import */ var _components_made_big_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/made-big-box */ "./components/made-big-box.js");
/* harmony import */ var _components_made_style_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/made-style-item */ "./components/made-style-item.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/made.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // import SelectAssignTool from "../components/select-assign-tool"

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: styleDetails,
    1: setStyleDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: showBigBox,
    1: setShowBigBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showEditBox,
    1: setShowEditBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: curItemIndex,
    1: setCurItemIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: styleInitData,
    1: setStyleInitData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([[], [], [], [], [], []]);
  const boxNos = [0, 1, 2, 3, 4, 5];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getStyleDetails = async () => {
      let query = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_6__["getPageQuery"])();
      console.log(query);
      let reqList = [];
      const req = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("style/detail", {
        _id: query.id
      }, "get");
      reqList.push(req);

      for (let i = 0; i < 6; i++) {
        styleInitData[i].push({
          imgUrl: req.imgUrl,
          value: false
        });
      }

      if (query.id1) {
        const req1 = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("style/detail", {
          _id: query.id1
        }, "get");
        reqList.push(req1);

        for (let i = 0; i < 6; i++) {
          styleInitData[i].push({
            imgUrl: req1.imgUrl,
            value: false
          });
        }
      }

      setStyleInitData([].concat(styleInitData));
      setStyleDetails(reqList);
    };

    getStyleDetails();
  }, []);

  const handleConfirmMade = (colorIds, imgUrls) => {
    console.log(colorIds, imgUrls);
    if (!colorIds[0]) return;
    styleInitData[curItemIndex] = [{
      colorId: colorIds[0],
      imgUrl: imgUrls[0]
    }];

    if (styleDetails.length > 1) {
      if (!colorIds[1]) return;
      styleInitData[curItemIndex].push({
        colorId: colorIds[1],
        imgUrl: imgUrls[1]
      });
    }

    setStyleInitData([].concat(styleInitData));
  };

  const handleAddFavorite = async index => {
    if (!styleInitData[index][0].colorId) return;
    let params = [{
      styleId: styleDetails[0]._id,
      colorId: styleInitData[index][0].colorId
    }];

    if (styleDetails.length > 1) {
      if (!styleInitData[index][1].colorId) return;
      params.push({
        styleId: styleDetails[1]._id,
        colorId: styleInitData[index][1].colorId
      });
    }

    const res = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("/user/addFavorite", {
      styleAndColor: params
    }, "post");
    console.log(res);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "0.23px",
    bg: "#000",
    color: "#fff",
    width: "19.2rem",
    height: "1.12rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "TOPS"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "BOTTOMS")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, styleInitData.map((style, index) => __jsx(_components_made_style_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: `${index}-style`,
    styleList: style,
    openBigBox: () => {
      setShowBigBox(true);
    },
    onAddFavorite: () => {
      handleAddFavorite(index);
    },
    openEditBox: () => {
      setShowEditBox(true);
      setCurItemIndex(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    fontSize: "0.27rem",
    color: "#fff",
    justifyContent: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    height: "1.13rem",
    width: "9.6rem",
    bg: "#000",
    variant: "primary",
    padding: "0",
    height: "1.13rem",
    width: "9.6rem",
    sx: {
      borderRadius: 0,
      cursor: "pointer"
    },
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.back();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "< RETURN"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    height: "1.13rem",
    width: "9.6rem",
    bg: "#FF8E6C",
    variant: "primary",
    padding: "0",
    height: "1.13rem",
    width: "9.6rem",
    sx: {
      borderRadius: 0,
      cursor: "pointer"
    },
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/mine");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "COMPLETE"))), showBigBox ? __jsx(_components_made_big_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: () => {
      setShowBigBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }) : null, showEditBox ? __jsx(_components_made_edit_box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleDetails: styleDetails,
    curStyle: styleInitData[curItemIndex],
    confirmMade: handleConfirmMade,
    onClose: () => {
      setShowEditBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }) : null));
});

/***/ }),

/***/ "./utils/helper.js":
/*!*************************!*\
  !*** ./utils/helper.js ***!
  \*************************/
/*! exports provided: px2rem, pptPx2rem, baseUrl, getPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px2rem", function() { return px2rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pptPx2rem", function() { return pptPx2rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageQuery", function() { return getPageQuery; });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const px2rem = px => `${px / (750 / 10)}rem`;
const pptPx2rem = px => `${px / (1920 / 10)}rem`;
const baseUrl = "http://192.168.1.3:3000/";
const getPageQuery = () => Object(querystring__WEBPACK_IMPORTED_MODULE_0__["parse"])(window.location.href.split("?")[1]);

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://192.168.1.3:3000/api/",
  // withCredentials: true,
  timeout: 10000,
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
});
instance.interceptors.request.use(config => {
  /**
   * 请求时从本地读取token，并设置headers
   */
  const token = localStorage.token;
  config.headers.Authorization = `Bearer ${token}`;

  if (config.method === "post") {
    config.headers["content-type"] = "application/json";
  }

  console.log(config);
  return config;
}, error => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error));
instance.interceptors.response.use(response => {
  console.log("response", response);

  if (response.config.url.includes("user/login")) {
    if (response.data && response.data.data) {
      localStorage.token = response.data.data.token;
    }
  }

  if (!response.data.success) {//请求出错
  }

  return response.data;
}, error => {
  const response = error.response || {};
  console.log("错误： ", response);
  handleErrorStatus(response.status, response.message);
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(response);
}); // 错误提示

const handleErrorStatus = (status, message) => {
  console.log(status, message);
};

/* harmony default export */ __webpack_exports__["default"] = ((url = "", data = {}, method = "get", origin = false, api) => {
  // var postData = new FormData()
  // for (var prop in data) {
  // 	postData.append(prop, data[prop])
  // }
  const options = method.toLowerCase() === "get" ? {
    params: data
  } : data;
  return instance[method](url, options).then(res => {
    return res.data;
  }).catch(err => {
    // handleErrorStatus(code, err.message)
    console.log("err: ", err);
    return false;
  });
});

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/made.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paige/Desktop/workspace/mm-next/pages/made.js */"./pages/made.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=made.js.map