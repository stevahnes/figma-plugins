import * as Interfaces from "./models/interfaces";
import * as Constants from "./models/constants";
import { getBorderTypesId } from "./generators/generators";

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
  },
};

const validGridGenCheck = (): void => {
  codeToUIMessage.isValidGridGen = true;
  const oldGridId = codeToUIMessage.selectedGrid.id;
  const oldTableHeaderId = codeToUIMessage.selectedGrid.tableHeaderId;
  const selection = figma.currentPage.selection[0];
  // if something on the Layer is selected
  if (selection && (selection.type === "GROUP" || selection.type === "COMPONENT")) {
    const bareboneGridGenGroups = Object.keys(Constants.bareboneGridGenGroups);
    // check if selection has children matching the barebone constructor of GridGen
    const selectedNodeChildren: readonly SceneNode[] = (selection as GroupNode).children;
    selectedNodeChildren.forEach(child => {
      bareboneGridGenGroups.indexOf(child.name) !== -1
        ? (codeToUIMessage.selectedGrid[Constants.bareboneGridGenGroups[child.name]] = child.id)
        : (codeToUIMessage.isValidGridGen = false);
    });
    // if selected is a valid GridGen, update selected grid id
    codeToUIMessage.isValidGridGen
      ? ((codeToUIMessage.selectedGrid.id = selection.id), (codeToUIMessage.selectedGrid.name = selection.name))
      : null;
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
    codeToUIMessage.selectedGrid.columns = (figma.getNodeById(allBorders["Vertical"]) as GroupNode).children.length - 1;
  } else {
    codeToUIMessage.isValidGridGen = false;
  }
  console.log(codeToUIMessage);
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
  }
};
