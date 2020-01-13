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
        columnTextsGroup.name = "Column " + (i + 1);
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
        background.name = "Header Background";
        tableHeaderNode.push(background);
        // Texts
        const tableHeaderTextsNode = [];
        for (let i = 0; i < columnCount; i++) {
            const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth;
            const text = figma.createText();
            const fontName = { family: "Roboto", style: "Bold" };
            loadNodeFont(fontName).then(_ => {
                text.name = "Column Header " + (i + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9GQUFxQjtBQUMzRCx1Q0FBdUMsb0ZBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFnQjtBQUNuRDtBQUNBO0FBQ0EsaUNBQWlDLGlG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB7IGdlbmVyYXRlUm93QmFja2dyb3VuZCwgZ2VuZXJhdGVCb3JkZXJzLCBnZW5lcmF0ZVRhYmxlVGV4dHMsIGdlbmVyYXRlVGFibGVIZWFkZXIgfSBmcm9tIFwiLi9nZW5lcmF0b3JzL2dlbmVyYXRvcnNcIjtcclxuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcclxuY29uc3QgcmVmZXJlbmNlQ29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcclxuY29uc3Qgc2hvd1VJT3B0aW9ucyA9IHtcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBoZWlnaHQ6IDMyMFxyXG59O1xyXG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgc2hvd1VJT3B0aW9ucyk7XHJcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xyXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcclxuLy8gcG9zdGVkIG1lc3NhZ2UuXHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XHJcbiAgICBwcm9jZXNzTWVzc2FnZShtc2cpO1xyXG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxufTtcclxuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJjcmVhdGUtdGFibGVcIikge1xyXG4gICAgICAgIC8qIEdlbmVyYXRlIEJhY2tncm91bmQgKi9cclxuICAgICAgICBjb25zdCBvZGRSb3dCYWNrZ3JvdW5kR3JvdXAgPSBnZW5lcmF0ZVJvd0JhY2tncm91bmQoXCJPZGRcIiwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5XaWR0aCAqIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5hbHRlcm5hdGVCYWNrZ3JvdW5kcywgbWVzc2FnZS5oZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICBjb25zdCBldmVuUm93QmFja2dyb3VuZEdyb3VwID0gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKFwiRXZlblwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmROb2RlID0gW1xyXG4gICAgICAgICAgICBvZGRSb3dCYWNrZ3JvdW5kR3JvdXAsXHJcbiAgICAgICAgICAgIGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IFwiUm93IEJhY2tncm91bmRcIjtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBUZXh0cyAqL1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBnZW5lcmF0ZVRhYmxlVGV4dHMobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIC8qIEdlbmVyYXRlIEhlYWRlcnMgKi9cclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gZ2VuZXJhdGVUYWJsZUhlYWRlcihtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIC8qIEdlbmVyYXRlIEJvcmRlcnMgKi9cclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJWZXJ0aWNhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCByZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJIb3Jpem9udGFsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICBjb25zdCBib3JkZXJMaW5lc05vZGUgPSBbXHJcbiAgICAgICAgICAgIHZlcnRpY2FsTGluZXNHcm91cCxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmVzR3JvdXBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGJvcmRlckxpbmVzTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGJvcmRlckxpbmVzR3JvdXAubmFtZSA9IFwiQm9yZGVyc1wiO1xyXG4gICAgICAgIC8qIFNvcnQgR3JvdXAgTm9kZXMgKi9cclxuICAgICAgICBjb25zdCB0YWJsZUdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhbcm93QmFja2dyb3VuZEdyb3VwXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoY29sdW1uVGV4dHNHcm91cCk7XHJcbiAgICAgICAgaWYgKHRhYmxlSGVhZGVyR3JvdXAgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlckdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChib3JkZXJMaW5lc0dyb3VwKTtcclxuICAgICAgICB0YWJsZUdyb3VwLm5hbWUgPSBcIlRhYmxlXCI7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3RhYmxlR3JvdXBdO1xyXG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdGFibGVHcm91cF0pO1xyXG4gICAgICAgIC8qIE5vdGlmeSBTdWNjZXNzIHRvIFVzZXIgKi9cclxuICAgICAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIVwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCb3JkZXJzKGJvcmRlclR5cGUsIHZpc2libGUgPSB0cnVlLCBib3JkZXJDb3VudCwgYm9yZGVyU3BhY2luZywgYm9yZGVyV2lkdGhNdWx0aXBsaWVyLCBib3JkZXJXaWR0aEluZGl2aWR1YWwsIGhlYWRlciwgaGVhZGVySGVpZ2h0LCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgbGluZXNOb2RlID0gW107XHJcbiAgICBsZXQgYm9yZGVyV2lkdGg7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9XHJcbiAgICAgICAgICAgICAgICAoYm9yZGVyV2lkdGhNdWx0aXBsaWVyIC0gMSkgKiBib3JkZXJXaWR0aEluZGl2aWR1YWwgKyBoZWFkZXJIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9yZGVyQ291bnQgKyAxOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xyXG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGluZS5yb3RhdGlvbiA9IDkwO1xyXG4gICAgICAgICAgICBsaW5lLnggPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGJvcmRlclNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5lLnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaSAqIGJvcmRlclNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcclxuICAgICAgICBsaW5lc05vZGUucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgIGlmIChoZWFkZXIgJiYgYm9yZGVyVHlwZSA9PT0gXCJIb3Jpem9udGFsXCIpIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xyXG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcclxuICAgICAgICBsaW5lLnkgPVxyXG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gYm9yZGVyQ291bnQgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIGxpbmVzTm9kZS5wdXNoKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGluZXNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMobGluZXNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgIGxpbmVzR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZXNHcm91cC5uYW1lID0gYm9yZGVyVHlwZTtcclxuICAgIHJldHVybiBsaW5lc0dyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd0JhY2tncm91bmQocm93QmFja2dyb3VuZFR5cGUsIHJvd0NvdW50LCByb3dIZWlnaHQsIHJvd1dpZHRoLCBhbHRlcm5hdGVCYWNrZ3JvdW5kcywgaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXTtcclxuICAgIGNvbnN0IHJvd1NwYWNpbmcgPSByb3dIZWlnaHQgKiAyO1xyXG4gICAgbGV0IGNvbXB1dGVkUm93Q291bnQgPSAwO1xyXG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHJvd0NvdW50IC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHtcclxuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5yb3VuZChyb3dDb3VudCAvIDIpO1xyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93SGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGguZmxvb3Iocm93Q291bnQgLyAyKTtcclxuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd1NwYWNpbmc7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkUm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHMgPSBGaWdtYS5jbG9uZShiYWNrZ3JvdW5kLmZpbGxzKTtcclxuICAgICAgICBpZiAoYWx0ZXJuYXRlQmFja2dyb3VuZHMgJiZcclxuICAgICAgICAgICAgKCghaGVhZGVyICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIkV2ZW5cIikgfHxcclxuICAgICAgICAgICAgICAgIChoZWFkZXIgJiYgcm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpKSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IDI0NyAvIDI1NTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gMjQ3IC8gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuZyA9IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcclxuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgcm93SGVpZ2h0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLnkgPSBzdGFydGluZ1BvaW50IC0gaSAqIHJvd1NwYWNpbmc7XHJcbiAgICAgICAgcm93QmFja2dyb3VuZE5vZGUucHVzaChiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSByb3dCYWNrZ3JvdW5kVHlwZTtcclxuICAgIHJldHVybiByb3dCYWNrZ3JvdW5kR3JvdXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVUZXh0cyhyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IHRhYmxlVGV4dHNOb2RlID0gW107XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcm93Q291bnQgLT0gMTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzTm9kZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIGxvYWROb2RlRm9udCh0ZXh0LmZvbnROYW1lKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJSb3cgXCIgKyAocm93Q291bnQgLSBqKTtcclxuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU2FtcGxlXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gKGogKyAxKSAqIHJvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoLCByb3dIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2x1bW5UZXh0c05vZGUucHVzaCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoY29sdW1uVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgICAgICBjb2x1bW5UZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBcIiArIChpICsgMSk7XHJcbiAgICAgICAgdGFibGVUZXh0c05vZGUucHVzaChjb2x1bW5UZXh0c0dyb3VwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVUZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgdGFibGVUZXh0c0dyb3VwLm5hbWUgPSBcIlRhYmxlIFRleHRzXCI7XHJcbiAgICByZXR1cm4gdGFibGVUZXh0c0dyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZGVyKHJvd0NvdW50LCByb3dIZWlnaHQsIGNvbHVtbkNvdW50LCBjb2x1bW5XaWR0aCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyTm9kZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJvd1dpZHRoID0gY29sdW1uV2lkdGggKiBjb2x1bW5Db3VudDtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZpbGxzID0gRmlnbWEuY2xvbmUoYmFja2dyb3VuZC5maWxscyk7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSAyNDcgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcclxuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgaGVhZGVySGVpZ2h0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLnkgPVxyXG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJIZWFkZXIgQmFja2dyb3VuZFwiO1xyXG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKGJhY2tncm91bmQpO1xyXG4gICAgICAgIC8vIFRleHRzXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XHJcbiAgICAgICAgICAgIGxvYWROb2RlRm9udChmb250TmFtZSkudGhlbihfID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHQubmFtZSA9IFwiQ29sdW1uIEhlYWRlciBcIiArIChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNBTVBMRVwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IGZvbnROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID1cclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCwgaGVhZGVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlclRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgdGFibGVIZWFkZXJUZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBIZWFkZXJzXCI7XHJcbiAgICAgICAgdGFibGVIZWFkZXJOb2RlLnB1c2godGFibGVIZWFkZXJUZXh0c0dyb3VwKTtcclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlck5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgIHRhYmxlSGVhZGVyR3JvdXAubmFtZSA9IFwiVGFibGUgSGVhZGVyXCI7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlSGVhZGVyR3JvdXA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkTm9kZUZvbnQoZm9udE5hbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xyXG4gICAgcmV0dXJuIGZpZ21hLmdyb3VwKG5vZGVzLCBwYXJlbnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcclxuICAgIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlKCkuc2VsZWN0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xyXG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSkge1xyXG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICBpZiAodmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gY2xvbmUoeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG8gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==