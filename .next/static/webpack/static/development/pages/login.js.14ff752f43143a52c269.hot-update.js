webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/svg */ "./components/svg.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      modal = _useState[0],
      setMadal = _useState[1]; // 0, 1, 2, 3


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("#231815"),
      svgColor = _useState2[0],
      setSvgColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("chanpin2@miss.com"),
      account = _useState3[0],
      setAccount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("123456"),
      password = _useState4[0],
      setPassword = _useState4[1];

  var signalList = ["AT MRMISS WE LOVE . . .", "EVERY DESIGN", "EVERY PROJECT", "EVERY PRO"];
  var showInfoList = [{
    signal: "AT MRMISS WE LOVE . . .",
    leftColor: "#231815",
    rightColor: "#E74C39"
  }, {
    signal: "AT MRMISS WE LOVE . . .",
    leftColor: "#FF8E6C",
    rightColor: "#B6141E"
  }, {
    signal: "AT MRMISS WE LOVE . . .",
    leftColor: "#434343",
    rightColor: "#784E38"
  }, {
    signal: "AT MRMISS WE LOVE . . .",
    leftColor: "#231815",
    rightColor: "#E74C39"
  }];

  var handleLogin =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var req;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])("user/login", {
                account: "chanpin3@miss.com",
                password: "123456"
              }, "post");

            case 2:
              req = _context.sent;
              console.log(req);

              if (req) {
                next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/main");
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogin() {
      return _ref.apply(this, arguments);
    };
  }();

  var userInfo = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_7__["default"])();
  console.log(userInfo, "userInfo");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    height: "100vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexWrap: "wrap",
    height: ["100%", "62.5vh"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    width: [1, 722 / 1920],
    height: ["100%", "62.5vh"],
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "1.8rem",
    height: "0.53rem",
    sx: {
      margin: "10% 0 0 10%",
      backgroundImage: 'url("/1/LOGO.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    padding: "0 0 10% 10%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    alignItems: "center",
    mb: "2%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "./1/user-icon.png",
    mr: "10px",
    sx: {
      width: "0.18rem",
      minWidth: "14px",
      height: "0.18rem",
      minHeight: "14px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "ACCOUNT NUMBER")), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    width: "3rem",
    height: "0.38rem",
    id: "username",
    value: account,
    onChange: function onChange(e) {
      return setAccount(e.target.value);
    },
    name: "username",
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    alignItems: "center",
    mt: "4%",
    mb: "2%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Image"], {
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
      lineNumber: 107
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "0.14rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "PASSWORD")), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    width: "3rem",
    height: "0.38rem",
    id: "password",
    name: "password",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    width: "1.34rem",
    height: "0.38rem",
    bg: "#000000",
    color: "#ffffff",
    mt: "5.8%",
    onClick: function onClick() {
      return handleLogin();
    },
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "LOADING"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1, 718 / 1920],
    bg: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1, 480 / 1920],
    bg: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexWrap: "wrap",
    height: [0, "37.5vh"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1, 722 / 1920],
    bg: "#E74C39",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    width: [1, 718 / 1920],
    bg: "white",
    fontSize: "0.38rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, signalList.map(function (signal, index) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      sx: {
        textDecoration: index === modal ? "underline" : "none"
      },
      onMouseEnter: function onMouseEnter() {
        setMadal(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, signal);
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: [1, 480 / 1920],
    bg: "#DCDCDC",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_components_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "#231815",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=login.js.14ff752f43143a52c269.hot-update.js.map