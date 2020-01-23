"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Figma = require("../utils/utils");
/* Defaults/Constants */
var defaultBorderColor = "#C7C7C7";
var tableFontName = {
    family: "Roboto",
    style: "Regular"
};
var tableHeaderFontName = { family: "Roboto", style: "Bold" };
function generateBorders(borderType, visible, borderCount, borderSpacing, borderWidthMultiplier, borderWidthIndividual, header, headerHeight, borderColor, referenceCoordinates) {
    if (visible === void 0) { visible = true; }
    var linesNode = [];
    var borderWidth;
    if (header) {
        if (borderType === "Vertical") {
            borderWidth = (borderWidthMultiplier - 1) * borderWidthIndividual + headerHeight;
        }
        else {
            borderCount -= 1;
            borderWidth = borderWidthMultiplier * borderWidthIndividual;
        }
    }
    else {
        borderWidth = borderWidthMultiplier * borderWidthIndividual;
    }
    var lineStrokesColor = borderColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) === null
        ? Figma.hexToRgb(defaultBorderColor)
        : Figma.hexToRgb(borderColor);
    for (var i = 0; i < borderCount + 1; i++) {
        var line = figma.createLine();
        var lineStrokes = Figma.clone(line.strokes);
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
        var line = figma.createLine();
        var lineStrokes = Figma.clone(line.strokes);
        lineStrokes[0].color.r = lineStrokesColor.r / 255;
        lineStrokes[0].color.g = lineStrokesColor.g / 255;
        lineStrokes[0].color.b = lineStrokesColor.b / 255;
        line.strokes = lineStrokes;
        line.resize(borderWidth, 0);
        line.x = referenceCoordinates.x;
        line.y = referenceCoordinates.y - headerHeight - borderCount * borderSpacing;
        linesNode.push(line);
    }
    var linesGroup = Figma.groupNodes(linesNode, Figma.getCurrentPage());
    if (!visible) {
        linesGroup.visible = false;
    }
    linesGroup.name = borderType;
    return linesGroup;
}
exports.generateBorders = generateBorders;
function generateRowBackground(rowBackgroundType, rowCount, rowHeight, rowWidth, alternateBackgrounds, header, primaryBackgroundColor, stripedBackgroundColor, referenceCoordinates) {
    var rowBackgroundNode = [];
    var rowSpacing = rowHeight * 2;
    var computedRowCount = 0;
    var startingPoint = 0;
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
    for (var i = 0; i < computedRowCount; i++) {
        var background = figma.createRectangle();
        var backgroundFills = Figma.clone(background.fills);
        var backgroundFillsColor = void 0;
        if (alternateBackgrounds) {
            if ((rowCount % 2 === 0 && rowBackgroundType === "Odd") || (rowCount % 2 !== 0 && rowBackgroundType === "Even")) {
                backgroundFillsColor = Figma.hexToRgb(stripedBackgroundColor);
            }
            else {
                backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
            }
        }
        else {
            backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
        }
        backgroundFills[0].color.r = backgroundFillsColor.r / 255;
        backgroundFills[0].color.g = backgroundFillsColor.g / 255;
        backgroundFills[0].color.b = backgroundFillsColor.b / 255;
        background.fills = backgroundFills;
        background.resize(rowWidth, rowHeight);
        background.y = startingPoint - i * rowSpacing;
        rowBackgroundNode.push(background);
    }
    var rowBackgroundGroup = Figma.groupNodes(rowBackgroundNode, Figma.getCurrentPage());
    rowBackgroundGroup.name = rowBackgroundType;
    return rowBackgroundGroup;
}
exports.generateRowBackground = generateRowBackground;
function generateTableTexts(rowCount, rowHeight, columnCount, columnWidth, header, referenceCoordinates) {
    var tableTextsNode = [];
    if (header) {
        rowCount -= 1;
    }
    var textMargin = { x: 5, y: 5 };
    for (var i = 0; i < columnCount; i++) {
        var columnTextsNode = [];
        var columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + textMargin.x;
        for (var j = 0; j < rowCount; j++) {
            var text = figma.createText();
            text.name = "Row " + (rowCount - j);
            text.x = columnTextsStartingPosition;
            text.y = referenceCoordinates.y + textMargin.y - (j + 1) * rowHeight;
            columnTextsNode.push(text);
        }
        var columnTextsGroup = Figma.groupNodes(columnTextsNode, Figma.getCurrentPage());
        columnTextsGroup.name = "Column " + (i + 1);
        tableTextsNode.push(columnTextsGroup);
    }
    var tableTextsGroup = Figma.groupNodes(tableTextsNode, Figma.getCurrentPage());
    var allTextsNodesGenerated = tableTextsGroup.findAll(function (node) { return node.type === "TEXT"; });
    loadNodeFont(tableFontName).then(function () {
        for (var _i = 0, allTextsNodesGenerated_1 = allTextsNodesGenerated; _i < allTextsNodesGenerated_1.length; _i++) {
            var textNode = allTextsNodesGenerated_1[_i];
            var text = textNode;
            text.fontName = tableFontName;
            text.characters = "Sample";
            text.textAlignVertical = "CENTER";
            text.resize(columnWidth - 1 - 2 * textMargin.x, rowHeight - 2 * textMargin.y);
        }
    });
    tableTextsGroup.name = "Table Texts";
    return tableTextsGroup;
}
exports.generateTableTexts = generateTableTexts;
function generateTableHeader(rowCount, rowHeight, columnCount, columnWidth, header, headerHeight, floatingFilter, floatingFilterHeight, primaryBackgroundColor, referenceCoordinates) {
    if (header) {
        // Background
        var tableHeaderNode = [];
        var rowWidth = columnWidth * columnCount;
        var background = figma.createRectangle();
        var backgroundFills = Figma.clone(background.fills);
        var backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
        backgroundFills[0].color.r = backgroundFillsColor.r / 255;
        backgroundFills[0].color.g = backgroundFillsColor.g / 255;
        backgroundFills[0].color.b = backgroundFillsColor.b / 255;
        background.fills = backgroundFills;
        background.resize(rowWidth, headerHeight);
        background.y = referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
        background.name = "Header Background";
        tableHeaderNode.push(background);
        // Texts
        var tableHeaderTextsNode = [];
        var textHeight_1 = floatingFilter ? headerHeight - floatingFilterHeight : headerHeight;
        var headerTextMargin_1 = { x: 5, y: 5 };
        for (var i = 0; i < columnCount; i++) {
            var columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + headerTextMargin_1.x;
            var text = figma.createText();
            text.name = "Column Header " + (i + 1);
            text.x = columnTextsStartingPosition;
            text.y = referenceCoordinates.y - headerHeight + headerTextMargin_1.y - (rowCount - 1) * rowHeight;
            tableHeaderTextsNode.push(text);
        }
        var tableHeaderTextsGroup = Figma.groupNodes(tableHeaderTextsNode, Figma.getCurrentPage());
        var allTextsNodesGenerated_2 = tableHeaderTextsGroup.findAll(function (node) { return node.type === "TEXT"; });
        loadNodeFont(tableHeaderFontName).then(function () {
            for (var _i = 0, allTextsNodesGenerated_3 = allTextsNodesGenerated_2; _i < allTextsNodesGenerated_3.length; _i++) {
                var textNode = allTextsNodesGenerated_3[_i];
                var text = textNode;
                text.fontName = tableHeaderFontName;
                text.characters = "SAMPLE";
                text.textAlignVertical = "CENTER";
                text.resize(columnWidth - 1 - 2 * headerTextMargin_1.x, textHeight_1 - 2 * headerTextMargin_1.y);
            }
        });
        tableHeaderTextsGroup.name = "Column Headers";
        tableHeaderNode.push(tableHeaderTextsGroup);
        // Floating Filters
        if (floatingFilter) {
            var floatingFiltersNode = [];
            var floatingFilterMargin = { x: 5, y: 5 };
            for (var i = 0; i < columnCount; i++) {
                var columnFloatingFiltersStartingPosition = referenceCoordinates.x + i * columnWidth + floatingFilterMargin.x;
                var floatingFilter_1 = figma.createRectangle();
                var floatingFilterFills = Figma.clone(floatingFilter_1.fills);
                var floatingFilterFillsColor = Figma.hexToRgb("#FFFFFF");
                floatingFilterFills[0].color.r = floatingFilterFillsColor.r / 255;
                floatingFilterFills[0].color.g = floatingFilterFillsColor.g / 255;
                floatingFilterFills[0].color.b = floatingFilterFillsColor.b / 255;
                floatingFilter_1.fills = floatingFilterFills;
                floatingFilter_1.name = "Floating Filter Placeholder" + (i + 1);
                floatingFilter_1.resize(columnWidth - 1 - 2 * floatingFilterMargin.x, floatingFilterHeight - 2 * floatingFilterMargin.y);
                floatingFilter_1.x = columnFloatingFiltersStartingPosition;
                floatingFilter_1.y =
                    referenceCoordinates.y - floatingFilterHeight + floatingFilterMargin.y - (rowCount - 1) * rowHeight;
                floatingFiltersNode.push(floatingFilter_1);
            }
            var tableFloatingFiltersGroup = Figma.groupNodes(floatingFiltersNode, Figma.getCurrentPage());
            tableFloatingFiltersGroup.name = "Floating Filters";
            tableHeaderNode.push(tableFloatingFiltersGroup);
        }
        var tableHeaderGroup = Figma.groupNodes(tableHeaderNode, Figma.getCurrentPage());
        tableHeaderGroup.name = "Table Header";
        return tableHeaderGroup;
    }
    else {
        return null;
    }
}
exports.generateTableHeader = generateTableHeader;
function loadNodeFont(fontName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, figma.loadFontAsync(fontName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
