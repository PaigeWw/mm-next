webpackHotUpdate("static/development/pages/mine.js",{

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
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

var px2rem = function px2rem(px) {
  return "".concat(px / (750 / 10), "rem");
};
var pptPx2rem = function pptPx2rem(px) {
  return "".concat(px / (1920 / 10), "rem");
};
var baseUrl = "http://8.209.64.159:3006";
var getPageQuery = function getPageQuery() {
  return Object(querystring__WEBPACK_IMPORTED_MODULE_0__["parse"])(window.location.href.split("?")[1]);
}; // const jjj =

/***/ })

})
//# sourceMappingURL=mine.js.aa251b11b0865f04ffc0.hot-update.js.map