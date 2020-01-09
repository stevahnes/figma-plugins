// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    processMessage(msg);
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
function processMessage(message) {
    if (message.type === "create-table") {
        const columnWidth = 150;
        const rowHeight = 30;
        const verticalLineNode = generateBorders("vertical", message.columns, columnWidth, rowHeight * message.rows);
        const horizontalLineNode = generateBorders("horizontal", message.rows, rowHeight, columnWidth * message.columns);
        figma.group(verticalLineNode, figma.currentPage);
        figma.group(horizontalLineNode, figma.currentPage);
        figma.currentPage.selection = verticalLineNode;
        figma.viewport.scrollAndZoomIntoView(verticalLineNode);
    }
    figma.notify("Table created!");
    return null;
}
function generateBorders(borderType, borderCount, borderSpacing, borderWidth) {
    const linesNode = [];
    for (let i = 0; i < borderCount + 1; i++) {
        const line = figma.createLine();
        if (borderType === "vertical") {
            line.rotation = 90;
            line.x = i * borderSpacing;
        }
        else {
            line.y = i * -borderSpacing;
        }
        line.resize(borderWidth, 0);
        linesNode.push(line);
    }
    return linesNode;
}
