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

/***/ "./components/assign-item.js":
/*!***********************************!*\
  !*** ./components/assign-item.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/assign-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IndexName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    goodsList,
    onAssignCategory,
    assignCategoryList
  } = props;
  console.log("assignCategoryList", assignCategoryList);
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
      lineNumber: 8
    },
    __self: undefined
  }, goodsList.map((goods, index) => goods.category.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "0.6rem",
    fontSize: "0.22",
    color: "#fff",
    bg: "#535353",
    sx: {
      height: "0.6rem",
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, `0${index + 1} ${goods.name}`), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: [1],
    flexWrap: "wrap",
    bg: "#FFF0E5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, goods.category.map((category, index) => {
    const isSelected = assignCategoryList.indexOf(category._id) >= 0;
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      alignItems: "center",
      justifyContent: "space-around",
      width: [1 / 5],
      height: "1.5rem",
      fontSize: "0.14rem",
      sx: {
        background: isSelected ? "#FFC1AE" : "",
        "&:hover": {
          background: "#FFC1AE"
        }
      },
      onClick: e => {
        onAssignCategory(category._id, isSelected);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "0.18rem",
      sx: {
        color: "#FF8E6C"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, IndexName[index]), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: {
        color: "#000000"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, category.name));
  }))) : null));
});

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/head.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Global = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
body,
html,
#__next {
    height: 100%;
    margin: 0;
    font-size: 0.14rem;
}
`;

function IndexPage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Global, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3244151324",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "MR MISS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3244151324",
    __self: this
  }, "body,html,#__next{height:100%;margin:0;font-size:0.14rem;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;}input[type=\"number\"]{-moz-appearance:textfield;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWlnZS9EZXNrdG9wL3dvcmtzcGFjZS9tbS1uZXh0L2NvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnVCLEFBS21CLEFBTWEsQUFHRSxZQVJsQixTQUNTLEdBS25CLEVBR0EsYUFQQSIsImZpbGUiOiIvVXNlcnMvcGFpZ2UvRGVza3RvcC93b3Jrc3BhY2UvbW0tbmV4dC9jb21wb25lbnRzL2hlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5ib2R5LFxuaHRtbCxcbiNfX25leHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjE0cmVtO1xufVxuYFxuXG5mdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxHbG9iYWw+PC9HbG9iYWw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPk1SIE1JU1M8L3RpdGxlPlxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRcdGJvZHksXG5cdFx0XHRcdFx0aHRtbCxcblx0XHRcdFx0XHQjX19uZXh0IHtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC4xNHJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5cdFx0XHRcdFx0aW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRcdFx0XHRcdFx0wqAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuXHRcdFx0XHRcdFx0wqAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0XHRfX2h0bWw6IGBmdW5jdGlvbiByZXNpemVGb250U2l6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCB9ID0gZG9jRWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNsaWVudFdpZHRoKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcyA9IDEwMCAqIChjbGllbnRXaWR0aCAvIDE5MjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jRWwuc3R5bGUuZm9udFNpemUgPSBmcyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubG9hZCA9IHJlc2l6ZUZvbnRTaXplXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUZvbnRTaXplO2Bcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+PC9zY3JpcHQ+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/paige/Desktop/workspace/mm-next/components/head.js */"), __jsx("script", {
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
    className: "jsx-3244151324",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
    onClick: props.onLinkTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.url,
    mr: "10px",
    sx: {
      width: "0.18rem",
      minWidth: "14px",
      height: "0.18rem",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
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
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
      lineNumber: 23
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
      lineNumber: 33
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
      lineNumber: 42
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MIME",
    url: "/icon/icon-01.svg",
    onLinkTo: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/mine");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "ORDER",
    url: "/icon/icon-02.svg",
    onLinkTo: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/mine?tab=3");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "USER",
    url: "/icon/icon-03.svg",
    onLinkTo: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/mine?tab=4");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MY COLLECTION",
    url: "/icon/icon-04.svg",
    onLinkTo: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/mine?tab=0");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "PRODUCT MANAGER",
    url: "/icon/icon-05.svg",
    onLinkTo: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/assign?tab=4");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })) : null);
});

