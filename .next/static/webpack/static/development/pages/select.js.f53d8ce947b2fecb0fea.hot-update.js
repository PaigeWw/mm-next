webpackHotUpdate("static/development/pages/select.js",{

/***/ "./pages/select.js":
/*!*************************!*\
  !*** ./pages/select.js ***!
  \*************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_select_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/select-bar */ "./components/select-bar.js");
/* harmony import */ var _components_select_line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/select-line */ "./components/select-line.js");
/* harmony import */ var _components_select_assign_tool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/select-assign-tool */ "./components/select-assign-tool/index.js");
/* harmony import */ var _hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/getUserInfo */ "./hooks/getUserInfo.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");


var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/pages/select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var info = Object(_hooks_getUserInfo__WEBPACK_IMPORTED_MODULE_9__["default"])(); // console.log(info)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    styles: []
  }]),
      categoryList = _useState[0],
      setGategoryList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      currentSeleted = _useState2[0],
      setCurrentSeleted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectStyles = _useState3[0],
      setSelectStyles = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectStylesType = _useState4[0],
      setSelectStylesType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showToast = _useState5[0],
      setShowToast = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      toast = _useState6[0],
      setToast = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getGategoryList =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_11__["getPageQuery"])();
                _context.next = 3;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_10__["default"])("goods/detail", {
                  _id: query.id
                }, "get");

              case 3:
                req = _context.sent;

                if (req) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                setGategoryList(req.category);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getGategoryList() {
        return _ref.apply(this, arguments);
      };
    }();

    getGategoryList();
  }, []); // const info = useUserInfo()

  var handleSelectStyle = function handleSelectStyle(sid, type, top, col, styleItem) {
    var pos = selectStyles.indexOf(sid);

    if (pos > -1) {
      //已选中 则去除 选中
      if (selectStyles.length > 1) {
        var savePos = (pos + 1) % 2;
        setSelectStyles(selectStyles.slice(savePos, savePos + 1));
        setSelectStyles(selectStylesType.slice(savePos, savePos + 1));
      } else {
        setSelectStyles([]);
        setSelectStylesType([]);
      }

      setCurrentSeleted(false);
    } else {
      //为选中 则 设置为选中
      setCurrentSeleted({
        sid: sid,
        type: type,
        top: top,
        col: col,
        styleItem: styleItem
      });
      var topsPos = selectStylesType.indexOf("TOPS");
      var bottomsPos = selectStylesType.indexOf("BOTTOMS");
      console.log({
        sid: sid,
        type: type,
        topsPos: topsPos
      });
      console.log(topsPos > -1 && type == "BOTTOMS");

      if (topsPos > -1 && type == "BOTTOMS") {
        var saveTemps = selectStyles.slice(topsPos, topsPos + 1);
        saveTemps.push(sid);
        setSelectStyles(saveTemps);
        setSelectStylesType(["TOPS", type]);
        return;
      }

      if (bottomsPos > -1 && type == "TOPS") {
        var _saveTemps = selectStyles.slice(bottomsPos, bottomsPos + 1);

        _saveTemps.push(sid);

        setSelectStyles(_saveTemps);
        setSelectStylesType(["BOTTOMS", type]);
        return;
      }

      setSelectStyles([sid]);
      setSelectStylesType([type]);
    }
  };

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showToast: showToast,
    toast: toast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_select_bar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mt: "40px",
    sx: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, categoryList.map(function (item, index) {
    return __jsx(_components_select_line__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index + item._id,
      row: index,
      kind: item.name,
      styles: item.styles,
      selectStyles: selectStyles,
      onSelect: handleSelectStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    });
  }), currentSeleted && info.role === 1 ? __jsx(_components_select_assign_tool__WEBPACK_IMPORTED_MODULE_8__["default"], {
    currentSeleted: currentSeleted,
    onClose: function onClose() {
      setCurrentSeleted(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }) : null), __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    height: "1.13rem",
    width: "19.2rem",
    bg: "#FF8E6C",
    color: "#000",
    padding: "0",
    sx: {
      borderRadius: 0,
      fontSize: "0.27rem",
      cursor: "pointer"
    },
    onClick: function onClick() {
      // console.log('selectStylesselectStylesselectStyles')
      if (selectStyles.length > 0) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/made?id=".concat(selectStyles[0]).concat(selectStyles.length > 1 ? "&id1=" + selectStyles[1] : ""));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/made"); // setToast({ type: "error", info: "Please Select Style." })
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "NEXT>"));
});

/***/ })

})
//# sourceMappingURL=select.js.f53d8ce947b2fecb0fea.hot-update.js.map