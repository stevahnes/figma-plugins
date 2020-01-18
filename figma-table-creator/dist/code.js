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
        figma.closePlugin();
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
const tableFontName = {
    family: "Roboto",
    style: "Regular"
};
const tableHeaderFontName = { family: "Roboto", style: "Bold" };
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
            text.name = "Row " + (rowCount - j);
            text.x = columnTextsStartingPosition;
            text.y = referenceCoordinates.y + textMargin.y - (j + 1) * rowHeight;
            columnTextsNode.push(text);
        }
        const columnTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](columnTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        columnTextsGroup.name = "Column " + (i + 1);
        tableTextsNode.push(columnTextsGroup);
    }
    const tableTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
    const allTextsNodesGenerated = tableTextsGroup.findAll(node => node.type === "TEXT");
    loadNodeFont(tableFontName).then(_ => {
        for (let textNode of allTextsNodesGenerated) {
            const text = textNode;
            text.fontName = tableFontName;
            text.characters = "Sample";
            text.textAlignVertical = "CENTER";
            text.resize(columnWidth - 1 - 2 * textMargin.x, rowHeight - 2 * textMargin.y);
        }
    });
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
            text.name = "Column Header " + (i + 1);
            text.x = columnTextsStartingPosition;
            text.y =
                referenceCoordinates.y -
                    headerHeight +
                    headerTextMargin.y -
                    (rowCount - 1) * rowHeight;
            tableHeaderTextsNode.push(text);
        }
        const tableHeaderTextsGroup = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupNodes"](tableHeaderTextsNode, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentPage"]());
        const allTextsNodesGenerated = tableHeaderTextsGroup.findAll(node => node.type === "TEXT");
        loadNodeFont(tableHeaderFontName).then(_ => {
            for (let textNode of allTextsNodesGenerated) {
                const text = textNode;
                text.fontName = tableHeaderFontName;
                text.characters = "SAMPLE";
                text.textAlignVertical = "CENTER";
                text.resize(columnWidth - 1 - 2 * headerTextMargin.x, textHeight - 2 * headerTextMargin.y);
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9GQUFxQjtBQUMzRCx1Q0FBdUMsb0ZBQXFCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFnQjtBQUNuRDtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFrQjtBQUNuRDtBQUNBLGlD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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBLDRDQUE0QyxrREFBVztBQUN2RCxpREFBaUQscURBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1REFBZ0Isc0JBQXNCLDJEQUFvQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWdCLGtCQUFrQiwyREFBb0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNqUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJvd0JhY2tncm91bmQsIGdlbmVyYXRlQm9yZGVycywgZ2VuZXJhdGVUYWJsZVRleHRzLCBnZW5lcmF0ZVRhYmxlSGVhZGVyIH0gZnJvbSBcIi4vZ2VuZXJhdG9ycy9nZW5lcmF0b3JzXCI7XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuY29uc3Qgc2hvd1VJT3B0aW9ucyA9IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogNDg1XG59O1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCBzaG93VUlPcHRpb25zKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgcHJvY2Vzc01lc3NhZ2UobXNnKTtcbn07XG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJjcmVhdGUtdGFibGVcIikge1xuICAgICAgICAvKiBHZW5lcmF0ZSBCYWNrZ3JvdW5kICovXG4gICAgICAgIGNvbnN0IG9kZFJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIk9kZFwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBldmVuUm93QmFja2dyb3VuZEdyb3VwID0gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKFwiRXZlblwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtcbiAgICAgICAgICAgIG9kZFJvd0JhY2tncm91bmRHcm91cCxcbiAgICAgICAgICAgIGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IFwiUm93IEJhY2tncm91bmRcIjtcbiAgICAgICAgLyogR2VuZXJhdGUgVGV4dHMgKi9cbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IGdlbmVyYXRlVGFibGVUZXh0cyhtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgLyogR2VuZXJhdGUgSGVhZGVycyAqL1xuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gZ2VuZXJhdGVUYWJsZUhlYWRlcihtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgbWVzc2FnZS5mbG9hdGluZ0ZpbHRlciwgbWVzc2FnZS5mbG9hdGluZ0ZpbHRlckhlaWdodCwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgLyogR2VuZXJhdGUgQm9yZGVycyAqL1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJWZXJ0aWNhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCBtZXNzYWdlLmJvcmRlckNvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJIb3Jpem9udGFsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuYm9yZGVyQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBib3JkZXJMaW5lc05vZGUgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbExpbmVzR3JvdXAsXG4gICAgICAgICAgICBob3Jpem9udGFsTGluZXNHcm91cFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBib3JkZXJMaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhib3JkZXJMaW5lc05vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgYm9yZGVyTGluZXNHcm91cC5uYW1lID0gXCJCb3JkZXJzXCI7XG4gICAgICAgIC8qIFNvcnQgR3JvdXAgTm9kZXMgKi9cbiAgICAgICAgY29uc3QgdGFibGVHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoW3Jvd0JhY2tncm91bmRHcm91cF0sIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChjb2x1bW5UZXh0c0dyb3VwKTtcbiAgICAgICAgaWYgKHRhYmxlSGVhZGVyR3JvdXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChib3JkZXJMaW5lc0dyb3VwKTtcbiAgICAgICAgdGFibGVHcm91cC5uYW1lID0gXCJUYWJsZVwiO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbdGFibGVHcm91cF07XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdGFibGVHcm91cF0pO1xuICAgICAgICAvKiBOb3RpZnkgU3VjY2VzcyB0byBVc2VyICovXG4gICAgICAgIGZpZ21hLm5vdGlmeShcIvCfkY0gR3JpZEdlbiBzdWNjZXNzZnVsbHkgZ2VuZXJhdGVkIHlvdXIgdGFibGVcIik7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG4vKiBEZWZhdWx0cy9Db25zdGFudHMgKi9cbmNvbnN0IGRlZmF1bHRCb3JkZXJDb2xvciA9IFwiI0M3QzdDN1wiO1xuY29uc3QgdGFibGVGb250TmFtZSA9IHtcbiAgICBmYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgc3R5bGU6IFwiUmVndWxhclwiXG59O1xuY29uc3QgdGFibGVIZWFkZXJGb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfTtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJvcmRlcnMoYm9yZGVyVHlwZSwgdmlzaWJsZSA9IHRydWUsIGJvcmRlckNvdW50LCBib3JkZXJTcGFjaW5nLCBib3JkZXJXaWR0aE11bHRpcGxpZXIsIGJvcmRlcldpZHRoSW5kaXZpZHVhbCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIGJvcmRlckNvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IGxpbmVzTm9kZSA9IFtdO1xuICAgIGxldCBib3JkZXJXaWR0aDtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoID1cbiAgICAgICAgICAgICAgICAoYm9yZGVyV2lkdGhNdWx0aXBsaWVyIC0gMSkgKiBib3JkZXJXaWR0aEluZGl2aWR1YWwgKyBoZWFkZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib3JkZXJDb3VudCAtPSAxO1xuICAgICAgICAgICAgYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aE11bHRpcGxpZXIgKiBib3JkZXJXaWR0aEluZGl2aWR1YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGhNdWx0aXBsaWVyICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsO1xuICAgIH1cbiAgICBjb25zdCBsaW5lU3Ryb2tlc0NvbG9yID0gYm9yZGVyQ29sb3IubWF0Y2goL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaSkgPT09IG51bGxcbiAgICAgICAgPyBGaWdtYS5oZXhUb1JnYihkZWZhdWx0Qm9yZGVyQ29sb3IpXG4gICAgICAgIDogRmlnbWEuaGV4VG9SZ2IoYm9yZGVyQ29sb3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9yZGVyQ291bnQgKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgY29uc3QgbGluZVN0cm9rZXMgPSBGaWdtYS5jbG9uZShsaW5lLnN0cm9rZXMpO1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5yID0gbGluZVN0cm9rZXNDb2xvci5yIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5nID0gbGluZVN0cm9rZXNDb2xvci5nIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5iID0gbGluZVN0cm9rZXNDb2xvci5iIC8gMjU1O1xuICAgICAgICBsaW5lLnN0cm9rZXMgPSBsaW5lU3Ryb2tlcztcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xuICAgICAgICAgICAgbGluZS5yb3RhdGlvbiA9IDkwO1xuICAgICAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpbmUueCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLng7XG4gICAgICAgICAgICBsaW5lLnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaSAqIGJvcmRlclNwYWNpbmc7XG4gICAgICAgIH1cbiAgICAgICAgbGluZS5yZXNpemUoYm9yZGVyV2lkdGgsIDApO1xuICAgICAgICBsaW5lc05vZGUucHVzaChsaW5lKTtcbiAgICB9XG4gICAgLy8gY3JlYXRlIHRvcCBsaW5lIGlmIGhlYWRlciBpcyBpbmNsdWRlZFxuICAgIGlmIChoZWFkZXIgJiYgYm9yZGVyVHlwZSA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgY29uc3QgbGluZVN0cm9rZXMgPSBGaWdtYS5jbG9uZShsaW5lLnN0cm9rZXMpO1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5yID0gbGluZVN0cm9rZXNDb2xvci5yIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5nID0gbGluZVN0cm9rZXNDb2xvci5nIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5iID0gbGluZVN0cm9rZXNDb2xvci5iIC8gMjU1O1xuICAgICAgICBsaW5lLnN0cm9rZXMgPSBsaW5lU3Ryb2tlcztcbiAgICAgICAgbGluZS5yZXNpemUoYm9yZGVyV2lkdGgsIDApO1xuICAgICAgICBsaW5lLnggPSByZWZlcmVuY2VDb29yZGluYXRlcy54O1xuICAgICAgICBsaW5lLnkgPVxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIGJvcmRlckNvdW50ICogYm9yZGVyU3BhY2luZztcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XG4gICAgfVxuICAgIGNvbnN0IGxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGxpbmVzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGxpbmVzR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBsaW5lc0dyb3VwLm5hbWUgPSBib3JkZXJUeXBlO1xuICAgIHJldHVybiBsaW5lc0dyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93QmFja2dyb3VuZChyb3dCYWNrZ3JvdW5kVHlwZSwgcm93Q291bnQsIHJvd0hlaWdodCwgcm93V2lkdGgsIGFsdGVybmF0ZUJhY2tncm91bmRzLCBoZWFkZXIsIHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IsIHN0cmlwZWRCYWNrZ3JvdW5kQ29sb3IsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXTtcbiAgICBjb25zdCByb3dTcGFjaW5nID0gcm93SGVpZ2h0ICogMjtcbiAgICBsZXQgY29tcHV0ZWRSb3dDb3VudCA9IDA7XG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgcm93Q291bnQgLT0gMTtcbiAgICB9XG4gICAgaWYgKHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSB7XG4gICAgICAgIGNvbXB1dGVkUm93Q291bnQgPSBNYXRoLnJvdW5kKHJvd0NvdW50IC8gMik7XG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93SGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGguZmxvb3Iocm93Q291bnQgLyAyKTtcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSByb3dTcGFjaW5nO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkUm93Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xuICAgICAgICBsZXQgYmFja2dyb3VuZEZpbGxzQ29sb3I7XG4gICAgICAgIGlmIChhbHRlcm5hdGVCYWNrZ3JvdW5kcykge1xuICAgICAgICAgICAgaWYgKChyb3dDb3VudCAlIDIgPT09IDAgJiYgcm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHx8XG4gICAgICAgICAgICAgICAgKHJvd0NvdW50ICUgMiAhPT0gMCAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJFdmVuXCIpKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihzdHJpcGVkQmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IocHJpbWFyeUJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuciAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5nIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmIgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XG4gICAgICAgIGJhY2tncm91bmQucmVzaXplKHJvd1dpZHRoLCByb3dIZWlnaHQpO1xuICAgICAgICBiYWNrZ3JvdW5kLnkgPSBzdGFydGluZ1BvaW50IC0gaSAqIHJvd1NwYWNpbmc7XG4gICAgICAgIHJvd0JhY2tncm91bmROb2RlLnB1c2goYmFja2dyb3VuZCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gcm93QmFja2dyb3VuZFR5cGU7XG4gICAgcmV0dXJuIHJvd0JhY2tncm91bmRHcm91cDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlVGV4dHMocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCBoZWFkZXIsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgdGFibGVUZXh0c05vZGUgPSBbXTtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHJvd0NvdW50IC09IDE7XG4gICAgfVxuICAgIGNvbnN0IHRleHRNYXJnaW4gPSB7IHg6IDUsIHk6IDUgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNOb2RlID0gW107XG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyB0ZXh0TWFyZ2luLng7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRleHQubmFtZSA9IFwiUm93IFwiICsgKHJvd0NvdW50IC0gaik7XG4gICAgICAgICAgICB0ZXh0LnggPSBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb247XG4gICAgICAgICAgICB0ZXh0LnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55ICsgdGV4dE1hcmdpbi55IC0gKGogKyAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbHVtblRleHRzTm9kZS5wdXNoKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGNvbHVtblRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgICAgIGNvbHVtblRleHRzR3JvdXAubmFtZSA9IFwiQ29sdW1uIFwiICsgKGkgKyAxKTtcbiAgICAgICAgdGFibGVUZXh0c05vZGUucHVzaChjb2x1bW5UZXh0c0dyb3VwKTtcbiAgICB9XG4gICAgY29uc3QgdGFibGVUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZVRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgY29uc3QgYWxsVGV4dHNOb2Rlc0dlbmVyYXRlZCA9IHRhYmxlVGV4dHNHcm91cC5maW5kQWxsKG5vZGUgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgbG9hZE5vZGVGb250KHRhYmxlRm9udE5hbWUpLnRoZW4oXyA9PiB7XG4gICAgICAgIGZvciAobGV0IHRleHROb2RlIG9mIGFsbFRleHRzTm9kZXNHZW5lcmF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Tm9kZTtcbiAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB0YWJsZUZvbnROYW1lO1xuICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJTYW1wbGVcIjtcbiAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgdGV4dC5yZXNpemUoY29sdW1uV2lkdGggLSAxIC0gMiAqIHRleHRNYXJnaW4ueCwgcm93SGVpZ2h0IC0gMiAqIHRleHRNYXJnaW4ueSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0YWJsZVRleHRzR3JvdXAubmFtZSA9IFwiVGFibGUgVGV4dHNcIjtcbiAgICByZXR1cm4gdGFibGVUZXh0c0dyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkZXIocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCBoZWFkZXIsIGhlYWRlckhlaWdodCwgZmxvYXRpbmdGaWx0ZXIsIGZsb2F0aW5nRmlsdGVySGVpZ2h0LCBwcmltYXJ5QmFja2dyb3VuZENvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgLy8gQmFja2dyb3VuZFxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlck5vZGUgPSBbXTtcbiAgICAgICAgY29uc3Qgcm93V2lkdGggPSBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IGJhY2tncm91bmRGaWxsc0NvbG9yLnIgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5iIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gYmFja2dyb3VuZEZpbGxzO1xuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgaGVhZGVySGVpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZC55ID1cbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJIZWFkZXIgQmFja2dyb3VuZFwiO1xuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaChiYWNrZ3JvdW5kKTtcbiAgICAgICAgLy8gVGV4dHNcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcbiAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IGZsb2F0aW5nRmlsdGVyXG4gICAgICAgICAgICA/IGhlYWRlckhlaWdodCAtIGZsb2F0aW5nRmlsdGVySGVpZ2h0XG4gICAgICAgICAgICA6IGhlYWRlckhlaWdodDtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dE1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyBoZWFkZXJUZXh0TWFyZ2luLng7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJDb2x1bW4gSGVhZGVyIFwiICsgKGkgKyAxKTtcbiAgICAgICAgICAgIHRleHQueCA9IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbjtcbiAgICAgICAgICAgIHRleHQueSA9XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHRNYXJnaW4ueSAtXG4gICAgICAgICAgICAgICAgICAgIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlclRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgY29uc3QgYWxsVGV4dHNOb2Rlc0dlbmVyYXRlZCA9IHRhYmxlSGVhZGVyVGV4dHNHcm91cC5maW5kQWxsKG5vZGUgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgIGxvYWROb2RlRm9udCh0YWJsZUhlYWRlckZvbnROYW1lKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgdGV4dE5vZGUgb2YgYWxsVGV4dHNOb2Rlc0dlbmVyYXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0gdGFibGVIZWFkZXJGb250TmFtZTtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNBTVBMRVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiBoZWFkZXJUZXh0TWFyZ2luLngsIHRleHRIZWlnaHQgLSAyICogaGVhZGVyVGV4dE1hcmdpbi55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhYmxlSGVhZGVyVGV4dHNHcm91cC5uYW1lID0gXCJDb2x1bW4gSGVhZGVyc1wiO1xuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaCh0YWJsZUhlYWRlclRleHRzR3JvdXApO1xuICAgICAgICAvLyBGbG9hdGluZyBGaWx0ZXJzXG4gICAgICAgIGlmIChmbG9hdGluZ0ZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJzTm9kZSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJNYXJnaW4gPSB7IHg6IDUsIHk6IDUgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkZsb2F0aW5nRmlsdGVyc1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoICsgZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueDtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlciA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyRmlsbHMgPSBGaWdtYS5jbG9uZShmbG9hdGluZ0ZpbHRlci5maWxscyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IoXCIjRkZGRkZGXCIpO1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyRmlsbHNbMF0uY29sb3IuciA9IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvci5yIC8gMjU1O1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyRmlsbHNbMF0uY29sb3IuZyA9IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvci5nIC8gMjU1O1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyRmlsbHNbMF0uY29sb3IuYiA9IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvci5iIC8gMjU1O1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLmZpbGxzID0gZmxvYXRpbmdGaWx0ZXJGaWxscztcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci5uYW1lID0gXCJGbG9hdGluZyBGaWx0ZXIgUGxhY2Vob2xkZXJcIiArIChpICsgMSk7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiBmbG9hdGluZ0ZpbHRlck1hcmdpbi54LCBmbG9hdGluZ0ZpbHRlckhlaWdodCAtIDIgKiBmbG9hdGluZ0ZpbHRlck1hcmdpbi55KTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci54ID0gY29sdW1uRmxvYXRpbmdGaWx0ZXJzU3RhcnRpbmdQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci55ID1cbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlck1hcmdpbi55IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyc05vZGUucHVzaChmbG9hdGluZ0ZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YWJsZUZsb2F0aW5nRmlsdGVyc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2RlcyhmbG9hdGluZ0ZpbHRlcnNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgICAgIHRhYmxlRmxvYXRpbmdGaWx0ZXJzR3JvdXAubmFtZSA9IFwiRmxvYXRpbmcgRmlsdGVyc1wiO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJOb2RlLnB1c2godGFibGVGbG9hdGluZ0ZpbHRlcnNHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVIZWFkZXJOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgdGFibGVIZWFkZXJHcm91cC5uYW1lID0gXCJUYWJsZSBIZWFkZXJcIjtcbiAgICAgICAgcmV0dXJuIHRhYmxlSGVhZGVyR3JvdXA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2FkTm9kZUZvbnQoZm9udE5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnROYW1lKTtcbiAgICB9KTtcbn1cbiIsIi8qIEZpZ21hIEFQSSBGdW5jdGlvbiBBYnN0cmFjdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKiBDbG9uZSBmdW5jdGlvbiB0YWtlbiBmcm9tIEZpZ21hIFBsdWdpbiBBUEkgZXhhbXBsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcInVua25vd25cIjtcbn1cbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuLyogRXh0cmFjdCBJbnB1dHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==