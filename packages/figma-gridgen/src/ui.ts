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
  const fontFamilyOptionsHTML = constructFontFamilyOptions(fontOptions);
  const fontStyleOptionsHTML = constructFontStyleOptions(
    fontOptions,
    Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
  );
  Utils.getHTMLElementById("tableFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  Utils.getHTMLElementById("headerFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  Utils.getHTMLElementById("tableFontStyle").innerHTML = fontStyleOptionsHTML;
  Utils.getHTMLElementById("headerFontStyle").innerHTML = fontStyleOptionsHTML;
  Utils.getHTMLInputElementById("tableFontFamily").value = Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY;
  Utils.getHTMLInputElementById("headerFontFamily").value = Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY;
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
    const selected: string = fontStyle === Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_STYLE ? "selected" : "";
    fontStyleOptionsHTML += `<option value="${fontStyle}" ${selected}>${fontStyle}</option>`;
  });
  return fontStyleOptionsHTML;
}

/* Toggle HTML Rendering */
function toggleEditable(
  htmlTagType: Constants.HtmlTagType,
  htmlTagId: string,
  isPrerequisiteSelected: boolean,
  defaultValue: string,
): void {
  let htmlTagById;
  switch (htmlTagType) {
    case Constants.HtmlTagType.INPUT:
      htmlTagById = Utils.getHTMLInputElementById(htmlTagId) as HTMLInputElement;
      break;
    case Constants.HtmlTagType.SELECT:
      htmlTagById = Utils.getHTMLElementById(htmlTagId) as HTMLSelectElement;
      break;
    default:
      break;
  }
  if (htmlTagById.checked) {
    htmlTagById.checked = false;
  }
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    switch (htmlTagType) {
      case Constants.HtmlTagType.INPUT:
        htmlTagById.value = defaultValue;
        break;
      case Constants.HtmlTagType.SELECT:
        htmlTagById.innerHTML = defaultValue;
        break;
      default:
        break;
    }
  } else {
    htmlTagById.disabled = true;
    htmlTagById.value = Constants.DefaultValuesForInputs.DISABLED;
  }
  return null;
}

/* Reset Invalid CSS */
function resetInvalidInput(): void {
  const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
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
  const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
  for (let input of inputList) {
    if (Constants.defaultInputsForModes[mode].indexOf(input) > -1) {
      toggleEditable(Constants.HtmlTagType.INPUT, input, true, Constants.inputsAffectedByMode[input]);
    } else {
      toggleEditable(Constants.HtmlTagType.INPUT, input, false, Constants.inputsAffectedByMode[input]);
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
    if (
      columns * columnWidth > Constants.maxDimensionInPixels ||
      rows * rowHeight > Constants.maxDimensionInPixels ||
      columns > Constants.maxNumberOfRowsOrColumns ||
      rows > Constants.maxNumberOfRowsOrColumns
    ) {
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
const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
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
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "floatingFilter",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.CHECKBOX,
  );
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerHeight",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.HEADER_HEIGHT,
  );
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerFontFamily",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
  );
  toggleEditable(
    Constants.HtmlTagType.SELECT,
    "headerFontStyle",
    Utils.getHTMLInputElementById("header").checked,
    constructFontStyleOptions(processedFontOptions, Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY),
  );
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerFontSize",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.OVERALL_FONT_SIZE,
  );
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "floatingFilterHeight",
    Utils.getHTMLInputElementById("floatingFilter").checked,
    Constants.DefaultValuesForInputs.CHECKBOX,
  );
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "floatingFilterHeight",
    Utils.getHTMLInputElementById("floatingFilter").checked,
    Constants.DefaultValuesForInputs.FLOATING_FILTER_HEIGHT,
  );
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
  toggleEditable(
    Constants.HtmlTagType.INPUT,
    "stripedbackgroundColor",
    Utils.getHTMLInputElementById("alternateBackgrounds").checked,
    Constants.ColorNameToHex.WHITE,
  );
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
  toggleEditable(
    Constants.HtmlTagType.INPUT,
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
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "floatingFilter",
            Utils.getHTMLInputElementById("header").checked,
            Constants.DefaultValuesForInputs.CHECKBOX,
          );
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "headerHeight",
            Utils.getHTMLInputElementById("header").checked,
            Constants.DefaultValuesForInputs.HEADER_HEIGHT,
          );
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "headerFontFamily",
            Utils.getHTMLInputElementById("header").checked,
            Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
          );
          toggleEditable(
            Constants.HtmlTagType.SELECT,
            "headerFontStyle",
            Utils.getHTMLInputElementById("header").checked,
            constructFontStyleOptions(processedFontOptions, Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY),
          );
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "headerFontSize",
            Utils.getHTMLInputElementById("header").checked,
            Constants.DefaultValuesForInputs.OVERALL_FONT_SIZE,
          );
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "floatingFilterHeight",
            Utils.getHTMLInputElementById("floatingFilter").checked,
            Constants.DefaultValuesForInputs.CHECKBOX,
          );
        } else if (activeElement.id === "floatingFilter") {
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "floatingFilterHeight",
            activeElement.checked,
            Constants.DefaultValuesForInputs.FLOATING_FILTER_HEIGHT,
          );
        } else if (activeElement.id === "alternateBackgrounds") {
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "stripedbackgroundColor",
            activeElement.checked,
            Constants.ColorNameToHex.WHITE,
          );
        } else if (activeElement.id === "borders") {
          toggleEditable(
            Constants.HtmlTagType.INPUT,
            "borderColor",
            activeElement.checked,
            Constants.ColorNameToHex.GREY_C7,
          );
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
  processInputToMessage();
}

