webpackHotUpdate("static/development/pages/mine.js",{

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./utils/helper.js");



var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  // baseURL: "http://8.209.64.159:3006/api/",
  baseURL: _helper__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "api/",
  // withCredentials: true,
  timeout: 10000,
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
});
instance.interceptors.request.use(function (config) {
  /**
   * 请求时从本地读取token，并设置headers
   */
  var token = localStorage.token;
  config.headers.Authorization = "Bearer ".concat(token);

  if (config.method === "post") {
    config.headers["content-type"] = "application/json";
  }

  console.log(config);
  return config;
}, function (error) {
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
});
instance.interceptors.response.use(function (response) {
  console.log("response", response);

  if (response.config.url.includes("user/login")) {
    if (response.data && response.data.data) {
      localStorage.token = response.data.data.token;
    }
  }

  if (!response.data.success) {//请求出错
  }

  return response.data;
}, function (error) {
  var response = error.response || {};
  console.log("错误： ", response);
  handleErrorStatus(response.status, response.message);
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(response);
}); // 错误提示

var handleErrorStatus = function handleErrorStatus(status, message) {
  console.log(status, message);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "get";
  var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var api = arguments.length > 4 ? arguments[4] : undefined;
  // var postData = new FormData()
  // for (var prop in data) {
  // 	postData.append(prop, data[prop])
  // }
  var options = method.toLowerCase() === "get" ? {
    params: data
  } : data;
  return instance[method](url, options).then(function (res) {
    return res.data;
  })["catch"](function (err) {
    // handleErrorStatus(code, err.message)
    console.log("err: ", err);
    return false;
  });
});

/***/ })

})
//# sourceMappingURL=mine.js.b5e7c26f87f3447dcb8d.hot-update.js.map