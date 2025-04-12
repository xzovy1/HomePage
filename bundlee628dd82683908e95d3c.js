/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Dosis-Regular.ttf */ "./src/assets/Dosis-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Dosis-Medium.ttf */ "./src/assets/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Dosis-Bold.ttf */ "./src/assets/Dosis-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/open-in-new.svg */ "./src/assets/open-in-new.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face{
    font-family: 'Dosis';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype'),
        url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        /* font-weight: 600; */
        /* font-style: normal; */
}

body{
    font-family: 'Dosis';
}

body > * {
    z-index: 0;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-me-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    min-height: 285px;
    max-width: 900px;
    margin: 3% 0 0 0;
}

.about-me-card #main-name{
    font-size: xx-large;    
}

.about-me-card img{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.about-me-card .text {
    display: flex;
    flex-direction: column;
}

.about-me-card .bio,
.about-me-card  .header-title{
    margin: 1.5% 3%;
}

.about-me-card .widget{
    width: 26px;
    align-self: flex-end;
    padding: 0 2%;
    margin: 4px;
}

.about-me-card .widgets{
    display: flex;
    justify-content: end;
    padding: 0 6%;
    
}

#main-name{
    text-align: center;
}

.header-title {
    width: max-content;
    padding: 0 5%
}

.about-me-card .bio {
    max-width: 600px;
}

.work-card{
    padding: 25px;
    width: 90%;
    max-width: 800px;
}

.work-card .cards{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
    gap: 10px;
}

.project-card{
    display: flex;
    flex-direction: column;
    padding: 2%;
}

.project-card,
.project-image{
    border-radius: 5px;

}



.project-header{
    display: flex;
    padding: 0 3%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}

.project-description{
    padding: 7% 3%;
    width: fit-content;
    /* display: none; */
}

.external-link-widget{
    width: 16px;
    height: 16px;
    content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.contact{
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    border-radius: 10px;
    margin-bottom: 2%;
}


.contact img{
    max-width: 250px;
}

.footer-image{
    border-radius: 5px;
    
}

.contact div{
    max-width: 250px;
}

.email-section img{
    width: 16px;
    padding-right: 5%;
}

.email-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 150px;
}


.info {
    min-height: 250px;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}


.elevate{
    transition-property: box-shadow;
    transition-duration: 450ms;
}


@media(min-width: 600px){

    .elevate:hover{
        border: none;
        box-shadow: rgba(149, 157, 165, 0.5) 0px 25px 15px;
        z-index: 1;
    }
}

