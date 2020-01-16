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
exports.push([module.i, "body {\r\n  font: 12px sans-serif;\r\n  margin: 10px 15px;\r\n  text-align: center;\r\n}\r\np {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\nh4 {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\n/* --- Buttons --- */\r\n.btn-standalone button {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  background: white;\r\n  color: black;\r\n  border: none;\r\n  padding: 8px 100px;\r\n  margin: 5px 0px;\r\n  box-shadow: inset 0 0 0 1px black;\r\n  outline: none;\r\n}\r\n.btn-standalone button:focus {\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\n\r\n/* --- Input --- */\r\ninput[type=\"text\"] {\r\n  width: 75%;\r\n  border: none;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-size: 12px;\r\n  float: left;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n}\r\ninput[type=\"text\"]:hover {\r\n  box-shadow: inset 0 0 0 1px #f2f2f2;\r\n}\r\ninput:focus {\r\n  border-radius: 3px;\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\ninput:focus::selection {\r\n  background: #b9e2fe;\r\n}\r\ninput:::selection {\r\n  background: #c8c8c8;\r\n}\r\ninput:disabled {\r\n  color: #bebebe;\r\n}\r\n\r\n/* --- Grid --- */\r\n.row {\r\n  padding: 2px 3px;\r\n}\r\n.column {\r\n  float: left;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n.column .zero-padding {\r\n  padding: 0 !important;\r\n}\r\n.half {\r\n  width: 50% !important;\r\n}\r\n.two-thirds {\r\n  width: 66.7% !important;\r\n}\r\n.third {\r\n  width: 33.3% !important;\r\n}\r\n.one-sixth {\r\n  width: 16.7% !important;\r\n}\r\n.three-fourths {\r\n  width: 75% !important;\r\n}\r\n.quarter {\r\n  width: 25% !important;\r\n}\r\n.label {\r\n  width: 65% !important;\r\n}\r\n.input-column {\r\n  width: 35% !important;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* --- Checkbox --- */\r\n/* The container */\r\n.container {\r\n  padding: 3px 0px;\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 15px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  vertical-align: middle;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.toggle-display {\r\n  display: none;\r\n}\r\n\r\n.toggle-display.is-visible {\r\n  display: block;\r\n}\r\n\r\n/* --- Custom Radio Button --- */\r\n/* Based on Codepen by Sal */\r\n.options-radio-buttons-wrapper {\r\n  clear: both;\r\n  display: flex;\r\n}\r\n.options-radio-button {\r\n  position: absolute;\r\n  left: -9999em;\r\n  top: -9999em;\r\n}\r\n.options-radio-button + label {\r\n  width: 33.3%;\r\n  float: left;\r\n  padding: 0.5em 1em;\r\n  cursor: pointer;\r\n  border: 0px;\r\n  color: #bebebe;\r\n  font-weight: 300;\r\n  margin-right: -1px;\r\n}\r\n.options-radio-button + label:first-of-type {\r\n  border-radius: 0.7em 0 0 0.7em;\r\n}\r\n.options-radio-button + label:last-of-type {\r\n  border-radius: 0 0.7em 0.7em 0;\r\n}\r\n.options-radio-button:hover + label {\r\n  color: #000000;\r\n  font-weight: 300;\r\n}\r\n.options-radio-button:checked + label {\r\n  color: #000000;\r\n  font-weight: 550;\r\n}\r\n", ""]);
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
let isAltHeld = false;
/* Run after onLoad */
window.addEventListener("load", function () {
    document.getElementById("tableWidth").select();
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
        htmlTagById.value = "N.A.";
    }
    return null;
}
/* Toggle HTML Rendering */
function setDefault(mode) {
    switch (mode) {
        case "count-and-table-size":
            toggleEditable("columnWidth", false, "100");
            toggleEditable("rowHeight", false, "30");
            toggleEditable("tableWidth", true, "1024");
            toggleEditable("tableHeight", true, "768");
            toggleEditable("columns", true, "5");
            toggleEditable("rows", true, "8");
            document.getElementById("tableWidth").select();
            break;
        case "count-and-cell-size":
            toggleEditable("columnWidth", true, "100");
            toggleEditable("rowHeight", true, "30");
            toggleEditable("tableWidth", false, "1024");
            toggleEditable("tableHeight", false, "768");
            toggleEditable("columns", true, "5");
            toggleEditable("rows", true, "8");
            document.getElementById("columns").select();
            break;
        case "cell-and-table-size":
            toggleEditable("columnWidth", true, "100");
            toggleEditable("rowHeight", true, "30");
            toggleEditable("tableWidth", true, "1024");
            toggleEditable("tableHeight", true, "768");
            toggleEditable("columns", false, "5");
            toggleEditable("rows", false, "8");
            document.getElementById("tableWidth").select();
            break;
    }
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
    if (document.getElementById("count-and-table-size")
        .checked) {
        setDefault("count-and-table-size");
    }
};
document.getElementById("count-and-cell-size").onclick = () => {
    if (document.getElementById("count-and-cell-size").checked) {
        setDefault("count-and-cell-size");
    }
};
document.getElementById("cell-and-table-size").onclick = () => {
    if (document.getElementById("cell-and-table-size").checked) {
        setDefault("cell-and-table-size");
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
    toggleEditable("stripedbackgroundColor", document.getElementById("alternateBackgrounds")
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
    else if (keyDown.key === "Alt") {
        isAltHeld = true;
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
        // Selected Mode
        const mode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-table-size", "boolean")
            ? "count-and-table-size"
            : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-cell-size", "boolean")
                ? "count-and-cell-size"
                : "cell-and-table-size";
        if (activeElement.id === "cancel" && isShiftHeld === false) {
            switch (mode) {
                case "count-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
                case "count-and-cell-size":
                    document.getElementById("columns").select();
                    break;
                case "cell-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
            }
            keyDown.preventDefault();
        }
        else if (mode === "count-and-cell-size" &&
            activeElement.id === "columns" &&
            isShiftHeld === true) {
            document.getElementById("cancel").focus();
            keyDown.preventDefault();
        }
        else if (activeElement.id === "tableWidth" && isShiftHeld === true) {
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
                toggleEditable("stripedbackgroundColor", activeElement.checked, "#FFFFFF");
            }
            else if (activeElement.id === "borders") {
                toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
            }
        }
    }
    else if (keyDown.key === "1" ||
        keyDown.key === "2" ||
        keyDown.key === "3") {
        if (isAltHeld) {
            switch (keyDown.key) {
                case "1":
                    document.getElementById("cell-and-table-size").checked = true;
                    setDefault("cell-and-table-size");
                    break;
                case "2":
                    document.getElementById("count-and-cell-size").checked = true;
                    setDefault("count-and-cell-size");
                    break;
                case "3":
                    document.getElementById("count-and-table-size").checked = true;
                    setDefault("count-and-table-size");
                    break;
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
            rows = Math.floor((tableHeight - headerHeight) / rowHeight + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDRCQUE0Qix3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O0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFFBQVM7O0FBRTFCOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFrQjtBQUNxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscURBQWM7QUFDbkM7QUFDQSxjQUFjLHFEQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQWM7QUFDL0I7QUFDQSxVQUFVLHFEQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBYztBQUNqQyx5QkFBeUIscURBQWM7QUFDdkMsMkJBQTJCLHFEQUFjO0FBQ3pDLGlDQUFpQyxxREFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxzQkFBc0IscURBQWM7QUFDcEMsbUJBQW1CLHFEQUFjO0FBQ2pDO0FBQ0EsZ0JBQWdCLHFEQUFjO0FBQzlCO0FBQ0EsaUJBQWlCLHFEQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFjO0FBQ3BDLG1CQUFtQixxREFBYztBQUNqQywwQkFBMEIscURBQWM7QUFDeEMsd0JBQXdCLHFEQUFjO0FBQ3RDO0FBQ0E7QUFDQSwrQkFBK0IscURBQWM7QUFDN0MsZ0NBQWdDLHFEQUFjO0FBQzlDLDBCQUEwQixxREFBYztBQUN4Qyx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFjO0FBQ2xDLGlDQUFpQyxxREFBYztBQUMvQyxtQ0FBbUMscURBQWM7QUFDakQsbUNBQW1DLHFEQUFjO0FBQ2pELHdCQUF3QixxREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNuUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBCdXR0b25zIC0tLSAqL1xcclxcbi5idG4tc3RhbmRhbG9uZSBidXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA4cHggMTAwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwcHg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gSW5wdXQgLS0tICovXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2YyZjJmMjtcXHJcXG59XFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogI2I5ZTJmZTtcXHJcXG59XFxyXFxuaW5wdXQ6OjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogI2M4YzhjODtcXHJcXG59XFxyXFxuaW5wdXQ6ZGlzYWJsZWQge1xcclxcbiAgY29sb3I6ICNiZWJlYmU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBHcmlkIC0tLSAqL1xcclxcbi5yb3cge1xcclxcbiAgcGFkZGluZzogMnB4IDNweDtcXHJcXG59XFxyXFxuLmNvbHVtbiB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmNvbHVtbiAuemVyby1wYWRkaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmhhbGYge1xcclxcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udHdvLXRoaXJkcyB7XFxyXFxuICB3aWR0aDogNjYuNyUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRoaXJkIHtcXHJcXG4gIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ub25lLXNpeHRoIHtcXHJcXG4gIHdpZHRoOiAxNi43JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udGhyZWUtZm91cnRocyB7XFxyXFxuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5xdWFydGVyIHtcXHJcXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmlucHV0LWNvbHVtbiB7XFxyXFxuICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xcclxcbi5yb3c6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gQ2hlY2tib3ggLS0tICovXFxyXFxuLyogVGhlIGNvbnRhaW5lciAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogM3B4IDBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRvZ2dsZS1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtZGlzcGxheS5pcy12aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gQ3VzdG9tIFJhZGlvIEJ1dHRvbiAtLS0gKi9cXHJcXG4vKiBCYXNlZCBvbiBDb2RlcGVuIGJ5IFNhbCAqL1xcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbnMtd3JhcHBlciB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtOTk5OWVtO1xcclxcbiAgdG9wOiAtOTk5OWVtO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbCB7XFxyXFxuICB3aWR0aDogMzMuMyU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgY29sb3I6ICNiZWJlYmU7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuN2VtIDAgMCAwLjdlbTtcXHJcXG59XFxyXFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uICsgbGFiZWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMC43ZW0gMC43ZW0gMDtcXHJcXG59XFxyXFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uOmhvdmVyICsgbGFiZWwge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1yYWRpby1idXR0b246Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vdWkuY3NzXCI7XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XHJcbi8qIFN0YXRlIENoYW5nZXMgVmFyaWFibGUgKi9cclxubGV0IGlzU2hpZnRIZWxkID0gZmFsc2U7XHJcbmxldCBpc0FsdEhlbGQgPSBmYWxzZTtcclxuLyogUnVuIGFmdGVyIG9uTG9hZCAqL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xyXG59KTtcclxuLyogVG9nZ2xlIEhUTUwgUmVuZGVyaW5nICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUVkaXRhYmxlKGh0bWxUYWdJZCwgaXNQcmVyZXF1aXNpdGVTZWxlY3RlZCwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBjb25zdCBodG1sVGFnQnlJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XHJcbiAgICBpZiAoaHRtbFRhZ0J5SWQuY2hlY2tlZCkge1xyXG4gICAgICAgIGh0bWxUYWdCeUlkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChpc1ByZXJlcXVpc2l0ZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgaHRtbFRhZ0J5SWQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBodG1sVGFnQnlJZC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGh0bWxUYWdCeUlkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBodG1sVGFnQnlJZC52YWx1ZSA9IFwiTi5BLlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuLyogVG9nZ2xlIEhUTUwgUmVuZGVyaW5nICovXHJcbmZ1bmN0aW9uIHNldERlZmF1bHQobW9kZSkge1xyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvdW50LWFuZC10YWJsZS1zaXplXCI6XHJcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uV2lkdGhcIiwgZmFsc2UsIFwiMTAwXCIpO1xyXG4gICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd0hlaWdodFwiLCBmYWxzZSwgXCIzMFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIHRydWUsIFwiMTAyNFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCB0cnVlLCBcIjc2OFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIHRydWUsIFwiNVwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dzXCIsIHRydWUsIFwiOFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiOlxyXG4gICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImNvbHVtbldpZHRoXCIsIHRydWUsIFwiMTAwXCIpO1xyXG4gICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd0hlaWdodFwiLCB0cnVlLCBcIjMwXCIpO1xyXG4gICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlV2lkdGhcIiwgZmFsc2UsIFwiMTAyNFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCBmYWxzZSwgXCI3NjhcIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uc1wiLCB0cnVlLCBcIjVcIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93c1wiLCB0cnVlLCBcIjhcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5XaWR0aFwiLCB0cnVlLCBcIjEwMFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dIZWlnaHRcIiwgdHJ1ZSwgXCIzMFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIHRydWUsIFwiMTAyNFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCB0cnVlLCBcIjc2OFwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIGZhbHNlLCBcIjVcIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93c1wiLCBmYWxzZSwgXCI4XCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbi8vIERldGVjdCByYWRpbyBidXR0b25zIHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKVxyXG4gICAgICAgIC5jaGVja2VkKSB7XHJcbiAgICAgICAgc2V0RGVmYXVsdChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpO1xyXG4gICAgfVxyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC1jZWxsLXNpemVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC1jZWxsLXNpemVcIikuY2hlY2tlZCkge1xyXG4gICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpO1xyXG4gICAgfVxyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikuY2hlY2tlZCkge1xyXG4gICAgICAgIHNldERlZmF1bHQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpO1xyXG4gICAgfVxyXG59O1xyXG4vLyBEZXRlY3QgaGVhZGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuY2hlY2tlZCwgXCJcIik7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIjYwXCIpO1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLmNoZWNrZWQsIFwiXCIpO1xyXG59O1xyXG4vLyBEZXRlY3QgZmxvYXRpbmcgZmlsdGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLmNoZWNrZWQsIFwiMzBcIik7XHJcbn07XHJcbi8vIERldGVjdCBzdHJpcGVkL2FsdGVybmF0ZSBiYWNrZ3JvdW5kIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJzdHJpcGVkYmFja2dyb3VuZENvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIilcclxuICAgICAgICAuY2hlY2tlZCwgXCIjRkZGRkZGXCIpO1xyXG59O1xyXG4vLyBEZXRlY3QgYm9yZGVycyBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3JkZXJzXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJib3JkZXJDb2xvclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlcnNcIikuY2hlY2tlZCwgXCIjQzdDN0M3XCIpO1xyXG59O1xyXG4vKiBLZXlib2FyZCBOYXZpZ2F0aW9uICovXHJcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGtleURvd24gPT4ge1xyXG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgaWYgKGtleURvd24ua2V5ID09PSBcIlNoaWZ0XCIpIHtcclxuICAgICAgICBpc1NoaWZ0SGVsZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJBbHRcIikge1xyXG4gICAgICAgIGlzQWx0SGVsZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlEb3duLmtleS5tYXRjaCgvQXJyb3dcXHcrL2cpKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoYWN0aXZlRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1NoaWZ0SGVsZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5RG93bi5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICAgIC8vIFNlbGVjdGVkIE1vZGVcclxuICAgICAgICBjb25zdCBtb2RlID0gRmlnbWEuZ2V0VmFsdWUoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiLCBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgPyBcImNvdW50LWFuZC10YWJsZS1zaXplXCJcclxuICAgICAgICAgICAgOiBGaWdtYS5nZXRWYWx1ZShcImNvdW50LWFuZC1jZWxsLXNpemVcIiwgXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgICAgICA/IFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiO1xyXG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImNhbmNlbFwiICYmIGlzU2hpZnRIZWxkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSBcImNvdW50LWFuZC1jZWxsLXNpemVcIiAmJlxyXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmlkID09PSBcImNvbHVtbnNcIiAmJlxyXG4gICAgICAgICAgICBpc1NoaWZ0SGVsZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICBrZXlEb3duLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwidGFibGVXaWR0aFwiICYmIGlzU2hpZnRIZWxkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCA9ICFhY3RpdmVFbGVtZW50LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImhlYWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiNjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJmbG9hdGluZ0ZpbHRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIzMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwic3RyaXBlZGJhY2tncm91bmRDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImJvcmRlcnNcIikge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJib3JkZXJDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0M3QzdDN1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIjFcIiB8fFxyXG4gICAgICAgIGtleURvd24ua2V5ID09PSBcIjJcIiB8fFxyXG4gICAgICAgIGtleURvd24ua2V5ID09PSBcIjNcIikge1xyXG4gICAgICAgIGlmIChpc0FsdEhlbGQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVmYXVsdChcImNlbGwtYW5kLXRhYmxlLXNpemVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZWZhdWx0KFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZWZhdWx0KFwiY291bnQtYW5kLXRhYmxlLXNpemVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmRvY3VtZW50Lm9ua2V5dXAgPSBrZXlVcCA9PiB7XHJcbiAgICBpZiAoa2V5VXAua2V5ID09PSBcIlNoaWZ0XCIpIHtcclxuICAgICAgICBpc1NoaWZ0SGVsZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG4vKiBDcmVhdGUgYW5kIENhbmNlbCBCdXR0b24gQWN0aW9ucyAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gU2VsZWN0ZWQgTW9kZVxyXG4gICAgY29uc3QgbW9kZSA9IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIiwgXCJib29sZWFuXCIpXHJcbiAgICAgICAgPyBcImNvdW50LWFuZC10YWJsZS1zaXplXCJcclxuICAgICAgICA6IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiLCBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgPyBcImNvdW50LWFuZC1jZWxsLXNpemVcIlxyXG4gICAgICAgICAgICA6IFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiO1xyXG4gICAgLy8gSGVhZGVyIEluZm9cclxuICAgIGNvbnN0IGhlYWRlciA9IEZpZ21hLmdldFZhbHVlKFwiaGVhZGVyXCIsIFwiYm9vbGVhblwiKTtcclxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwiaGVhZGVySGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xyXG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXIgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVyXCIsIFwiYm9vbGVhblwiKTtcclxuICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVySGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBcIm51bWJlclwiKTtcclxuICAgIC8vIENvbnN0cmFpbnRzIFByb2Nlc3NpbmdcclxuICAgIGxldCBjb2x1bW5zID0gMDtcclxuICAgIGxldCBjb2x1bW5XaWR0aCA9IDA7XHJcbiAgICBsZXQgcm93cyA9IDA7XHJcbiAgICBsZXQgcm93SGVpZ2h0ID0gMDtcclxuICAgIGxldCByZWZlcmVuY2VDb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvdW50LWFuZC10YWJsZS1zaXplXCI6XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbnNcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIHJvd3MgPSBGaWdtYS5nZXRWYWx1ZShcInJvd3NcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID1cclxuICAgICAgICAgICAgICAgIEZpZ21hLmdldFZhbHVlKFwidGFibGVXaWR0aFwiLCBcIm51bWJlclwiKSAvIGNvbHVtbnM7XHJcbiAgICAgICAgICAgIHJvd0hlaWdodCA9XHJcbiAgICAgICAgICAgICAgICAoRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZUhlaWdodFwiLCBcIm51bWJlclwiKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNvdW50LWFuZC1jZWxsLXNpemVcIjpcclxuICAgICAgICAgICAgY29sdW1ucyA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uc1wiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgcm93cyA9IEZpZ21hLmdldFZhbHVlKFwicm93c1wiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGggPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbldpZHRoXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICByb3dIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcInJvd0hlaWdodFwiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcclxuICAgICAgICAgICAgY29uc3QgdGFibGVXaWR0aCA9IEZpZ21hLmdldFZhbHVlKFwidGFibGVXaWR0aFwiLCBcIm51bWJlclwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcInRhYmxlSGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uV2lkdGhcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwicm93SGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gTWF0aC5mbG9vcih0YWJsZVdpZHRoIC8gY29sdW1uV2lkdGgpO1xyXG4gICAgICAgICAgICByb3dzID0gTWF0aC5mbG9vcigodGFibGVIZWlnaHQgLSBoZWFkZXJIZWlnaHQpIC8gcm93SGVpZ2h0ICsgMSk7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgPSB0YWJsZUhlaWdodCAlIHJvd0hlaWdodDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBQcm9wZXJ0aWVzIGFuZCBDdXN0b21pc2F0aW9uc1xyXG4gICAgY29uc3QgYm9yZGVycyA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyc1wiLCBcImJvb2xlYW5cIik7XHJcbiAgICBjb25zdCBhbHRlcm5hdGVCYWNrZ3JvdW5kcyA9IEZpZ21hLmdldFZhbHVlKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIiwgXCJib29sZWFuXCIpO1xyXG4gICAgY29uc3QgcHJpbWFyeWJhY2tncm91bmRDb2xvciA9IEZpZ21hLmdldFZhbHVlKFwicHJpbWFyeWJhY2tncm91bmRDb2xvclwiLCBcInN0cmluZ1wiKTtcclxuICAgIGNvbnN0IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcInN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JcIiwgXCJzdHJpbmdcIik7XHJcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyQ29sb3JcIiwgXCJzdHJpbmdcIik7XHJcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJjcmVhdGUtdGFibGVcIixcclxuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxyXG4gICAgICAgICAgICByb3dzOiByb3dzLFxyXG4gICAgICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodCxcclxuICAgICAgICAgICAgYm9yZGVyczogYm9yZGVycyxcclxuICAgICAgICAgICAgYWx0ZXJuYXRlQmFja2dyb3VuZHM6IGFsdGVybmF0ZUJhY2tncm91bmRzLFxyXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWFkZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyOiBmbG9hdGluZ0ZpbHRlcixcclxuICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJIZWlnaHQ6IGZsb2F0aW5nRmlsdGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBwcmltYXJ5YmFja2dyb3VuZENvbG9yOiBwcmltYXJ5YmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBzdHJpcGVkYmFja2dyb3VuZENvbG9yOiBzdHJpcGVkYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzOiByZWZlcmVuY2VDb29yZGluYXRlc1xyXG4gICAgICAgIH1cclxuICAgIH0sIFwiKlwiKTtcclxufTtcclxuIiwiLyogRmlnbWEgQVBJIEZ1bmN0aW9uIEFic3RyYWN0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcclxuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcclxuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcclxuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbi8qIENsb25lIGZ1bmN0aW9uIHRha2VuIGZyb20gRmlnbWEgUGx1Z2luIEFQSSBleGFtcGxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IFwidW5rbm93blwiO1xyXG59XHJcbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBudWxsO1xyXG59XHJcbi8qIEV4dHJhY3QgSW5wdXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sVGFnSWQpO1xyXG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=