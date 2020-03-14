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
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var _components_commons_react_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/commons/react-svg */ "./components/commons/react-svg.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/made.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











 // import SelectAssignTool from "../components/select-assign-tool"

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _jsx, _jsx2;

  var userInfo = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_12__["default"])();
  console.log(userInfo, "userInfo");

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      collectList = _useState6[0],
      setCollectList = _useState6[1];

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
                    style: req,
                    color: false
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
                    style: req1,
                    color: false
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

  var handleConfirmMade = function handleConfirmMade(colors, styles) {
    if (!colorIds[0]) return;
    styleInitData[curItemIndex] = [{
      color: colors[0],
      style: styles[0]
    }];

    if (styleDetails.length > 1) {
      if (!colors[1]) return;
      styleInitData[curItemIndex].push({
        color: colors[1],
        style: styles[1]
      });
    }

    setStyleInitData([].concat(styleInitData));
  };

  var handleAddFavorite =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(index) {
      var params, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (styleInitData[index][0].colorId) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              console.log(styleInitData[index][0]);
              params = [{
                styleId: styleDetails[0]._id,
                colorId: styleInitData[index][0].colorId,
                front: styleInitData[index][0].imgUrl
              }];
              collectList.push(index);
              setCollectList([].concat(collectList));

              if (!(styleDetails.length > 1)) {
                _context2.next = 10;
                break;
              }

              if (styleInitData[index][1].colorId) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return");

            case 9:
              params.push({
                styleId: styleDetails[1]._id,
                colorId: styleInitData[index][1].colorId,
                front: styleInitData[index][1].imgUrl
              });

            case 10:
              _context2.next = 12;
              return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_11__["default"])("/user/addFavorite", {
                styleAndColor: params
              }, "post");

            case 12:
              res = _context2.sent;
              // setStyleDetails([].concat(styleDetails))
              console.log(res);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAddFavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_components_commons_react_svg__WEBPACK_IMPORTED_MODULE_13__["default"], {
    beforeInjection: function beforeInjection(svg) {
      svg.setAttribute("id", "mm-defs-svg");
      svg.setAttribute("style", "width: 0%; height: 0%");
    },
    src: "".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"], "uploads/2020-03-07/1583561658305.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
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
      lineNumber: 102
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "TOPS"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "BOTTOMS")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, styleInitData.map(function (style, index) {
    return __jsx(_components_made_style_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "".concat(index, "-style"),
      styleList: style,
      index: index,
      collected: collectList.indexOf(index) >= 0,
      openBigBox: function openBigBox() {
        setShowBigBox(true);
      },
      onAddFavorite: function onAddFavorite() {
        handleAddFavorite(index);
      },
      openEditBox: function openEditBox() {
        setShowEditBox(true);
        setCurItemIndex(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    });
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    fontSize: "0.27rem",
    color: "#fff",
    justifyContent: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
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
    lineNumber: 135
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
    lineNumber: 153
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), "COMPLETE"))), showBigBox ? __jsx(_components_made_big_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styleDetails: styleDetails,
    curStyle: styleInitData[curItemIndex],
    onClose: function onClose() {
      setShowBigBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }) : null, showEditBox ? __jsx(_components_made_edit_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userInfo: userInfo,
    styleDetails: styleDetails,
    curStyle: styleInitData[curItemIndex],
    confirmMade: handleConfirmMade,
    onClose: function onClose() {
      setShowEditBox(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }) : null));
});

/***/ })

})
//# sourceMappingURL=made.js.42072bb7ae0ee7457b89.hot-update.js.map