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
    console.log(msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvRkFBcUI7QUFDM0QsdUNBQXVDLG9GQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBZ0I7QUFDbkQ7QUFDQTtBQUNBLGlDQUFpQyxpRkFBa0I7QUFD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QyxrREFBVztBQUN2RCxpREFBaUQscURBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1REFBZ0Isc0JBQXNCLDJEQUFvQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWdCLGtCQUFrQiwyREFBb0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNwT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJvd0JhY2tncm91bmQsIGdlbmVyYXRlQm9yZGVycywgZ2VuZXJhdGVUYWJsZVRleHRzLCBnZW5lcmF0ZVRhYmxlSGVhZGVyIH0gZnJvbSBcIi4vZ2VuZXJhdG9ycy9nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XHJcbmNvbnN0IHNob3dVSU9wdGlvbnMgPSB7XHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgaGVpZ2h0OiA1MDBcclxufTtcclxuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHNob3dVSU9wdGlvbnMpO1xyXG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcclxuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXHJcbi8vIHBvc3RlZCBtZXNzYWdlLlxyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG59O1xyXG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcImNyZWF0ZS10YWJsZVwiKSB7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgQmFja2dyb3VuZCAqL1xyXG4gICAgICAgIGNvbnN0IG9kZFJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIk9kZFwiLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbldpZHRoICogbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmFsdGVybmF0ZUJhY2tncm91bmRzLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5wcmltYXJ5YmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW5Sb3dCYWNrZ3JvdW5kR3JvdXAgPSBnZW5lcmF0ZVJvd0JhY2tncm91bmQoXCJFdmVuXCIsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1uV2lkdGggKiBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuYWx0ZXJuYXRlQmFja2dyb3VuZHMsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnByaW1hcnliYWNrZ3JvdW5kQ29sb3IsIG1lc3NhZ2Uuc3RyaXBlZGJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXHJcbiAgICAgICAgICAgIG9kZFJvd0JhY2tncm91bmRHcm91cCxcclxuICAgICAgICAgICAgZXZlblJvd0JhY2tncm91bmRHcm91cFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHJvd0JhY2tncm91bmRHcm91cC5uYW1lID0gXCJSb3cgQmFja2dyb3VuZFwiO1xyXG4gICAgICAgIC8qIEdlbmVyYXRlIFRleHRzICovXHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IGdlbmVyYXRlVGFibGVUZXh0cyhtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAvKiBHZW5lcmF0ZSBIZWFkZXJzICovXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IGdlbmVyYXRlVGFibGVIZWFkZXIobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXIsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXJIZWlnaHQsIG1lc3NhZ2UucHJpbWFyeWJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XHJcbiAgICAgICAgLyogR2VuZXJhdGUgQm9yZGVycyAqL1xyXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZXNHcm91cCA9IGdlbmVyYXRlQm9yZGVycyhcIlZlcnRpY2FsXCIsIG1lc3NhZ2UuYm9yZGVycywgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLnJvd3MsIG1lc3NhZ2Uucm93SGVpZ2h0LCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuYm9yZGVyQ29sb3IsIG1lc3NhZ2UucmVmZXJlbmNlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiSG9yaXpvbnRhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCBtZXNzYWdlLmJvcmRlckNvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICBjb25zdCBib3JkZXJMaW5lc05vZGUgPSBbXHJcbiAgICAgICAgICAgIHZlcnRpY2FsTGluZXNHcm91cCxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmVzR3JvdXBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckxpbmVzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGJvcmRlckxpbmVzTm9kZSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGJvcmRlckxpbmVzR3JvdXAubmFtZSA9IFwiQm9yZGVyc1wiO1xyXG4gICAgICAgIC8qIFNvcnQgR3JvdXAgTm9kZXMgKi9cclxuICAgICAgICBjb25zdCB0YWJsZUdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhbcm93QmFja2dyb3VuZEdyb3VwXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoY29sdW1uVGV4dHNHcm91cCk7XHJcbiAgICAgICAgaWYgKHRhYmxlSGVhZGVyR3JvdXAgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlckdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVHcm91cC5hcHBlbmRDaGlsZChib3JkZXJMaW5lc0dyb3VwKTtcclxuICAgICAgICB0YWJsZUdyb3VwLm5hbWUgPSBcIlRhYmxlXCI7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3RhYmxlR3JvdXBdO1xyXG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdGFibGVHcm91cF0pO1xyXG4gICAgICAgIC8qIE5vdGlmeSBTdWNjZXNzIHRvIFVzZXIgKi9cclxuICAgICAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIVwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCAqIGFzIEZpZ21hIGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG4vKiBEZWZhdWx0cy9Db25zdGFudHMgKi9cclxuY29uc3QgZGVmYXVsdEJvcmRlckNvbG9yID0gXCIjQzdDN0M3XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUJvcmRlcnMoYm9yZGVyVHlwZSwgdmlzaWJsZSA9IHRydWUsIGJvcmRlckNvdW50LCBib3JkZXJTcGFjaW5nLCBib3JkZXJXaWR0aE11bHRpcGxpZXIsIGJvcmRlcldpZHRoSW5kaXZpZHVhbCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIGJvcmRlckNvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgbGluZXNOb2RlID0gW107XHJcbiAgICBsZXQgYm9yZGVyV2lkdGg7XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgaWYgKGJvcmRlclR5cGUgPT09IFwiVmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9XHJcbiAgICAgICAgICAgICAgICAoYm9yZGVyV2lkdGhNdWx0aXBsaWVyIC0gMSkgKiBib3JkZXJXaWR0aEluZGl2aWR1YWwgKyBoZWFkZXJIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBib3JkZXJDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpbmVTdHJva2VzQ29sb3IgPSBib3JkZXJDb2xvciA9PT0gXCJcIlxyXG4gICAgICAgID8gRmlnbWEuaGV4VG9SZ2IoZGVmYXVsdEJvcmRlckNvbG9yKVxyXG4gICAgICAgIDogRmlnbWEuaGV4VG9SZ2IoYm9yZGVyQ29sb3IpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3JkZXJDb3VudCArIDE7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XHJcbiAgICAgICAgY29uc3QgbGluZVN0cm9rZXMgPSBGaWdtYS5jbG9uZShsaW5lLnN0cm9rZXMpO1xyXG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLnIgPSBsaW5lU3Ryb2tlc0NvbG9yLnIgLyAyNTU7XHJcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuZyA9IGxpbmVTdHJva2VzQ29sb3IuZyAvIDI1NTtcclxuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5iID0gbGluZVN0cm9rZXNDb2xvci5iIC8gMjU1O1xyXG4gICAgICAgIGxpbmUuc3Ryb2tlcyA9IGxpbmVTdHJva2VzO1xyXG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGluZS5yb3RhdGlvbiA9IDkwO1xyXG4gICAgICAgICAgICBsaW5lLnggPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGJvcmRlclNwYWNpbmc7XHJcbiAgICAgICAgICAgIGxpbmUueSA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5lLnggPSByZWZlcmVuY2VDb29yZGluYXRlcy54O1xyXG4gICAgICAgICAgICBsaW5lLnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaSAqIGJvcmRlclNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmUucmVzaXplKGJvcmRlcldpZHRoLCAwKTtcclxuICAgICAgICBsaW5lc05vZGUucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSB0b3AgbGluZSBpZiBoZWFkZXIgaXMgaW5jbHVkZWRcclxuICAgIGlmIChoZWFkZXIgJiYgYm9yZGVyVHlwZSA9PT0gXCJIb3Jpem9udGFsXCIpIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVTdHJva2VzID0gRmlnbWEuY2xvbmUobGluZS5zdHJva2VzKTtcclxuICAgICAgICBsaW5lU3Ryb2tlc1swXS5jb2xvci5yID0gbGluZVN0cm9rZXNDb2xvci5yIC8gMjU1O1xyXG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLmcgPSBsaW5lU3Ryb2tlc0NvbG9yLmcgLyAyNTU7XHJcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuYiA9IGxpbmVTdHJva2VzQ29sb3IuYiAvIDI1NTtcclxuICAgICAgICBsaW5lLnN0cm9rZXMgPSBsaW5lU3Ryb2tlcztcclxuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XHJcbiAgICAgICAgbGluZS54ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueDtcclxuICAgICAgICBsaW5lLnkgPVxyXG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gYm9yZGVyQ291bnQgKiBib3JkZXJTcGFjaW5nO1xyXG4gICAgICAgIGxpbmVzTm9kZS5wdXNoKGxpbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGluZXNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMobGluZXNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgIGxpbmVzR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZXNHcm91cC5uYW1lID0gYm9yZGVyVHlwZTtcclxuICAgIHJldHVybiBsaW5lc0dyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd0JhY2tncm91bmQocm93QmFja2dyb3VuZFR5cGUsIHJvd0NvdW50LCByb3dIZWlnaHQsIHJvd1dpZHRoLCBhbHRlcm5hdGVCYWNrZ3JvdW5kcywgaGVhZGVyLCBwcmltYXJ5QmFja2dyb3VuZENvbG9yLCBzdHJpcGVkQmFja2dyb3VuZENvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xyXG4gICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXTtcclxuICAgIGNvbnN0IHJvd1NwYWNpbmcgPSByb3dIZWlnaHQgKiAyO1xyXG4gICAgbGV0IGNvbXB1dGVkUm93Q291bnQgPSAwO1xyXG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHJvd0NvdW50IC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHtcclxuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5yb3VuZChyb3dDb3VudCAvIDIpO1xyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gcm93SGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGguZmxvb3Iocm93Q291bnQgLyAyKTtcclxuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd1NwYWNpbmc7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkUm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHMgPSBGaWdtYS5jbG9uZShiYWNrZ3JvdW5kLmZpbGxzKTtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZEZpbGxzQ29sb3I7XHJcbiAgICAgICAgaWYgKGFsdGVybmF0ZUJhY2tncm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmICgocm93Q291bnQgJSAyID09PSAwICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIk9kZFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJvd0NvdW50ICUgMiAhPT0gMCAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJFdmVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHN0cmlwZWRCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihwcmltYXJ5QmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihwcmltYXJ5QmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5yIC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuZyAvIDI1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuYiA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmIgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcclxuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgcm93SGVpZ2h0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLnkgPSBzdGFydGluZ1BvaW50IC0gaSAqIHJvd1NwYWNpbmc7XHJcbiAgICAgICAgcm93QmFja2dyb3VuZE5vZGUucHVzaChiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSByb3dCYWNrZ3JvdW5kVHlwZTtcclxuICAgIHJldHVybiByb3dCYWNrZ3JvdW5kR3JvdXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVUZXh0cyhyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IHRhYmxlVGV4dHNOb2RlID0gW107XHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcm93Q291bnQgLT0gMTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRNYXJnaW4gPSB7IHg6IDUsIHk6IDUgfTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzTm9kZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyB0ZXh0TWFyZ2luLng7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIGxvYWROb2RlRm9udCh0ZXh0LmZvbnROYW1lKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJSb3cgXCIgKyAocm93Q291bnQgLSBqKTtcclxuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU2FtcGxlXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcclxuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiB0ZXh0TWFyZ2luLngsIHJvd0hlaWdodCAtIDIgKiB0ZXh0TWFyZ2luLnkpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC55ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSArIHRleHRNYXJnaW4ueSAtIChqICsgMSkgKiByb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2x1bW5UZXh0c05vZGUucHVzaCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoY29sdW1uVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgICAgICBjb2x1bW5UZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBcIiArIChpICsgMSk7XHJcbiAgICAgICAgdGFibGVUZXh0c05vZGUucHVzaChjb2x1bW5UZXh0c0dyb3VwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYmxlVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVUZXh0c05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xyXG4gICAgdGFibGVUZXh0c0dyb3VwLm5hbWUgPSBcIlRhYmxlIFRleHRzXCI7XHJcbiAgICByZXR1cm4gdGFibGVUZXh0c0dyb3VwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZGVyKHJvd0NvdW50LCByb3dIZWlnaHQsIGNvbHVtbkNvdW50LCBjb2x1bW5XaWR0aCwgaGVhZGVyLCBoZWFkZXJIZWlnaHQsIGZsb2F0aW5nRmlsdGVyLCBmbG9hdGluZ0ZpbHRlckhlaWdodCwgcHJpbWFyeUJhY2tncm91bmRDb2xvciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAvLyBCYWNrZ3JvdW5kXHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJOb2RlID0gW107XHJcbiAgICAgICAgY29uc3Qgcm93V2lkdGggPSBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHMgPSBGaWdtYS5jbG9uZShiYWNrZ3JvdW5kLmZpbGxzKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5yID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuciAvIDI1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuZyA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmcgLyAyNTU7XHJcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5iIC8gMjU1O1xyXG4gICAgICAgIGJhY2tncm91bmQuZmlsbHMgPSBiYWNrZ3JvdW5kRmlsbHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIGhlYWRlckhlaWdodCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC55ID1cclxuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIGhlYWRlckhlaWdodCAtIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQubmFtZSA9IFwiSGVhZGVyIEJhY2tncm91bmRcIjtcclxuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaChiYWNrZ3JvdW5kKTtcclxuICAgICAgICAvLyBUZXh0c1xyXG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyVGV4dHNOb2RlID0gW107XHJcbiAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IGZsb2F0aW5nRmlsdGVyXHJcbiAgICAgICAgICAgID8gaGVhZGVySGVpZ2h0IC0gZmxvYXRpbmdGaWx0ZXJIZWlnaHRcclxuICAgICAgICAgICAgOiBoZWFkZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dE1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5UZXh0c1N0YXJ0aW5nUG9zaXRpb24gPSByZWZlcmVuY2VDb29yZGluYXRlcy54ICsgaSAqIGNvbHVtbldpZHRoICsgaGVhZGVyVGV4dE1hcmdpbi54O1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfTtcclxuICAgICAgICAgICAgbG9hZE5vZGVGb250KGZvbnROYW1lKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJDb2x1bW4gSGVhZGVyIFwiICsgKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiU0FNUExFXCI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcclxuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSBmb250TmFtZTtcclxuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiBoZWFkZXJUZXh0TWFyZ2luLngsIHRleHRIZWlnaHQgLSAyICogaGVhZGVyVGV4dE1hcmdpbi55KTtcclxuICAgICAgICAgICAgICAgIHRleHQueCA9IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRleHQueSA9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHRNYXJnaW4ueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyb3dDb3VudCAtIDEpICogcm93SGVpZ2h0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c0dyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlclRleHRzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgdGFibGVIZWFkZXJUZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBIZWFkZXJzXCI7XHJcbiAgICAgICAgdGFibGVIZWFkZXJOb2RlLnB1c2godGFibGVIZWFkZXJUZXh0c0dyb3VwKTtcclxuICAgICAgICAvLyBGbG9hdGluZyBGaWx0ZXJzXHJcbiAgICAgICAgaWYgKGZsb2F0aW5nRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyc05vZGUgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJNYXJnaW4gPSB7IHg6IDUsIHk6IDUgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5GbG9hdGluZ0ZpbHRlcnNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aCArIGZsb2F0aW5nRmlsdGVyTWFyZ2luLng7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlciA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJGaWxscyA9IEZpZ21hLmNsb25lKGZsb2F0aW5nRmlsdGVyLmZpbGxzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyRmlsbHNbMF0uY29sb3IuciA9IGZsb2F0aW5nRmlsdGVyRmlsbHNDb2xvci5yIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJGaWxsc1swXS5jb2xvci5nID0gZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yLmcgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckZpbGxzWzBdLmNvbG9yLmIgPSBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IuYiAvIDI1NTtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLmZpbGxzID0gZmxvYXRpbmdGaWx0ZXJGaWxscztcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLm5hbWUgPSBcIkZsb2F0aW5nIEZpbHRlciBQbGFjZWhvbGRlclwiICsgKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnJlc2l6ZShjb2x1bW5XaWR0aCAtIDEgLSAyICogZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueCwgZmxvYXRpbmdGaWx0ZXJIZWlnaHQgLSAyICogZmxvYXRpbmdGaWx0ZXJNYXJnaW4ueSk7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci54ID0gY29sdW1uRmxvYXRpbmdGaWx0ZXJzU3RhcnRpbmdQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnkgPVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyTWFyZ2luLnkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyc05vZGUucHVzaChmbG9hdGluZ0ZpbHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFibGVGbG9hdGluZ0ZpbHRlcnNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoZmxvYXRpbmdGaWx0ZXJzTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XHJcbiAgICAgICAgICAgIHRhYmxlRmxvYXRpbmdGaWx0ZXJzR3JvdXAubmFtZSA9IFwiRmxvYXRpbmcgRmlsdGVyc1wiO1xyXG4gICAgICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaCh0YWJsZUZsb2F0aW5nRmlsdGVyc0dyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXModGFibGVIZWFkZXJOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcclxuICAgICAgICB0YWJsZUhlYWRlckdyb3VwLm5hbWUgPSBcIlRhYmxlIEhlYWRlclwiO1xyXG4gICAgICAgIHJldHVybiB0YWJsZUhlYWRlckdyb3VwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZE5vZGVGb250KGZvbnROYW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogRmlnbWEgQVBJIEZ1bmN0aW9uIEFic3RyYWN0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcclxuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcclxuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcclxuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbi8qIENsb25lIGZ1bmN0aW9uIHRha2VuIGZyb20gRmlnbWEgUGx1Z2luIEFQSSBleGFtcGxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcclxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IFwidW5rbm93blwiO1xyXG59XHJcbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBudWxsO1xyXG59XHJcbi8qIEV4dHJhY3QgSW5wdXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sVGFnSWQpO1xyXG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=