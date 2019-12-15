webpackHotUpdate("static/development/pages/made.js",{

/***/ "./pages/made.js":
/*!***********************!*\
  !*** ./pages/made.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_made_edit_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/made-edit-box */ "./components/made-edit-box.js");
/* harmony import */ var _components_made_big_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/made-big-box */ "./components/made-big-box.js");
/* harmony import */ var _components_made_style_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/made-style-item */ "./components/made-style-item.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/made.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








 // import SelectAssignTool from "../components/select-assign-tool"

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _jsx, _jsx2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      styleDetails = _useState[0],
      setStyleDetails = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showBigBox = _useState2[0],
      setShowBigBox = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showEditBox = _useState3[0],
      setShowEditBox = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      curItemIndex = _useState4[0],
      setCurItemIndex = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([[], [], [], [], [], []]),
      styleInitData = _useState5[0],
      setStyleInitData = _useState5[1];

  var boxNos = [0, 1, 2, 3, 4, 5];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getStyleDetails =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var query, reqList, req, i, req1, _i;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__["getPageQuery"])();
                console.log(query);
                reqList = [];
                _context.next = 5;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_11__["default"])("style/detail", {
                  _id: query.id
                }, "get");

              case 5:
                req = _context.sent;
                reqList.push(req);

                for (i = 0; i < 6; i++) {
                  styleInitData[i].push({
                    imgUrl: req.imgUrl,
                    value: false
                  });
                }

                if (!query.id1) {
                  _context.next = 14;
                  break;
                }

                _context.next = 11;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_11__["default"])("style/detail", {
                  _id: query.id1
                }, "get");

              case 11:
                req1 = _context.sent;
                reqList.push(req1);

                for (_i = 0; _i < 6; _i++) {
                  styleInitData[_i].push({
                    imgUrl: req1.imgUrl,
                    value: false
                  });
                }

              case 14:
                setStyleInitData([].concat(styleInitData));
                setStyleDetails(reqList);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getStyleDetails() {
        return _ref.apply(this, arguments);
      };
    }();

    getStyleDetails();
  }, []);

  var handleConfirmMade = function handleConfirmMade(colorIds) {
    console.log(colorIds); // const res = await request("/user/addFavorite", {styleAndColor: {}}, "post")
    // setStyleInitData

    return;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "0.23px",
    bg: "#000",
    color: "#fff",
    width: "19.2rem",
    height: "1.12rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "TOPS"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "BOTTOMS")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, styleInitData.map(function (style, index) {
    return __jsx(_components_made_style_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "".concat(index, "-style"),
      styleList: style,
      openBigBox: function openBigBox() {
        setShowBigBox(true);
      },
      openEditBox: function openEditBox() {
        setShowEditBox(true);
        setCurItemIndex(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    });
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    fontSize: "0.27rem",
    color: "#fff",
    justifyContent: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], (_jsx = {
    height: "1.13rem",
    width: "9.6rem",
    bg: "#000",
    variant: "primary",
    padding: "0"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "height", "1.13rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "width", "9.6rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "sx", {
    borderRadius: 0,
    cursor: "pointer"
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onClick", function onClick() {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.back();
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 80
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), "< RETURN"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], (_jsx2 = {
    height: "1.13rem",
    width: "9.6rem",
    bg: "#FF8E6C",
    variant: "primary",
    padding: "0"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "height", "1.13rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "width", "9.6rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "sx", {
    borderRadius: 0,
    cursor: "pointer"
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "onClick", function onClick() {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/mine");
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 98
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), "COMPLETE"))), showBigBox ? __jsx(_components_made_big_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClose: function onClose() {
      setShowBigBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }) : null, showEditBox ? __jsx(_components_made_edit_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleDetails: styleDetails,
    curStyle: styleInitData[curItemIndex],
    confirmMade: handleConfirmMade,
    onClose: function onClose() {
      setShowEditBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }) : null));
});

/***/ })

})
//# sourceMappingURL=made.js.b6a0e90bda961c7ecf23.hot-update.js.map