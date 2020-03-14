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
      svgId = props.svgId,
      id = props.id;
  console.log(colors);
  var svgElement = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if()
    // ;`url(${colors[0]._id})`
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // if()
    if (!svgElement || !colors) return;

    for (var i = 0; i < svgElement.children.length; i++) {
      if (svgElement.children[i].tagName === "g" || svgElement.children[i].tagName === "path") {
        svgElement.children[i].style.fill = colors[i].type ? "url(\"#".concat(id, "-").concat(colors[i]._id, "-").concat(i, "\")") : colors[i].value;
      }
    }
  }, [colors]);
  return __jsx("div", {
    style: {
      position: "relative",
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + shadowUrl,
    sx: {
      width: width,
      position: "absolute",
      left: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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

      if (colors && colors.length > 0) {
        for (var i = 0; i < svg.children.length; i++) {
          if (svg.children[i].tagName === "g" || svg.children[i].tagName === "path") {
            svg.children[i].style.fill = colors[0].type ? "url(\"#".concat(id, "-").concat(colors[i]._id, "-").concat(i, "\")") : colors[0].value;
          }
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
      var svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.appendChild(svgDefs);
      svg.setAttribute("style", "width: ".concat(width, "; height: 100%"));

      for (var i = 0; i < colors.length; i++) {
        var color = colors[i];

        if (color.type) {
          var svgPattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
          svgPattern.setAttribute("id", color._id); // editPatterns[color._id] = svgPattern

          svgPattern.setAttribute("patternUnits", "userSpaceOnUse");
          svgPattern.setAttribute("patternContentUnits", "userSpaceOnUse");
          var imgVals = {
            scale: 1
          };
          var W = color.size * svg.width.baseVal.value / 20 * imgVals.scale;
          var H = W * color.height / color.width;
          svgPattern.setAttribute("width", "".concat(W, "px"));
          svgPattern.setAttribute("height", "".concat(H, "px"));
          var svgPatternImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
          svgPatternImage.setAttribute("width", "".concat(W, "px"));
          svgPatternImage.setAttribute("height", "".concat(H, "px"));
          svgPatternImage.href.baseVal = "".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]).concat(color.value); // editSvgs.svgDefs.appendChild(svgPattern)

          svgPattern.appendChild(svgPatternImage);
          svgDefs.appendChild(svgPattern);
        }
      }
    },
    evalScripts: "always",
    src: _utils_helper__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + svgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=made.js.6c9c761828c80c174efd.hot-update.js.map