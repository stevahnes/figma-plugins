import "./ui.css";
import * as Interfaces from "./interfaces-constants/interfaces";
import * as Constants from "./interfaces-constants/constants";

const uiToCodeMessage: Interfaces.UIToCodeMessage = {
  type: Constants.UIToCodeMessageType.EDIT_CONTENTS,
  payload: null,
};
const selectedGrid: Interfaces.SelectedGrid = { id: "", name: "N.A." };

onmessage = msg => {
  const receivedCodeMessage: Interfaces.CodeToUIMessage = msg.data.pluginMessage;
  receivedCodeMessage.selectedGridId !== "" ? (selectedGrid.id = receivedCodeMessage.selectedGridId) : null;
  receivedCodeMessage.selectedGridName !== "" ? (selectedGrid.name = receivedCodeMessage.selectedGridName) : null;
  receivedCodeMessage.isValidGridGen
    ? ((document.getElementById("selected-grid-name").innerHTML = selectedGrid.name),
      document.getElementById("selected").classList.add("show"),
      document.getElementById("deselected").classList.remove("show"))
    : (document.getElementById("selected").classList.remove("show"),
      document.getElementById("deselected").classList.add("show"));
};

window.onfocus = () => {
  uiToCodeMessage.type = Constants.UIToCodeMessageType.WINDOW_FOCUS;
  uiToCodeMessage.payload = true;
  parent.postMessage({ pluginMessage: uiToCodeMessage }, "*");
};
