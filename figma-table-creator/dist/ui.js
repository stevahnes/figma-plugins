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
exports.push([module.i, "body {\n  font: 12px sans-serif;\n  margin: 10px 15px;\n  text-align: center;\n}\np {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\nh4 {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\n/* --- Buttons --- */\n.btn-standalone button {\n  cursor: pointer;\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 40px;\n  margin: 5px 0px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n.btn-standalone button:focus {\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\n#create {\n  box-shadow: none;\n  background: #00a9e0;\n  color: white;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\n\n/* --- Input --- */\ninput[type=\"text\"] {\n  width: 75%;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n  font-weight: bold;\n  float: left;\n}\ninput[type=\"checkbox\"] {\n  width: 100%;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n  font-weight: bold;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\n\n/* --- Grid --- */\n.row {\n  padding: 2px 3px;\n}\n.column {\n  float: left;\n  vertical-align: middle;\n  width: 100%;\n}\n.column .zero-padding {\n  padding: 0 !important;\n}\n.half {\n  width: 50% !important;\n}\n.two-thirds {\n  width: 66.7% !important;\n}\n.third {\n  width: 33.3% !important;\n}\n.one-sixth {\n  width: 16.7% !important;\n}\n.three-fourths {\n  width: 75% !important;\n}\n.quarter {\n  width: 25% !important;\n}\n.label {\n  width: 65% !important;\n}\n.input-column {\n  width: 35% !important;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* --- Checkbox --- */\n/* The container */\n.container {\n  padding: 3px 0px;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  width: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n}\n.toggle-display {\n  display: none;\n}\n\n.toggle-display.is-visible {\n  display: block;\n}\n\n/* --- Custom Radio Button --- */\n/* Based on Codepen by Sal */\n.options-radio-buttons-wrapper {\n  clear: both;\n  display: inline-block;\n}\n.options-radio-button {\n  position: absolute;\n  left: -9999em;\n  top: -9999em;\n}\n.options-radio-button + label {\n  float: left;\n  padding: 0.5em 1em;\n  cursor: pointer;\n  border: 1px solid #28608f;\n  margin-right: -1px;\n  color: #fff;\n  background-color: #00a9e0;\n}\n.options-radio-button + label:first-of-type {\n  border-radius: 0.7em 0 0 0.7em;\n}\n.options-radio-button + label:last-of-type {\n  border-radius: 0 0.7em 0.7em 0;\n}\n.options-radio-button:checked + label {\n  background-color: #4b86b4;\n}\n", ""]);
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
    // FIXME by adding header info to calculations
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
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number") / rows;
            break;
        case "count-and-cell-size":
            columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
            rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            break;
        case "cell-and-table-size": // FIXME reference coordinates messes up border
            const tableWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableWidth", "number");
            const tableHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            columns = Math.floor(tableWidth / columnWidth);
            rows = Math.floor(tableHeight / rowHeight);
            referenceCoordinates.y = tableHeight % rowHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDBCQUEwQixz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QUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5wIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIC0tLSBCdXR0b25zIC0tLSAqL1xcbi5idG4tc3RhbmRhbG9uZSBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggNDBweDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idG4tc3RhbmRhbG9uZSBidXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxufVxcbiNjcmVhdGUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMGE5ZTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNjcmVhdGU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLyogLS0tIElucHV0IC0tLSAqL1xcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxufVxcblxcbi8qIC0tLSBHcmlkIC0tLSAqL1xcbi5yb3cge1xcbiAgcGFkZGluZzogMnB4IDNweDtcXG59XFxuLmNvbHVtbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbHVtbiAuemVyby1wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuLmhhbGYge1xcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcbn1cXG4udHdvLXRoaXJkcyB7XFxuICB3aWR0aDogNjYuNyUgIWltcG9ydGFudDtcXG59XFxuLnRoaXJkIHtcXG4gIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xcbn1cXG4ub25lLXNpeHRoIHtcXG4gIHdpZHRoOiAxNi43JSAhaW1wb3J0YW50O1xcbn1cXG4udGhyZWUtZm91cnRocyB7XFxuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XFxufVxcbi5xdWFydGVyIHtcXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcXG59XFxuLmxhYmVsIHtcXG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcXG59XFxuLmlucHV0LWNvbHVtbiB7XFxuICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XFxufVxcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xcbi5yb3c6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4vKiAtLS0gQ2hlY2tib3ggLS0tICovXFxuLyogVGhlIGNvbnRhaW5lciAqL1xcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogM3B4IDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE1cHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbi5jb250YWluZXIgaW5wdXQge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvZ2dsZS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtZGlzcGxheS5pcy12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiAtLS0gQ3VzdG9tIFJhZGlvIEJ1dHRvbiAtLS0gKi9cXG4vKiBCYXNlZCBvbiBDb2RlcGVuIGJ5IFNhbCAqL1xcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbnMtd3JhcHBlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5ZW07XFxuICB0b3A6IC05OTk5ZW07XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4NjA4ZjtcXG4gIG1hcmdpbi1yaWdodDogLTFweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTllMDtcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uICsgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjdlbSAwIDAgMC43ZW07XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAuN2VtIDAuN2VtIDA7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbjpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiODZiNDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vdWkuY3NzXCI7XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuLyogU3RhdGUgQ2hhbmdlcyBWYXJpYWJsZSAqL1xubGV0IGlzU2hpZnRIZWxkID0gZmFsc2U7XG4vKiBSdW4gYWZ0ZXIgb25Mb2FkICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5zZWxlY3QoKTtcbn0pO1xuLyogVG9nZ2xlIEhUTUwgUmVuZGVyaW5nICovXG5mdW5jdGlvbiB0b2dnbGVFZGl0YWJsZShodG1sVGFnSWQsIGlzUHJlcmVxdWlzaXRlU2VsZWN0ZWQsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IGh0bWxUYWdCeUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcbiAgICBpZiAoaHRtbFRhZ0J5SWQuY2hlY2tlZCkge1xuICAgICAgICBodG1sVGFnQnlJZC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc1ByZXJlcXVpc2l0ZVNlbGVjdGVkKSB7XG4gICAgICAgIGh0bWxUYWdCeUlkLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGh0bWxUYWdCeUlkLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaHRtbFRhZ0J5SWQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBodG1sVGFnQnlJZC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8gRGV0ZWN0IHJhZGlvIGJ1dHRvbnMgc3RhdGUgY2hhbmdlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIilcbiAgICAgICAgLmNoZWNrZWQpIHtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5XaWR0aFwiLCBmYWxzZSwgXCIxMDBcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93SGVpZ2h0XCIsIGZhbHNlLCBcIjMwXCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlV2lkdGhcIiwgdHJ1ZSwgXCIxMDI0XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlSGVpZ2h0XCIsIHRydWUsIFwiNzY4XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcImNvbHVtbnNcIiwgdHJ1ZSwgXCI1XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd3NcIiwgdHJ1ZSwgXCI4XCIpO1xuICAgIH1cbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC1jZWxsLXNpemVcIikub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5XaWR0aFwiLCB0cnVlLCBcIjEwMFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dIZWlnaHRcIiwgdHJ1ZSwgXCIzMFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIGZhbHNlLCBcIjEwMjRcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwidGFibGVIZWlnaHRcIiwgZmFsc2UsIFwiNzY4XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcImNvbHVtbnNcIiwgdHJ1ZSwgXCI1XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd3NcIiwgdHJ1ZSwgXCI4XCIpO1xuICAgIH1cbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5XaWR0aFwiLCB0cnVlLCBcIjEwMFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dIZWlnaHRcIiwgdHJ1ZSwgXCIzMFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIHRydWUsIFwiMTAyNFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCB0cnVlLCBcIjc2OFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIGZhbHNlLCBcIjVcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93c1wiLCBmYWxzZSwgXCI4XCIpO1xuICAgIH1cbn07XG4vLyBEZXRlY3QgaGVhZGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIlwiKTtcbiAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIjYwXCIpO1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5jaGVja2VkLCBcIlwiKTtcbn07XG4vLyBEZXRlY3QgZmxvYXRpbmcgZmlsdGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikuY2hlY2tlZCwgXCIzMFwiKTtcbn07XG4vLyBEZXRlY3Qgc3RyaXBlZC9hbHRlcm5hdGUgYmFja2dyb3VuZCBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJzdHJpcGVkQmFja2dyb3VuZENvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIilcbiAgICAgICAgLmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcbn07XG4vLyBEZXRlY3QgYm9yZGVycyBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcImJvcmRlckNvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5jaGVja2VkLCBcIiNDN0M3QzdcIik7XG59O1xuLyogS2V5Ym9hcmQgTmF2aWdhdGlvbiAqL1xuZG9jdW1lbnQub25rZXlkb3duID0ga2V5RG93biA9PiB7XG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChrZXlEb3duLmtleSA9PT0gXCJTaGlmdFwiKSB7XG4gICAgICAgIGlzU2hpZnRIZWxkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkubWF0Y2goL0Fycm93XFx3Ky9nKSkge1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC50eXBlID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoYWN0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNTaGlmdEhlbGQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJjYW5jZWxcIiAmJiBpc1NoaWZ0SGVsZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5mb2N1cygpO1xuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiY29sdW1uc1wiICYmIGlzU2hpZnRIZWxkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKS5mb2N1cygpO1xuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmNoZWNrZWQgPSAhYWN0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiaGVhZGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCJcIik7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJoZWFkZXJIZWlnaHRcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIjYwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJmbG9hdGluZ0ZpbHRlclwiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiMzBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcInN0cmlwZWRCYWNrZ3JvdW5kQ29sb3JcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImJvcmRlcnNcIikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiYm9yZGVyQ29sb3JcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIiNDN0M3QzdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuZG9jdW1lbnQub25rZXl1cCA9IGtleVVwID0+IHtcbiAgICBpZiAoa2V5VXAua2V5ID09PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgaXNTaGlmdEhlbGQgPSBmYWxzZTtcbiAgICB9XG59O1xuLyogQ3JlYXRlIGFuZCBDYW5jZWwgQnV0dG9uIEFjdGlvbnMgKi9cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gU2VsZWN0ZWQgTW9kZVxuICAgIGNvbnN0IG1vZGUgPSBGaWdtYS5nZXRWYWx1ZShcImNvdW50LWFuZC10YWJsZS1zaXplXCIsIFwiYm9vbGVhblwiKVxuICAgICAgICA/IFwiY291bnQtYW5kLXRhYmxlLXNpemVcIlxuICAgICAgICA6IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiLCBcImJvb2xlYW5cIilcbiAgICAgICAgICAgID8gXCJjb3VudC1hbmQtY2VsbC1zaXplXCJcbiAgICAgICAgICAgIDogXCJjZWxsLWFuZC10YWJsZS1zaXplXCI7XG4gICAgLy8gSGVhZGVyIEluZm9cbiAgICBjb25zdCBoZWFkZXIgPSBGaWdtYS5nZXRWYWx1ZShcImhlYWRlclwiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJoZWFkZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXIgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVyXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckhlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgLy8gQ29uc3RyYWludHMgUHJvY2Vzc2luZ1xuICAgIC8vIEZJWE1FIGJ5IGFkZGluZyBoZWFkZXIgaW5mbyB0byBjYWxjdWxhdGlvbnNcbiAgICBsZXQgY29sdW1ucyA9IDA7XG4gICAgbGV0IGNvbHVtbldpZHRoID0gMDtcbiAgICBsZXQgcm93cyA9IDA7XG4gICAgbGV0IHJvd0hlaWdodCA9IDA7XG4gICAgbGV0IHJlZmVyZW5jZUNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgY29sdW1ucyA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uc1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd3MgPSBGaWdtYS5nZXRWYWx1ZShcInJvd3NcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9XG4gICAgICAgICAgICAgICAgRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpIC8gY29sdW1ucztcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwidGFibGVIZWlnaHRcIiwgXCJudW1iZXJcIikgLyByb3dzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XG4gICAgICAgICAgICBjb2x1bW5zID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5zXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgcm93cyA9IEZpZ21hLmdldFZhbHVlKFwicm93c1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5XaWR0aFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwicm93SGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjZWxsLWFuZC10YWJsZS1zaXplXCI6IC8vIEZJWE1FIHJlZmVyZW5jZSBjb29yZGluYXRlcyBtZXNzZXMgdXAgYm9yZGVyXG4gICAgICAgICAgICBjb25zdCB0YWJsZVdpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcInRhYmxlSGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29sdW1uV2lkdGggPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbldpZHRoXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgcm93SGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJyb3dIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb2x1bW5zID0gTWF0aC5mbG9vcih0YWJsZVdpZHRoIC8gY29sdW1uV2lkdGgpO1xuICAgICAgICAgICAgcm93cyA9IE1hdGguZmxvb3IodGFibGVIZWlnaHQgLyByb3dIZWlnaHQpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSA9IHRhYmxlSGVpZ2h0ICUgcm93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFByb3BlcnRpZXMgYW5kIEN1c3RvbWlzYXRpb25zXG4gICAgY29uc3QgYm9yZGVycyA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyc1wiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZHMgPSBGaWdtYS5nZXRWYWx1ZShcImFsdGVybmF0ZUJhY2tncm91bmRzXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBwcmltYXJ5YmFja2dyb3VuZENvbG9yID0gRmlnbWEuZ2V0VmFsdWUoXCJwcmltYXJ5YmFja2dyb3VuZENvbG9yXCIsIFwic3RyaW5nXCIpO1xuICAgIGNvbnN0IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcInN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JcIiwgXCJzdHJpbmdcIik7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcImJvcmRlckNvbG9yXCIsIFwic3RyaW5nXCIpO1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlLXRhYmxlXCIsXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgICAgIHJvd0hlaWdodDogcm93SGVpZ2h0LFxuICAgICAgICAgICAgYm9yZGVyczogYm9yZGVycyxcbiAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRzOiBhbHRlcm5hdGVCYWNrZ3JvdW5kcyxcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlcjogZmxvYXRpbmdGaWx0ZXIsXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodDogZmxvYXRpbmdGaWx0ZXJIZWlnaHQsXG4gICAgICAgICAgICBwcmltYXJ5YmFja2dyb3VuZENvbG9yOiBwcmltYXJ5YmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgc3RyaXBlZGJhY2tncm91bmRDb2xvcjogc3RyaXBlZGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzOiByZWZlcmVuY2VDb29yZGluYXRlc1xuICAgICAgICB9XG4gICAgfSwgXCIqXCIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiBcImNhbmNlbFwiIH0gfSwgXCIqXCIpO1xufTtcbiIsIi8qIEZpZ21hIEFQSSBGdW5jdGlvbiBBYnN0cmFjdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKiBDbG9uZSBmdW5jdGlvbiB0YWtlbiBmcm9tIEZpZ21hIFBsdWdpbiBBUEkgZXhhbXBsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcInVua25vd25cIjtcbn1cbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuLyogRXh0cmFjdCBJbnB1dHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==