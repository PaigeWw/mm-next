webpackHotUpdate("static/development/pages/assign.js",{

/***/ "./components/assign-item.js":
/*!***********************************!*\
  !*** ./components/assign-item.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/assign-item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var IndexName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var goodsList = props.goodsList,
      onAssignGoods = props.onAssignGoods,
      assignCategoryList = props.assignCategoryList;
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
    __self: this
  }, goodsList.map(function (goods, index) {
    return goods.category.length > 0 ? __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
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
      __self: this
    }, "0".concat(index + 1, " ").concat(goods.name)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      width: [1],
      flexWrap: "wrap",
      bg: "#FFF0E5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, goods.category.map(function (category, index) {
      var isSelected = assignCategoryList.indexOf(category._id) >= 0;
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
        onClick: function onClick(e) {
          onAssignGoods();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "0.18rem",
        sx: {
          color: "#FF8E6C"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, IndexName[index]), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        sx: {
          color: "#000000"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, category.name));
    }))) : null;
  }));
});

/***/ })

})
//# sourceMappingURL=assign.js.2a150bede65d30b2c674.hot-update.js.map