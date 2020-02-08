import "./ui.css";
import * as Figma from "./utils/utils";

/* Objects */
type ReferenceCoordinates = import("./interfaces/interfaces").ReferenceCoordinates;

/* Constants */
const defaultInputsForModes: { [key: string]: string[] } = {
  // first on list is the default selected
  "count-and-table-size": ["tableWidth", "tableHeight", "columns", "rows"],
  "count-and-cell-size": ["columns", "rows", "columnWidth", "rowHeight"],
  "cell-and-table-size": ["tableWidth", "tableHeight", "columnWidth", "rowHeight"],
};
const defaultValuesForInputs: { [key: string]: string } = {
  tableWidth: "1024",
  tableHeight: "768",
  columnWidth: "100",
  rowHeight: "30",
  columns: "5",
  rows: "8",
};

/* State Changes Variable */
let isShiftHeld: boolean = false;
let isAltHeld: boolean = false;

/* Run after onLoad */
window.addEventListener("load", function() {
  Figma.getHTMLInputElementById("tableWidth").select();
});

/* Receive message from plugin code */
onmessage = fontOptions => {
  constructFontOptions(fontOptions);
};

/* Construct Font Options */
function constructFontOptions(fontOptions: MessageEvent) {
  const pluginFontOptions: { [key: string]: string[] } = fontOptions.data.pluginMessage;
  let dataListHTML: string = "";
  Object.keys(pluginFontOptions).forEach(fontFamily => {
    dataListHTML += `<option value="${fontFamily}" />`;
  });
  Figma.getHTMLElementById("tableFontOptions").innerHTML = dataListHTML;
  Figma.getHTMLElementById("headerFontOptions").innerHTML = dataListHTML;
  Figma.getHTMLInputElementById("tableFont").value = "Arial";
  Figma.getHTMLInputElementById("headerFont").value = "Roboto";
}

/* Toggle HTML Rendering */
function toggleEditable(htmlTagId: string, isPrerequisiteSelected: boolean, defaultValue: string): void {
  const htmlTagById: HTMLInputElement = Figma.getHTMLInputElementById(htmlTagId);
  if (htmlTagById.checked) {
    htmlTagById.checked = false;
  }
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    htmlTagById.value = defaultValue;
  } else {
    htmlTagById.disabled = true;
    htmlTagById.value = "N.A.";
  }
  return null;
}

/* Reset Invalid CSS */
function resetInvalidInput(): void {
  const inputList: string[] = Object.keys(defaultValuesForInputs);
  for (let input of inputList) {
    Figma.getHTMLElementById(input).classList.remove("invalid");
  }
}

/* Set Invalid CSS by List */
function setInvalidInputs(mode: string): void {
  const inputList: string[] = defaultInputsForModes[mode];
  for (let input of inputList) {
    Figma.getHTMLElementById(input).classList.add("invalid");
  }
}

/* Toggle HTML Rendering */
function setDefault(mode: string) {
  const inputList: string[] = Object.keys(defaultValuesForInputs);
  for (let input of inputList) {
    if (defaultInputsForModes[mode].indexOf(input) > -1) {
      toggleEditable(input, true, defaultValuesForInputs[input]);
    } else {
      toggleEditable(input, false, defaultValuesForInputs[input]);
    }
  }
  resetInvalidInput();
  Figma.getHTMLInputElementById(defaultInputsForModes[mode][0]).select();
}

/* Validate User Input */
function validateInput(mode: string, columns: number, rows: number, columnWidth: number, rowHeight: number): boolean {
  let validInput: boolean = true;
  // reset invalid CSS
  resetInvalidInput();
  // negative and invalid value check
  const inputsForMode: string[] = defaultInputsForModes[mode];
  for (let input of inputsForMode) {
    const inputValue: number = Figma.getValue(input, "number") as number;
    if (!inputValue || inputValue < 0) {
      Figma.getHTMLInputElementById(input).classList.add("invalid");
      validInput = false;
    }
  }
  // limit check
  if (validInput) {
    if (columns * columnWidth > 5000 || rows * rowHeight > 5000 || columns > 100 || rows > 100) {
      setInvalidInputs(mode);
      validInput = false;
    }
  }
  Figma.getHTMLInputElementById(defaultInputsForModes[mode][0]).select();
  return validInput;
}

