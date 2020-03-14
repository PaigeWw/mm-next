webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/commons/style-img.js":
/*!*****************************************!*\
  !*** ./components/commons/style-img.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");
var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/commons/style-img.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var width = props.width,
      svgUrl = props.svgUrl,
      shadowUrl = props.shadowUrl,
      key = props.key,
      colors = props.colors,
      svgId = props.svgId;
  var svgElement = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!svgElement) return;

    for (var i = 0; i < svgElement.children.length; i++) {
      if (svgElement.children[i].tagName === "g" || svgElement.children[i].tagName === "path") {
        svgElement.children[i].style.fill = color.type ? "url(\"#".concat(color._id, "\")") : color.value;
      }
    }
  }, [color]);
  return __jsx("div", {
    style: {
      position: "relative",
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + shadowUrl,
    sx: {
      width: width,
      position: "absolute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    style: {
      width: width,
      minWidth: "14px"
    },
    afterInjection: function afterInjection(error, svg) {
      if (error) {
        console.error(error);
        return;
      }

      svgElement = svg;

      for (var i = 0; i < svg.children.length; i++) {
        if (svg.children[i].tagName === "g" || svg.children[i].tagName === "path") {
          svg.children[i].style.fill = colors[0].type ? "url(\"#".concat(colors[0]._id, "\")") : colors[0].value;
        }
      }
    },
    renumerateIRIElements: false,
    loading: function loading() {
      console.log("loading");
      return "loading";
    },
    beforeInjection: function beforeInjection(svg) {
      svg.setAttribute("id", svgId || key);
      svg.setAttribute("style", "width: ".concat(width, "; height: 100%"));
    },
    evalScripts: "always",
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + svgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=made.js.6aaca6410f9cd5246b3f.hot-update.js.map