import { CreateMessage } from "./interfaces/interfaces";

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

function processMessage(message: CreateMessage): void {
  if (message.type === "create-table") {
    const columnWidth: number = 150;
    const rowHeight: number = 30;
    const verticalLinesNode: SceneNode[] = generateBorders(
      "vertical",
      message.columns,
      columnWidth,
      rowHeight * message.rows
    );
    const horizontalLinesNode: SceneNode[] = generateBorders(
      "horizontal",
      message.rows,
      rowHeight,
      columnWidth * message.columns
    );
    const verticalLinesGroup = figma.group(
      verticalLinesNode,
      figma.currentPage
    );
    const horizontalLinesGroup = figma.group(
      horizontalLinesNode,
      figma.currentPage
    );
    const borderLinesNode: SceneNode[] = [
      verticalLinesGroup,
      horizontalLinesGroup
    ];
    const borderLinesGroup: GroupNode = figma.group(
      borderLinesNode,
      figma.currentPage
    );
    figma.currentPage.selection = [borderLinesGroup];
    figma.viewport.scrollAndZoomIntoView(verticalLinesNode);
  }
  figma.notify("Table created!");
  return null;
}

function generateBorders(
  borderType: "horizontal" | "vertical",
  borderCount: number,
  borderSpacing: number,
  borderWidth: number
): SceneNode[] {
  const linesNode: SceneNode[] = [];
  for (let i = 0; i < borderCount + 1; i++) {
    const line = figma.createLine();
    if (borderType === "vertical") {
      line.rotation = 90;
      line.x = i * borderSpacing;
    } else {
      line.y = i * -borderSpacing;
    }
    line.resize(borderWidth, 0);
    linesNode.push(line);
  }
  return linesNode;
}
