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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generators_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generators/generators */ "./src/generators/generators.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");


const referenceCoordinates = { x: 0, y: 0 };
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    processMessage(msg);
    figma.closePlugin();
};
function processMessage(message) {
    if (message.type === "create-table") {
        /* Generate Background */
        const oddRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Odd", message.rows, message.rowHeight, message.columnWidth * message.columns, referenceCoordinates);
        const evenRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Even", message.rows, message.rowHeight, message.columnWidth * message.columns, referenceCoordinates);
        const rowBackgroundNode = [
            oddRowBackgroundGroup,
            evenRowBackgroundGroup
        ];
        const rowBackgroundGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"](rowBackgroundNode, figma.currentPage);
        rowBackgroundGroup.name = "Row Background";
        /* Generate Borders */
        const verticalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Vertical", true, message.columns, message.columnWidth, message.rowHeight * message.rows, referenceCoordinates);
        const horizontalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Horizontal", true, message.rows, message.rowHeight, message.columnWidth * message.columns, referenceCoordinates);
        const borderLinesNode = [
            verticalLinesGroup,
            horizontalLinesGroup
        ];
        const borderLinesGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"](borderLinesNode, figma.currentPage);
        borderLinesGroup.name = "Borders";
        /* Generate Texts */
        const columnTextsGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateTableTexts"])(message.rows, message.rowHeight, message.columns, message.columnWidth, referenceCoordinates);
        /* Sort Group Nodes */
        const tableGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"]([columnTextsGroup, borderLinesGroup, rowBackgroundGroup], figma.currentPage);
        tableGroup.name = "Table";
        figma.currentPage.selection = [tableGroup];
        figma.viewport.scrollAndZoomIntoView([tableGroup]);
    }
    /* Notify Success to User */
    figma.notify("Table created!");
    return null;
}


/***/ }),

/***/ "./src/generators/generators.ts":
/*!**************************************!*\
  !*** ./src/generators/generators.ts ***!
  \**************************************/
