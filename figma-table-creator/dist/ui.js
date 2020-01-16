/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  font: 12px sans-serif;\r\n  margin: 10px 15px;\r\n  text-align: center;\r\n}\r\np {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\nh4 {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\n/* --- Buttons --- */\r\n.btn-standalone button {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  background: white;\r\n  color: black;\r\n  border: none;\r\n  padding: 8px 40px;\r\n  margin: 5px 0px;\r\n  box-shadow: inset 0 0 0 1px black;\r\n  outline: none;\r\n}\r\n.btn-standalone button:focus {\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\n#create {\r\n  box-shadow: none;\r\n  background: #00a9e0;\r\n  color: white;\r\n}\r\n#create:focus {\r\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* --- Input --- */\r\ninput[type=\"text\"] {\r\n  width: 75%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  float: left;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n}\r\ninput:hover {\r\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\ninput:focus {\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\n\r\n/* --- Grid --- */\r\n.row {\r\n  padding: 2px 3px;\r\n}\r\n.column {\r\n  float: left;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n.column .zero-padding {\r\n  padding: 0 !important;\r\n}\r\n.half {\r\n  width: 50% !important;\r\n}\r\n.two-thirds {\r\n  width: 66.7% !important;\r\n}\r\n.third {\r\n  width: 33.3% !important;\r\n}\r\n.one-sixth {\r\n  width: 16.7% !important;\r\n}\r\n.three-fourths {\r\n  width: 75% !important;\r\n}\r\n.quarter {\r\n  width: 25% !important;\r\n}\r\n.label {\r\n  width: 65% !important;\r\n}\r\n.input-column {\r\n  width: 35% !important;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* --- Checkbox --- */\r\n/* The container */\r\n.container {\r\n  padding: 3px 0px;\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 15px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  vertical-align: middle;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.toggle-display {\r\n  display: none;\r\n}\r\n\r\n.toggle-display.is-visible {\r\n  display: block;\r\n}\r\n\r\n/* --- Custom Radio Button --- */\r\n/* Based on Codepen by Sal */\r\n.options-radio-buttons-wrapper {\r\n  clear: both;\r\n  display: inline-block;\r\n}\r\n.options-radio-button {\r\n  position: absolute;\r\n  left: -9999em;\r\n  top: -9999em;\r\n}\r\n.options-radio-button + label {\r\n  float: left;\r\n  padding: 0.5em 1em;\r\n  cursor: pointer;\r\n  border: 1px solid #28608f;\r\n  margin-right: -1px;\r\n  color: #fff;\r\n  background-color: #00a9e0;\r\n}\r\n.options-radio-button + label:first-of-type {\r\n  border-radius: 0.7em 0 0 0.7em;\r\n}\r\n.options-radio-button + label:last-of-type {\r\n  border-radius: 0 0.7em 0.7em 0;\r\n}\r\n.options-radio-button:checked + label {\r\n  background-color: #4b86b4;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");


/* State Changes Variable */
let isShiftHeld = false;
/* Run after onLoad */
window.addEventListener("load", function () {
    document.getElementById("columns").select();
});
/* Toggle HTML Rendering */
function toggleEditable(htmlTagId, isPrerequisiteSelected, defaultValue) {
    const htmlTagById = document.getElementById(htmlTagId);
    if (htmlTagById.checked) {
        htmlTagById.checked = false;
    }
    if (isPrerequisiteSelected) {
        htmlTagById.disabled = false;
        htmlTagById.value = defaultValue;
    }
    else {
        htmlTagById.disabled = true;
        htmlTagById.value = "";
    }
    return null;
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
    if (document.getElementById("count-and-table-size")
        .checked) {
        toggleEditable("columnWidth", false, "100");
        toggleEditable("rowHeight", false, "30");
        toggleEditable("tableWidth", true, "1024");
        toggleEditable("tableHeight", true, "768");
        toggleEditable("columns", true, "5");
        toggleEditable("rows", true, "8");
    }
};
document.getElementById("count-and-cell-size").onclick = () => {
    if (document.getElementById("count-and-cell-size").checked) {
        toggleEditable("columnWidth", true, "100");
        toggleEditable("rowHeight", true, "30");
        toggleEditable("tableWidth", false, "1024");
        toggleEditable("tableHeight", false, "768");
        toggleEditable("columns", true, "5");
        toggleEditable("rows", true, "8");
    }
};
document.getElementById("cell-and-table-size").onclick = () => {
    if (document.getElementById("cell-and-table-size").checked) {
        toggleEditable("columnWidth", true, "100");
        toggleEditable("rowHeight", true, "30");
        toggleEditable("tableWidth", true, "1024");
        toggleEditable("tableHeight", true, "768");
        toggleEditable("columns", false, "5");
        toggleEditable("rows", false, "8");
    }
};
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
    toggleEditable("floatingFilter", document.getElementById("header").checked, "");
    toggleEditable("headerHeight", document.getElementById("header").checked, "60");
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "");
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "30");
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
    toggleEditable("stripedBackgroundColor", document.getElementById("alternateBackgrounds")
        .checked, "#FFFFFF");
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
    toggleEditable("borderColor", document.getElementById("borders").checked, "#C7C7C7");
};
/* Keyboard Navigation */
document.onkeydown = keyDown => {
    let activeElement = document.activeElement;
    if (keyDown.key === "Shift") {
        isShiftHeld = true;
    }
    else if (keyDown.key.match(/Arrow\w+/g)) {
        if (activeElement.type === "text") {
            let value = parseInt(activeElement.value);
            if (isShiftHeld === false) {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 1;
                        break;
                    case "ArrowDown":
                        value -= 1;
                        break;
                }
            }
            else {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 10;
                        break;
                    case "ArrowDown":
                        value -= 10;
                        break;
                }
            }
            document.activeElement.value = value.toString();
        }
    }
    else if (keyDown.key === "Tab") {
        if (activeElement.id === "cancel" && isShiftHeld === false) {
            document.getElementById("columns").focus();
            keyDown.preventDefault();
        }
        else if (activeElement.id === "columns" && isShiftHeld === true) {
            document.getElementById("cancel").focus();
            keyDown.preventDefault();
        }
    }
    else if (keyDown.key === "Enter") {
        if (activeElement.type === "checkbox") {
            activeElement.checked = !activeElement.checked;
            if (activeElement.id === "header") {
                toggleEditable("floatingFilter", activeElement.checked, "");
                toggleEditable("headerHeight", activeElement.checked, "60");
            }
            else if (activeElement.id === "floatingFilter") {
                toggleEditable("floatingFilterHeight", activeElement.checked, "30");
            }
            else if (activeElement.id === "alternateBackgrounds") {
                toggleEditable("stripedBackgroundColor", activeElement.checked, "#FFFFFF");
            }
            else if (activeElement.id === "borders") {
                toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
            }
        }
    }
};
document.onkeyup = keyUp => {
    if (keyUp.key === "Shift") {
        isShiftHeld = false;
    }
};
/* Create and Cancel Button Actions */
document.getElementById("create").onclick = () => {
    // Selected Mode
    const mode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-table-size", "boolean")
        ? "count-and-table-size"
        : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-cell-size", "boolean")
            ? "count-and-cell-size"
            : "cell-and-table-size";
    // Header Info
    const header = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("header", "boolean");
    const headerHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("headerHeight", "number");
    const floatingFilter = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilter", "boolean");
    const floatingFilterHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilterHeight", "number");
    // Constraints Processing
    let columns = 0;
    let columnWidth = 0;
    let rows = 0;
    let rowHeight = 0;
    let referenceCoordinates = { x: 0, y: 0 };
    switch (mode) {
        case "count-and-table-size":
            columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
            rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
            columnWidth =
                _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableWidth", "number") / columns;
            rowHeight =
                (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number") -
                    headerHeight) /
                    rows;
            break;
        case "count-and-cell-size":
            columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
            rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            break;
        case "cell-and-table-size":
            const tableWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableWidth", "number");
            const tableHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            columns = Math.floor(tableWidth / columnWidth);
            rows = Math.floor(tableHeight / rowHeight);
            referenceCoordinates.y = tableHeight % rowHeight;
            console.log(referenceCoordinates);
            break;
    }
    // Properties and Customisations
    const borders = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borders", "boolean");
    const alternateBackgrounds = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("alternateBackgrounds", "boolean");
    const primarybackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("primarybackgroundColor", "string");
    const stripedbackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("stripedbackgroundColor", "string");
    const borderColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borderColor", "string");
    parent.postMessage({
        pluginMessage: {
            type: "create-table",
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            floatingFilter: floatingFilter,
            floatingFilterHeight: floatingFilterHeight,
            primarybackgroundColor: primarybackgroundColor,
            stripedbackgroundColor: stripedbackgroundColor,
            borderColor: borderColor,
            referenceCoordinates: referenceCoordinates
        }
    }, "*");
};
document.getElementById("cancel").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: groupNodes, getCurrentPage, getSelection, setSelection, scrollAndZoomIntoView, clone, hexToRgb, getValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNodes", function() { return groupNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelection", function() { return setSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollAndZoomIntoView", function() { return scrollAndZoomIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* Figma API Function Abstraction */
function groupNodes(nodes, parent) {
    return figma.group(nodes, parent);
}
function getCurrentPage() {
    return figma.currentPage;
}
function getSelection() {
    return getCurrentPage().selection;
}
function setSelection(node) {
    figma.currentPage.selection = node;
    return null;
}
function scrollAndZoomIntoView(node) {
    figma.viewport.scrollAndZoomIntoView(node);
    return null;
}
/* Clone function taken from Figma Plugin API example */
function clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === "undefined" ||
        type === "number" ||
        type === "string" ||
        type === "boolean") {
        return val;
    }
    else if (type === "object") {
        if (val instanceof Array) {
            return val.map(x => clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = clone(val[key]);
            }
            return o;
        }
    }
    throw "unknown";
}
/* HEX to RGB Conversion */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
}
/* Extract Inputs */
function getValue(htmlTagId, inputType) {
    const input = document.getElementById(htmlTagId);
    switch (inputType) {
        case "number":
            return parseInt(input.value, 10);
            break;
        case "boolean":
            return input.checked;
            break;
        case "string":
            return input.value;
            break;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDRCQUE0Qix3QkFBd0IseUJBQXlCLEtBQUssT0FBTyxrQkFBa0IsdUJBQXVCLHVCQUF1QixLQUFLLFlBQVksa0JBQWtCLHVCQUF1Qix1QkFBdUIsS0FBSyx5REFBeUQsc0JBQXNCLHlCQUF5Qix3QkFBd0IsbUJBQW1CLG1CQUFtQix3QkFBd0Isc0JBQXNCLHdDQUF3QyxvQkFBb0IsS0FBSyxrQ0FBa0MsMENBQTBDLEtBQUssYUFBYSx1QkFBdUIsMEJBQTBCLG1CQUFtQixLQUFLLG1CQUFtQixxREFBcUQsS0FBSyxxREFBcUQsaUJBQWlCLG1CQUFtQix5QkFBeUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsd0JBQXdCLGtCQUFrQixLQUFLLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsS0FBSyxpQkFBaUIscURBQXFELEtBQUssaUJBQWlCLDBDQUEwQyxLQUFLLG9DQUFvQyx1QkFBdUIsS0FBSyxhQUFhLGtCQUFrQiw2QkFBNkIsa0JBQWtCLEtBQUssMkJBQTJCLDRCQUE0QixLQUFLLFdBQVcsNEJBQTRCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLFlBQVksOEJBQThCLEtBQUssZ0JBQWdCLDhCQUE4QixLQUFLLG9CQUFvQiw0QkFBNEIsS0FBSyxjQUFjLDRCQUE0QixLQUFLLFlBQVksNEJBQTRCLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLHdEQUF3RCxvQkFBb0IscUJBQXFCLGtCQUFrQixLQUFLLHFFQUFxRSx1QkFBdUIscUJBQXFCLHlCQUF5QixzQkFBc0Isa0JBQWtCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLHdCQUF3QixLQUFLLG1FQUFtRSw2QkFBNkIseUJBQXlCLHNCQUFzQixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyxvQ0FBb0MscUJBQXFCLEtBQUssOEdBQThHLGtCQUFrQiw0QkFBNEIsS0FBSywyQkFBMkIseUJBQXlCLG9CQUFvQixtQkFBbUIsS0FBSyxtQ0FBbUMsa0JBQWtCLHlCQUF5QixzQkFBc0IsZ0NBQWdDLHlCQUF5QixrQkFBa0IsZ0NBQWdDLEtBQUssaURBQWlELHFDQUFxQyxLQUFLLGdEQUFnRCxxQ0FBcUMsS0FBSywyQ0FBMkMsZ0NBQWdDLEtBQUs7QUFDendHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM0VhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzdPQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDRHQUFtRDs7QUFFckY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBa0I7QUFDcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBYztBQUMvQjtBQUNBLFVBQVUscURBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFjO0FBQ2pDLHlCQUF5QixxREFBYztBQUN2QywyQkFBMkIscURBQWM7QUFDekMsaUNBQWlDLHFEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLHNCQUFzQixxREFBYztBQUNwQyxtQkFBbUIscURBQWM7QUFDakM7QUFDQSxnQkFBZ0IscURBQWM7QUFDOUI7QUFDQSxpQkFBaUIscURBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWM7QUFDcEMsbUJBQW1CLHFEQUFjO0FBQ2pDLDBCQUEwQixxREFBYztBQUN4Qyx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTtBQUNBLCtCQUErQixxREFBYztBQUM3QyxnQ0FBZ0MscURBQWM7QUFDOUMsMEJBQTBCLHFEQUFjO0FBQ3hDLHdCQUF3QixxREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBYztBQUNsQyxpQ0FBaUMscURBQWM7QUFDL0MsbUNBQW1DLHFEQUFjO0FBQ2pELG1DQUFtQyxxREFBYztBQUNqRCx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLGlCQUFpQixFQUFFO0FBQzVEOzs7Ozs7Ozs7Ozs7O0FDeE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250OiAxMnB4IHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDEwcHggMTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gQnV0dG9ucyAtLS0gKi9cXHJcXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogOHB4IDQwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwcHg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcclxcbn1cXHJcXG4jY3JlYXRlIHtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDBhOWUwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jY3JlYXRlOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBJbnB1dCAtLS0gKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbmlucHV0OmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gR3JpZCAtLS0gKi9cXHJcXG4ucm93IHtcXHJcXG4gIHBhZGRpbmc6IDJweCAzcHg7XFxyXFxufVxcclxcbi5jb2x1bW4ge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5jb2x1bW4gLnplcm8tcGFkZGluZyB7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5oYWxmIHtcXHJcXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnR3by10aGlyZHMge1xcclxcbiAgd2lkdGg6IDY2LjclICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi50aGlyZCB7XFxyXFxuICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLm9uZS1zaXh0aCB7XFxyXFxuICB3aWR0aDogMTYuNyUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRocmVlLWZvdXJ0aHMge1xcclxcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ucXVhcnRlciB7XFxyXFxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5sYWJlbCB7XFxyXFxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5pbnB1dC1jb2x1bW4ge1xcclxcbiAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cXHJcXG4ucm93OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIENoZWNrYm94IC0tLSAqL1xcclxcbi8qIFRoZSBjb250YWluZXIgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDNweCAwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXHJcXG4uY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50b2dnbGUtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWRpc3BsYXkuaXMtdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIEN1c3RvbSBSYWRpbyBCdXR0b24gLS0tICovXFxyXFxuLyogQmFzZWQgb24gQ29kZXBlbiBieSBTYWwgKi9cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtOTk5OWVtO1xcclxcbiAgdG9wOiAtOTk5OWVtO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyODYwOGY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE5ZTA7XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC43ZW0gMCAwIDAuN2VtO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbDpsYXN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwLjdlbSAwLjdlbSAwO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b246Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Yjg2YjQ7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgXCIuL3VpLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xyXG4vKiBTdGF0ZSBDaGFuZ2VzIFZhcmlhYmxlICovXHJcbmxldCBpc1NoaWZ0SGVsZCA9IGZhbHNlO1xyXG4vKiBSdW4gYWZ0ZXIgb25Mb2FkICovXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuc2VsZWN0KCk7XHJcbn0pO1xyXG4vKiBUb2dnbGUgSFRNTCBSZW5kZXJpbmcgKi9cclxuZnVuY3Rpb24gdG9nZ2xlRWRpdGFibGUoaHRtbFRhZ0lkLCBpc1ByZXJlcXVpc2l0ZVNlbGVjdGVkLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGNvbnN0IGh0bWxUYWdCeUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcclxuICAgIGlmIChodG1sVGFnQnlJZC5jaGVja2VkKSB7XHJcbiAgICAgICAgaHRtbFRhZ0J5SWQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJlcmVxdWlzaXRlU2VsZWN0ZWQpIHtcclxuICAgICAgICBodG1sVGFnQnlJZC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGh0bWxUYWdCeUlkLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaHRtbFRhZ0J5SWQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGh0bWxUYWdCeUlkLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbi8vIERldGVjdCByYWRpbyBidXR0b25zIHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKVxyXG4gICAgICAgIC5jaGVja2VkKSB7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5XaWR0aFwiLCBmYWxzZSwgXCIxMDBcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dIZWlnaHRcIiwgZmFsc2UsIFwiMzBcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIHRydWUsIFwiMTAyNFwiKTtcclxuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlSGVpZ2h0XCIsIHRydWUsIFwiNzY4XCIpO1xyXG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uc1wiLCB0cnVlLCBcIjVcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dzXCIsIHRydWUsIFwiOFwiKTtcclxuICAgIH1cclxufTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpLmNoZWNrZWQpIHtcclxuICAgICAgICB0b2dnbGVFZGl0YWJsZShcImNvbHVtbldpZHRoXCIsIHRydWUsIFwiMTAwXCIpO1xyXG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93SGVpZ2h0XCIsIHRydWUsIFwiMzBcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIGZhbHNlLCBcIjEwMjRcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCBmYWxzZSwgXCI3NjhcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIHRydWUsIFwiNVwiKTtcclxuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd3NcIiwgdHJ1ZSwgXCI4XCIpO1xyXG4gICAgfVxyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikuY2hlY2tlZCkge1xyXG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uV2lkdGhcIiwgdHJ1ZSwgXCIxMDBcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dIZWlnaHRcIiwgdHJ1ZSwgXCIzMFwiKTtcclxuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlV2lkdGhcIiwgdHJ1ZSwgXCIxMDI0XCIpO1xyXG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwidGFibGVIZWlnaHRcIiwgdHJ1ZSwgXCI3NjhcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIGZhbHNlLCBcIjVcIik7XHJcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dzXCIsIGZhbHNlLCBcIjhcIik7XHJcbiAgICB9XHJcbn07XHJcbi8vIERldGVjdCBoZWFkZXIgY2hlY2tib3ggc3RhdGUgY2hhbmdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIlwiKTtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwiaGVhZGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmNoZWNrZWQsIFwiNjBcIik7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikuY2hlY2tlZCwgXCJcIik7XHJcbn07XHJcbi8vIERldGVjdCBmbG9hdGluZyBmaWx0ZXIgY2hlY2tib3ggc3RhdGUgY2hhbmdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikuY2hlY2tlZCwgXCIzMFwiKTtcclxufTtcclxuLy8gRGV0ZWN0IHN0cmlwZWQvYWx0ZXJuYXRlIGJhY2tncm91bmQgY2hlY2tib3ggc3RhdGUgY2hhbmdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIikub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcInN0cmlwZWRCYWNrZ3JvdW5kQ29sb3JcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKVxyXG4gICAgICAgIC5jaGVja2VkLCBcIiNGRkZGRkZcIik7XHJcbn07XHJcbi8vIERldGVjdCBib3JkZXJzIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlcnNcIikub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcImJvcmRlckNvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5jaGVja2VkLCBcIiNDN0M3QzdcIik7XHJcbn07XHJcbi8qIEtleWJvYXJkIE5hdmlnYXRpb24gKi9cclxuZG9jdW1lbnQub25rZXlkb3duID0ga2V5RG93biA9PiB7XHJcbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAoa2V5RG93bi5rZXkgPT09IFwiU2hpZnRcIikge1xyXG4gICAgICAgIGlzU2hpZnRIZWxkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5Lm1hdGNoKC9BcnJvd1xcdysvZykpIHtcclxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC50eXBlID09PSBcInRleHRcIikge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChhY3RpdmVFbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU2hpZnRIZWxkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleURvd24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiY2FuY2VsXCIgJiYgaXNTaGlmdEhlbGQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICBrZXlEb3duLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiY29sdW1uc1wiICYmIGlzU2hpZnRIZWxkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCA9ICFhY3RpdmVFbGVtZW50LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImhlYWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiNjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJmbG9hdGluZ0ZpbHRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIzMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwic3RyaXBlZEJhY2tncm91bmRDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImJvcmRlcnNcIikge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJib3JkZXJDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0M3QzdDN1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZG9jdW1lbnQub25rZXl1cCA9IGtleVVwID0+IHtcclxuICAgIGlmIChrZXlVcC5rZXkgPT09IFwiU2hpZnRcIikge1xyXG4gICAgICAgIGlzU2hpZnRIZWxkID0gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbi8qIENyZWF0ZSBhbmQgQ2FuY2VsIEJ1dHRvbiBBY3Rpb25zICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBTZWxlY3RlZCBNb2RlXHJcbiAgICBjb25zdCBtb2RlID0gRmlnbWEuZ2V0VmFsdWUoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiLCBcImJvb2xlYW5cIilcclxuICAgICAgICA/IFwiY291bnQtYW5kLXRhYmxlLXNpemVcIlxyXG4gICAgICAgIDogRmlnbWEuZ2V0VmFsdWUoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIsIFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICA/IFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiXHJcbiAgICAgICAgICAgIDogXCJjZWxsLWFuZC10YWJsZS1zaXplXCI7XHJcbiAgICAvLyBIZWFkZXIgSW5mb1xyXG4gICAgY29uc3QgaGVhZGVyID0gRmlnbWEuZ2V0VmFsdWUoXCJoZWFkZXJcIiwgXCJib29sZWFuXCIpO1xyXG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJoZWFkZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XHJcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlciA9IEZpZ21hLmdldFZhbHVlKFwiZmxvYXRpbmdGaWx0ZXJcIiwgXCJib29sZWFuXCIpO1xyXG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xyXG4gICAgLy8gQ29uc3RyYWludHMgUHJvY2Vzc2luZ1xyXG4gICAgbGV0IGNvbHVtbnMgPSAwO1xyXG4gICAgbGV0IGNvbHVtbldpZHRoID0gMDtcclxuICAgIGxldCByb3dzID0gMDtcclxuICAgIGxldCByb3dIZWlnaHQgPSAwO1xyXG4gICAgbGV0IHJlZmVyZW5jZUNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICBjYXNlIFwiY291bnQtYW5kLXRhYmxlLXNpemVcIjpcclxuICAgICAgICAgICAgY29sdW1ucyA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uc1wiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgcm93cyA9IEZpZ21hLmdldFZhbHVlKFwicm93c1wiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGggPVxyXG4gICAgICAgICAgICAgICAgRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpIC8gY29sdW1ucztcclxuICAgICAgICAgICAgcm93SGVpZ2h0ID1cclxuICAgICAgICAgICAgICAgIChGaWdtYS5nZXRWYWx1ZShcInRhYmxlSGVpZ2h0XCIsIFwibnVtYmVyXCIpIC1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQpIC9cclxuICAgICAgICAgICAgICAgICAgICByb3dzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiOlxyXG4gICAgICAgICAgICBjb2x1bW5zID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5zXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICByb3dzID0gRmlnbWEuZ2V0VmFsdWUoXCJyb3dzXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uV2lkdGhcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwicm93SGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiOlxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZVdpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUhlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwidGFibGVIZWlnaHRcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5XaWR0aFwiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgcm93SGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJyb3dIZWlnaHRcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSBNYXRoLmZsb29yKHRhYmxlV2lkdGggLyBjb2x1bW5XaWR0aCk7XHJcbiAgICAgICAgICAgIHJvd3MgPSBNYXRoLmZsb29yKHRhYmxlSGVpZ2h0IC8gcm93SGVpZ2h0KTtcclxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSA9IHRhYmxlSGVpZ2h0ICUgcm93SGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy8gUHJvcGVydGllcyBhbmQgQ3VzdG9taXNhdGlvbnNcclxuICAgIGNvbnN0IGJvcmRlcnMgPSBGaWdtYS5nZXRWYWx1ZShcImJvcmRlcnNcIiwgXCJib29sZWFuXCIpO1xyXG4gICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZHMgPSBGaWdtYS5nZXRWYWx1ZShcImFsdGVybmF0ZUJhY2tncm91bmRzXCIsIFwiYm9vbGVhblwiKTtcclxuICAgIGNvbnN0IHByaW1hcnliYWNrZ3JvdW5kQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcInByaW1hcnliYWNrZ3JvdW5kQ29sb3JcIiwgXCJzdHJpbmdcIik7XHJcbiAgICBjb25zdCBzdHJpcGVkYmFja2dyb3VuZENvbG9yID0gRmlnbWEuZ2V0VmFsdWUoXCJzdHJpcGVkYmFja2dyb3VuZENvbG9yXCIsIFwic3RyaW5nXCIpO1xyXG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcImJvcmRlckNvbG9yXCIsIFwic3RyaW5nXCIpO1xyXG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcclxuICAgICAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHQsXHJcbiAgICAgICAgICAgIGJvcmRlcnM6IGJvcmRlcnMsXHJcbiAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRzOiBhbHRlcm5hdGVCYWNrZ3JvdW5kcyxcclxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlcjogZmxvYXRpbmdGaWx0ZXIsXHJcbiAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVySGVpZ2h0OiBmbG9hdGluZ0ZpbHRlckhlaWdodCxcclxuICAgICAgICAgICAgcHJpbWFyeWJhY2tncm91bmRDb2xvcjogcHJpbWFyeWJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgc3RyaXBlZGJhY2tncm91bmRDb2xvcjogc3RyaXBlZGJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlczogcmVmZXJlbmNlQ29vcmRpbmF0ZXNcclxuICAgICAgICB9XHJcbiAgICB9LCBcIipcIik7XHJcbn07XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6IFwiY2FuY2VsXCIgfSB9LCBcIipcIik7XHJcbn07XHJcbiIsIi8qIEZpZ21hIEFQSSBGdW5jdGlvbiBBYnN0cmFjdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBOb2Rlcyhub2RlcywgcGFyZW50KSB7XHJcbiAgICByZXR1cm4gZmlnbWEuZ3JvdXAobm9kZXMsIHBhcmVudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xyXG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gZ2V0Q3VycmVudFBhZ2UoKS5zZWxlY3Rpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbihub2RlKSB7XHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKSB7XHJcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4vKiBDbG9uZSBmdW5jdGlvbiB0YWtlbiBmcm9tIEZpZ21hIFBsdWdpbiBBUEkgZXhhbXBsZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcIm51bWJlclwiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBjbG9uZSh4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcclxuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aHJvdyBcInVua25vd25cIjtcclxufVxyXG4vKiBIRVggdG8gUkdCIENvbnZlcnNpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogbnVsbDtcclxufVxyXG4vKiBFeHRyYWN0IElucHV0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoaHRtbFRhZ0lkLCBpbnB1dFR5cGUpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcclxuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9