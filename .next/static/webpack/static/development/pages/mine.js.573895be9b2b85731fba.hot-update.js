webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./components/manage/index.js":
/*!************************************!*\
  !*** ./components/manage/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _tables_channel_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/channel-table */ "./components/tables/channel-table.js");
/* harmony import */ var _tables_user_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/user-table */ "./components/tables/user-table.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/manage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      userList = _useState[0],
      setUserList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      channelList = _useState2[0],
      setChannelList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getUserChannels =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return request("user/getUserChannels", {
                  type: 0,
                  page: page,
                  limit: 14
                }, "get");

              case 2:
                req = _context.sent;
                // setPlainColors(req)
                console.log("getUserChannels", req);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUserChannels(_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }, []);
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    textAlign: "center",
    sx: {
      "&": {
        ".react-tabs__tab": {
          background: "#FFF0E5",
          color: "#000",
          height: "100%",
          flexGrow: 1
        },
        ".react-tabs__tab--selected": {
          flexGrow: 1,
          background: "#FF8E6C !important"
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    style: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
    style: {
      display: "flex",
      height: "0.4rem",
      minHeight: "24px",
      // lineHeight: "24px",
      padding: "0",
      margin: "0",
      background: "#FFF0E5",
      fontSize: "0.2rem",
      color: "#000",
      justifyContent: "space-around",
      alignItems: "center",
      listStyleType: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "CHANNEL LIST"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "CUSTOMER LIST")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_tables_channel_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_tables_user_table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=mine.js.573895be9b2b85731fba.hot-update.js.map