/*! exports provided: generateBorders, generateRowBackground, generateTableTexts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorders", function() { return generateBorders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRowBackground", function() { return generateRowBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTableTexts", function() { return generateTableTexts; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function generateBorders(borderType, visible = true, borderCount, borderSpacing, borderWidth, referenceCoordinates) {
    const linesNode = [];
    for (let i = 0; i < borderCount + 1; i++) {
        const line = figma.createLine();
        if (borderType === "Vertical") {
            line.rotation = 90;
            line.x = referenceCoordinates.x + i * borderSpacing;
        }
        else {
            line.y = referenceCoordinates.y - i * borderSpacing;
        }
        line.resize(borderWidth, 0);
        linesNode.push(line);
    }
    const linesGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](linesNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    if (!visible) {
        linesGroup.visible = false;
    }
    linesGroup.name = borderType;
    return linesGroup;
}
function generateRowBackground(rowBackgroundType, rowCount, rowHeight, rowWidth, referenceCoordinates) {
    const rowBackgroundNode = [];
    const rowSpacing = rowHeight * 2;
    let computedRowCount = 0;
    let startingPoint = 0;
    if (rowBackgroundType === "Odd") {
        computedRowCount = Math.round(rowCount / 2);
        startingPoint = referenceCoordinates.y - rowHeight;
    }
    else {
        computedRowCount = Math.floor(rowCount / 2);
        startingPoint = referenceCoordinates.y - rowSpacing;
    }
    for (let i = 0; i < computedRowCount; i++) {
        const background = figma.createRectangle();
        const backgroundFills = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](background.fills);
        if (rowBackgroundType === "Odd") {
            backgroundFills[0].color.r = 247 / 255;
            backgroundFills[0].color.g = 247 / 255;
            backgroundFills[0].color.b = 247 / 255;
        }
        else {
            backgroundFills[0].color.r = 1;
            backgroundFills[0].color.g = 1;
            backgroundFills[0].color.b = 1;
        }
        background.fills = backgroundFills;
        background.resize(rowWidth, rowHeight);
        background.y = startingPoint - i * rowSpacing;
        rowBackgroundNode.push(background);
    }
    const rowBackgroundGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](rowBackgroundNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    rowBackgroundGroup.name = rowBackgroundType;
    return rowBackgroundGroup;
}
function generateTableTexts(rowCount, rowHeight, columnCount, columnWidth, referenceCoordinates) {
    const tableTextsNode = [];
    for (let i = 0; i < columnCount; i++) {
        const columnTextsNode = [];
        const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth;
        for (let j = 0; j < rowCount; j++) {
            const text = figma.createText();
            loadNodeFont(text.fontName).then(_ => {
                text.name = "Row " + (rowCount - j);
                text.characters = "Text/Placeholder";
                text.x = columnTextsStartingPosition;
                text.y = referenceCoordinates.y - (j + 1) * rowHeight;
                text.resize(columnWidth, rowHeight);
                text.textAlignVertical = "CENTER";
            });
            columnTextsNode.push(text);
        }
        const columnTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](columnTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        columnTextsGroup.name = "Column " + (columnCount - i);
        tableTextsNode.push(columnTextsGroup);
    }
    const tableTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    tableTextsGroup.name = "Table Texts";
    return tableTextsGroup;
}
function loadNodeFont(fontName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(fontName);
    });
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: groupNodes, getCurrentPage, getSelection, setSelection, scrollAndZoomIntoView, clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNodes", function() { return groupNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelection", function() { return setSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollAndZoomIntoView", function() { return scrollAndZoomIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBcUc7QUFDOUQ7QUFDdkMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvRkFBcUI7QUFDM0QsdUNBQXVDLG9GQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBZ0I7QUFDbkQ7QUFDQTtBQUNBLG1DQUFtQyw4RUFBZTtBQUNsRCxxQ0FBcUMsOEVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWdCO0FBQ2pEO0FBQ0E7QUFDQSxpQ0FBaUMsaUZBQWtCO0FBQ25EO0FBQ0EsMkJBQTJCLHVEQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNqQztBQUNQO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFnQixZQUFZLDJEQUFvQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxnQ0FBZ0Msa0RBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFnQixvQkFBb0IsMkRBQW9CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWdCLGtCQUFrQiwyREFBb0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVEQUFnQixpQkFBaUIsMkRBQW9CO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJvd0JhY2tncm91bmQsIGdlbmVyYXRlQm9yZGVycywgZ2VuZXJhdGVUYWJsZVRleHRzIH0gZnJvbSBcIi4vZ2VuZXJhdG9ycy9nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XHJcbmNvbnN0IHJlZmVyZW5jZUNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XHJcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXHJcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxyXG4vLyBwb3N0ZWQgbWVzc2FnZS5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICAgIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG59O1xyXG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgQmFja2dyb3VuZCAqL1xyXG4gICAgICAgIGNvbnN0IG9kZFJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIk9kZFwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgZXZlblJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIkV2ZW5cIiwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5XaWR0aCAqIG1lc3NhZ2UuY29sdW1ucywgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmROb2RlID0gW1xyXG4gICAgICAgICAgICBvZGRSb3dCYWNrZ3JvdW5kR3JvdXAsXHJcbiAgICAgICAgICAgIGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IFwiUm93IEJhY2tncm91bmRcIjtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBCb3JkZXJzICovXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiVmVydGljYWxcIiwgdHJ1ZSwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLnJvd0hlaWdodCAqIG1lc3NhZ2Uucm93cywgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiSG9yaXpvbnRhbFwiLCB0cnVlLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNOb2RlID0gW1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbExpbmVzR3JvdXAsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxMaW5lc0dyb3VwXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBib3JkZXJMaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhib3JkZXJMaW5lc05vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICBib3JkZXJMaW5lc0dyb3VwLm5hbWUgPSBcIkJvcmRlcnNcIjtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBUZXh0cyAqL1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBnZW5lcmF0ZVRhYmxlVGV4dHMobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgLyogU29ydCBHcm91cCBOb2RlcyAqL1xyXG4gICAgICAgIGNvbnN0IHRhYmxlR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKFtjb2x1bW5UZXh0c0dyb3VwLCBib3JkZXJMaW5lc0dyb3VwLCByb3dCYWNrZ3JvdW5kR3JvdXBdLCBmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGFibGVHcm91cC5uYW1lID0gXCJUYWJsZVwiO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFt0YWJsZUdyb3VwXTtcclxuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RhYmxlR3JvdXBdKTtcclxuICAgIH1cclxuICAgIC8qIE5vdGlmeSBTdWNjZXNzIHRvIFVzZXIgKi9cclxuICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQhXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQm9yZGVycyhib3JkZXJUeXBlLCB2aXNpYmxlID0gdHJ1ZSwgYm9yZGVyQ291bnQsIGJvcmRlclNwYWNpbmcsIGJvcmRlcldpZHRoLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgbGluZXNOb2RlID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvcmRlckNvdW50ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcclxuICAgICAgICBpZiAoYm9yZGVyVHlwZSA9PT0gXCJWZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIGxpbmUucm90YXRpb24gPSA5MDtcclxuICAgICAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGkgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XHJcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2RlcyhsaW5lc05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgaWYgKCF2aXNpYmxlKSB7XHJcbiAgICAgICAgbGluZXNHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsaW5lc0dyb3VwLm5hbWUgPSBib3JkZXJUeXBlO1xyXG4gICAgcmV0dXJuIGxpbmVzR3JvdXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93QmFja2dyb3VuZChyb3dCYWNrZ3JvdW5kVHlwZSwgcm93Q291bnQsIHJvd0hlaWdodCwgcm93V2lkdGgsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtdO1xyXG4gICAgY29uc3Qgcm93U3BhY2luZyA9IHJvd0hlaWdodCAqIDI7XHJcbiAgICBsZXQgY29tcHV0ZWRSb3dDb3VudCA9IDA7XHJcbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IDA7XHJcbiAgICBpZiAocm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHtcclxuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5yb3VuZChyb3dDb3VudCAvIDIpO1xyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93SGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGguZmxvb3Iocm93Q291bnQgLyAyKTtcclxuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd1NwYWNpbmc7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkUm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHMgPSBGaWdtYS5jbG9uZShiYWNrZ3JvdW5kLmZpbGxzKTtcclxuICAgICAgICBpZiAocm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IDI0NyAvIDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIHJvd0hlaWdodCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC55ID0gc3RhcnRpbmdQb2ludCAtIGkgKiByb3dTcGFjaW5nO1xyXG4gICAgICAgIHJvd0JhY2tncm91bmROb2RlLnB1c2goYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHJvd0JhY2tncm91bmROb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gcm93QmFja2dyb3VuZFR5cGU7XHJcbiAgICByZXR1cm4gcm93QmFja2dyb3VuZEdyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlVGV4dHMocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgdGFibGVUZXh0c05vZGUgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzTm9kZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIGxvYWROb2RlRm9udCh0ZXh0LmZvbnROYW1lKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJSb3cgXCIgKyAocm93Q291bnQgLSBqKTtcclxuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiVGV4dC9QbGFjZWhvbGRlclwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIChqICsgMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCwgcm93SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1uVGV4dHNOb2RlLnB1c2godGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGNvbHVtblRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgY29sdW1uVGV4dHNHcm91cC5uYW1lID0gXCJDb2x1bW4gXCIgKyAoY29sdW1uQ291bnQgLSBpKTtcclxuICAgICAgICB0YWJsZVRleHRzTm9kZS5wdXNoKGNvbHVtblRleHRzR3JvdXApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGVUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZVRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICB0YWJsZVRleHRzR3JvdXAubmFtZSA9IFwiVGFibGUgVGV4dHNcIjtcclxuICAgIHJldHVybiB0YWJsZVRleHRzR3JvdXA7XHJcbn1cclxuZnVuY3Rpb24gbG9hZE5vZGVGb250KGZvbnROYW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogRmlnbWEgQVBJIEZ1bmN0aW9uIEFic3RyYWN0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcclxuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcclxuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcclxuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbi8qIENsb25lIGZ1bmN0aW9uIHRha2VuIGZyb20gRmlnbWEgUGx1Z2luIEFQSSBleGFtcGxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IFwidW5rbm93blwiO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=