/* Document OnChange Actions */
// Detect inputs state change
const inputList: string[] = Object.keys(defaultValuesForInputs);
for (let input of inputList) {
  document.getElementById(input).onchange = () => {
    Figma.getHTMLInputElementById(input).classList.remove("invalid");
  };
}
// Detect radio buttons state change
const modes: string[] = Object.keys(defaultInputsForModes);
for (let mode of modes) {
  document.getElementById(mode).onclick = () => {
    if (Figma.getHTMLInputElementById(mode).checked) {
      setDefault(mode);
    }
  };
}
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
  toggleEditable("floatingFilter", Figma.getHTMLInputElementById("header").checked, "");
  toggleEditable("headerHeight", Figma.getHTMLInputElementById("header").checked, "60");
  toggleEditable("floatingFilterHeight", Figma.getHTMLInputElementById("floatingFilter").checked, "");
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
  toggleEditable("floatingFilterHeight", Figma.getHTMLInputElementById("floatingFilter").checked, "30");
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
  toggleEditable("stripedbackgroundColor", Figma.getHTMLInputElementById("alternateBackgrounds").checked, "#FFFFFF");
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
  toggleEditable("borderColor", Figma.getHTMLInputElementById("borders").checked, "#C7C7C7");
};
// Create Button Actions
document.getElementById("create").onclick = () => {
  // Disable create button and display loader
  Figma.getHTMLInputElementById("create").disabled = true;
  Figma.getHTMLElementById("lds").classList.add("is-visible");
  // FIXME ensures that button is disabled and loader is displayed before processing input
  processInputToMessage();
};

/* Keyboard Navigation */
document.onkeydown = keyDown => {
  if (keyDown.key) {
    let activeElement = document.activeElement as HTMLInputElement;
    if (keyDown.key === "Shift") {
      isShiftHeld = true;
    } else if (keyDown.key === "Alt") {
      isAltHeld = true;
    } else if (keyDown.key.match(/Arrow\w+/g)) {
      let value: number = parseInt(activeElement.value, 10);
      if (activeElement.type === "text" && value) {
        if (isShiftHeld === false) {
          switch (keyDown.key) {
            case "ArrowUp":
              value += 1;
              break;
            case "ArrowDown":
              value -= 1;
              break;
          }
        } else {
          switch (keyDown.key) {
            case "ArrowUp":
              value += 10;
              break;
            case "ArrowDown":
              value -= 10;
              break;
          }
        }
        activeElement.value = value.toString();
        activeElement.select();
        keyDown.preventDefault();
      }
    } else if (keyDown.key === "Tab") {
      // Selected Mode
      const mode: string = Figma.getValue("count-and-table-size", "boolean")
        ? "count-and-table-size"
        : Figma.getValue("count-and-cell-size", "boolean")
        ? "count-and-cell-size"
        : "cell-and-table-size";
      if (activeElement.id === "create" && isShiftHeld === false) {
        Figma.getHTMLInputElementById(defaultInputsForModes[mode][0]).select();
        keyDown.preventDefault();
      } else if (
        activeElement === Figma.getHTMLInputElementById(defaultInputsForModes[mode][0]) &&
        isShiftHeld === true
      ) {
        document.getElementById("create").focus();
        keyDown.preventDefault();
      }
    } else if (keyDown.key === "Enter") {
      if (activeElement.type === "checkbox") {
        activeElement.checked = !activeElement.checked;
        if (activeElement.id === "header") {
          toggleEditable("floatingFilter", activeElement.checked, "");
          toggleEditable("headerHeight", activeElement.checked, "60");
        } else if (activeElement.id === "floatingFilter") {
          toggleEditable("floatingFilterHeight", activeElement.checked, "30");
        } else if (activeElement.id === "alternateBackgrounds") {
          toggleEditable("stripedbackgroundColor", activeElement.checked, "#FFFFFF");
        } else if (activeElement.id === "borders") {
          toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
        }
      }
    } else if (keyDown.key === "1" || keyDown.key === "2" || keyDown.key === "3") {
      if (isAltHeld) {
        switch (keyDown.key) {
          case "1":
            Figma.getHTMLInputElementById("cell-and-table-size").checked = true;
            setDefault("cell-and-table-size");
            keyDown.preventDefault();
            break;
          case "2":
            Figma.getHTMLInputElementById("count-and-cell-size").checked = true;
            setDefault("count-and-cell-size");
            keyDown.preventDefault();
            break;
          case "3":
            Figma.getHTMLInputElementById("count-and-table-size").checked = true;
            setDefault("count-and-table-size");
            keyDown.preventDefault();
            break;
        }
      }
    }
  }
};
document.onkeyup = keyUp => {
  if (keyUp.key === "Shift") {
    isShiftHeld = false;
  } else if (keyUp.key === "Alt") {
    isAltHeld = false;
  }
};

