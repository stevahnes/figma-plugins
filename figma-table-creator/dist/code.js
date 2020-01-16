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


const showUIOptions = {
    width: 300,
    height: 485
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
        const oddRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Odd", message.rows, message.rowHeight, message.columnWidth * message.columns, message.alternateBackgrounds, message.header, message.primarybackgroundColor, message.stripedbackgroundColor, message.referenceCoordinates);
        const evenRowBackgroundGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateRowBackground"])("Even", message.rows, message.rowHeight, message.columnWidth * message.columns, message.alternateBackgrounds, message.header, message.primarybackgroundColor, message.stripedbackgroundColor, message.referenceCoordinates);
        const rowBackgroundNode = [
            oddRowBackgroundGroup,
            evenRowBackgroundGroup
        ];
        const rowBackgroundGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["groupNodes"](rowBackgroundNode, figma.currentPage);
        rowBackgroundGroup.name = "Row Background";
        /* Generate Texts */
        const columnTextsGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateTableTexts"])(message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, message.referenceCoordinates);
        /* Generate Headers */
        const tableHeaderGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateTableHeader"])(message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, message.headerHeight, message.floatingFilter, message.floatingFilterHeight, message.primarybackgroundColor, message.referenceCoordinates);
        /* Generate Borders */
        const verticalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Vertical", message.borders, message.columns, message.columnWidth, message.rows, message.rowHeight, message.header, message.headerHeight, message.borderColor, message.referenceCoordinates);
        const horizontalLinesGroup = Object(_generators_generators__WEBPACK_IMPORTED_MODULE_0__["generateBorders"])("Horizontal", message.borders, message.rows, message.rowHeight, message.columns, message.columnWidth, message.header, message.headerHeight, message.borderColor, message.referenceCoordinates);
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
        figma.notify("👍 GridGen successfully generated your table");
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

/* Defaults/Constants */
const defaultBorderColor = "#C7C7C7";
function generateBorders(borderType, visible = true, borderCount, borderSpacing, borderWidthMultiplier, borderWidthIndividual, header, headerHeight, borderColor, referenceCoordinates) {
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
    const lineStrokesColor = borderColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) === null
        ? _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](defaultBorderColor)
        : _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](borderColor);
    for (let i = 0; i < borderCount + 1; i++) {
        const line = figma.createLine();
        const lineStrokes = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](line.strokes);
        lineStrokes[0].color.r = lineStrokesColor.r / 255;
        lineStrokes[0].color.g = lineStrokesColor.g / 255;
        lineStrokes[0].color.b = lineStrokesColor.b / 255;
        line.strokes = lineStrokes;
        if (borderType === "Vertical") {
            line.rotation = 90;
            line.x = referenceCoordinates.x + i * borderSpacing;
            line.y = referenceCoordinates.y;
        }
        else {
            line.x = referenceCoordinates.x;
            line.y = referenceCoordinates.y - i * borderSpacing;
        }
        line.resize(borderWidth, 0);
        linesNode.push(line);
    }
    // create top line if header is included
    if (header && borderType === "Horizontal") {
        const line = figma.createLine();
        const lineStrokes = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](line.strokes);
        lineStrokes[0].color.r = lineStrokesColor.r / 255;
        lineStrokes[0].color.g = lineStrokesColor.g / 255;
        lineStrokes[0].color.b = lineStrokesColor.b / 255;
        line.strokes = lineStrokes;
        line.resize(borderWidth, 0);
        line.x = referenceCoordinates.x;
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
function generateRowBackground(rowBackgroundType, rowCount, rowHeight, rowWidth, alternateBackgrounds, header, primaryBackgroundColor, stripedBackgroundColor, referenceCoordinates) {
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
        let backgroundFillsColor;
        if (alternateBackgrounds) {
            if ((rowCount % 2 === 0 && rowBackgroundType === "Odd") ||
                (rowCount % 2 !== 0 && rowBackgroundType === "Even")) {
                backgroundFillsColor = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](stripedBackgroundColor);
            }
            else {
                backgroundFillsColor = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](primaryBackgroundColor);
            }
        }
        else {
            backgroundFillsColor = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](primaryBackgroundColor);
        }
        backgroundFills[0].color.r = backgroundFillsColor.r / 255;
        backgroundFills[0].color.g = backgroundFillsColor.g / 255;
        backgroundFills[0].color.b = backgroundFillsColor.b / 255;
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
    const textMargin = { x: 5, y: 5 };
    for (let i = 0; i < columnCount; i++) {
        const columnTextsNode = [];
        const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + textMargin.x;
        for (let j = 0; j < rowCount; j++) {
            const text = figma.createText();
            loadNodeFont(text.fontName).then(_ => {
                text.name = "Row " + (rowCount - j);
                text.characters = "Sample";
                text.textAlignVertical = "CENTER";
                text.resize(columnWidth - 1 - 2 * textMargin.x, rowHeight - 2 * textMargin.y);
                text.x = columnTextsStartingPosition;
                text.y = referenceCoordinates.y + textMargin.y - (j + 1) * rowHeight;
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
function generateTableHeader(rowCount, rowHeight, columnCount, columnWidth, header, headerHeight, floatingFilter, floatingFilterHeight, primaryBackgroundColor, referenceCoordinates) {
    if (header) {
        // Background
        const tableHeaderNode = [];
        const rowWidth = columnWidth * columnCount;
        const background = figma.createRectangle();
        const backgroundFills = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](background.fills);
        const backgroundFillsColor = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"](primaryBackgroundColor);
        backgroundFills[0].color.r = backgroundFillsColor.r / 255;
        backgroundFills[0].color.g = backgroundFillsColor.g / 255;
        backgroundFills[0].color.b = backgroundFillsColor.b / 255;
        background.fills = backgroundFills;
        background.resize(rowWidth, headerHeight);
        background.y =
            referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
        background.name = "Header Background";
        tableHeaderNode.push(background);
        // Texts
        const tableHeaderTextsNode = [];
        const textHeight = floatingFilter
            ? headerHeight - floatingFilterHeight
            : headerHeight;
        const headerTextMargin = { x: 5, y: 5 };
        for (let i = 0; i < columnCount; i++) {
            const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + headerTextMargin.x;
            const text = figma.createText();
            const fontName = { family: "Roboto", style: "Bold" };
            loadNodeFont(fontName).then(_ => {
                text.name = "Column Header " + (i + 1);
                text.characters = "SAMPLE";
                text.textAlignVertical = "CENTER";
                text.fontName = fontName;
                text.resize(columnWidth - 1 - 2 * headerTextMargin.x, textHeight - 2 * headerTextMargin.y);
                text.x = columnTextsStartingPosition;
                text.y =
                    referenceCoordinates.y -
                        headerHeight +
                        headerTextMargin.y -
                        (rowCount - 1) * rowHeight;
            });
            tableHeaderTextsNode.push(text);
        }
        const tableHeaderTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableHeaderTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        tableHeaderTextsGroup.name = "Column Headers";
        tableHeaderNode.push(tableHeaderTextsGroup);
        // Floating Filters
        if (floatingFilter) {
            const floatingFiltersNode = [];
            const floatingFilterMargin = { x: 5, y: 5 };
            for (let i = 0; i < columnCount; i++) {
                const columnFloatingFiltersStartingPosition = referenceCoordinates.x + i * columnWidth + floatingFilterMargin.x;
                const floatingFilter = figma.createRectangle();
                const floatingFilterFills = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](floatingFilter.fills);
                const floatingFilterFillsColor = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"]("#FFFFFF");
                floatingFilterFills[0].color.r = floatingFilterFillsColor.r / 255;
                floatingFilterFills[0].color.g = floatingFilterFillsColor.g / 255;
                floatingFilterFills[0].color.b = floatingFilterFillsColor.b / 255;
                floatingFilter.fills = floatingFilterFills;
                floatingFilter.name = "Floating Filter Placeholder" + (i + 1);
                floatingFilter.resize(columnWidth - 1 - 2 * floatingFilterMargin.x, floatingFilterHeight - 2 * floatingFilterMargin.y);
                floatingFilter.x = columnFloatingFiltersStartingPosition;
                floatingFilter.y =
                    referenceCoordinates.y -
                        floatingFilterHeight +
                        floatingFilterMargin.y -
                        (rowCount - 1) * rowHeight;
                floatingFiltersNode.push(floatingFilter);
            }
            const tableFloatingFiltersGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](floatingFiltersNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
            tableFloatingFiltersGroup.name = "Floating Filters";
            tableHeaderNode.push(tableFloatingFiltersGroup);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0ZBQXFCO0FBQzNELHVDQUF1QyxvRkFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdURBQWdCO0FBQ25EO0FBQ0E7QUFDQSxpQ0FBaUMsaUZBQWtCO0FBQ25EO0FB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aUJBQWlCO0FBQzVDO0FBQ0E7QUFDQSw0Q0FBNEMsa0RBQVc7QUFDdkQsaURBQWlELHFEQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdURBQWdCLHNCQUFzQiwyREFBb0I7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFnQixrQkFBa0IsMkRBQW9CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDcE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IHsgZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kLCBnZW5lcmF0ZUJvcmRlcnMsIGdlbmVyYXRlVGFibGVUZXh0cywgZ2VuZXJhdGVUYWJsZUhlYWRlciB9IGZyb20gXCIuL2dlbmVyYXRvcnMvZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xyXG5jb25zdCBzaG93VUlPcHRpb25zID0ge1xyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGhlaWdodDogNDg1XHJcbn07XHJcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCBzaG93VUlPcHRpb25zKTtcclxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXHJcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxyXG4vLyBwb3N0ZWQgbWVzc2FnZS5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICAgIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG59O1xyXG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgQmFja2dyb3VuZCAqL1xyXG4gICAgICAgIGNvbnN0IG9kZFJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIk9kZFwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXAgPSBnZW5lcmF0ZVJvd0JhY2tncm91bmQoXCJFdmVuXCIsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1uV2lkdGggKiBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuYWx0ZXJuYXRlQmFja2dyb3VuZHMsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnByaW1hcnliYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2Uuc3RyaXBlZGJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXHJcbiAgICAgICAgICAgIG9kZFJvd0JhY2tncm91bmRHcm91cCxcclxuICAgICAgICAgICAgZXZlblJvd0JhY2tncm91bmRHcm91cFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gXCJSb3cgQmFja2dyb3VuZFwiO1xyXG4gICAgICAgIC8qIEdlbmVyYXRlIFRleHRzICovXHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IGdlbmVyYXRlVGFibGVUZXh0cyhtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBIZWFkZXJzICovXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IGdlbmVyYXRlVGFibGVIZWFkZXIobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXIsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXJIZWlnaHQsIG1lc3NhZ2UucHJpbWFyeWJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgQm9yZGVycyAqL1xyXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZXNHcm91cCA9IGdlbmVyYXRlQm9yZGVycyhcIlZlcnRpY2FsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuYm9yZGVyQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiSG9yaXpvbnRhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCBtZXNzYWdlLmJvcmRlckNvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICBjb25zdCBib3JkZXJMaW5lc05vZGUgPSBbXHJcbiAgICAgICAgICAgIHZlcnRpY2FsTGluZXNHcm91cCxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmVzR3JvdXBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGJvcmRlckxpbmVzTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGJvcmRlckxpbmVzR3JvdXAubmFtZSA9IFwiQm9yZGVyc1wiO1xyXG4gICAgICAgIC8qIFNvcnQgR3JvdXAgTm9kZXMgKi9cclxuICAgICAgICBjb25zdCB0YWJsZUdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhbcm93QmFja2dyb3VuZEdyb3VwXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoY29sdW1uVGV4dHNHcm91cCk7XHJcbiAgICAgICAgaWYgKHRhYmxlSGVhZGVyR3JvdXAgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlckdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChib3JkZXJMaW5lc0dyb3VwKTtcclxuICAgICAgICB0YWJsZUdyb3VwLm5hbWUgPSBcIlRhYmxlXCI7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3RhYmxlR3JvdXBdO1xyXG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdGFibGVHcm91cF0pO1xyXG4gICAgICAgIC8qIE5vdGlmeSBTdWNjZXNzIHRvIFVzZXIgKi9cclxuICAgICAgICBmaWdtYS5ub3RpZnkoXCLwn5GNIEdyaWRHZW4gc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCB5b3VyIHRhYmxlXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbi8qIERlZmF1bHRzL0NvbnN0YW50cyAqL1xyXG5jb25zdCBkZWZhdWx0Qm9yZGVyQ29sb3IgPSBcIiNDN0M3QzdcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQm9yZGVycyhib3JkZXJUeXBlLCB2aXNpYmxlID0gdHJ1ZSwgYm9yZGVyQ291bnQsIGJvcmRlclNwYWNpbmcsIGJvcmRlcldpZHRoTXVsdGlwbGllciwgYm9yZGVyV2lkdGhJbmRpdmlkdWFsLCBoZWFkZXIsIGhlYWRlckhlaWdodCwgYm9yZGVyQ29sb3IsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb25zdCBsaW5lc05vZGUgPSBbXTtcclxuICAgIGxldCBib3JkZXJXaWR0aDtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICBpZiAoYm9yZGVyVHlwZSA9PT0gXCJWZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoID1cclxuICAgICAgICAgICAgICAgIChib3JkZXJXaWR0aE11bHRpcGxpZXIgLSAxKSAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbCArIGhlYWRlckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvdW50IC09IDE7XHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGhNdWx0aXBsaWVyICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGhNdWx0aXBsaWVyICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGluZVN0cm9rZXNDb2xvciA9IGJvcmRlckNvbG9yLm1hdGNoKC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kpID09PSBudWxsXHJcbiAgICAgICAgPyBGaWdtYS5oZXhUb1JnYihkZWZhdWx0Qm9yZGVyQ29sb3IpXHJcbiAgICAgICAgOiBGaWdtYS5oZXhUb1JnYihib3JkZXJDb2xvcik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvcmRlckNvdW50ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcclxuICAgICAgICBjb25zdCBsaW5lU3Ryb2tlcyA9IEZpZ21hLmNsb25lKGxpbmUuc3Ryb2tlcyk7XHJcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuciA9IGxpbmVTdHJva2VzQ29sb3IuciAvIDI1NTtcclxuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5nID0gbGluZVN0cm9rZXNDb2xvci5nIC8gMjU1O1xyXG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLmIgPSBsaW5lU3Ryb2tlc0NvbG9yLmIgLyAyNTU7XHJcbiAgICAgICAgbGluZS5zdHJva2VzID0gbGluZVN0cm9rZXM7XHJcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBsaW5lLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgICAgIGxpbmUueCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogYm9yZGVyU3BhY2luZztcclxuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmUueCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLng7XHJcbiAgICAgICAgICAgIGxpbmUueSA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBpICogYm9yZGVyU3BhY2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZS5yZXNpemUoYm9yZGVyV2lkdGgsIDApO1xyXG4gICAgICAgIGxpbmVzTm9kZS5wdXNoKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIHRvcCBsaW5lIGlmIGhlYWRlciBpcyBpbmNsdWRlZFxyXG4gICAgaWYgKGhlYWRlciAmJiBib3JkZXJUeXBlID09PSBcIkhvcml6b250YWxcIikge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XHJcbiAgICAgICAgY29uc3QgbGluZVN0cm9rZXMgPSBGaWdtYS5jbG9uZShsaW5lLnN0cm9rZXMpO1xyXG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLnIgPSBsaW5lU3Ryb2tlc0NvbG9yLnIgLyAyNTU7XHJcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuZyA9IGxpbmVTdHJva2VzQ29sb3IuZyAvIDI1NTtcclxuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5iID0gbGluZVN0cm9rZXNDb2xvci5iIC8gMjU1O1xyXG4gICAgICAgIGxpbmUuc3Ryb2tlcyA9IGxpbmVTdHJva2VzO1xyXG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcclxuICAgICAgICBsaW5lLnggPSByZWZlcmVuY2VDb29yZGluYXRlcy54O1xyXG4gICAgICAgIGxpbmUueSA9XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSBib3JkZXJDb3VudCAqIGJvcmRlclNwYWNpbmc7XHJcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2RlcyhsaW5lc05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgaWYgKCF2aXNpYmxlKSB7XHJcbiAgICAgICAgbGluZXNHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsaW5lc0dyb3VwLm5hbWUgPSBib3JkZXJUeXBlO1xyXG4gICAgcmV0dXJuIGxpbmVzR3JvdXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93QmFja2dyb3VuZChyb3dCYWNrZ3JvdW5kVHlwZSwgcm93Q291bnQsIHJvd0hlaWdodCwgcm93V2lkdGgsIGFsdGVybmF0ZUJhY2tncm91bmRzLCBoZWFkZXIsIHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IsIHN0cmlwZWRCYWNrZ3JvdW5kQ29sb3IsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtdO1xyXG4gICAgY29uc3Qgcm93U3BhY2luZyA9IHJvd0hlaWdodCAqIDI7XHJcbiAgICBsZXQgY29tcHV0ZWRSb3dDb3VudCA9IDA7XHJcbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IDA7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcm93Q291bnQgLT0gMTtcclxuICAgIH1cclxuICAgIGlmIChyb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJPZGRcIikge1xyXG4gICAgICAgIGNvbXB1dGVkUm93Q291bnQgPSBNYXRoLnJvdW5kKHJvd0NvdW50IC8gMik7XHJcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSByb3dIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5mbG9vcihyb3dDb3VudCAvIDIpO1xyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93U3BhY2luZztcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZWRSb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kRmlsbHNDb2xvcjtcclxuICAgICAgICBpZiAoYWx0ZXJuYXRlQmFja2dyb3VuZHMpIHtcclxuICAgICAgICAgICAgaWYgKChyb3dDb3VudCAlIDIgPT09IDAgJiYgcm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocm93Q291bnQgJSAyICE9PSAwICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIkV2ZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2Ioc3RyaXBlZEJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IGJhY2tncm91bmRGaWxsc0NvbG9yLnIgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5nIC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuYiAvIDI1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gYmFja2dyb3VuZEZpbGxzO1xyXG4gICAgICAgIGJhY2tncm91bmQucmVzaXplKHJvd1dpZHRoLCByb3dIZWlnaHQpO1xyXG4gICAgICAgIGJhY2tncm91bmQueSA9IHN0YXJ0aW5nUG9pbnQgLSBpICogcm93U3BhY2luZztcclxuICAgICAgICByb3dCYWNrZ3JvdW5kTm9kZS5wdXNoKGJhY2tncm91bmQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IHJvd0JhY2tncm91bmRUeXBlO1xyXG4gICAgcmV0dXJuIHJvd0JhY2tncm91bmRHcm91cDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZVRleHRzKHJvd0NvdW50LCByb3dIZWlnaHQsIGNvbHVtbkNvdW50LCBjb2x1bW5XaWR0aCwgaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgdGFibGVUZXh0c05vZGUgPSBbXTtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICByb3dDb3VudCAtPSAxO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dE1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNOb2RlID0gW107XHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aCArIHRleHRNYXJnaW4ueDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgbG9hZE5vZGVGb250KHRleHQuZm9udE5hbWUpLnRoZW4oXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSBcIlJvdyBcIiArIChyb3dDb3VudCAtIGopO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJTYW1wbGVcIjtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoY29sdW1uV2lkdGggLSAxIC0gMiAqIHRleHRNYXJnaW4ueCwgcm93SGVpZ2h0IC0gMiAqIHRleHRNYXJnaW4ueSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55ICsgdGV4dE1hcmdpbi55IC0gKGogKyAxKSAqIHJvd0hlaWdodDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbHVtblRleHRzTm9kZS5wdXNoKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhjb2x1bW5UZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgIGNvbHVtblRleHRzR3JvdXAubmFtZSA9IFwiQ29sdW1uIFwiICsgKGkgKyAxKTtcclxuICAgICAgICB0YWJsZVRleHRzTm9kZS5wdXNoKGNvbHVtblRleHRzR3JvdXApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFibGVUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZVRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICB0YWJsZVRleHRzR3JvdXAubmFtZSA9IFwiVGFibGUgVGV4dHNcIjtcclxuICAgIHJldHVybiB0YWJsZVRleHRzR3JvdXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkZXIocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCBoZWFkZXIsIGhlYWRlckhlaWdodCwgZmxvYXRpbmdGaWx0ZXIsIGZsb2F0aW5nRmlsdGVySGVpZ2h0LCBwcmltYXJ5QmFja2dyb3VuZENvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlck5vZGUgPSBbXTtcclxuICAgICAgICBjb25zdCByb3dXaWR0aCA9IGNvbHVtbldpZHRoICogY29sdW1uQ291bnQ7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IocHJpbWFyeUJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5yIC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuZyAvIDI1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmIgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcclxuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgaGVhZGVySGVpZ2h0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLnkgPVxyXG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJIZWFkZXIgQmFja2dyb3VuZFwiO1xyXG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKGJhY2tncm91bmQpO1xyXG4gICAgICAgIC8vIFRleHRzXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcclxuICAgICAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gZmxvYXRpbmdGaWx0ZXJcclxuICAgICAgICAgICAgPyBoZWFkZXJIZWlnaHQgLSBmbG9hdGluZ0ZpbHRlckhlaWdodFxyXG4gICAgICAgICAgICA6IGhlYWRlckhlaWdodDtcclxuICAgICAgICBjb25zdCBoZWFkZXJUZXh0TWFyZ2luID0geyB4OiA1LCB5OiA1IH07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyBoZWFkZXJUZXh0TWFyZ2luLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xyXG4gICAgICAgICAgICBsb2FkTm9kZUZvbnQoZm9udE5hbWUpLnRoZW4oXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSBcIkNvbHVtbiBIZWFkZXIgXCIgKyAoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJTQU1QTEVcIjtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IGZvbnROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoY29sdW1uV2lkdGggLSAxIC0gMiAqIGhlYWRlclRleHRNYXJnaW4ueCwgdGV4dEhlaWdodCAtIDIgKiBoZWFkZXJUZXh0TWFyZ2luLnkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID1cclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGV4dE1hcmdpbi55IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YWJsZUhlYWRlclRleHRzTm9kZS5wdXNoKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlclRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgICAgICB0YWJsZUhlYWRlclRleHRzR3JvdXAubmFtZSA9IFwiQ29sdW1uIEhlYWRlcnNcIjtcclxuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaCh0YWJsZUhlYWRlclRleHRzR3JvdXApO1xyXG4gICAgICAgIC8vIEZsb2F0aW5nIEZpbHRlcnNcclxuICAgICAgICBpZiAoZmxvYXRpbmdGaWx0ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJzTm9kZSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlck1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkZsb2F0aW5nRmlsdGVyc1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoICsgZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckZpbGxzID0gRmlnbWEuY2xvbmUoZmxvYXRpbmdGaWx0ZXIuZmlsbHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJGaWxsc1swXS5jb2xvci5yID0gZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yLnIgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckZpbGxzWzBdLmNvbG9yLmcgPSBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IuZyAvIDI1NTtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyRmlsbHNbMF0uY29sb3IuYiA9IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvci5iIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIuZmlsbHMgPSBmbG9hdGluZ0ZpbHRlckZpbGxzO1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIubmFtZSA9IFwiRmxvYXRpbmcgRmlsdGVyIFBsYWNlaG9sZGVyXCIgKyAoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiBmbG9hdGluZ0ZpbHRlck1hcmdpbi54LCBmbG9hdGluZ0ZpbHRlckhlaWdodCAtIDIgKiBmbG9hdGluZ0ZpbHRlck1hcmdpbi55KTtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnggPSBjb2x1bW5GbG9hdGluZ0ZpbHRlcnNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIueSA9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVySGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJzTm9kZS5wdXNoKGZsb2F0aW5nRmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUZsb2F0aW5nRmlsdGVyc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2RlcyhmbG9hdGluZ0ZpbHRlcnNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgICAgICAgICAgdGFibGVGbG9hdGluZ0ZpbHRlcnNHcm91cC5uYW1lID0gXCJGbG9hdGluZyBGaWx0ZXJzXCI7XHJcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKHRhYmxlRmxvYXRpbmdGaWx0ZXJzR3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlck5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgICAgIHRhYmxlSGVhZGVyR3JvdXAubmFtZSA9IFwiVGFibGUgSGVhZGVyXCI7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlSGVhZGVyR3JvdXA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkTm9kZUZvbnQoZm9udE5hbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xyXG4gICAgcmV0dXJuIGZpZ21hLmdyb3VwKG5vZGVzLCBwYXJlbnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcclxuICAgIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlKCkuc2VsZWN0aW9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xyXG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSkge1xyXG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICBpZiAodmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gY2xvbmUoeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG8gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XHJcbn1cclxuLyogSEVYIHRvIFJHQiBDb252ZXJzaW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcclxuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgICAgIH1cclxuICAgICAgICA6IG51bGw7XHJcbn1cclxuLyogRXh0cmFjdCBJbnB1dHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKGh0bWxUYWdJZCwgaW5wdXRUeXBlKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XHJcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==