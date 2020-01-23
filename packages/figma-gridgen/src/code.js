const referenceCoordinates = { x: 0, y: 0 };
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    processMessage(msg);
    figma.closePlugin();
};
function processMessage(message) {
    if (message.type === 'create-table') {
        /* Generate Background */
        const oddRowBackgroundGroup = generateRowBackground(
            'Odd',
            message.rows,
            message.rowHeight,
            message.columnWidth * message.columns,
        );
        const evenRowBackgroundGroup = generateRowBackground(
            'Even',
            message.rows,
            message.rowHeight,
            message.columnWidth * message.columns,
        );
        const rowBackgroundNode = [oddRowBackgroundGroup, evenRowBackgroundGroup];
        const rowBackgroundGroup = groupNodes(rowBackgroundNode, figma.currentPage);
        rowBackgroundGroup.name = 'Row Background';
        /* Generate Borders */
        const verticalLinesGroup = generateBorders(
            'Vertical',
            true,
            message.columns,
            message.columnWidth,
            message.rowHeight * message.rows,
        );
        const horizontalLinesGroup = generateBorders(
            'Horizontal',
            true,
            message.rows,
            message.rowHeight,
            message.columnWidth * message.columns,
        );
        const borderLinesNode = [verticalLinesGroup, horizontalLinesGroup];
        const borderLinesGroup = groupNodes(borderLinesNode, figma.currentPage);
        borderLinesGroup.name = 'Borders';
        /* Sort Group Nodes */
        const tableGroup = groupNodes([borderLinesGroup, rowBackgroundGroup], figma.currentPage);
        tableGroup.name = 'Table';
        figma.currentPage.selection = [tableGroup];
        figma.viewport.scrollAndZoomIntoView([tableGroup]);
    }
    /* Notify Success to User */
    figma.notify('Table created!');
    return null;
}
function generateBorders(borderType, visible = true, borderCount, borderSpacing, borderWidth) {
    const linesNode = [];
    for (let i = 0; i < borderCount + 1; i++) {
        const line = figma.createLine();
        if (borderType === 'Vertical') {
            line.rotation = 90;
            line.x = referenceCoordinates.x + i * borderSpacing;
        } else {
            line.y = referenceCoordinates.y - i * borderSpacing;
        }
        line.resize(borderWidth, 0);
        linesNode.push(line);
    }
    const linesGroup = groupNodes(linesNode, figma.currentPage);
    if (!visible) {
        linesGroup.visible = false;
    }
    linesGroup.name = borderType;
    return linesGroup;
}
function generateRowBackground(rowBackgroundType, rowCount, rowHeight, rowWidth) {
    const rowBackgroundNode = [];
    const rowSpacing = rowHeight * 2;
    let computedRowCount = 0;
    let startingPoint = 0;
    if (rowBackgroundType === 'Odd') {
        computedRowCount = Math.round(rowCount / 2);
        startingPoint = referenceCoordinates.y - rowHeight;
    } else {
        computedRowCount = Math.floor(rowCount / 2);
        startingPoint = referenceCoordinates.y - rowSpacing;
    }
    for (let i = 0; i < computedRowCount; i++) {
        const background = figma.createRectangle();
        background.resize(rowWidth, rowHeight);
        background.y = startingPoint - i * rowSpacing;
        rowBackgroundNode.push(background);
    }
    const rowBackgroundGroup = groupNodes(rowBackgroundNode, figma.currentPage);
    rowBackgroundGroup.name = rowBackgroundType;
    return rowBackgroundGroup;
}
/* API Function Abstraction */
function groupNodes(nodes, parent) {
    return figma.group(nodes, parent);
}
