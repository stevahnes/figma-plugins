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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9GQUFxQjtBQUMzRCx1Q0FBdUMsb0ZBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFnQjtBQUNuRDtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFrQjtBQUNuRDtBQUNBLGlDQUFpQyxrRkFBbUI7QUFDcEQ7QUFDQSxtQ0FBbUMsOEVBQWU7QUFDbEQscUNBQXFDLDhFQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFnQjtBQUNqRDtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFnQixZQUFZLDJEQUFvQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxnQ0FBZ0Msa0RBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBZ0Isb0JBQW9CLDJEQUFvQjtBQUN2RjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFnQixrQkFBa0IsMkRBQW9CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBZ0IsaUJBQWlCLDJEQUFvQjtBQUNqRjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNDQUFzQyx1REFBZ0IsdUJBQXVCLDJEQUFvQjtBQUNqRztBQUNBO0FBQ0EsaUNBQWlDLHVEQUFnQixrQkFBa0IsMkRBQW9CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDektBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB7IGdlbmVyYXRlUm93QmFja2dyb3VuZCwgZ2VuZXJhdGVCb3JkZXJzLCBnZW5lcmF0ZVRhYmxlVGV4dHMsIGdlbmVyYXRlVGFibGVIZWFkZXIgfSBmcm9tIFwiLi9nZW5lcmF0b3JzL2dlbmVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XG5jb25zdCByZWZlcmVuY2VDb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xuY29uc3Qgc2hvd1VJT3B0aW9ucyA9IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogMzIwXG59O1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCBzaG93VUlPcHRpb25zKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgcHJvY2Vzc01lc3NhZ2UobXNnKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XG4gICAgICAgIC8qIEdlbmVyYXRlIEJhY2tncm91bmQgKi9cbiAgICAgICAgY29uc3Qgb2RkUm93QmFja2dyb3VuZEdyb3VwID0gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKFwiT2RkXCIsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1uV2lkdGggKiBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuYWx0ZXJuYXRlQmFja2dyb3VuZHMsIG1lc3NhZ2UuaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnN0IGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXAgPSBnZW5lcmF0ZVJvd0JhY2tncm91bmQoXCJFdmVuXCIsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1uV2lkdGggKiBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuYWx0ZXJuYXRlQmFja2dyb3VuZHMsIG1lc3NhZ2UuaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmROb2RlID0gW1xuICAgICAgICAgICAgb2RkUm93QmFja2dyb3VuZEdyb3VwLFxuICAgICAgICAgICAgZXZlblJvd0JhY2tncm91bmRHcm91cFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByb3dCYWNrZ3JvdW5kR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHJvd0JhY2tncm91bmROb2RlLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gXCJSb3cgQmFja2dyb3VuZFwiO1xuICAgICAgICAvKiBHZW5lcmF0ZSBUZXh0cyAqL1xuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c0dyb3VwID0gZ2VuZXJhdGVUYWJsZVRleHRzKG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgLyogR2VuZXJhdGUgSGVhZGVycyAqL1xuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gZ2VuZXJhdGVUYWJsZUhlYWRlcihtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICAvKiBHZW5lcmF0ZSBCb3JkZXJzICovXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZXNHcm91cCA9IGdlbmVyYXRlQm9yZGVycyhcIlZlcnRpY2FsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJIb3Jpem9udGFsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNOb2RlID0gW1xuICAgICAgICAgICAgdmVydGljYWxMaW5lc0dyb3VwLFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmVzR3JvdXBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoYm9yZGVyTGluZXNOb2RlLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIGJvcmRlckxpbmVzR3JvdXAubmFtZSA9IFwiQm9yZGVyc1wiO1xuICAgICAgICAvKiBTb3J0IEdyb3VwIE5vZGVzICovXG4gICAgICAgIGNvbnN0IHRhYmxlR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKFtyb3dCYWNrZ3JvdW5kR3JvdXBdLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoY29sdW1uVGV4dHNHcm91cCk7XG4gICAgICAgIGlmICh0YWJsZUhlYWRlckdyb3VwICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YWJsZUdyb3VwLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoYm9yZGVyTGluZXNHcm91cCk7XG4gICAgICAgIHRhYmxlR3JvdXAubmFtZSA9IFwiVGFibGVcIjtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3RhYmxlR3JvdXBdO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RhYmxlR3JvdXBdKTtcbiAgICAgICAgLyogTm90aWZ5IFN1Y2Nlc3MgdG8gVXNlciAqL1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJvcmRlcnMoYm9yZGVyVHlwZSwgdmlzaWJsZSA9IHRydWUsIGJvcmRlckNvdW50LCBib3JkZXJTcGFjaW5nLCBib3JkZXJXaWR0aE11bHRpcGxpZXIsIGJvcmRlcldpZHRoSW5kaXZpZHVhbCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgbGluZXNOb2RlID0gW107XG4gICAgbGV0IGJvcmRlcldpZHRoO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGggPVxuICAgICAgICAgICAgICAgIChib3JkZXJXaWR0aE11bHRpcGxpZXIgLSAxKSAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbCArIGhlYWRlckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvcmRlckNvdW50IC09IDE7XG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aE11bHRpcGxpZXIgKiBib3JkZXJXaWR0aEluZGl2aWR1YWw7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9yZGVyQ291bnQgKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xuICAgICAgICAgICAgbGluZS5yb3RhdGlvbiA9IDkwO1xuICAgICAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGkgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XG4gICAgfVxuICAgIGlmIChoZWFkZXIgJiYgYm9yZGVyVHlwZSA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgbGluZS5yZXNpemUoYm9yZGVyV2lkdGgsIDApO1xuICAgICAgICBsaW5lLnkgPVxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIGJvcmRlckNvdW50ICogYm9yZGVyU3BhY2luZztcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XG4gICAgfVxuICAgIGNvbnN0IGxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGxpbmVzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGxpbmVzR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBsaW5lc0dyb3VwLm5hbWUgPSBib3JkZXJUeXBlO1xuICAgIHJldHVybiBsaW5lc0dyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93QmFja2dyb3VuZChyb3dCYWNrZ3JvdW5kVHlwZSwgcm93Q291bnQsIHJvd0hlaWdodCwgcm93V2lkdGgsIGFsdGVybmF0ZUJhY2tncm91bmRzLCBoZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXTtcbiAgICBjb25zdCByb3dTcGFjaW5nID0gcm93SGVpZ2h0ICogMjtcbiAgICBsZXQgY29tcHV0ZWRSb3dDb3VudCA9IDA7XG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgcm93Q291bnQgLT0gMTtcbiAgICB9XG4gICAgaWYgKHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSB7XG4gICAgICAgIGNvbXB1dGVkUm93Q291bnQgPSBNYXRoLnJvdW5kKHJvd0NvdW50IC8gMik7XG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93SGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGguZmxvb3Iocm93Q291bnQgLyAyKTtcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSByb3dTcGFjaW5nO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkUm93Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xuICAgICAgICBpZiAoYWx0ZXJuYXRlQmFja2dyb3VuZHMgJiZcbiAgICAgICAgICAgICgoIWhlYWRlciAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJFdmVuXCIpIHx8XG4gICAgICAgICAgICAgICAgKGhlYWRlciAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJPZGRcIikpKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IDI0NyAvIDI1NTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gMjQ3IC8gMjU1O1xuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSAyNDcgLyAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuZyA9IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIHJvd0hlaWdodCk7XG4gICAgICAgIGJhY2tncm91bmQueSA9IHN0YXJ0aW5nUG9pbnQgLSBpICogcm93U3BhY2luZztcbiAgICAgICAgcm93QmFja2dyb3VuZE5vZGUucHVzaChiYWNrZ3JvdW5kKTtcbiAgICB9XG4gICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSByb3dCYWNrZ3JvdW5kVHlwZTtcbiAgICByZXR1cm4gcm93QmFja2dyb3VuZEdyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVUZXh0cyhyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB0YWJsZVRleHRzTm9kZSA9IFtdO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgcm93Q291bnQgLT0gMTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzTm9kZSA9IFtdO1xuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICBsb2FkTm9kZUZvbnQodGV4dC5mb250TmFtZSkudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSBcIlJvdyBcIiArIChyb3dDb3VudCAtIGopO1xuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU2FtcGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSAoaiArIDEpICogcm93SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoLCByb3dIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb2x1bW5UZXh0c05vZGUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhjb2x1bW5UZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgICAgICBjb2x1bW5UZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBcIiArIChpICsgMSk7XG4gICAgICAgIHRhYmxlVGV4dHNOb2RlLnB1c2goY29sdW1uVGV4dHNHcm91cCk7XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVUZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgIHRhYmxlVGV4dHNHcm91cC5uYW1lID0gXCJUYWJsZSBUZXh0c1wiO1xuICAgIHJldHVybiB0YWJsZVRleHRzR3JvdXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWRlcihyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgaGVhZGVySGVpZ2h0LCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgLy8gQmFja2dyb3VuZFxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlck5vZGUgPSBbXTtcbiAgICAgICAgY29uc3Qgcm93V2lkdGggPSBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IDI0NyAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSAyNDcgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gMjQ3IC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gYmFja2dyb3VuZEZpbGxzO1xuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgaGVhZGVySGVpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZC55ID1cbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJIZWFkZXIgQmFja2dyb3VuZFwiO1xuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaChiYWNrZ3JvdW5kKTtcbiAgICAgICAgLy8gVGV4dHNcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICAgICAgbG9hZE5vZGVGb250KGZvbnROYW1lKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIHRleHQubmFtZSA9IFwiQ29sdW1uIEhlYWRlciBcIiArIChpICsgMSk7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJTQU1QTEVcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0gZm9udE5hbWU7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRleHQueSA9XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCwgaGVhZGVySGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlclRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgdGFibGVIZWFkZXJUZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBIZWFkZXJzXCI7XG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKHRhYmxlSGVhZGVyVGV4dHNHcm91cCk7XG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgICAgIHRhYmxlSGVhZGVyR3JvdXAubmFtZSA9IFwiVGFibGUgSGVhZGVyXCI7XG4gICAgICAgIHJldHVybiB0YWJsZUhlYWRlckdyb3VwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZE5vZGVGb250KGZvbnROYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XG4gICAgfSk7XG59XG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gZmlnbWEuZ3JvdXAobm9kZXMsIHBhcmVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0Q3VycmVudFBhZ2UoKS5zZWxlY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlO1xuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKSB7XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xuICAgIHJldHVybiBudWxsO1xufVxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBjbG9uZSh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9