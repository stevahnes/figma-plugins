"use strict";
exports.__esModule = true;
/* Figma API Function Abstraction */
function groupNodes(nodes, parent) {
    return figma.group(nodes, parent);
}
exports.groupNodes = groupNodes;
function getCurrentPage() {
    return figma.currentPage;
}
exports.getCurrentPage = getCurrentPage;
function getSelection() {
    return getCurrentPage().selection;
}
exports.getSelection = getSelection;
function setSelection(node) {
    figma.currentPage.selection = node;
    return null;
}
exports.setSelection = setSelection;
function scrollAndZoomIntoView(node) {
    figma.viewport.scrollAndZoomIntoView(node);
    return null;
}
exports.scrollAndZoomIntoView = scrollAndZoomIntoView;
/* Clone function taken from Figma Plugin API example */
function clone(val) {
    var type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === "undefined" || type === "number" || type === "string" || type === "boolean") {
        return val;
    }
    else if (type === "object") {
        if (val instanceof Array) {
            return val.map(function (x) { return clone(x); });
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            var o = {};
            for (var key in val) {
                o[key] = clone(val[key]);
            }
            return o;
        }
    }
    throw "unknown";
}
exports.clone = clone;
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
exports.hexToRgb = hexToRgb;
/* Select HTML Elements */
// Generic HTML Element
function getHTMLElementById(htmlElement) {
    return document.getElementById(htmlElement);
}
exports.getHTMLElementById = getHTMLElementById;
// HTML Input Element
function getHTMLInputElementById(htmlElement) {
    return document.getElementById(htmlElement);
}
exports.getHTMLInputElementById = getHTMLInputElementById;
/* Extract Inputs */
function getValue(htmlTagId, inputType) {
    var input = getHTMLInputElementById(htmlTagId);
    switch (inputType) {
        case "number":
            return parseInt(input.value, 10) ? parseInt(input.value, 10) : 0;
            break;
        case "boolean":
            return input.checked;
            break;
        case "string":
            return input.value;
            break;
    }
}
exports.getValue = getValue;
