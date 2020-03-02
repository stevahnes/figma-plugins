import * as Interfaces from "./interfaces-constants/interfaces";
import * as Constants from "./interfaces-constants/constants";

const codeToUIMessage: Interfaces.CodeToUIMessage = { isValidGridGen: false, selectedGridId: "", selectedGridName: "" };

const validGridGenCheck = (): void => {
  codeToUIMessage.isValidGridGen = true;
  const selection = figma.currentPage.selection[0];
  if (selection) {
    const childNodesName: string[] = ["Row Background", "Table Texts", "Table Header", "Borders"];
    (selection as GroupNode).children.forEach(child => {
      childNodesName.indexOf(child.name) === -1 ? (codeToUIMessage.isValidGridGen = false) : null;
    });
  } else {
    codeToUIMessage.isValidGridGen = false;
  }
  codeToUIMessage.isValidGridGen
    ? ((codeToUIMessage.selectedGridId = selection.id), (codeToUIMessage.selectedGridName = selection.name))
    : ((codeToUIMessage.selectedGridId = ""), (codeToUIMessage.selectedGridName = ""));
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
  if (msg.type === "focus" && msg.payload) {
    validGridGenCheck();
  }
};
