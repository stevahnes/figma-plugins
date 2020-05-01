import "./ui.css";
import * as Interfaces from "./models/interfaces";
import * as Constants from "./models/constants";

let isShiftHeld: boolean = false;

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
  minimumTextWidth: 0,
  minimumTextHeight: 0,
};

(document.getElementById("width-height") as HTMLSelectElement).onchange = () => {
  toggleRowColumn((document.getElementById("width-height") as HTMLSelectElement).value);
};

onmessage = msg => {
  if (typeof msg.data.pluginMessage !== "string") {
    const receivedCodeMessage: Interfaces.CodeToUIMessage = msg.data.pluginMessage;
    Object.keys(selectedGrid).forEach(key => {
      selectedGrid[key] !== receivedCodeMessage.selectedGrid[key]
        ? (selectedGrid[key] = receivedCodeMessage.selectedGrid[key])
        : null;
    });
    receivedCodeMessage.isValidGridGen ? populateModificationOptions() : disableModificationOptions();
  } else {
    msg.data.pluginMessage === "SUCCESS" ? document.getElementById("lds").classList.remove("is-visible") : null;
  }
};

window.onfocus = () => {
  uiToCodeMessage.type = Constants.UIToCodeMessageType.WINDOW_FOCUS;
  uiToCodeMessage.payload = true;
  parent.postMessage({ pluginMessage: uiToCodeMessage }, "*");
};

document.getElementById("edit").onclick = () => {
  modifyTable();
};

document.onkeydown = keyDown => {
  if (keyDown.key) {
    let activeElement = document.activeElement as HTMLInputElement;
    switch (keyDown.key) {
      case "ArrowUp":
        activeElement.value = computeValueOnArrowPress("ArrowUp", activeElement, isShiftHeld).toString();
        keyDown.preventDefault();
        break;
      case "ArrowDown":
        activeElement.value = computeValueOnArrowPress("ArrowDown", activeElement, isShiftHeld).toString();
        keyDown.preventDefault();
        break;

      case "Shift":
        isShiftHeld = true;
        keyDown.preventDefault();
        break;
      case "Tab":
        if (activeElement.id === "edit") {
          isShiftHeld
            ? document.getElementById("amount").focus()
            : document.getElementById("increase-decrease").focus();
          keyDown.preventDefault();
        } else if (activeElement.id === "increase-decrease") {
          isShiftHeld ? document.getElementById("edit").focus() : document.getElementById("width-height").focus();
          keyDown.preventDefault();
        }
        break;
      case "E":
        isShiftHeld ? modifyTable() : null;
        isShiftHeld ? keyDown.preventDefault() : null;
        break;
      case "Enter":
        if (activeElement.type === "checkbox") {
          activeElement.checked = !activeElement.checked;
        }
        break;
      default:
        break;
    }
  }
};

document.onkeyup = keyUp => {
  if (keyUp.key) {
    switch (keyUp.key) {
      case "Shift":
        isShiftHeld = false;
        keyUp.preventDefault();
        break;
    }
  }
};

const computeValueOnArrowPress = (
  arrowPressed: string,
  activeElement: HTMLInputElement,
  isShiftHeld: boolean,
): number => {
  let value: number = parseInt(activeElement.value, 10);
  return value && !activeElement.list && activeElement.type === "text"
    ? isShiftHeld
      ? arrowPressed === "ArrowUp"
        ? (value += 10)
        : (value -= 10)
      : arrowPressed === "ArrowUp"
      ? (value += 1)
      : (value -= 1)
    : null;
};

const modifyTable = () => {
  document.getElementById("valid").classList.add("show");
  document.getElementById("invalid").classList.remove("show");
  let validInput: boolean = true;
  const amount: number = parseInt((document.getElementById("amount") as HTMLInputElement).value, 10);
  if ((document.getElementById("increase-decrease") as HTMLSelectElement).value === "decrease") {
    if ((document.getElementById("width-height") as HTMLSelectElement).value === "width") {
      document.getElementById("invalid").innerHTML = "Reduction will cause text to have less than 0 width.";
      if (selectedGrid.minimumTextWidth - amount <= 0) {
        validInput = false;
      }
    } else if ((document.getElementById("width-height") as HTMLSelectElement).value === "height") {
      document.getElementById("invalid").innerHTML = "Reduction will cause text to have less than 0 height.";
      if (selectedGrid.minimumTextHeight - amount <= 0) {
        validInput = false;
      }
    }
  }
  if (validInput) {
    document.getElementById("lds").classList.add("is-visible");
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: Constants.UIToCodeMessageType.EDIT_CONTENTS,
            payload: {
              selectedGrid: selectedGrid,
              decrease:
                (document.getElementById("increase-decrease") as HTMLSelectElement).value === "decrease" ? true : false,
              rows: (document.getElementById("width-height") as HTMLSelectElement).value === "height" ? true : false,
              index: (document.getElementById("column-row") as HTMLSelectElement).value,
              amount: amount,
            },
          },
        },
        "*",
      );
    }, 50);
  } else {
    document.getElementById("valid").classList.remove("show");
    document.getElementById("invalid").classList.add("show");
  }
};

const populateModificationOptions = (): void => {
  document.getElementById("selected-grid-name").innerHTML = selectedGrid.name;
  (document.getElementById("increase-decrease") as HTMLSelectElement).disabled = false;
  (document.getElementById("width-height") as HTMLSelectElement).disabled = false;
  toggleRowColumn((document.getElementById("width-height") as HTMLSelectElement).value);
  document.getElementById("selected").classList.add("show");
  document.getElementById("deselected").classList.remove("show");
  (document.getElementById("increase-decrease") as HTMLSelectElement).focus();
};

const toggleRowColumn = (property: string) => {
  let columnRowOptions: string =
    property === "width"
      ? `<option value="column, all" selected>all columns</option>`
      : `<option value="row, all" selected>all rows</option>`;
  if (property === "width") {
    for (let i: number = 0; i < selectedGrid.columns; i++) {
      columnRowOptions += `<option value="${i + 1}">Column ${i + 1}</option>`;
    }
  } else {
    for (let i: number = 0; i < selectedGrid.rows; i++) {
      columnRowOptions += `<option value="${selectedGrid.rows - i}">Row ${i + 1}</option>`;
    }
  }
  (document.getElementById("column-row") as HTMLSelectElement).innerHTML = columnRowOptions;
  (document.getElementById("column-row") as HTMLSelectElement).disabled = false;
  (document.getElementById("amount") as HTMLInputElement).disabled = false;
  (document.getElementById("edit") as HTMLInputElement).disabled = false;
};

const disableModificationOptions = (): void => {
  if (selectedGrid.name === "---") {
    (document.getElementById("increase-decrease") as HTMLSelectElement).disabled = true;
    (document.getElementById("width-height") as HTMLSelectElement).disabled = true;
    (document.getElementById("column-row") as HTMLSelectElement).disabled = true;
    (document.getElementById("amount") as HTMLInputElement).disabled = true;
    (document.getElementById("edit") as HTMLInputElement).disabled = true;
  }
  document.getElementById("selected").classList.remove("show");
  document.getElementById("deselected").classList.add("show");
};
