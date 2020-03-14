webpackHotUpdate("static/development/pages/made.js",{

/***/ "./utils/svg2png.js":
/*!**************************!*\
  !*** ./utils/svg2png.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (svg) {
  var canvas = document.createElement("canvas");
  var c = canvas.getContext("2d"); //新建Image对象

  var img = new Image();
  var url = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svg))); //svg内容

  img.src = url; //svg内容中可以有中文字符

  console.log("svg2png img.onload", svg); //图片初始化完成后调用

  img.onload = function () {
    document.body.appendChild(img); //将canvas的宽高设置为图像的宽高

    canvas.width = img.width;
    canvas.height = img.height; //canvas画图片

    c.drawImage(img, 0, 0); //将图片添加到body中

    document.body.appendChild(img);
  };
});

/***/ })

})
//# sourceMappingURL=made.js.ee1573879584fcd09996.hot-update.js.map