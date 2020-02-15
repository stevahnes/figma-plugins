import "./ui.css";
import * as Utils from "./utils/utils";
import * as Interfaces from "./interfaces_and_constants/interfaces";
import * as Constants from "./interfaces_and_constants/constants";

/* State Changes Variable */
let isShiftHeld: boolean = false;
let isAltHeld: boolean = false;

/* Store Font Options */
let processedFontOptions: { [key: string]: string[] } = {};

/* Run after onLoad */
window.addEventListener("load", function() {
  Utils.getHTMLInputElementById("tableWidth").select();
});

/* Receive message from plugin code */
onmessage = fontOptions => {
  processedFontOptions = fontOptions.data.pluginMessage;
  constructInitialFontOptions(processedFontOptions);
};

/* Construct Font Options */
function constructInitialFontOptions(fontOptions: { [key: string]: string[] }) {
  const overallDefaultFont: string = "Roboto";
  const fontFamilyOptionsHTML = constructFontFamilyOptions(fontOptions);
  const fontStyleOptionsHTML = constructFontStyleOptions(fontOptions, overallDefaultFont);
  Utils.getHTMLElementById("tableFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  Utils.getHTMLElementById("headerFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  Utils.getHTMLElementById("tableFontStyle").innerHTML = fontStyleOptionsHTML;
  Utils.getHTMLElementById("headerFontStyle").innerHTML = fontStyleOptionsHTML;
  Utils.getHTMLInputElementById("tableFontFamily").value = overallDefaultFont;
  Utils.getHTMLInputElementById("headerFontFamily").value = overallDefaultFont;
}
function constructFontFamilyOptions(pluginFontOptions: { [key: string]: string[] }): string {
  let fontFamilyOptionsHTML: string = "";
  Object.keys(pluginFontOptions).forEach(fontFamily => {
    fontFamilyOptionsHTML += `<option value="${fontFamily}" />`;
  });
  return fontFamilyOptionsHTML;
}
function constructFontStyleOptions(pluginFontOptions: { [key: string]: string[] }, selectedFontFamily: string): string {
  let fontStyleOptionsHTML: string = "";
  pluginFontOptions[selectedFontFamily].forEach(fontStyle => {
    fontStyleOptionsHTML += `<option value="${fontStyle}">${fontStyle}</option>`;
  });
  return fontStyleOptionsHTML;
}

/* Toggle HTML Rendering */
function toggleEditable(
  htmlTagType: string,
  htmlTagId: string,
  isPrerequisiteSelected: boolean,
  defaultValue: string,
): void {
  let htmlTagById;
  if (htmlTagType === "input") {
    htmlTagById = Utils.getHTMLInputElementById(htmlTagId) as HTMLInputElement;
  } else if (htmlTagType === "select") {
    htmlTagById = Utils.getHTMLElementById(htmlTagId) as HTMLSelectElement;
  }
  if (htmlTagById.checked) {
    htmlTagById.checked = false;
  }
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    if (htmlTagType === "input") {
      htmlTagById.value = defaultValue;
    } else if (htmlTagType === "select") {
      htmlTagById.innerHTML = defaultValue;
    }
  } else {
    htmlTagById.disabled = true;
    htmlTagById.value = "N.A.";
  }
  return null;
}

/* Reset Invalid CSS */
function resetInvalidInput(): void {
  const inputList: string[] = Object.keys(Constants.defaultValuesForInputs);
  for (let input of inputList) {
    Utils.getHTMLElementById(input).classList.remove("invalid");
  }
}

/* Set Invalid CSS by List */
function setInvalidInputs(mode: string): void {
  const inputList: string[] = Constants.defaultInputsForModes[mode];
  for (let input of inputList) {
    Utils.getHTMLElementById(input).classList.add("invalid");
  }
}

/* Toggle HTML Rendering */
function setDefault(mode: string) {
  const inputList: string[] = Object.keys(Constants.defaultValuesForInputs);
  for (let input of inputList) {
    if (Constants.defaultInputsForModes[mode].indexOf(input) > -1) {
      toggleEditable("input", input, true, Constants.defaultValuesForInputs[input]);
    } else {
      toggleEditable("input", input, false, Constants.defaultValuesForInputs[input]);
    }
  }
  resetInvalidInput();
  Utils.getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]).select();
}

