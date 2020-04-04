import "./ui.css";
import * as Interfaces from "./models/interfaces";
import * as Constants from "./models/constants";

const uiToCodeMessage: Interfaces.UIToCodeMessage = {
  type: Constants.UIToCodeMessageType.EDIT_CONTENTS,
  payload: null,
};
const selectedGrid: Interfaces.SelectedGrid = {
  id: "",
  name: "---",
  rows: 0, // without header
  columns: 0,
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
  console.log("window :", window);
  uiToCodeMessage.type = Constants.UIToCodeMessageType.WINDOW_FOCUS;
  uiToCodeMessage.payload = true;
  parent.postMessage({ pluginMessage: uiToCodeMessage }, "*");
};

document.getElementById("edit").onclick = () => {
  const name: string = (document.getElementById("clone-name") as HTMLInputElement).value;
  if (name.length > 0) {
    document.getElementById("lds").classList.add("is-visible");
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: Constants.UIToCodeMessageType.EDIT_CONTENTS,
            payload: null,
          },
        },
        "*",
      );
    }, 50);
  } else {
    document.getElementById("clone-name").classList.add("invalid");
  }
};
