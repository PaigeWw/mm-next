webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav-item */ "./components/nav-item.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showNav = _useState[0],
      setShowNav = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showToast = _useState2[0],
      setShowToast = _useState2[1];

  function closeShowNav() {
    setShowNav(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("click", closeShowNav);
    return function () {
      window.removeEventListener("click", closeShowNav);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
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
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    onClick: function onClick(e) {
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
    __self: this
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
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "HOME"))), showNav ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    onClick: function onClick(e) {
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
    __self: this
  }, __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MIME",
    url: "/icon/icon-01.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "ORDER",
    url: "/icon/icon-02.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "USER",
    url: "/icon/icon-03.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "MY COLLECTION",
    url: "/icon/icon-04.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "PRODUCT MANAGER",
    url: "/icon/icon-05.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })) : null);
});

/***/ })

})
//# sourceMappingURL=made.js.5ec946f61757ce6efc42.hot-update.js.map