/* Validate User Input */
function validateInput(
  mode: string,
  columns: number,
  rows: number,
  columnWidth: number,
  rowHeight: number,
  hasHeader: boolean,
  hasFloatingFilter: boolean,
): boolean {
  let validInput: boolean = true;
  // reset invalid CSS and validators
  resetInvalidInput();
  Utils.getHTMLElementById("validValidator").classList.add("show");
  Utils.getHTMLElementById("negativeValidator").classList.remove("show");
  Utils.getHTMLElementById("constraintValidator").classList.remove("show");
  // negative and invalid value check
  let inputsToValidate: string[] = Constants.defaultInputsForModes[mode].concat(["tableFontSize"]);
  if (hasHeader) {
    inputsToValidate = inputsToValidate.concat(["headerHeight", "headerFontSize"]);
  }
  if (hasFloatingFilter) {
    inputsToValidate = inputsToValidate.concat(["floatingFilterHeight"]);
  }
  for (let input of inputsToValidate) {
    const inputValue: number = Utils.getValue(input, Constants.InputType.NUMBER) as number;
    if (!inputValue || inputValue < 1) {
      Utils.getHTMLInputElementById(input).classList.add("invalid");
      Utils.getHTMLElementById("validValidator").classList.remove("show");
      Utils.getHTMLElementById("negativeValidator").classList.add("show");
      Utils.getHTMLElementById("constraintValidator").classList.remove("show");
      validInput = false;
    }
  }
  // limit check
  if (validInput) {
    if (columns * columnWidth > 5000 || rows * rowHeight > 5000 || columns > 100 || rows > 100) {
      setInvalidInputs(mode);
      Utils.getHTMLElementById("validValidator").classList.remove("show");
      Utils.getHTMLElementById("negativeValidator").classList.remove("show");
      Utils.getHTMLElementById("constraintValidator").classList.add("show");
      validInput = false;
    }
  }
  Utils.getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]).select();
  return validInput;
}

/* Document OnChange Actions */
// Detect inputs state change
const inputList: string[] = Object.keys(Constants.defaultValuesForInputs);
for (let input of inputList) {
  document.getElementById(input).onchange = () => {
    Utils.getHTMLInputElementById(input).classList.remove("invalid");
  };
}
// Detect radio buttons state change
const modes: string[] = Object.keys(Constants.defaultInputsForModes);
for (let mode of modes) {
  document.getElementById(mode).onclick = () => {
    if (Utils.getHTMLInputElementById(mode).checked) {
      setDefault(mode);
    }
  };
}
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
  toggleEditable("input", "floatingFilter", Utils.getHTMLInputElementById("header").checked, "");
  toggleEditable("input", "headerHeight", Utils.getHTMLInputElementById("header").checked, "60");
  toggleEditable("input", "headerFontFamily", Utils.getHTMLInputElementById("header").checked, "Roboto");
  toggleEditable(
    "select",
    "headerFontStyle",
    Utils.getHTMLInputElementById("header").checked,
    constructFontStyleOptions(processedFontOptions, "Roboto"),
  );
  toggleEditable("input", "headerFontSize", Utils.getHTMLInputElementById("header").checked, "12");
  toggleEditable("input", "floatingFilterHeight", Utils.getHTMLInputElementById("floatingFilter").checked, "");
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
  toggleEditable("input", "floatingFilterHeight", Utils.getHTMLInputElementById("floatingFilter").checked, "30");
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
  toggleEditable(
    "input",
    "stripedbackgroundColor",
    Utils.getHTMLInputElementById("alternateBackgrounds").checked,
    Constants.ColorNameToHex.WHITE,
  );
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
  toggleEditable(
    "input",
    "borderColor",
    Utils.getHTMLInputElementById("borders").checked,
    Constants.ColorNameToHex.GREY_C7,
  );
};
// Detect table font family dropdown state change
document.getElementById("tableFontFamily").onchange = () => {
  Utils.getHTMLElementById("tableFontStyle").innerHTML = constructFontStyleOptions(
    processedFontOptions,
    Utils.getValue("tableFontFamily", Constants.InputType.STRING) as string,
  );
};
// Detect header font family dropdown state change
document.getElementById("headerFontFamily").onchange = () => {
  Utils.getHTMLElementById("headerFontStyle").innerHTML = constructFontStyleOptions(
    processedFontOptions,
    Utils.getValue("headerFontFamily", Constants.InputType.STRING) as string,
  );
};

