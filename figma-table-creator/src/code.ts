import { CreateMessage, ReferenceCoordinates } from "./interfaces/interfaces";
import {
  generateRowBackground,
  generateBorders,
  generateTableTexts
} from "./generators/generators";
import * as Figma from "./utils/utils";
const referenceCoordinates: ReferenceCoordinates = { x: 0, y: 0 };
const showUIOptions: ShowUIOptions = {
  width: 300,
  height: 300
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

function processMessage(message: CreateMessage): void {
  if (message.type === "create-table") {
    /* Generate Background */
    const oddRowBackgroundGroup: GroupNode = generateRowBackground(
      "Odd",
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      referenceCoordinates
    );
    const evenRowBackgroundGroup: GroupNode = generateRowBackground(
      "Even",
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      referenceCoordinates
    );
    const rowBackgroundNode: SceneNode[] = [
      oddRowBackgroundGroup,
      evenRowBackgroundGroup
    ];
    const rowBackgroundGroup: GroupNode = Figma.groupNodes(
      rowBackgroundNode,
      figma.currentPage
    );
    rowBackgroundGroup.name = "Row Background";

    /* Generate Borders */
    const verticalLinesGroup: GroupNode = generateBorders(
      "Vertical",
      message.borders,
      message.columns,
      message.columnWidth,
      message.rowHeight * message.rows,
      referenceCoordinates
    );
    const horizontalLinesGroup: GroupNode = generateBorders(
      "Horizontal",
      message.borders,
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      referenceCoordinates
    );
    const borderLinesNode: SceneNode[] = [
      verticalLinesGroup,
      horizontalLinesGroup
    ];
    const borderLinesGroup: GroupNode = Figma.groupNodes(
      borderLinesNode,
      figma.currentPage
    );
    borderLinesGroup.name = "Borders";

    /* Generate Texts */
    const columnTextsGroup: GroupNode = generateTableTexts(
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      referenceCoordinates
    );

    /* Sort Group Nodes */
    const tableGroup = Figma.groupNodes(
      [columnTextsGroup, borderLinesGroup, rowBackgroundGroup],
      figma.currentPage
    );

    tableGroup.name = "Table";
    figma.currentPage.selection = [tableGroup];
    figma.viewport.scrollAndZoomIntoView([tableGroup]);

    /* Notify Success to User */
    figma.notify("Table created!");
    return null;
  }
}
