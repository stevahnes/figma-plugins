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
const showUIOptions = {
    width: 300,
    height: 320
};
// This shows the HTML page in "ui.html".
figma.showUI(__html__, showUIOptions);
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
        const oddRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Odd", message.rows, message.rowHeight, message.columnWidth * message.columns, message.alternateBackgrounds, message.header, referenceCoordinates);
        const evenRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Even", message.rows, message.rowHeight, message.columnWidth * message.columns, message.alternateBackgrounds, message.header, referenceCoordinates);
        const rowBackgroundNode = [
            oddRowBackgroundGroup,
            evenRowBackgroundGroup
        ];
        const rowBackgroundGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"](rowBackgroundNode, figma.currentPage);
        rowBackgroundGroup.name = "Row Background";
        /* Generate Texts */
        const columnTextsGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateTableTexts"])(message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, referenceCoordinates);
        /* Generate Headers */
        const tableHeaderGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateTableHeader"])(message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, message.headerHeight, referenceCoordinates);
        /* Generate Borders */
        const verticalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Vertical", message.borders, message.columns, message.columnWidth, message.rows, message.rowHeight, message.header, message.headerHeight, referenceCoordinates);
        const horizontalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Horizontal", message.borders, message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, message.headerHeight, referenceCoordinates);
        const borderLinesNode = [
            verticalLinesGroup,
            horizontalLinesGroup
        ];
        const borderLinesGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"](borderLinesNode, figma.currentPage);
        borderLinesGroup.name = "Borders";
        /* Sort Group Nodes */
        const tableGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"]([rowBackgroundGroup], figma.currentPage);
        tableGroup.appendChild(columnTextsGroup);
        if (tableHeaderGroup !== null) {
            tableGroup.appendChild(tableHeaderGroup);
        }
        tableGroup.appendChild(borderLinesGroup);
        tableGroup.name = "Table";
        figma.currentPage.selection = [tableGroup];
        figma.viewport.scrollAndZoomIntoView([tableGroup]);
        /* Notify Success to User */
        figma.notify("Table created!");
        return null;
    }
}


/***/ }),

/***/ "./src/generators/generators.ts":
/*!**************************************!*\
  !*** ./src/generators/generators.ts ***!
  \**************************************/
