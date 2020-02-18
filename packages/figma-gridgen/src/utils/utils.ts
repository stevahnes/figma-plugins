import * as Constants from "../interfaces-constants/constants";
import * as Interfaces from "../interfaces-constants/interfaces";

/* Clone function taken from Figma Plugin API example */
export function clone(val) {
  const type = typeof val;
  if (val === null) {
    return null;
  } else if (type === "undefined" || type === "number" || type === "string" || type === "boolean") {
    return val;
  } else if (type === "object") {
    if (val instanceof Array) {
      return val.map(x => clone(x));
    } else if (val instanceof Uint8Array) {
      return new Uint8Array(val);
    } else {
      let o = {};
      for (const key in val) {
        o[key] = clone(val[key]);
      }
      return o;
    }
  }
  throw "unknown";
}

/* HEX to RGB Conversion */
export function hexToRgb(hex: string): RGB {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/* HTML Elements */
// Select generic HTML Element
export function getHTMLElementById(htmlElement: string): HTMLElement {
  return document.getElementById(htmlElement) as HTMLElement;
}
// Select Input Element
export function getHTMLInputElementById(htmlElement: string): HTMLInputElement {
  return document.getElementById(htmlElement) as HTMLInputElement;
}
// Get active mode
export function getActiveMode(): Constants.Modes {
  return getValue(Constants.Modes.COUNT_AND_TABLE_SIZE, Constants.InputType.BOOLEAN)
    ? Constants.Modes.COUNT_AND_TABLE_SIZE
    : getValue(Constants.Modes.COUNT_AND_CELL_SIZE, Constants.InputType.BOOLEAN)
    ? Constants.Modes.COUNT_AND_CELL_SIZE
    : Constants.Modes.CELL_AND_TABLE_SIZE;
}
// Reset Invalid CSS
export function resetInvalidInput(): void {
  const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
  for (let input of inputList) {
    getHTMLElementById(input).classList.remove("invalid");
  }
}
// Set Invalid CSS by List
function setInvalidInputs(mode: string): void {
  const inputList: string[] = Constants.defaultInputsForModes[mode];
  for (let input of inputList) {
    getHTMLElementById(input).classList.add("invalid");
  }
}

/* Extract Inputs */
export function getValue(htmlTagId: string, inputType: Constants.InputType): number | boolean | string {
  const input = getHTMLInputElementById(htmlTagId);
  switch (inputType) {
    case Constants.InputType.NUMBER:
      return parseInt(input.value, 10) ? parseInt(input.value, 10) : 0;
    case Constants.InputType.BOOLEAN:
      return input.checked;
    case Constants.InputType.STRING:
      return input.value;
  }
}

/* Validate User Input */
export function validateInput(
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
  getHTMLElementById("validValidator").classList.add("show");
  getHTMLElementById("negativeValidator").classList.remove("show");
  getHTMLElementById("constraintValidator").classList.remove("show");
  // negative and invalid value check
  let inputsToValidate: string[] = Constants.defaultInputsForModes[mode].concat(["tableFontSize"]);
  if (hasHeader) {
    inputsToValidate = inputsToValidate.concat(["headerHeight", "headerFontSize"]);
  }
  if (hasFloatingFilter) {
    inputsToValidate = inputsToValidate.concat(["floatingFilterHeight"]);
  }
  for (let input of inputsToValidate) {
    const inputValue: number = getValue(input, Constants.InputType.NUMBER) as number;
    if (!inputValue || inputValue < 1) {
      getHTMLInputElementById(input).classList.add("invalid");
      getHTMLElementById("validValidator").classList.remove("show");
      getHTMLElementById("negativeValidator").classList.add("show");
      getHTMLElementById("constraintValidator").classList.remove("show");
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
      getHTMLElementById("validValidator").classList.remove("show");
      getHTMLElementById("negativeValidator").classList.remove("show");
      getHTMLElementById("constraintValidator").classList.add("show");
      validInput = false;
    }
  }
  getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]).select();
  return validInput;
}

/* Process Input */
export function processInputToMessage(): void {
  // Selected Mode
  const mode: Constants.Modes = getActiveMode();
  // PluginMessage Creation
  const createMessage: Interfaces.PluginMessage = { type: Constants.MessageType.CREATE, mode: mode };
  // Table Font Info
  Object.keys(Constants.inputIds).forEach(id => {
    createMessage[id] = getValue(id, Constants.inputIds[id]);
  });
  // Constraints Processing
  createMessage.referenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case Constants.Modes.COUNT_AND_TABLE_SIZE:
      createMessage.columnWidth = createMessage.tableWidth / createMessage.columns;
      createMessage.rowHeight = (createMessage.tableHeight - createMessage.headerHeight) / createMessage.rows;
      break;
    case Constants.Modes.CELL_AND_TABLE_SIZE:
      createMessage.columns = Math.floor(createMessage.tableWidth / createMessage.columnWidth);
      createMessage.rows = Math.floor(
        (createMessage.tableHeight - createMessage.headerHeight) / createMessage.rowHeight + 1,
      );
      createMessage.referenceCoordinates.y = createMessage.tableHeight % createMessage.rowHeight;
      break;
    default:
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
    getHTMLInputElementById("create").disabled = false;
    getHTMLElementById("lds").classList.remove("is-visible");
  }
}

/* Toggle HTML Input Editability */
// Generic function
export function toggleEditable(
  htmlTagType: Constants.HtmlTagType,
  htmlTagId: string,
  isPrerequisiteSelected: boolean,
  defaultValue: string,
): void {
  let htmlTagById;
  // Get HTML tag based on type
  switch (htmlTagType) {
    case Constants.HtmlTagType.INPUT:
      htmlTagById = getHTMLInputElementById(htmlTagId) as HTMLInputElement;
      break;
    case Constants.HtmlTagType.SELECT:
      htmlTagById = getHTMLElementById(htmlTagId) as HTMLSelectElement;
      break;
    default:
      break;
  }
  // Unchecked any checkbox inputs
  if (htmlTagById.checked) {
    htmlTagById.checked = false;
  }
  // If input has to be enabled
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    switch (htmlTagType) {
      // Populate default value for textboxes
      case Constants.HtmlTagType.INPUT:
        htmlTagById.value = defaultValue;
        break;
      // Populate options for select
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

/* Construct Font Options */
// Font family
export function constructFontFamilyOptions(pluginFontOptions: { [key: string]: string[] }): string {
  let fontFamilyOptionsHTML: string = "";
  Object.keys(pluginFontOptions).forEach(fontFamily => {
    fontFamilyOptionsHTML += `<option value="${fontFamily}" />`;
  });
  return fontFamilyOptionsHTML;
}
// Font style
export function constructFontStyleOptions(
  pluginFontOptions: { [key: string]: string[] },
  selectedFontFamily: string,
  selectedFontStyle?: string,
): string {
  let fontStyleOptionsHTML: string = "";
  pluginFontOptions[selectedFontFamily].forEach(fontStyle => {
    const selected: string =
      fontStyle === selectedFontStyle
        ? "selected"
        : fontStyle === Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_STYLE && !selectedFontStyle
        ? "selected"
        : "";
    fontStyleOptionsHTML += `<option value="${fontStyle}" ${selected}>${fontStyle}</option>`;
  });
  return fontStyleOptionsHTML;
}
