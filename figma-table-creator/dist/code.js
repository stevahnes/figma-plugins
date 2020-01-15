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
    height: 500
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
    const lineStrokesColor = borderColor === ""
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
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0ZBQXFCO0FBQzNELHVDQUF1QyxvRkFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdURBQWdCO0FBQ25EO0FBQ0E7QUFDQSxpQ0FBaUMsaUZBQWtCO0FBQ25EO0FB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LHFEQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdURBQWdCLHNCQUFzQiwyREFBb0I7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFnQixrQkFBa0IsMkRBQW9CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDak9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IHsgZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kLCBnZW5lcmF0ZUJvcmRlcnMsIGdlbmVyYXRlVGFibGVUZXh0cywgZ2VuZXJhdGVUYWJsZUhlYWRlciB9IGZyb20gXCIuL2dlbmVyYXRvcnMvZ2VuZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmNvbnN0IHNob3dVSU9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDUwMFxufTtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXywgc2hvd1VJT3B0aW9ucyk7XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIHByb2Nlc3NNZXNzYWdlKG1zZyk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJjcmVhdGUtdGFibGVcIikge1xuICAgICAgICAvKiBHZW5lcmF0ZSBCYWNrZ3JvdW5kICovXG4gICAgICAgIGNvbnN0IG9kZFJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIk9kZFwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBldmVuUm93QmFja2dyb3VuZEdyb3VwID0gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKFwiRXZlblwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtcbiAgICAgICAgICAgIG9kZFJvd0JhY2tncm91bmRHcm91cCxcbiAgICAgICAgICAgIGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IFwiUm93IEJhY2tncm91bmRcIjtcbiAgICAgICAgLyogR2VuZXJhdGUgVGV4dHMgKi9cbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IGdlbmVyYXRlVGFibGVUZXh0cyhtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgLyogR2VuZXJhdGUgSGVhZGVycyAqL1xuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gZ2VuZXJhdGVUYWJsZUhlYWRlcihtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgbWVzc2FnZS5mbG9hdGluZ0ZpbHRlciwgbWVzc2FnZS5mbG9hdGluZ0ZpbHRlckhlaWdodCwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgLyogR2VuZXJhdGUgQm9yZGVycyAqL1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJWZXJ0aWNhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCBtZXNzYWdlLmJvcmRlckNvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbExpbmVzR3JvdXAgPSBnZW5lcmF0ZUJvcmRlcnMoXCJIb3Jpem9udGFsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuYm9yZGVyQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBib3JkZXJMaW5lc05vZGUgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbExpbmVzR3JvdXAsXG4gICAgICAgICAgICBob3Jpem9udGFsTGluZXNHcm91cFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBib3JkZXJMaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhib3JkZXJMaW5lc05vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgYm9yZGVyTGluZXNHcm91cC5uYW1lID0gXCJCb3JkZXJzXCI7XG4gICAgICAgIC8qIFNvcnQgR3JvdXAgTm9kZXMgKi9cbiAgICAgICAgY29uc3QgdGFibGVHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoW3Jvd0JhY2tncm91bmRHcm91cF0sIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChjb2x1bW5UZXh0c0dyb3VwKTtcbiAgICAgICAgaWYgKHRhYmxlSGVhZGVyR3JvdXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChib3JkZXJMaW5lc0dyb3VwKTtcbiAgICAgICAgdGFibGVHcm91cC5uYW1lID0gXCJUYWJsZVwiO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbdGFibGVHcm91cF07XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdGFibGVHcm91cF0pO1xuICAgICAgICAvKiBOb3RpZnkgU3VjY2VzcyB0byBVc2VyICovXG4gICAgICAgIGZpZ21hLm5vdGlmeShcIlRhYmxlIGNyZWF0ZWQhXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuLyogRGVmYXVsdHMvQ29uc3RhbnRzICovXG5jb25zdCBkZWZhdWx0Qm9yZGVyQ29sb3IgPSBcIiNDN0M3QzdcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJvcmRlcnMoYm9yZGVyVHlwZSwgdmlzaWJsZSA9IHRydWUsIGJvcmRlckNvdW50LCBib3JkZXJTcGFjaW5nLCBib3JkZXJXaWR0aE11bHRpcGxpZXIsIGJvcmRlcldpZHRoSW5kaXZpZHVhbCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIGJvcmRlckNvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IGxpbmVzTm9kZSA9IFtdO1xuICAgIGxldCBib3JkZXJXaWR0aDtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoID1cbiAgICAgICAgICAgICAgICAoYm9yZGVyV2lkdGhNdWx0aXBsaWVyIC0gMSkgKiBib3JkZXJXaWR0aEluZGl2aWR1YWwgKyBoZWFkZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib3JkZXJDb3VudCAtPSAxO1xuICAgICAgICAgICAgYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aE11bHRpcGxpZXIgKiBib3JkZXJXaWR0aEluZGl2aWR1YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGhNdWx0aXBsaWVyICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsO1xuICAgIH1cbiAgICBjb25zdCBsaW5lU3Ryb2tlc0NvbG9yID0gYm9yZGVyQ29sb3IgPT09IFwiXCJcbiAgICAgICAgPyBGaWdtYS5oZXhUb1JnYihkZWZhdWx0Qm9yZGVyQ29sb3IpXG4gICAgICAgIDogRmlnbWEuaGV4VG9SZ2IoYm9yZGVyQ29sb3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9yZGVyQ291bnQgKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgY29uc3QgbGluZVN0cm9rZXMgPSBGaWdtYS5jbG9uZShsaW5lLnN0cm9rZXMpO1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5yID0gbGluZVN0cm9rZXNDb2xvci5yIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5nID0gbGluZVN0cm9rZXNDb2xvci5nIC8gMjU1O1xuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5iID0gbGluZVN0cm9rZXNDb2xvci5iIC8gMjU1O1xuICAgICAgICBsaW5lLnN0cm9rZXMgPSBsaW5lU3Ryb2tlcztcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xuICAgICAgICAgICAgbGluZS5yb3RhdGlvbiA9IDkwO1xuICAgICAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGluZS55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGkgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcbiAgICAgICAgbGluZXNOb2RlLnB1c2gobGluZSk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSB0b3AgbGluZSBpZiBoZWFkZXIgaXMgaW5jbHVkZWRcbiAgICBpZiAoaGVhZGVyICYmIGJvcmRlclR5cGUgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgIGNvbnN0IGxpbmVTdHJva2VzID0gRmlnbWEuY2xvbmUobGluZS5zdHJva2VzKTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuciA9IGxpbmVTdHJva2VzQ29sb3IuciAvIDI1NTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuZyA9IGxpbmVTdHJva2VzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuYiA9IGxpbmVTdHJva2VzQ29sb3IuYiAvIDI1NTtcbiAgICAgICAgbGluZS5zdHJva2VzID0gbGluZVN0cm9rZXM7XG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcbiAgICAgICAgbGluZS55ID1cbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSBib3JkZXJDb3VudCAqIGJvcmRlclNwYWNpbmc7XG4gICAgICAgIGxpbmVzTm9kZS5wdXNoKGxpbmUpO1xuICAgIH1cbiAgICBjb25zdCBsaW5lc0dyb3VwID0gRmlnbWEuZ3JvdXBOb2RlcyhsaW5lc05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBsaW5lc0dyb3VwLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgbGluZXNHcm91cC5uYW1lID0gYm9yZGVyVHlwZTtcbiAgICByZXR1cm4gbGluZXNHcm91cDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd0JhY2tncm91bmQocm93QmFja2dyb3VuZFR5cGUsIHJvd0NvdW50LCByb3dIZWlnaHQsIHJvd1dpZHRoLCBhbHRlcm5hdGVCYWNrZ3JvdW5kcywgaGVhZGVyLCBwcmltYXJ5QmFja2dyb3VuZENvbG9yLCBzdHJpcGVkQmFja2dyb3VuZENvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJvd0JhY2tncm91bmROb2RlID0gW107XG4gICAgY29uc3Qgcm93U3BhY2luZyA9IHJvd0hlaWdodCAqIDI7XG4gICAgbGV0IGNvbXB1dGVkUm93Q291bnQgPSAwO1xuICAgIGxldCBzdGFydGluZ1BvaW50ID0gMDtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIHJvd0NvdW50IC09IDE7XG4gICAgfVxuICAgIGlmIChyb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJPZGRcIikge1xuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5yb3VuZChyb3dDb3VudCAvIDIpO1xuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd0hlaWdodDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXB1dGVkUm93Q291bnQgPSBNYXRoLmZsb29yKHJvd0NvdW50IC8gMik7XG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93U3BhY2luZztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlZFJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHMgPSBGaWdtYS5jbG9uZShiYWNrZ3JvdW5kLmZpbGxzKTtcbiAgICAgICAgbGV0IGJhY2tncm91bmRGaWxsc0NvbG9yO1xuICAgICAgICBpZiAoYWx0ZXJuYXRlQmFja2dyb3VuZHMpIHtcbiAgICAgICAgICAgIGlmICgocm93Q291bnQgJSAyID09PSAwICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSB8fFxuICAgICAgICAgICAgICAgIChyb3dDb3VudCAlIDIgIT09IDAgJiYgcm93QmFja2dyb3VuZFR5cGUgPT09IFwiRXZlblwiKSkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2Ioc3RyaXBlZEJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihwcmltYXJ5QmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IGJhY2tncm91bmRGaWxsc0NvbG9yLnIgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5iIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gYmFja2dyb3VuZEZpbGxzO1xuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgcm93SGVpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZC55ID0gc3RhcnRpbmdQb2ludCAtIGkgKiByb3dTcGFjaW5nO1xuICAgICAgICByb3dCYWNrZ3JvdW5kTm9kZS5wdXNoKGJhY2tncm91bmQpO1xuICAgIH1cbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHJvd0JhY2tncm91bmROb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICByb3dCYWNrZ3JvdW5kR3JvdXAubmFtZSA9IHJvd0JhY2tncm91bmRUeXBlO1xuICAgIHJldHVybiByb3dCYWNrZ3JvdW5kR3JvdXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZVRleHRzKHJvd0NvdW50LCByb3dIZWlnaHQsIGNvbHVtbkNvdW50LCBjb2x1bW5XaWR0aCwgaGVhZGVyLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHRhYmxlVGV4dHNOb2RlID0gW107XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICByb3dDb3VudCAtPSAxO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0TWFyZ2luID0geyB4OiA1LCB5OiA1IH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzTm9kZSA9IFtdO1xuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoICsgdGV4dE1hcmdpbi54O1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICBsb2FkTm9kZUZvbnQodGV4dC5mb250TmFtZSkudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSBcIlJvdyBcIiArIChyb3dDb3VudCAtIGopO1xuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU2FtcGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoY29sdW1uV2lkdGggLSAxIC0gMiAqIHRleHRNYXJnaW4ueCwgcm93SGVpZ2h0IC0gMiAqIHRleHRNYXJnaW4ueSk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgKyB0ZXh0TWFyZ2luLnkgLSAoaiArIDEpICogcm93SGVpZ2h0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb2x1bW5UZXh0c05vZGUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhjb2x1bW5UZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgICAgICBjb2x1bW5UZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBcIiArIChpICsgMSk7XG4gICAgICAgIHRhYmxlVGV4dHNOb2RlLnB1c2goY29sdW1uVGV4dHNHcm91cCk7XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVUZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgIHRhYmxlVGV4dHNHcm91cC5uYW1lID0gXCJUYWJsZSBUZXh0c1wiO1xuICAgIHJldHVybiB0YWJsZVRleHRzR3JvdXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWRlcihyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgaGVhZGVySGVpZ2h0LCBmbG9hdGluZ0ZpbHRlciwgZmxvYXRpbmdGaWx0ZXJIZWlnaHQsIHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IsIHJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICAvLyBCYWNrZ3JvdW5kXG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyTm9kZSA9IFtdO1xuICAgICAgICBjb25zdCByb3dXaWR0aCA9IGNvbHVtbldpZHRoICogY29sdW1uQ291bnQ7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZpbGxzID0gRmlnbWEuY2xvbmUoYmFja2dyb3VuZC5maWxscyk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IocHJpbWFyeUJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuciAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmcgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5nIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmIgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XG4gICAgICAgIGJhY2tncm91bmQucmVzaXplKHJvd1dpZHRoLCBoZWFkZXJIZWlnaHQpO1xuICAgICAgICBiYWNrZ3JvdW5kLnkgPVxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLm5hbWUgPSBcIkhlYWRlciBCYWNrZ3JvdW5kXCI7XG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKGJhY2tncm91bmQpO1xuICAgICAgICAvLyBUZXh0c1xuICAgICAgICBjb25zdCB0YWJsZUhlYWRlclRleHRzTm9kZSA9IFtdO1xuICAgICAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gZmxvYXRpbmdGaWx0ZXJcbiAgICAgICAgICAgID8gaGVhZGVySGVpZ2h0IC0gZmxvYXRpbmdGaWx0ZXJIZWlnaHRcbiAgICAgICAgICAgIDogaGVhZGVySGVpZ2h0O1xuICAgICAgICBjb25zdCBoZWFkZXJUZXh0TWFyZ2luID0geyB4OiA1LCB5OiA1IH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aCArIGhlYWRlclRleHRNYXJnaW4ueDtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBmb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfTtcbiAgICAgICAgICAgIGxvYWROb2RlRm9udChmb250TmFtZSkudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSBcIkNvbHVtbiBIZWFkZXIgXCIgKyAoaSArIDEpO1xuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU0FNUExFXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IGZvbnROYW1lO1xuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiBoZWFkZXJUZXh0TWFyZ2luLngsIHRleHRIZWlnaHQgLSAyICogaGVhZGVyVGV4dE1hcmdpbi55KTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb247XG4gICAgICAgICAgICAgICAgdGV4dC55ID1cbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGV4dE1hcmdpbi55IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclRleHRzTm9kZS5wdXNoKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVIZWFkZXJUZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgICAgICB0YWJsZUhlYWRlclRleHRzR3JvdXAubmFtZSA9IFwiQ29sdW1uIEhlYWRlcnNcIjtcbiAgICAgICAgdGFibGVIZWFkZXJOb2RlLnB1c2godGFibGVIZWFkZXJUZXh0c0dyb3VwKTtcbiAgICAgICAgLy8gRmxvYXRpbmcgRmlsdGVyc1xuICAgICAgICBpZiAoZmxvYXRpbmdGaWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyc05vZGUgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyTWFyZ2luID0geyB4OiA1LCB5OiA1IH07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5GbG9hdGluZ0ZpbHRlcnNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aCArIGZsb2F0aW5nRmlsdGVyTWFyZ2luLng7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXIgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckZpbGxzID0gRmlnbWEuY2xvbmUoZmxvYXRpbmdGaWx0ZXIuZmlsbHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckZpbGxzWzBdLmNvbG9yLnIgPSBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IuciAvIDI1NTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckZpbGxzWzBdLmNvbG9yLmcgPSBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckZpbGxzWzBdLmNvbG9yLmIgPSBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IuYiAvIDI1NTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci5maWxscyA9IGZsb2F0aW5nRmlsdGVyRmlsbHM7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIubmFtZSA9IFwiRmxvYXRpbmcgRmlsdGVyIFBsYWNlaG9sZGVyXCIgKyAoaSArIDEpO1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnJlc2l6ZShjb2x1bW5XaWR0aCAtIDEgLSAyICogZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueCwgZmxvYXRpbmdGaWx0ZXJIZWlnaHQgLSAyICogZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueSk7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIueCA9IGNvbHVtbkZsb2F0aW5nRmlsdGVyc1N0YXJ0aW5nUG9zaXRpb247XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIueSA9XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlcnNOb2RlLnB1c2goZmxvYXRpbmdGaWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGFibGVGbG9hdGluZ0ZpbHRlcnNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoZmxvYXRpbmdGaWx0ZXJzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgICAgICAgICB0YWJsZUZsb2F0aW5nRmlsdGVyc0dyb3VwLm5hbWUgPSBcIkZsb2F0aW5nIEZpbHRlcnNcIjtcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKHRhYmxlRmxvYXRpbmdGaWx0ZXJzR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgICAgIHRhYmxlSGVhZGVyR3JvdXAubmFtZSA9IFwiVGFibGUgSGVhZGVyXCI7XG4gICAgICAgIHJldHVybiB0YWJsZUhlYWRlckdyb3VwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZE5vZGVGb250KGZvbnROYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSk7XG4gICAgfSk7XG59XG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gZmlnbWEuZ3JvdXAobm9kZXMsIHBhcmVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0Q3VycmVudFBhZ2UoKS5zZWxlY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlO1xuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKSB7XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xuICAgIHJldHVybiBudWxsO1xufVxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBjbG9uZSh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XG59XG4vKiBIRVggdG8gUkdCIENvbnZlcnNpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICAgICAgICB9XG4gICAgICAgIDogbnVsbDtcbn1cbi8qIEV4dHJhY3QgSW5wdXRzICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoaHRtbFRhZ0lkLCBpbnB1dFR5cGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=