// Create Button Actions
document.getElementById("create").onclick = () => {
  createTable();
};

/* Keyboard Navigation */
document.onkeydown = keyDown => {
  if (keyDown.key) {
    console.log(keyDown.key);
    let activeElement = document.activeElement as HTMLInputElement;
    if (keyDown.key === "Shift") {
      isShiftHeld = true;
    } else if (keyDown.key === "Alt") {
      isAltHeld = true;
    } else if (keyDown.key.match(/Arrow\w+/g)) {
      let value: number = parseInt(activeElement.value, 10);
      if (activeElement.type === "text" && !activeElement.list && value) {
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
      const mode: string = Utils.getValue("count-and-table-size", Constants.InputType.BOOLEAN)
        ? "count-and-table-size"
        : Utils.getValue("count-and-cell-size", Constants.InputType.BOOLEAN)
        ? "count-and-cell-size"
        : "cell-and-table-size";
      if (activeElement.id === "create" && isShiftHeld === false) {
        Utils.getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]).select();
        keyDown.preventDefault();
      } else if (
        activeElement === Utils.getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]) &&
        isShiftHeld === true
      ) {
        document.getElementById("create").focus();
        keyDown.preventDefault();
      }
    } else if (keyDown.key === "Enter") {
      if (activeElement.type === "checkbox") {
        activeElement.checked = !activeElement.checked;
        if (activeElement.id === "header") {
          toggleEditable("input", "floatingFilter", Utils.getHTMLInputElementById("header").checked, "");
          toggleEditable("input", "headerHeight", Utils.getHTMLInputElementById("header").checked, "60");
          // toggleEditable("input", "headerFontFamily", Utils.getHTMLInputElementById("header").checked, "Roboto");
          toggleEditable(
            "select",
            "headerFontStyle",
            Utils.getHTMLInputElementById("header").checked,
            constructFontStyleOptions(processedFontOptions, "Roboto"),
          );
          toggleEditable("input", "headerFontSize", Utils.getHTMLInputElementById("header").checked, "12");
          toggleEditable("input", "floatingFilterHeight", Utils.getHTMLInputElementById("floatingFilter").checked, "");
        } else if (activeElement.id === "floatingFilter") {
          toggleEditable("input", "floatingFilterHeight", activeElement.checked, "30");
        } else if (activeElement.id === "alternateBackgrounds") {
          toggleEditable("input", "stripedbackgroundColor", activeElement.checked, Constants.ColorNameToHex.WHITE);
        } else if (activeElement.id === "borders") {
          toggleEditable("input", "borderColor", activeElement.checked, Constants.ColorNameToHex.GREY_C7);
        }
      }
    } else if (keyDown.key === "1" || keyDown.key === "2" || keyDown.key === "3") {
      if (isAltHeld) {
        switch (keyDown.key) {
          case "1":
            Utils.getHTMLInputElementById("cell-and-table-size").checked = true;
            setDefault("cell-and-table-size");
            keyDown.preventDefault();
            break;
          case "2":
            Utils.getHTMLInputElementById("count-and-cell-size").checked = true;
            setDefault("count-and-cell-size");
            keyDown.preventDefault();
            break;
          case "3":
            Utils.getHTMLInputElementById("count-and-table-size").checked = true;
            setDefault("count-and-table-size");
            keyDown.preventDefault();
            break;
        }
      }
    } else if (keyDown.key === "C") {
      isShiftHeld ? createTable() : null;
      keyDown.preventDefault();
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

/* Create Table */
function createTable(): void {
  // Disable create button and display loader
  Utils.getHTMLInputElementById("create").disabled = true;
  Utils.getHTMLElementById("lds").classList.add("is-visible");
  // FIXME ensures that button is disabled and loader is displayed before processing input
  processInputToMessage();
}

/* Process Input */
function processInputToMessage(): void {
  // Selected Mode
  const mode: string = Utils.getValue("count-and-table-size", Constants.InputType.BOOLEAN)
    ? "count-and-table-size"
    : Utils.getValue("count-and-cell-size", Constants.InputType.BOOLEAN)
    ? "count-and-cell-size"
    : "cell-and-table-size";
  // Table Font Info
  const tableFontFamily = Utils.getValue("tableFontFamily", Constants.InputType.STRING);
  const tableFontStyle = Utils.getValue("tableFontStyle", Constants.InputType.STRING);
  const tableFontSize = Utils.getValue("tableFontSize", Constants.InputType.NUMBER);
  // Header Info
  const header = Utils.getValue("header", Constants.InputType.BOOLEAN) as boolean;
  const headerHeight = Utils.getValue("headerHeight", Constants.InputType.NUMBER);
  const headerFontFamily = Utils.getValue("headerFontFamily", Constants.InputType.STRING);
  const headerFontStyle = Utils.getValue("headerFontStyle", Constants.InputType.STRING);
  const headerFontSize = Utils.getValue("headerFontSize", Constants.InputType.NUMBER);
  const floatingFilter = Utils.getValue("floatingFilter", Constants.InputType.BOOLEAN) as boolean;
  const floatingFilterHeight = Utils.getValue("floatingFilterHeight", Constants.InputType.NUMBER);
  // Properties and Customisations
  const borders = Utils.getValue("borders", Constants.InputType.BOOLEAN);
  const alternateBackgrounds = Utils.getValue("alternateBackgrounds", Constants.InputType.BOOLEAN);
  const primarybackgroundColor = Utils.getValue("primarybackgroundColor", Constants.InputType.STRING);
  const stripedbackgroundColor = Utils.getValue("stripedbackgroundColor", Constants.InputType.STRING);
  const borderColor = Utils.getValue("borderColor", Constants.InputType.STRING);
  // Constraints Processing
  let columns: number = 0;
  let columnWidth: number = 0;
  let rows: number = 0;
  let rowHeight: number = 0;
  let tableWidth: number = 0;
  let tableHeight: number = 0;
  let referenceCoordinates: Interfaces.ReferenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case "count-and-table-size":
      columns = Utils.getValue("columns", Constants.InputType.NUMBER) as number;
      rows = Utils.getValue("rows", Constants.InputType.NUMBER) as number;
      columnWidth = (Utils.getValue("tableWidth", Constants.InputType.NUMBER) as number) / columns;
      rowHeight =
        ((Utils.getValue("tableHeight", Constants.InputType.NUMBER) as number) - (headerHeight as number)) / rows;
      break;
    case "count-and-cell-size":
      columns = Utils.getValue("columns", Constants.InputType.NUMBER) as number;
      rows = Utils.getValue("rows", Constants.InputType.NUMBER) as number;
      columnWidth = Utils.getValue("columnWidth", Constants.InputType.NUMBER) as number;
      rowHeight = Utils.getValue("rowHeight", Constants.InputType.NUMBER) as number;
      break;
    case "cell-and-table-size":
      tableWidth = Utils.getValue("tableWidth", Constants.InputType.NUMBER) as number;
      tableHeight = Utils.getValue("tableHeight", Constants.InputType.NUMBER) as number;
      columnWidth = Utils.getValue("columnWidth", Constants.InputType.NUMBER) as number;
      rowHeight = Utils.getValue("rowHeight", Constants.InputType.NUMBER) as number;
      columns = Math.floor(tableWidth / columnWidth);
      rows = Math.floor((tableHeight - (headerHeight as number)) / rowHeight + 1);
      referenceCoordinates.y = tableHeight % rowHeight;
      break;
  }
  // Validation
  const validWithinLimits: boolean = validateInput(mode, columns, rows, columnWidth, rowHeight, header, floatingFilter);
  if (validWithinLimits) {
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: Constants.MessageType.CREATE,
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            tableFontFamily: tableFontFamily,
            tableFontStyle: tableFontStyle,
            tableFontSize: tableFontSize,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            headerFontFamily: headerFontFamily,
            headerFontStyle: headerFontStyle,
            headerFontSize: headerFontSize,
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
    Utils.getHTMLInputElementById("create").disabled = false;
    Utils.getHTMLElementById("lds").classList.remove("is-visible");
  }
}