@media(max-width: 550px){


    .transition{
        box-shadow: rgba(149, 157, 165, 0.5) 0px 25px 15px; 
        transition-delay: 200ms;
    }
    .elevate{
        padding: 20px;
    }

    .project-card{
        height: fit-content;
    }

    .about-me-card,
    .contact{
        flex-direction: column;
    }

    .contact{
        width: 75%;
        margin-bottom: 10%;
    }

    .info{
        justify-content: center;
    }

    .email-section{
        padding-top: 25px;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB;;+CAEkC;QAC9B,sBAAsB;QACtB,wBAAwB;AAChC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,kBAAkB;;AAEtB;;;;AAIA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gDAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;AACrB;;;AAGA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,uBAAuB;AAC3B;;;AAGA;IACI,+BAA+B;IAC/B,0BAA0B;AAC9B;;;AAGA;;IAEI;QACI,YAAY;QACZ,kDAAkD;QAClD,UAAU;IACd;AACJ;;AAEA;;;IAGI;QACI,kDAAkD;QAClD,uBAAuB;IAC3B;IACA;QACI,aAAa;IACjB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;;QAEI,sBAAsB;IAC1B;;IAEA;QACI,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,iBAAiB;IACrB;;AAEJ","sourcesContent":["@font-face{\n    font-family: 'Dosis';\n    src: url('./assets/Dosis-Regular.ttf') format('truetype'),\n        url('./assets/Dosis-Medium.ttf') format('truetype'),\n        url('./assets/Dosis-Bold.ttf');\n        /* font-weight: 600; */\n        /* font-style: normal; */\n}\n\nbody{\n    font-family: 'Dosis';\n}\n\nbody > * {\n    z-index: 0;\n}\n.container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.about-me-card{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    min-height: 285px;\n    max-width: 900px;\n    margin: 3% 0 0 0;\n}\n\n.about-me-card #main-name{\n    font-size: xx-large;    \n}\n\n.about-me-card img{\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.about-me-card .text {\n    display: flex;\n    flex-direction: column;\n}\n\n.about-me-card .bio,\n.about-me-card  .header-title{\n    margin: 1.5% 3%;\n}\n\n.about-me-card .widget{\n    width: 26px;\n    align-self: flex-end;\n    padding: 0 2%;\n    margin: 4px;\n}\n\n.about-me-card .widgets{\n    display: flex;\n    justify-content: end;\n    padding: 0 6%;\n    \n}\n\n#main-name{\n    text-align: center;\n}\n\n.header-title {\n    width: max-content;\n    padding: 0 5%\n}\n\n.about-me-card .bio {\n    max-width: 600px;\n}\n\n.work-card{\n    padding: 25px;\n    width: 90%;\n    max-width: 800px;\n}\n\n.work-card .cards{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;\n    gap: 10px;\n}\n\n.project-card{\n    display: flex;\n    flex-direction: column;\n    padding: 2%;\n}\n\n.project-card,\n.project-image{\n    border-radius: 5px;\n\n}\n\n\n\n.project-header{\n    display: flex;\n    padding: 0 3%;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n}\n\n.project-description{\n    padding: 7% 3%;\n    width: fit-content;\n    /* display: none; */\n}\n\n.external-link-widget{\n    width: 16px;\n    height: 16px;\n    content: url('./assets/open-in-new.svg');\n}\n\n.contact{\n    max-width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    border-radius: 10px;\n    margin-bottom: 2%;\n}\n\n\n.contact img{\n    max-width: 250px;\n}\n\n.footer-image{\n    border-radius: 5px;\n    \n}\n\n.contact div{\n    max-width: 250px;\n}\n\n.email-section img{\n    width: 16px;\n    padding-right: 5%;\n}\n\n.email-section{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 150px;\n}\n\n\n.info {\n    min-height: 250px;\n    padding: 0 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n}\n\n\n.elevate{\n    transition-property: box-shadow;\n    transition-duration: 450ms;\n}\n\n\n@media(min-width: 600px){\n\n    .elevate:hover{\n        border: none;\n        box-shadow: rgba(149, 157, 165, 0.5) 0px 25px 15px;\n        z-index: 1;\n    }\n}\n\n@media(max-width: 550px){\n\n\n    .transition{\n        box-shadow: rgba(149, 157, 165, 0.5) 0px 25px 15px; \n        transition-delay: 200ms;\n    }\n    .elevate{\n        padding: 20px;\n    }\n\n    .project-card{\n        height: fit-content;\n    }\n\n    .about-me-card,\n    .contact{\n        flex-direction: column;\n    }\n\n    .contact{\n        width: 75%;\n        margin-bottom: 10%;\n    }\n\n    .info{\n        justify-content: center;\n    }\n\n    .email-section{\n        padding-top: 25px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Dosis-Bold.ttf":
/*!***********************************!*\
  !*** ./src/assets/Dosis-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Dosis-Bold.ttf";

/***/ }),

/***/ "./src/assets/Dosis-Medium.ttf":
/*!*************************************!*\
  !*** ./src/assets/Dosis-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Dosis-Medium.ttf";

/***/ }),

/***/ "./src/assets/Dosis-Regular.ttf":
/*!**************************************!*\
  !*** ./src/assets/Dosis-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Dosis-Regular.ttf";

/***/ }),

/***/ "./src/assets/brittany1resize.jpg":
/*!****************************************!*\
  !*** ./src/assets/brittany1resize.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "brittany1resize.jpg";

/***/ }),