/* Process Input */
function processInputToMessage(): void {
  // Selected Mode
  const mode: string = Utils.getValue(Constants.Modes.COUNT_AND_TABLE_SIZE, Constants.InputType.BOOLEAN)
    ? Constants.Modes.COUNT_AND_TABLE_SIZE
    : Utils.getValue(Constants.Modes.COUNT_AND_CELL_SIZE, Constants.InputType.BOOLEAN)
    ? Constants.Modes.COUNT_AND_CELL_SIZE
    : Constants.Modes.CELL_AND_TABLE_SIZE;
  // PluginMessage Creation
  const createMessage: Interfaces.PluginMessage = { type: Constants.MessageType.CREATE };
  // Table Font Info
  Object.keys(Constants.inputIds).forEach(id => {
    createMessage[id] = Utils.getValue(id, Constants.inputIds[id]);
  });
  // Constraints Processing
  createMessage.referenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case "count-and-table-size":
      createMessage.columns = Utils.getValue("columns", Constants.InputType.NUMBER) as number;
      createMessage.rows = Utils.getValue("rows", Constants.InputType.NUMBER) as number;
      createMessage.columnWidth =
        (Utils.getValue("tableWidth", Constants.InputType.NUMBER) as number) / createMessage.columns;
      createMessage.rowHeight =
        ((Utils.getValue("tableHeight", Constants.InputType.NUMBER) as number) -
          (createMessage.headerHeight as number)) /
        createMessage.rows;
      break;
    case "count-and-cell-size":
      createMessage.columns = Utils.getValue("columns", Constants.InputType.NUMBER) as number;
      createMessage.rows = Utils.getValue("rows", Constants.InputType.NUMBER) as number;
      createMessage.columnWidth = Utils.getValue("columnWidth", Constants.InputType.NUMBER) as number;
      createMessage.rowHeight = Utils.getValue("rowHeight", Constants.InputType.NUMBER) as number;
      break;
    case "cell-and-table-size":
      createMessage.tableWidth = Utils.getValue("tableWidth", Constants.InputType.NUMBER) as number;
      createMessage.tableHeight = Utils.getValue("tableHeight", Constants.InputType.NUMBER) as number;
      createMessage.columnWidth = Utils.getValue("columnWidth", Constants.InputType.NUMBER) as number;
      createMessage.rowHeight = Utils.getValue("rowHeight", Constants.InputType.NUMBER) as number;
      createMessage.columns = Math.floor(createMessage.tableWidth / createMessage.columnWidth);
      createMessage.rows = Math.floor(
        (createMessage.tableHeight - createMessage.headerHeight) / createMessage.rowHeight + 1,
      );
      createMessage.referenceCoordinates.y = createMessage.tableHeight % createMessage.rowHeight;
      break;
  }
  // Validation
  const validWithinLimits: boolean = validateInput(
    mode,
    createMessage.columns,
    createMessage.rows,
    createMessage.columnWidth,
    createMessage.rowHeight,
    createMessage.header,
    createMessage.floatingFilter,
  );
  if (validWithinLimits) {
    parent.postMessage(
      {
        pluginMessage: createMessage,
      },
      "*",
    );
  } else {
    // Enable create button and hide loader
    Utils.getHTMLInputElementById("create").disabled = false;
    Utils.getHTMLElementById("lds").classList.remove("is-visible");
  }
}