/* Process Input */
function processInputToMessage(): void {
  // Selected Mode
  const mode: string = Figma.getValue("count-and-table-size", "boolean")
    ? "count-and-table-size"
    : Figma.getValue("count-and-cell-size", "boolean")
    ? "count-and-cell-size"
    : "cell-and-table-size";
  // Table Font Info
  const tableFont = Figma.getValue("tableFont", "string");
  // Header Info
  const header = Figma.getValue("header", "boolean");
  const headerHeight = Figma.getValue("headerHeight", "number");
  const headerFont = Figma.getValue("headerFont", "string");
  const floatingFilter = Figma.getValue("floatingFilter", "boolean");
  const floatingFilterHeight = Figma.getValue("floatingFilterHeight", "number");
  // Properties and Customisations
  const borders = Figma.getValue("borders", "boolean");
  const alternateBackgrounds = Figma.getValue("alternateBackgrounds", "boolean");
  const primarybackgroundColor = Figma.getValue("primarybackgroundColor", "string");
  const stripedbackgroundColor = Figma.getValue("stripedbackgroundColor", "string");
  const borderColor = Figma.getValue("borderColor", "string");
  // Constraints Processing
  let columns: number = 0;
  let columnWidth: number = 0;
  let rows: number = 0;
  let rowHeight: number = 0;
  let tableWidth: number = 0;
  let tableHeight: number = 0;
  let referenceCoordinates: ReferenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case "count-and-table-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth = (Figma.getValue("tableWidth", "number") as number) / columns;
      rowHeight = ((Figma.getValue("tableHeight", "number") as number) - (headerHeight as number)) / rows;
      break;
    case "count-and-cell-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      break;
    case "cell-and-table-size":
      tableWidth = Figma.getValue("tableWidth", "number") as number;
      tableHeight = Figma.getValue("tableHeight", "number") as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      columns = Math.floor(tableWidth / columnWidth);
      rows = Math.floor((tableHeight - (headerHeight as number)) / rowHeight + 1);
      referenceCoordinates.y = tableHeight % rowHeight;
      break;
  }
  // Validation
  const validWithinLimits: boolean = validateInput(mode, columns, rows, columnWidth, rowHeight);
  if (validWithinLimits) {
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "create-table",
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            tableFont: tableFont,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            headerFont: headerFont,
            floatingFilter: floatingFilter,
            floatingFilterHeight: floatingFilterHeight,
            primarybackgroundColor: primarybackgroundColor,
            stripedbackgroundColor: stripedbackgroundColor,
            borderColor: borderColor,
            referenceCoordinates: referenceCoordinates,
          },
        },
        "*",
      );
    }, 100);
  } else {
    // Enable create button and hide loader
    Figma.getHTMLInputElementById("create").disabled = false;
    Figma.getHTMLElementById("lds").classList.remove("is-visible");
  }
}