/*! exports provided: generateBorders, generateRowBackground, generateTableTexts, generateTableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorders", function() { return generateBorders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRowBackground", function() { return generateRowBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTableTexts", function() { return generateTableTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTableHeader", function() { return generateTableHeader; });
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

function generateBorders(borderType, visible = true, borderCount, borderSpacing, borderWidthMultiplier, borderWidthIndividual, header, headerHeight, referenceCoordinates) {
    const linesNode = [];
    let borderWidth;
    if (header) {
        if (borderType === "Vertical") {
            borderWidth =
                (borderWidthMultiplier - 1) * borderWidthIndividual + headerHeight;
        }
        else {
            borderCount -= 1;
            borderWidth = borderWidthMultiplier * borderWidthIndividual;
        }
    }
    else {
        borderWidth = borderWidthMultiplier * borderWidthIndividual;
    }
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
    if (header && borderType === "Horizontal") {
        const line = figma.createLine();
        line.resize(borderWidth, 0);
        line.y =
            referenceCoordinates.y - headerHeight - borderCount * borderSpacing;
        linesNode.push(line);
    }
    const linesGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](linesNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    if (!visible) {
        linesGroup.visible = false;
    }
    linesGroup.name = borderType;
    return linesGroup;
}
function generateRowBackground(rowBackgroundType, rowCount, rowHeight, rowWidth, alternateBackgrounds, header, referenceCoordinates) {
    const rowBackgroundNode = [];
    const rowSpacing = rowHeight * 2;
    let computedRowCount = 0;
    let startingPoint = 0;
    if (header) {
        rowCount -= 1;
    }
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
        if (alternateBackgrounds &&
            ((!header && rowBackgroundType === "Even") ||
                (header && rowBackgroundType === "Odd"))) {
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
function generateTableTexts(rowCount, rowHeight, columnCount, columnWidth, header, referenceCoordinates) {
    const tableTextsNode = [];
    if (header) {
        rowCount -= 1;
    }
    for (let i = 0; i < columnCount; i++) {
        const columnTextsNode = [];
        const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth;
        for (let j = 0; j < rowCount; j++) {
            const text = figma.createText();
            loadNodeFont(text.fontName).then(_ => {
                text.name = "Row " + (rowCount - j);
                text.characters = "Sample";
                text.x = columnTextsStartingPosition;
                text.y = referenceCoordinates.y - (j + 1) * rowHeight;
                text.resize(columnWidth, rowHeight);
                text.textAlignVertical = "CENTER";
            });
            columnTextsNode.push(text);
        }
        const columnTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](columnTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        columnTextsGroup.name = "Column " + i;
        tableTextsNode.push(columnTextsGroup);
    }
    const tableTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    tableTextsGroup.name = "Table Texts";
    return tableTextsGroup;
}
function generateTableHeader(rowCount, rowHeight, columnCount, columnWidth, header, headerHeight, referenceCoordinates) {
    if (header) {
        // Background
        const tableHeaderNode = [];
        const rowWidth = columnWidth * columnCount;
        const background = figma.createRectangle();
        const backgroundFills = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](background.fills);
        backgroundFills[0].color.r = 247 / 255;
        backgroundFills[0].color.g = 247 / 255;
        backgroundFills[0].color.b = 247 / 255;
        background.fills = backgroundFills;
        background.resize(rowWidth, headerHeight);
        background.y =
            referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
        tableHeaderNode.push(background);
        // Texts
        const tableHeaderTextsNode = [];
        for (let i = 0; i < columnCount; i++) {
            const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth;
            const text = figma.createText();
            const fontName = { family: "Roboto", style: "Bold" };
            loadNodeFont(fontName).then(_ => {
                text.name = "Column Header " + i;
                text.characters = "SAMPLE";
                text.fontName = fontName;
                text.x = columnTextsStartingPosition;
                text.y =
                    referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
                text.resize(columnWidth, headerHeight);
                text.textAlignVertical = "CENTER";
            });
            tableHeaderTextsNode.push(text);
        }
        const tableHeaderTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableHeaderTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        tableHeaderTextsGroup.name = "Column Headers";
        tableHeaderNode.push(tableHeaderTextsGroup);
        const tableHeaderGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableHeaderNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        tableHeaderGroup.name = "Table Header";
        return tableHeaderGroup;
    }
    else {
        return null;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9GQUFxQjtBQUMzRCx1Q0FBdUMsb0ZBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFnQjtBQUNuRDtBQUNBO0FBQ0EsaUNBQWlDLGlG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJvd0JhY2tncm91bmQsIGdlbmVyYXRlQm9yZGVycywgZ2VuZXJhdGVUYWJsZVRleHRzLCBnZW5lcmF0ZVRhYmxlSGVhZGVyIH0gZnJvbSBcIi4vZ2VuZXJhdG9ycy9nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XHJcbmNvbnN0IHJlZmVyZW5jZUNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XHJcbmNvbnN0IHNob3dVSU9wdGlvbnMgPSB7XHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgaGVpZ2h0OiAzMjBcclxufTtcclxuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHNob3dVSU9wdGlvbnMpO1xyXG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcclxuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXHJcbi8vIHBvc3RlZCBtZXNzYWdlLlxyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xyXG4gICAgcHJvY2Vzc01lc3NhZ2UobXNnKTtcclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbn07XHJcbmZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiY3JlYXRlLXRhYmxlXCIpIHtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBCYWNrZ3JvdW5kICovXHJcbiAgICAgICAgY29uc3Qgb2RkUm93QmFja2dyb3VuZEdyb3VwID0gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKFwiT2RkXCIsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1uV2lkdGggKiBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuYWx0ZXJuYXRlQmFja2dyb3VuZHMsIG1lc3NhZ2UuaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgZXZlblJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIkV2ZW5cIiwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5XaWR0aCAqIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5hbHRlcm5hdGVCYWNrZ3JvdW5kcywgbWVzc2FnZS5oZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtcclxuICAgICAgICAgICAgb2RkUm93QmFja2dyb3VuZEdyb3VwLFxyXG4gICAgICAgICAgICBldmVuUm93QmFja2dyb3VuZEdyb3VwXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByb3dCYWNrZ3JvdW5kR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHJvd0JhY2tncm91bmROb2RlLCBmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSBcIlJvdyBCYWNrZ3JvdW5kXCI7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgVGV4dHMgKi9cclxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c0dyb3VwID0gZ2VuZXJhdGVUYWJsZVRleHRzKG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBIZWFkZXJzICovXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IGdlbmVyYXRlVGFibGVIZWFkZXIobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBCb3JkZXJzICovXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiVmVydGljYWxcIiwgbWVzc2FnZS5ib3JkZXJzLCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiSG9yaXpvbnRhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNOb2RlID0gW1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbExpbmVzR3JvdXAsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxMaW5lc0dyb3VwXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBib3JkZXJMaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhib3JkZXJMaW5lc05vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICBib3JkZXJMaW5lc0dyb3VwLm5hbWUgPSBcIkJvcmRlcnNcIjtcclxuICAgICAgICAvKiBTb3J0IEdyb3VwIE5vZGVzICovXHJcbiAgICAgICAgY29uc3QgdGFibGVHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoW3Jvd0JhY2tncm91bmRHcm91cF0sIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0YWJsZUdyb3VwLmFwcGVuZENoaWxkKGNvbHVtblRleHRzR3JvdXApO1xyXG4gICAgICAgIGlmICh0YWJsZUhlYWRlckdyb3VwICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJHcm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoYm9yZGVyTGluZXNHcm91cCk7XHJcbiAgICAgICAgdGFibGVHcm91cC5uYW1lID0gXCJUYWJsZVwiO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFt0YWJsZUdyb3VwXTtcclxuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RhYmxlR3JvdXBdKTtcclxuICAgICAgICAvKiBOb3RpZnkgU3VjY2VzcyB0byBVc2VyICovXHJcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiVGFibGUgY3JlYXRlZCFcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQm9yZGVycyhib3JkZXJUeXBlLCB2aXNpYmxlID0gdHJ1ZSwgYm9yZGVyQ291bnQsIGJvcmRlclNwYWNpbmcsIGJvcmRlcldpZHRoTXVsdGlwbGllciwgYm9yZGVyV2lkdGhJbmRpdmlkdWFsLCBoZWFkZXIsIGhlYWRlckhlaWdodCwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IGxpbmVzTm9kZSA9IFtdO1xyXG4gICAgbGV0IGJvcmRlcldpZHRoO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGggPVxyXG4gICAgICAgICAgICAgICAgKGJvcmRlcldpZHRoTXVsdGlwbGllciAtIDEpICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsICsgaGVhZGVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYm9yZGVyQ291bnQgLT0gMTtcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aE11bHRpcGxpZXIgKiBib3JkZXJXaWR0aEluZGl2aWR1YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aE11bHRpcGxpZXIgKiBib3JkZXJXaWR0aEluZGl2aWR1YWw7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvcmRlckNvdW50ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcclxuICAgICAgICBpZiAoYm9yZGVyVHlwZSA9PT0gXCJWZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIGxpbmUucm90YXRpb24gPSA5MDtcclxuICAgICAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGkgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XHJcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaGVhZGVyICYmIGJvcmRlclR5cGUgPT09IFwiSG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcclxuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XHJcbiAgICAgICAgbGluZS55ID1cclxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIGJvcmRlckNvdW50ICogYm9yZGVyU3BhY2luZztcclxuICAgICAgICBsaW5lc05vZGUucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGxpbmVzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICBpZiAoIXZpc2libGUpIHtcclxuICAgICAgICBsaW5lc0dyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxpbmVzR3JvdXAubmFtZSA9IGJvcmRlclR5cGU7XHJcbiAgICByZXR1cm4gbGluZXNHcm91cDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKHJvd0JhY2tncm91bmRUeXBlLCByb3dDb3VudCwgcm93SGVpZ2h0LCByb3dXaWR0aCwgYWx0ZXJuYXRlQmFja2dyb3VuZHMsIGhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IHJvd0JhY2tncm91bmROb2RlID0gW107XHJcbiAgICBjb25zdCByb3dTcGFjaW5nID0gcm93SGVpZ2h0ICogMjtcclxuICAgIGxldCBjb21wdXRlZFJvd0NvdW50ID0gMDtcclxuICAgIGxldCBzdGFydGluZ1BvaW50ID0gMDtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICByb3dDb3VudCAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSB7XHJcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGgucm91bmQocm93Q291bnQgLyAyKTtcclxuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd0hlaWdodDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbXB1dGVkUm93Q291bnQgPSBNYXRoLmZsb29yKHJvd0NvdW50IC8gMik7XHJcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSByb3dTcGFjaW5nO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlZFJvd0NvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZpbGxzID0gRmlnbWEuY2xvbmUoYmFja2dyb3VuZC5maWxscyk7XHJcbiAgICAgICAgaWYgKGFsdGVybmF0ZUJhY2tncm91bmRzICYmXHJcbiAgICAgICAgICAgICgoIWhlYWRlciAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJFdmVuXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAoaGVhZGVyICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSkpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IDI0NyAvIDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIHJvd0hlaWdodCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC55ID0gc3RhcnRpbmdQb2ludCAtIGkgKiByb3dTcGFjaW5nO1xyXG4gICAgICAgIHJvd0JhY2tncm91bmROb2RlLnB1c2goYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHJvd0JhY2tncm91bmROb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gcm93QmFja2dyb3VuZFR5cGU7XHJcbiAgICByZXR1cm4gcm93QmFja2dyb3VuZEdyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlVGV4dHMocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCBoZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb25zdCB0YWJsZVRleHRzTm9kZSA9IFtdO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHJvd0NvdW50IC09IDE7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c05vZGUgPSBbXTtcclxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICBsb2FkTm9kZUZvbnQodGV4dC5mb250TmFtZSkudGhlbihfID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHQubmFtZSA9IFwiUm93IFwiICsgKHJvd0NvdW50IC0gaik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNhbXBsZVwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIChqICsgMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCwgcm93SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1uVGV4dHNOb2RlLnB1c2godGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGNvbHVtblRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgY29sdW1uVGV4dHNHcm91cC5uYW1lID0gXCJDb2x1bW4gXCIgKyBpO1xyXG4gICAgICAgIHRhYmxlVGV4dHNOb2RlLnB1c2goY29sdW1uVGV4dHNHcm91cCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZVRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgIHRhYmxlVGV4dHNHcm91cC5uYW1lID0gXCJUYWJsZSBUZXh0c1wiO1xyXG4gICAgcmV0dXJuIHRhYmxlVGV4dHNHcm91cDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWRlcihyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgaGVhZGVySGVpZ2h0LCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlck5vZGUgPSBbXTtcclxuICAgICAgICBjb25zdCByb3dXaWR0aCA9IGNvbHVtbldpZHRoICogY29sdW1uQ291bnQ7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIGhlYWRlckhlaWdodCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC55ID1cclxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xyXG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKGJhY2tncm91bmQpO1xyXG4gICAgICAgIC8vIFRleHRzXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XHJcbiAgICAgICAgICAgIGxvYWROb2RlRm9udChmb250TmFtZSkudGhlbihfID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHQubmFtZSA9IFwiQ29sdW1uIEhlYWRlciBcIiArIGk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNBTVBMRVwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IGZvbnROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID1cclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCwgaGVhZGVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlclRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgdGFibGVIZWFkZXJUZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBIZWFkZXJzXCI7XHJcbiAgICAgICAgdGFibGVIZWFkZXJOb2RlLnB1c2godGFibGVIZWFkZXJUZXh0c0dyb3VwKTtcclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlck5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgIHRhYmxlSGVhZGVyR3JvdXAubmFtZSA9IFwiVGFibGUgSGVhZGVyXCI7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlSGVhZGVyR3JvdXA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkTm9kZUZvbnQoZm9udE5hbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xyXG4gICAgcmV0dXJuIGZpZ21hLmdyb3VwKG5vZGVzLCBwYXJlbnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcclxuICAgIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlKCkuc2VsZWN0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xyXG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSkge1xyXG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICBpZiAodmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gY2xvbmUoeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG8gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==