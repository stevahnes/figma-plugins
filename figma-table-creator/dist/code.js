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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBMEg7QUFDbkY7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvRkFBcUI7QUFDM0QsdUNBQXVDLG9GQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBZ0I7QUFDbkQ7QUFDQTtBQUNBLGlDQUFpQyxpRkFBa0I7QUFD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REFBaUQscURBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1REFBZ0Isc0JBQXNCLDJEQUFvQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWdCLGtCQUFrQiwyREFBb0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNqT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJvd0JhY2tncm91bmQsIGdlbmVyYXRlQm9yZGVycywgZ2VuZXJhdGVUYWJsZVRleHRzLCBnZW5lcmF0ZVRhYmxlSGVhZGVyIH0gZnJvbSBcIi4vZ2VuZXJhdG9ycy9nZW5lcmF0b3JzXCI7XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuY29uc3Qgc2hvd1VJT3B0aW9ucyA9IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogNTAwXG59O1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCBzaG93VUlPcHRpb25zKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBwcm9jZXNzTWVzc2FnZShtc2cpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiY3JlYXRlLXRhYmxlXCIpIHtcbiAgICAgICAgLyogR2VuZXJhdGUgQmFja2dyb3VuZCAqL1xuICAgICAgICBjb25zdCBvZGRSb3dCYWNrZ3JvdW5kR3JvdXAgPSBnZW5lcmF0ZVJvd0JhY2tncm91bmQoXCJPZGRcIiwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5XaWR0aCAqIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5hbHRlcm5hdGVCYWNrZ3JvdW5kcywgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UucHJpbWFyeWJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5zdHJpcGVkYmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgZXZlblJvd0JhY2tncm91bmRHcm91cCA9IGdlbmVyYXRlUm93QmFja2dyb3VuZChcIkV2ZW5cIiwgbWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5XaWR0aCAqIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5hbHRlcm5hdGVCYWNrZ3JvdW5kcywgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UucHJpbWFyeWJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5zdHJpcGVkYmFja2dyb3VuZENvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3Qgcm93QmFja2dyb3VuZE5vZGUgPSBbXG4gICAgICAgICAgICBvZGRSb3dCYWNrZ3JvdW5kR3JvdXAsXG4gICAgICAgICAgICBldmVuUm93QmFja2dyb3VuZEdyb3VwXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJvd0JhY2tncm91bmRHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMocm93QmFja2dyb3VuZE5vZGUsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSBcIlJvdyBCYWNrZ3JvdW5kXCI7XG4gICAgICAgIC8qIEdlbmVyYXRlIFRleHRzICovXG4gICAgICAgIGNvbnN0IGNvbHVtblRleHRzR3JvdXAgPSBnZW5lcmF0ZVRhYmxlVGV4dHMobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XG4gICAgICAgIC8qIEdlbmVyYXRlIEhlYWRlcnMgKi9cbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJHcm91cCA9IGdlbmVyYXRlVGFibGVIZWFkZXIobWVzc2FnZS5yb3dzLCBtZXNzYWdlLnJvd0hlaWdodCwgbWVzc2FnZS5jb2x1bW5zLCBtZXNzYWdlLmNvbHVtbldpZHRoLCBtZXNzYWdlLmhlYWRlciwgbWVzc2FnZS5oZWFkZXJIZWlnaHQsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXIsIG1lc3NhZ2UuZmxvYXRpbmdGaWx0ZXJIZWlnaHQsIG1lc3NhZ2UucHJpbWFyeWJhY2tncm91bmRDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XG4gICAgICAgIC8qIEdlbmVyYXRlIEJvcmRlcnMgKi9cbiAgICAgICAgY29uc3QgdmVydGljYWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiVmVydGljYWxcIiwgbWVzc2FnZS5ib3JkZXJzLCBtZXNzYWdlLmNvbHVtbnMsIG1lc3NhZ2UuY29sdW1uV2lkdGgsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuaGVhZGVyLCBtZXNzYWdlLmhlYWRlckhlaWdodCwgbWVzc2FnZS5ib3JkZXJDb2xvciwgbWVzc2FnZS5yZWZlcmVuY2VDb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxMaW5lc0dyb3VwID0gZ2VuZXJhdGVCb3JkZXJzKFwiSG9yaXpvbnRhbFwiLCBtZXNzYWdlLmJvcmRlcnMsIG1lc3NhZ2Uucm93cywgbWVzc2FnZS5yb3dIZWlnaHQsIG1lc3NhZ2UuY29sdW1ucywgbWVzc2FnZS5jb2x1bW5XaWR0aCwgbWVzc2FnZS5oZWFkZXIsIG1lc3NhZ2UuaGVhZGVySGVpZ2h0LCBtZXNzYWdlLmJvcmRlckNvbG9yLCBtZXNzYWdlLnJlZmVyZW5jZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNOb2RlID0gW1xuICAgICAgICAgICAgdmVydGljYWxMaW5lc0dyb3VwLFxuICAgICAgICAgICAgaG9yaXpvbnRhbExpbmVzR3JvdXBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgYm9yZGVyTGluZXNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoYm9yZGVyTGluZXNOb2RlLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIGJvcmRlckxpbmVzR3JvdXAubmFtZSA9IFwiQm9yZGVyc1wiO1xuICAgICAgICAvKiBTb3J0IEdyb3VwIE5vZGVzICovXG4gICAgICAgIGNvbnN0IHRhYmxlR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKFtyb3dCYWNrZ3JvdW5kR3JvdXBdLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoY29sdW1uVGV4dHNHcm91cCk7XG4gICAgICAgIGlmICh0YWJsZUhlYWRlckdyb3VwICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YWJsZUdyb3VwLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlR3JvdXAuYXBwZW5kQ2hpbGQoYm9yZGVyTGluZXNHcm91cCk7XG4gICAgICAgIHRhYmxlR3JvdXAubmFtZSA9IFwiVGFibGVcIjtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3RhYmxlR3JvdXBdO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RhYmxlR3JvdXBdKTtcbiAgICAgICAgLyogTm90aWZ5IFN1Y2Nlc3MgdG8gVXNlciAqL1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJUYWJsZSBjcmVhdGVkIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbi8qIERlZmF1bHRzL0NvbnN0YW50cyAqL1xuY29uc3QgZGVmYXVsdEJvcmRlckNvbG9yID0gXCIjQzdDN0M3XCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVCb3JkZXJzKGJvcmRlclR5cGUsIHZpc2libGUgPSB0cnVlLCBib3JkZXJDb3VudCwgYm9yZGVyU3BhY2luZywgYm9yZGVyV2lkdGhNdWx0aXBsaWVyLCBib3JkZXJXaWR0aEluZGl2aWR1YWwsIGhlYWRlciwgaGVhZGVySGVpZ2h0LCBib3JkZXJDb2xvciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBsaW5lc05vZGUgPSBbXTtcbiAgICBsZXQgYm9yZGVyV2lkdGg7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICBpZiAoYm9yZGVyVHlwZSA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9XG4gICAgICAgICAgICAgICAgKGJvcmRlcldpZHRoTXVsdGlwbGllciAtIDEpICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsICsgaGVhZGVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9yZGVyQ291bnQgLT0gMTtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGhNdWx0aXBsaWVyICogYm9yZGVyV2lkdGhJbmRpdmlkdWFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoTXVsdGlwbGllciAqIGJvcmRlcldpZHRoSW5kaXZpZHVhbDtcbiAgICB9XG4gICAgY29uc3QgbGluZVN0cm9rZXNDb2xvciA9IGJvcmRlckNvbG9yID09PSBcIlwiXG4gICAgICAgID8gRmlnbWEuaGV4VG9SZ2IoZGVmYXVsdEJvcmRlckNvbG9yKVxuICAgICAgICA6IEZpZ21hLmhleFRvUmdiKGJvcmRlckNvbG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvcmRlckNvdW50ICsgMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgIGNvbnN0IGxpbmVTdHJva2VzID0gRmlnbWEuY2xvbmUobGluZS5zdHJva2VzKTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuciA9IGxpbmVTdHJva2VzQ29sb3IuciAvIDI1NTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuZyA9IGxpbmVTdHJva2VzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgbGluZVN0cm9rZXNbMF0uY29sb3IuYiA9IGxpbmVTdHJva2VzQ29sb3IuYiAvIDI1NTtcbiAgICAgICAgbGluZS5zdHJva2VzID0gbGluZVN0cm9rZXM7XG4gICAgICAgIGlmIChib3JkZXJUeXBlID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGxpbmUucm90YXRpb24gPSA5MDtcbiAgICAgICAgICAgIGxpbmUueCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogYm9yZGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpbmUueSA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBpICogYm9yZGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XG4gICAgICAgIGxpbmVzTm9kZS5wdXNoKGxpbmUpO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgdG9wIGxpbmUgaWYgaGVhZGVyIGlzIGluY2x1ZGVkXG4gICAgaWYgKGhlYWRlciAmJiBib3JkZXJUeXBlID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xuICAgICAgICBjb25zdCBsaW5lU3Ryb2tlcyA9IEZpZ21hLmNsb25lKGxpbmUuc3Ryb2tlcyk7XG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLnIgPSBsaW5lU3Ryb2tlc0NvbG9yLnIgLyAyNTU7XG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLmcgPSBsaW5lU3Ryb2tlc0NvbG9yLmcgLyAyNTU7XG4gICAgICAgIGxpbmVTdHJva2VzWzBdLmNvbG9yLmIgPSBsaW5lU3Ryb2tlc0NvbG9yLmIgLyAyNTU7XG4gICAgICAgIGxpbmUuc3Ryb2tlcyA9IGxpbmVTdHJva2VzO1xuICAgICAgICBsaW5lLnJlc2l6ZShib3JkZXJXaWR0aCwgMCk7XG4gICAgICAgIGxpbmUueSA9XG4gICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC0gaGVhZGVySGVpZ2h0IC0gYm9yZGVyQ291bnQgKiBib3JkZXJTcGFjaW5nO1xuICAgICAgICBsaW5lc05vZGUucHVzaChsaW5lKTtcbiAgICB9XG4gICAgY29uc3QgbGluZXNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMobGluZXNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgbGluZXNHcm91cC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGxpbmVzR3JvdXAubmFtZSA9IGJvcmRlclR5cGU7XG4gICAgcmV0dXJuIGxpbmVzR3JvdXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dCYWNrZ3JvdW5kKHJvd0JhY2tncm91bmRUeXBlLCByb3dDb3VudCwgcm93SGVpZ2h0LCByb3dXaWR0aCwgYWx0ZXJuYXRlQmFja2dyb3VuZHMsIGhlYWRlciwgcHJpbWFyeUJhY2tncm91bmRDb2xvciwgc3RyaXBlZEJhY2tncm91bmRDb2xvciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByb3dCYWNrZ3JvdW5kTm9kZSA9IFtdO1xuICAgIGNvbnN0IHJvd1NwYWNpbmcgPSByb3dIZWlnaHQgKiAyO1xuICAgIGxldCBjb21wdXRlZFJvd0NvdW50ID0gMDtcbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IDA7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICByb3dDb3VudCAtPSAxO1xuICAgIH1cbiAgICBpZiAocm93QmFja2dyb3VuZFR5cGUgPT09IFwiT2RkXCIpIHtcbiAgICAgICAgY29tcHV0ZWRSb3dDb3VudCA9IE1hdGgucm91bmQocm93Q291bnQgLyAyKTtcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSByb3dIZWlnaHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wdXRlZFJvd0NvdW50ID0gTWF0aC5mbG9vcihyb3dDb3VudCAvIDIpO1xuICAgICAgICBzdGFydGluZ1BvaW50ID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSAtIHJvd1NwYWNpbmc7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZWRSb3dDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZpbGxzID0gRmlnbWEuY2xvbmUoYmFja2dyb3VuZC5maWxscyk7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kRmlsbHNDb2xvcjtcbiAgICAgICAgaWYgKGFsdGVybmF0ZUJhY2tncm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoKHJvd0NvdW50ICUgMiA9PT0gMCAmJiByb3dCYWNrZ3JvdW5kVHlwZSA9PT0gXCJPZGRcIikgfHxcbiAgICAgICAgICAgICAgICAocm93Q291bnQgJSAyICE9PSAwICYmIHJvd0JhY2tncm91bmRUeXBlID09PSBcIkV2ZW5cIikpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHN0cmlwZWRCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihwcmltYXJ5QmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsc0NvbG9yID0gRmlnbWEuaGV4VG9SZ2IocHJpbWFyeUJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLnIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5yIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuZyA9IGJhY2tncm91bmRGaWxsc0NvbG9yLmcgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5iID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuYiAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IGJhY2tncm91bmRGaWxscztcbiAgICAgICAgYmFja2dyb3VuZC5yZXNpemUocm93V2lkdGgsIHJvd0hlaWdodCk7XG4gICAgICAgIGJhY2tncm91bmQueSA9IHN0YXJ0aW5nUG9pbnQgLSBpICogcm93U3BhY2luZztcbiAgICAgICAgcm93QmFja2dyb3VuZE5vZGUucHVzaChiYWNrZ3JvdW5kKTtcbiAgICB9XG4gICAgY29uc3Qgcm93QmFja2dyb3VuZEdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyhyb3dCYWNrZ3JvdW5kTm9kZSwgRmlnbWEuZ2V0Q3VycmVudFBhZ2UoKSk7XG4gICAgcm93QmFja2dyb3VuZEdyb3VwLm5hbWUgPSByb3dCYWNrZ3JvdW5kVHlwZTtcbiAgICByZXR1cm4gcm93QmFja2dyb3VuZEdyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVUZXh0cyhyb3dDb3VudCwgcm93SGVpZ2h0LCBjb2x1bW5Db3VudCwgY29sdW1uV2lkdGgsIGhlYWRlciwgcmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB0YWJsZVRleHRzTm9kZSA9IFtdO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgcm93Q291bnQgLT0gMTtcbiAgICB9XG4gICAgY29uc3QgdGV4dE1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW5UZXh0c05vZGUgPSBbXTtcbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uID0gcmVmZXJlbmNlQ29vcmRpbmF0ZXMueCArIGkgKiBjb2x1bW5XaWR0aCArIHRleHRNYXJnaW4ueDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dDb3VudDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgbG9hZE5vZGVGb250KHRleHQuZm9udE5hbWUpLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJSb3cgXCIgKyAocm93Q291bnQgLSBqKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNhbXBsZVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKGNvbHVtbldpZHRoIC0gMSAtIDIgKiB0ZXh0TWFyZ2luLngsIHJvd0hlaWdodCAtIDIgKiB0ZXh0TWFyZ2luLnkpO1xuICAgICAgICAgICAgICAgIHRleHQueCA9IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSByZWZlcmVuY2VDb29yZGluYXRlcy55ICsgdGV4dE1hcmdpbi55IC0gKGogKyAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29sdW1uVGV4dHNOb2RlLnB1c2godGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sdW1uVGV4dHNHcm91cCA9IEZpZ21hLmdyb3VwTm9kZXMoY29sdW1uVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgY29sdW1uVGV4dHNHcm91cC5uYW1lID0gXCJDb2x1bW4gXCIgKyAoaSArIDEpO1xuICAgICAgICB0YWJsZVRleHRzTm9kZS5wdXNoKGNvbHVtblRleHRzR3JvdXApO1xuICAgIH1cbiAgICBjb25zdCB0YWJsZVRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICB0YWJsZVRleHRzR3JvdXAubmFtZSA9IFwiVGFibGUgVGV4dHNcIjtcbiAgICByZXR1cm4gdGFibGVUZXh0c0dyb3VwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkZXIocm93Q291bnQsIHJvd0hlaWdodCwgY29sdW1uQ291bnQsIGNvbHVtbldpZHRoLCBoZWFkZXIsIGhlYWRlckhlaWdodCwgZmxvYXRpbmdGaWx0ZXIsIGZsb2F0aW5nRmlsdGVySGVpZ2h0LCBwcmltYXJ5QmFja2dyb3VuZENvbG9yLCByZWZlcmVuY2VDb29yZGluYXRlcykge1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgLy8gQmFja2dyb3VuZFxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlck5vZGUgPSBbXTtcbiAgICAgICAgY29uc3Qgcm93V2lkdGggPSBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGaWxscyA9IEZpZ21hLmNsb25lKGJhY2tncm91bmQuZmlsbHMpO1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRmlsbHNDb2xvciA9IEZpZ21hLmhleFRvUmdiKHByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kRmlsbHNbMF0uY29sb3IuciA9IGJhY2tncm91bmRGaWxsc0NvbG9yLnIgLyAyNTU7XG4gICAgICAgIGJhY2tncm91bmRGaWxsc1swXS5jb2xvci5nID0gYmFja2dyb3VuZEZpbGxzQ29sb3IuZyAvIDI1NTtcbiAgICAgICAgYmFja2dyb3VuZEZpbGxzWzBdLmNvbG9yLmIgPSBiYWNrZ3JvdW5kRmlsbHNDb2xvci5iIC8gMjU1O1xuICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gYmFja2dyb3VuZEZpbGxzO1xuICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZShyb3dXaWR0aCwgaGVhZGVySGVpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZC55ID1cbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLSBoZWFkZXJIZWlnaHQgLSAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJIZWFkZXIgQmFja2dyb3VuZFwiO1xuICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaChiYWNrZ3JvdW5kKTtcbiAgICAgICAgLy8gVGV4dHNcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJUZXh0c05vZGUgPSBbXTtcbiAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IGZsb2F0aW5nRmlsdGVyXG4gICAgICAgICAgICA/IGhlYWRlckhlaWdodCAtIGZsb2F0aW5nRmlsdGVySGVpZ2h0XG4gICAgICAgICAgICA6IGhlYWRlckhlaWdodDtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dE1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblRleHRzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyBoZWFkZXJUZXh0TWFyZ2luLng7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgICAgICAgICBsb2FkTm9kZUZvbnQoZm9udE5hbWUpLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgdGV4dC5uYW1lID0gXCJDb2x1bW4gSGVhZGVyIFwiICsgKGkgKyAxKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIlNBTVBMRVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSBmb250TmFtZTtcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShjb2x1bW5XaWR0aCAtIDEgLSAyICogaGVhZGVyVGV4dE1hcmdpbi54LCB0ZXh0SGVpZ2h0IC0gMiAqIGhlYWRlclRleHRNYXJnaW4ueSk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gY29sdW1uVGV4dHNTdGFydGluZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRleHQueSA9XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHRNYXJnaW4ueSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAocm93Q291bnQgLSAxKSAqIHJvd0hlaWdodDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJUZXh0c05vZGUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlclRleHRzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKHRhYmxlSGVhZGVyVGV4dHNOb2RlLCBGaWdtYS5nZXRDdXJyZW50UGFnZSgpKTtcbiAgICAgICAgdGFibGVIZWFkZXJUZXh0c0dyb3VwLm5hbWUgPSBcIkNvbHVtbiBIZWFkZXJzXCI7XG4gICAgICAgIHRhYmxlSGVhZGVyTm9kZS5wdXNoKHRhYmxlSGVhZGVyVGV4dHNHcm91cCk7XG4gICAgICAgIC8vIEZsb2F0aW5nIEZpbHRlcnNcbiAgICAgICAgaWYgKGZsb2F0aW5nRmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlcnNOb2RlID0gW107XG4gICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlck1hcmdpbiA9IHsgeDogNSwgeTogNSB9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uRmxvYXRpbmdGaWx0ZXJzU3RhcnRpbmdQb3NpdGlvbiA9IHJlZmVyZW5jZUNvb3JkaW5hdGVzLnggKyBpICogY29sdW1uV2lkdGggKyBmbG9hdGluZ0ZpbHRlck1hcmdpbi54O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJGaWxscyA9IEZpZ21hLmNsb25lKGZsb2F0aW5nRmlsdGVyLmZpbGxzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckZpbGxzQ29sb3IgPSBGaWdtYS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJGaWxsc1swXS5jb2xvci5yID0gZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yLnIgLyAyNTU7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJGaWxsc1swXS5jb2xvci5nID0gZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yLmcgLyAyNTU7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJGaWxsc1swXS5jb2xvci5iID0gZmxvYXRpbmdGaWx0ZXJGaWxsc0NvbG9yLmIgLyAyNTU7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXIuZmlsbHMgPSBmbG9hdGluZ0ZpbHRlckZpbGxzO1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLm5hbWUgPSBcIkZsb2F0aW5nIEZpbHRlciBQbGFjZWhvbGRlclwiICsgKGkgKyAxKTtcbiAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlci5yZXNpemUoY29sdW1uV2lkdGggLSAxIC0gMiAqIGZsb2F0aW5nRmlsdGVyTWFyZ2luLngsIGZsb2F0aW5nRmlsdGVySGVpZ2h0IC0gMiAqIGZsb2F0aW5nRmlsdGVyTWFyZ2luLnkpO1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnggPSBjb2x1bW5GbG9hdGluZ0ZpbHRlcnNTdGFydGluZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyLnkgPVxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VDb29yZGluYXRlcy55IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVySGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyTWFyZ2luLnkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKHJvd0NvdW50IC0gMSkgKiByb3dIZWlnaHQ7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJzTm9kZS5wdXNoKGZsb2F0aW5nRmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRmxvYXRpbmdGaWx0ZXJzR3JvdXAgPSBGaWdtYS5ncm91cE5vZGVzKGZsb2F0aW5nRmlsdGVyc05vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgICAgICAgICAgdGFibGVGbG9hdGluZ0ZpbHRlcnNHcm91cC5uYW1lID0gXCJGbG9hdGluZyBGaWx0ZXJzXCI7XG4gICAgICAgICAgICB0YWJsZUhlYWRlck5vZGUucHVzaCh0YWJsZUZsb2F0aW5nRmlsdGVyc0dyb3VwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlckdyb3VwID0gRmlnbWEuZ3JvdXBOb2Rlcyh0YWJsZUhlYWRlck5vZGUsIEZpZ21hLmdldEN1cnJlbnRQYWdlKCkpO1xuICAgICAgICB0YWJsZUhlYWRlckdyb3VwLm5hbWUgPSBcIlRhYmxlIEhlYWRlclwiO1xuICAgICAgICByZXR1cm4gdGFibGVIZWFkZXJHcm91cDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWROb2RlRm9udChmb250TmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xuICAgIH0pO1xufVxuIiwiLyogRmlnbWEgQVBJIEZ1bmN0aW9uIEFic3RyYWN0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBOb2Rlcyhub2RlcywgcGFyZW50KSB7XG4gICAgcmV0dXJuIGZpZ21hLmdyb3VwKG5vZGVzLCBwYXJlbnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICAgIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlKCkuc2VsZWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbihub2RlKSB7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSkge1xuICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbi8qIENsb25lIGZ1bmN0aW9uIHRha2VuIGZyb20gRmlnbWEgUGx1Z2luIEFQSSBleGFtcGxlICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICB0eXBlID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gY2xvbmUoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IFwidW5rbm93blwiO1xufVxuLyogSEVYIHRvIFJHQiBDb252ZXJzaW9uICovXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgICAgICAgfVxuICAgICAgICA6IG51bGw7XG59XG4vKiBFeHRyYWN0IElucHV0cyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKGh0bWxUYWdJZCwgaW5wdXRUeXBlKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sVGFnSWQpO1xuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9