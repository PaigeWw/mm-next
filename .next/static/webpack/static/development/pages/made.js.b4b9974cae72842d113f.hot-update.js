webpackHotUpdate("static/development/pages/made.js",{

/***/ "./components/made-edit-box.js":
/*!*************************************!*\
  !*** ./components/made-edit-box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_commons_react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/commons/react-svg */ "./components/commons/react-svg.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _color_and_paint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-and-paint */ "./components/color-and-paint.js");
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/request.js */ "./utils/request.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");



var _jsxFileName = "/Users/paige/Desktop/workspace/mm-next/components/made-edit-box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styleDetails = props.styleDetails,
      curStyle = props.curStyle,
      userInfo = props.userInfo;
  var editSvgs = {};
  var editPatterns = {};
  var tempSelectedIds = [curStyle[0].colorId];
  var tempSelectedImgs = [curStyle[0].imgUrl];

  if (curStyle.length > 1) {
    tempSelectedIds.push(curStyle[1].colorId);
    tempSelectedImgs.push(curStyle[1].imgUrl);
  } else {
    tempSelectedIds.push(false);
    tempSelectedImgs.push(false);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tempSelectedIds),
      curSelectedColors = _useState[0],
      setCurSelectedColors = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      curStyleIndex = _useState2[0],
      setCurStyleIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tempSelectedImgs),
      curStyleImgs = _useState3[0],
      setCurStyleImgs = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    docs: []
  }),
      plainColors = _useState4[0],
      setPlainColors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    docs: []
  }),
      flowerColors = _useState5[0],
      setFlowerColors = _useState5[1]; // const [colorList, setColorList] = useState(styleDetails[0].plainColors)


  var getColorList =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(page) {
      var req;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("color/getList", {
                type: 0,
                page: page,
                limit: 14
              }, "get");

            case 2:
              req = _context.sent;
              setPlainColors(req); // console.log("getChannels", req)

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getColorList(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getPaintList =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(page) {
      var req;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("color/getList", {
                type: 1,
                page: page,
                limit: 14
              }, "get");

            case 2:
              req = _context2.sent;
              setFlowerColors(req); // console.log("getChannels", req)

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getPaintList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getEditSvgById = function getEditSvgById(id) {
    if (!editSvgs[id]) {
      var svg = document.getElementById(id);
      editSvgs[id] = svg;
    }

    return editSvgs[id];
  };

  var createSvgPattern = function createSvgPattern(svg, color) {
    if (!editSvgs.svgDefs) {
      editSvgs.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.appendChild(editSvgs.svgDefs);
    }

    if (!editPatterns[color._id]) {
      var svgPattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern"); // this.svgPatternImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');

      svgPattern.setAttribute("id", color._id);
      editPatterns[color._id] = svgPattern;
      svgPattern.setAttribute("patternUnits", "userSpaceOnUse");
      svgPattern.setAttribute("patternContentUnits", "userSpaceOnUse");
      var imgVals = {
        scale: 1
      };
      var W = color.size * svg.width.baseVal.value / 20 * imgVals.scale;
      var H = W * color.height / color.width;
      svgPattern.setAttribute("width", "".concat(W, "px"));
      svgPattern.setAttribute("height", "".concat(H, "px")); // this.getSvgPatternAndImage().svgPatternImage.href.baseval = `${api}/${color.value}`

      var svgPatternImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
      svgPatternImage.setAttribute("width", "".concat(W, "px"));
      svgPatternImage.setAttribute("height", "".concat(H, "px"));
      svgPatternImage.href.baseVal = "".concat(_utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"]).concat(color.value);
      editSvgs.svgDefs.appendChild(svgPattern);
      svgPattern.appendChild(svgPatternImage);
    }
  };

  var selectFlowerColor = function selectFlowerColor(color, svgId) {
    // this.getSvgPatternAndImage()
    var svg = getEditSvgById(svgId);

    if (!editPatterns[color._id]) {
      createSvgPattern(svg, color);
    } // if (svg.svgPatternImage) {
    // 	svg.svgPattern.removeChild(svg.svgPatternImage)
    // }
    // this.svgFrontEditBlocks.map(item => {
    // 	item.style.fill = 'url("#avatar")'
    // })


    for (var i = 0; i < svg.children.length; i++) {
      if (svg.children[i].tagName === "g" || svg.children[i].tagName === "path") {
        svg.children[i].style.fill = "url(\"#".concat(color._id, "\")");
      }
    }
  };

  var handleChangeColorPage = function handleChangeColorPage(page, type) {
    if (type === 0) {
      getColorList(page);
    } else {
      getPaintList(page);
    }
  };

  var handleSelect = function handleSelect(item, type) {
    console.log(curSelectedColors);

    if (item._id === curSelectedColors[curStyleIndex]) {
      curSelectedColors[curStyleIndex] = false;
      setCurSelectedColors([].concat(curSelectedColors));
      curStyleImgs.splice(curStyleIndex, 1, false);
      setCurStyleImgs([].concat(curStyleImgs));
      console.log(curSelectedColors);
    } else {
      curSelectedColors[curStyleIndex] = item;
      setCurSelectedColors([].concat(curSelectedColors)); // setCurSelectedColorId()

      switch (type) {
        case "color":
          var cIndex = styleDetails[curStyleIndex]._id;
          var svg = getEditSvgById(cIndex); // let section = document.getElementById("section")
          // section.innerHTML = "hhhhhh"

          for (var i = 0; i < svg.children.length; i++) {
            if (svg.children[i].tagName === "g" || svg.children[i].tagName === "path") {
              svg.children[i].style.fill = item.value;
              console.log(svg.children[i]); // svg.removeChild(svg.children[i])
            }
          }

          break;

        case "paint":
          var pIndex = styleDetails[curStyleIndex]._id;
          selectFlowerColor(item, pIndex);
          break;

        default:
          break;
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getChannelsAssign =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(styleId, channelId) {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_request_js__WEBPACK_IMPORTED_MODULE_8__["default"])("channel/getAssign", {
                  styleId: styleId,
                  channelId: channelId
                }, "get");

              case 2:
                req = _context3.sent;

                if (!req) {
                  setPlainColors({
                    docs: [],
                    page: 1
                  });
                  setFlowerColors({
                    docs: [],
                    page: 1
                  });
                } else {
                  setPlainColors({
                    docs: req.plainColors,
                    page: 1
                  });
                  setFlowerColors({
                    docs: req.flowerColors,
                    page: 1
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getChannelsAssign(_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();

    if (userInfo.role === 0) {
      // 客户
      getChannelsAssign(sid, userInfo.channels[0]);
    } else {
      // 产品经理
      getColorList(1);
      getPaintList(1);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);
  return __jsx(_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: props.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: "14rem",
    fontSize: "0.18rem",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "6.75rem",
    sx: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(styleDetails) && styleDetails.map(function (style, index) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
      width: "6.75rem",
      padding: "1rem 0",
      alignItems: "center",
      justifyContent: "center",
      sx: {
        position: "relative",
        border: curStyleIndex === index ? "1px solid #000" : "1px solid #A0A0A0"
      },
      onClick: function onClick() {
        setCurStyleIndex(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + style.shadowUrl,
      sx: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px",
        position: "absolute",
        top: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }), __jsx(_components_commons_react_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        width: "3.79rem",
        minWidth: "14px",
        minHeight: "14px"
      },
      beforeInjection: function beforeInjection(svg) {
        svg.setAttribute("id", style._id);
        svg.setAttribute("style", "width: 100%; height: 100%");
      },
      renumerateIRIElements: false,
      loading: function loading() {
        console.log("loading");
        return "loading";
      },
      evalScripts: "always",
      src: _utils_helper__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + style.svgUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    flexGrow: 1,
    pl: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1],
    mb: "0.6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    id: "section",
    fontSize: "0.18rem",
    fontWeight: "bolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "SECTION NUMBER"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    fontSize: "0.1rem",
    m: "0.16rem 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, styleDetails[curStyleIndex].styleNo)), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_7__["ColorList"], {
    colorList: plainColors.docs || [],
    handleSelect: handleSelect,
    curChannelId: 0,
    selectedList: [curSelectedColors[curStyleIndex] || {}],
    page: plainColors.page,
    onChangePage: handleChangeColorPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    height: "0.3rem",
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), __jsx(_color_and_paint__WEBPACK_IMPORTED_MODULE_7__["PaintList"], {
    paintList: flowerColors.docs || [],
    handleSelect: handleSelect,
    curChannelId: 0,
    selectedList: [curSelectedColors[curStyleIndex] || {}],
    page: flowerColors.page,
    onChangePage: handleChangeColorPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    height: "0.7rem",
    width: "100%",
    bg: "#1B1B1B",
    color: "#fff",
    padding: "0",
    mt: "0.7rem",
    sx: {
      borderRadius: 0,
      fontSize: "0.14rem",
      cursor: "pointer"
    },
    onClick: function onClick() {
      if (styleDetails.length > 1 && !curStyleImgs[1]) return;
      props.confirmMade(curSelectedColors, curStyleImgs);
      props.onClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "FINISH")))));
});

/***/ })

})
//# sourceMappingURL=made.js.b4b9974cae72842d113f.hot-update.js.map