/***/ }),

/***/ "./hooks/getUserInfo.js":
/*!******************************!*\
  !*** ./hooks/getUserInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function useUserInfo() {
  const {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ;

    (async function getData() {
      const data = await Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("user/getCurrentUser");
      console.log(data, "data");

      if (data) {
        setInfo(data);
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      }
    })();
  }, []);
  return info;
}

/* harmony default export */ __webpack_exports__["default"] = (useUserInfo);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./pages/assign.js":
/*!*************************!*\
  !*** ./pages/assign.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_assign_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/assign-item */ "./components/assign-item.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/assign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // 'channel/assignGoods'  channelId goodsId
// 'channel/getAssignGoods'  channelId goodsId

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const info = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: goodsList,
    1: setGoodsList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: channelList,
    1: setChannelList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: assignCategoryList,
    1: setAssignCategoryList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentChannel,
    1: setCurrentChannel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: showChannels,
    1: setShowChannels
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getGoodsList = async () => {
      const req = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("goods/getList");
      setGoodsList(req);
      console.log(req);
    };

    getGoodsList();

    const getChannels = async () => {
      const req = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("user/getUserChannels");
      setChannelList(req.channels);

      if (req.channels.length > 0) {
        setCurrentChannel(req.channels[0]);
      }
    };

    getChannels();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!currentChannel._id) return;

    const getAssignCategoryList = async () => {
      const req = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("channel/getAssignCategory", {
        channelId: currentChannel._id
      });

      if (req) {
        setAssignCategoryList(req.categories);
      }

      console.log(req);
    };

    getAssignCategoryList();
  }, [currentChannel]);

  const handleAssignCategory = async (categoryId, toggle) => {
    const res = await Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])("channel/assignCategory", {
      channelId: currentChannel._id,
      categoryId
    }, "post");

    if (res) {
      if (toggle) {
        let index = assignCategoryList.indexOf(categoryId);

        if (index >= 0) {
          assignCategoryList.splice(index, 1);
          setAssignCategoryList([...assignCategoryList]);
        }
      } else {
        setAssignCategoryList([...assignCategoryList, categoryId]);
      }
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    height: "100vh" // justifyContent="space-between"
    ,
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, channelList.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    bg: "#000000",
    width: [1],
    pl: "1.1rem",
    lineHeight: "1.14rem",
    sx: {
      height: "1.14rem",
      position: "relative",
      cursor: "pointer"
    },
    color: "#fff",
    onClick: () => {
      setShowChannels(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, `${currentChannel.code}(${currentChannel.name})`, showChannels ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      position: "absolute",
      border: "1px solid #000",
      top: "calc(0.507rem + 20px)"
    },
    color: "#000",
    bg: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, channelList.map(channel => __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    width: "160px",
    lineHeight: "32px",
    pl: "12px",
    sx: {
      "&:hover": {
        background: "#cccccc",
        color: "#fff"
      }
    },
    onClick: e => {
      e.nativeEvent.preventDefault();
      e.nativeEvent.stopPropagation();
      setCurrentChannel(channel);
      setShowChannels(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, `${channel.code}(${channel.name})`))) : null) : null, __jsx(_components_assign_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    goodsList: goodsList,
    assignCategoryList: assignCategoryList || [],
    onAssignCategory: handleAssignCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }))));
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
const pptPx2rem = px => `${px / (1920 / 10)}rem`; // export const baseUrl = "http://8.209.64.159:3001/"

const baseUrl = "http://192.168.8.109:3000/";
const getPageQuery = () => Object(querystring__WEBPACK_IMPORTED_MODULE_0__["parse"])(window.location.href.split("?")[1]); // const jjj =

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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./utils/helper.js");



const instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  // baseURL: "http://8.209.64.159:3006/api/",
  baseURL: _helper__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "api/",
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
  console.log(url, "url");
  return instance[method](url, options).then(res => {
    console.log(res, "res,....");
    return res.data;
  }).catch(err => {
    // handleErrorStatus(code, err.message)
    console.log("err: ", err);
    return false;
  });
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/assign.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paige/Desktop/workspace/mm-next/pages/assign.js */"./pages/assign.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=assign.js.map