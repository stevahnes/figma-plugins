import { CreateMessage } from "./interfaces/interfaces";

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  processMessage(msg);
  figma.closePlugin();
};

function processMessage(message: CreateMessage): void {
  if (message.type === "create-table") {
    const verticalLinesGroup: GroupNode = generateBorders(
      "vertical",
      true,
      message.columns,
      message.columnWidth,
      message.rowHeight * message.rows
    );
    const horizontalLinesGroup: GroupNode = generateBorders(
      "horizontal",
      false,
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns
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
    figma.viewport.scrollAndZoomIntoView([borderLinesGroup]);
  }
  figma.notify("Table created!");
  return null;
}

function generateBorders(
  borderType: "horizontal" | "vertical",
  visible: boolean = true,
  borderCount: number,
  borderSpacing: number,
  borderWidth: number
): GroupNode {
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
  const linesGroup: GroupNode = figma.group(linesNode, figma.currentPage);
  if (!visible) {
    linesGroup.visible = false;
  }
  return linesGroup;
}