/***/ "./src/assets/brittanyDocResize.jpg":
/*!******************************************!*\
  !*** ./src/assets/brittanyDocResize.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "brittanyDocResize.jpg";

/***/ }),

/***/ "./src/assets/dummy.png":
/*!******************************!*\
  !*** ./src/assets/dummy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dummy.png";

/***/ }),

/***/ "./src/assets/email-outline.svg":
/*!**************************************!*\
  !*** ./src/assets/email-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "email-outline.svg";

/***/ }),

/***/ "./src/assets/open-in-new.svg":
/*!************************************!*\
  !*** ./src/assets/open-in-new.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "open-in-new.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_brittany1resize_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/brittany1resize.jpg */ "./src/assets/brittany1resize.jpg");
/* harmony import */ var _assets_dummy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/dummy.png */ "./src/assets/dummy.png");
/* harmony import */ var _assets_brittanyDocResize_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/brittanyDocResize.jpg */ "./src/assets/brittanyDocResize.jpg");
/* harmony import */ var _assets_email_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/email-outline.svg */ "./src/assets/email-outline.svg");






function component(){
    const container = document.querySelector('.container');
    const aboutMe = document.querySelector('.about-me-card')
    const projectCards = document.querySelector('.work-card .cards')

    const bioPhoto = new Image();
    bioPhoto.src = _assets_brittany1resize_jpg__WEBPACK_IMPORTED_MODULE_1__;
    bioPhoto.style.maxWidth = '240px'
    aboutMe.prepend(bioPhoto)


    function createCard(name, description, imageSource = _assets_dummy_png__WEBPACK_IMPORTED_MODULE_2__, address = '#'){
        const cardBody = document.createElement('div');
        cardBody.classList.add('project-card');
        cardBody.classList.add('elevate')

        const projectImg = document.createElement('img');
        projectImg.classList.add('project-image');
        projectImg.src = imageSource;

        const titleBar = document.createElement('div');
        titleBar.classList.add('project-header')

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = name;

        const projectHeader = document.createElement('div');
        projectHeader.classList.add('widgets');

        const externalLinkAnchor = document.createElement('a');
        externalLinkAnchor.href = address
        const externalLinkWidget = document.createElement('img');
        externalLinkWidget.classList.add('external-link-widget');
        externalLinkAnchor.append(externalLinkWidget);

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = description;

        titleBar.append(projectTitle);
        titleBar.append(projectHeader);

        projectHeader.append(externalLinkAnchor)

        cardBody.append(projectImg);
        cardBody.append(titleBar);
        cardBody.append(projectDescription)

        projectCards.append(cardBody);

    }

    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    // createCard('Project', 'Short Description of the project. Just a couple of sentences');

    const contact = document.querySelector('.contact');
    const footerImg = new Image();
    footerImg.classList.add('footer-image')
    footerImg.src = _assets_brittanyDocResize_jpg__WEBPACK_IMPORTED_MODULE_3__;
    contact.append(footerImg)

    const emailSection = document.querySelector('.email-section');
    // const widgetSpan = document.createElement('span')
    const emailWidget = document.createElement('img');
    const emailAddress = document.createElement('span');
    emailWidget.src = _assets_email_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
    emailAddress.textContent = 'supina@ualberta.ca'

    // widgetSpan.append(emailWidget);
    emailSection.append(emailWidget);
    emailSection.append(emailAddress);

    let options = {
        rootMargin: "0px",
        threshold: 1.0,
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('transition');
                    console.log(entry.target)
                    return;
                }
                entry.target.classList.remove('transition');
            })
    },options)
    const cards = document.querySelectorAll('.elevate');
    cards.forEach((element) => {observer.observe(element)});
    // observer.observe(document.querySelector('.elevate'))

    return container;

}

component();
})();

/******/ })()
;
//# sourceMappingURL=bundlee628dd82683908e95d3c.js.map