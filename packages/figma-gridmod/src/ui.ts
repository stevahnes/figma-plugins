import "./ui.css";
import * as Interfaces from "./interfaces-constants/interfaces";
import * as Constants from "./interfaces-constants/constants";

const uiToCodeMessage: Interfaces.UIToCodeMessage = {
  type: Constants.UIToCodeMessageType.EDIT_CONTENTS,
  payload: null,
};
const selectedGrid: Interfaces.SelectedGrid = {
  id: "",
  name: "N.A.",
  rowBackgroundId: "",
  tableTextsId: "",
  bordersId: "",
  tableHeaderId: "",
};

onmessage = msg => {
  const receivedCodeMessage: Interfaces.CodeToUIMessage = msg.data.pluginMessage;
  Object.keys(selectedGrid).forEach(key => {
    selectedGrid[key] !== receivedCodeMessage.selectedGrid[key]
      ? (selectedGrid[key] = receivedCodeMessage.selectedGrid[key])
      : null;
  });
  console.log(selectedGrid);
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
