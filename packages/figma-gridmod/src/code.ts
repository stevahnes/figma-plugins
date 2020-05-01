import * as Interfaces from "./models/interfaces";
import * as Constants from "./models/constants";
import { getBorderTypesId, editRows, editColumns } from "./generators/generators";

const codeToUIMessage: Interfaces.CodeToUIMessage = {
  isValidGridGen: false,
  selectedGrid: {
    id: "",
    name: "---",
    rows: 0, // without header
    columns: 0,
    rowBackgroundId: "",
    tableTextsId: "",
    bordersId: "",
    tableHeaderId: "",
    minimumTextWidth: 0,
    minimumTextHeight: 0,
  },
};

const validGridGenCheck = (): void => {
  codeToUIMessage.isValidGridGen = true;
  const oldGridId = codeToUIMessage.selectedGrid.id;
  const oldTableHeaderId = codeToUIMessage.selectedGrid.tableHeaderId;
  const selection = figma.currentPage.selection[0];
  // if something on the Layer is selected
  if (selection && selection.type === "GROUP") {
    const bareboneGridGenGroups = Object.keys(Constants.bareboneGridGenGroups);
    // check if selection has children matching the barebone constructor of GridGen
    const selectedNodeChildren: readonly SceneNode[] = (selection as GroupNode).children;
    selectedNodeChildren.forEach(child => {
      bareboneGridGenGroups.indexOf(child.name) !== -1
        ? (codeToUIMessage.selectedGrid[Constants.bareboneGridGenGroups[child.name]] = child.id)
        : (codeToUIMessage.isValidGridGen = false);
    });
    // if selected is a valid GridGen, update selected grid id
    if (codeToUIMessage.isValidGridGen) {
      (codeToUIMessage.selectedGrid.id = selection.id), (codeToUIMessage.selectedGrid.name = selection.name);
      // if selected grid has changed but table header id is not updated, means new grid has no table header
      codeToUIMessage.selectedGrid.id !== oldGridId && oldTableHeaderId === codeToUIMessage.selectedGrid.tableHeaderId
        ? (codeToUIMessage.selectedGrid.tableHeaderId = "")
        : null;
      // Finally, calculate number of rows and columns without header
      const allBorders: { [key: string]: string } = getBorderTypesId(codeToUIMessage.selectedGrid);
      codeToUIMessage.selectedGrid.tableHeaderId === ""
        ? (codeToUIMessage.selectedGrid.rows =
            (figma.getNodeById(allBorders["Horizontal"]) as GroupNode).children.length - 1)
        : (codeToUIMessage.selectedGrid.rows =
            (figma.getNodeById(allBorders["Horizontal"]) as GroupNode).children.length - 2);
      codeToUIMessage.selectedGrid.columns =
        (figma.getNodeById(allBorders["Vertical"]) as GroupNode).children.length - 1;
      (figma.getNodeById(codeToUIMessage.selectedGrid.id) as GroupNode)
        .findAll(node => node.type === "TEXT")
        .forEach(textNode => {
          if (
            codeToUIMessage.selectedGrid.minimumTextHeight === 0 ||
            codeToUIMessage.selectedGrid.minimumTextHeight > textNode.height
          ) {
            codeToUIMessage.selectedGrid.minimumTextHeight = textNode.height;
          }
          if (
            codeToUIMessage.selectedGrid.minimumTextWidth === 0 ||
            codeToUIMessage.selectedGrid.minimumTextWidth > textNode.width
          ) {
            codeToUIMessage.selectedGrid.minimumTextWidth = textNode.width;
          }
        });
    }
  } else {
    codeToUIMessage.isValidGridGen = false;
  }
  figma.ui.postMessage(codeToUIMessage);
};

// This shows the HTML page in "ui.html".
figma.showUI(__html__, Constants.showUIOptions);
// Check if selection is a valid GridGen
validGridGenCheck();

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg: Interfaces.UIToCodeMessage) => {
  if (msg.type === Constants.UIToCodeMessageType.WINDOW_FOCUS && msg.payload) {
    validGridGenCheck();
  } else if (msg.type === Constants.UIToCodeMessageType.EDIT_CONTENTS) {
    msg.payload.rows
      ? editRows(
          msg.payload.selectedGrid,
          msg.payload.decrease,
          msg.payload.amount,
          !parseInt(msg.payload.index, 10),
          parseInt(msg.payload.index, 10),
        )
      : editColumns(
          msg.payload.selectedGrid,
          msg.payload.decrease,
          msg.payload.amount,
          !parseInt(msg.payload.index, 10),
          parseInt(msg.payload.index, 10),
        );
    figma.notify(`👍 GridMod successfully modified ${msg.payload.selectedGrid.name}`);
    figma.ui.postMessage("SUCCESS");
  }
};
