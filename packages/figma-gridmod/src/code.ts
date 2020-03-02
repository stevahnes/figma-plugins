import * as Interfaces from "./interfaces-constants/interfaces";
import * as Constants from "./interfaces-constants/constants";

const codeToUIMessage: Interfaces.CodeToUIMessage = {
  isValidGridGen: false,
  selectedGrid: {
    id: "",
    name: "N.A.",
    rowBackgroundId: "",
    tableTextsId: "",
    bordersId: "",
    tableHeaderId: "",
  },
};

const validGridGenCheck = (): void => {
  codeToUIMessage.isValidGridGen = true;
  codeToUIMessage.selectedGrid.tableHeaderId = "";
  const selection = figma.currentPage.selection[0];
  if (selection) {
    const bareboneGridGenGroups = Object.keys(Constants.bareboneGridGenGroups);
    const selectedNodeChildren: readonly SceneNode[] = (selection as GroupNode).children;
    selectedNodeChildren.forEach(child => {
      bareboneGridGenGroups.indexOf(child.name) !== -1
        ? (codeToUIMessage.selectedGrid[Constants.bareboneGridGenGroups[child.name]] = child.id)
        : (codeToUIMessage.isValidGridGen = false);
    });
  } else {
    codeToUIMessage.isValidGridGen = false;
  }
  // update selected grid data
  codeToUIMessage.isValidGridGen
    ? ((codeToUIMessage.selectedGrid.id = selection.id), (codeToUIMessage.selectedGrid.name = selection.name))
    : null;
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
