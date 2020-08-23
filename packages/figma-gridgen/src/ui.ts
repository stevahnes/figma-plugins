import "./ui.css";
import * as Utils from "./utils/utils";
import * as Interfaces from "./models/interfaces";
import * as Constants from "./models/constants";
import iro from "@jaames/iro";

/* State Changes Variable */
let isShiftHeld: boolean = false;
let isAltHeld: boolean = false;

/* Store Font Options, Active Mode, and Create Message */
let processedFontOptions: { [key: string]: string[] } = {};
let createMessage: Interfaces.PluginMessage;
let activeMode: string = Constants.Modes.CELL_AND_TABLE_SIZE;

/* Run after onLoad */
window.addEventListener("load", function() {
  Utils.getHTMLInputElementById("tableWidth").select();
});

/* Receive message from plugin code */
onmessage = msg => {
  processedFontOptions = msg.data.pluginMessage.fontOptions;
  createMessage = msg.data.pluginMessage.createMessage;
  const fontFamilyOptionsHTML = Utils.constructFontFamilyOptions(processedFontOptions);
  Utils.getHTMLElementById("tableFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  Utils.getHTMLElementById("headerFontFamilyOptions").innerHTML = fontFamilyOptionsHTML;
  if (createMessage) {
    resetInputToDefault(createMessage);
  } else {
    setDefaultForMode(activeMode);
    setDefaultForGenericInputs();
  }
};

/* ----------------- Color Pickers -----------------  */
let backgroundPickerMode: number = -1; // 0 is primary, 1 is striped
let backgroundColorPicker: iro.ColorPicker = new (iro.ColorPicker as any)(
  Utils.getHTMLElementById("backgroundPicker"),
  {
    width: 200,
  },
);

const primaryPickerButton: HTMLInputElement = Utils.getHTMLInputElementById("primaryPickerButton");
const stripedPickerButton: HTMLInputElement = Utils.getHTMLInputElementById("stripedPickerButton");
primaryPickerButton.onclick = () => {
  backgroundPickerMode = 0;
  const primaryBackgroundInput: HTMLInputElement = Utils.getHTMLInputElementById("primarybackgroundColor");
  backgroundColorPicker.color.set(primaryBackgroundInput.value);
  backgroundColorPicker.on("color:change", function(color) {
    if (backgroundPickerMode === 0) {
      primaryBackgroundInput.value = (color.hexString as string).toUpperCase();
    }
  });
  let modal: HTMLElement = Utils.getHTMLElementById("pickerModal");
  modal.style.display = "grid";
};
stripedPickerButton.onclick = () => {
  backgroundPickerMode = 1;
  const stripedBackgroundInput: HTMLInputElement = Utils.getHTMLInputElementById("stripedbackgroundColor");
  backgroundColorPicker.color.set(stripedBackgroundInput.value);
  backgroundColorPicker.on("color:change", function(color) {
    if (backgroundPickerMode === 1) {
      stripedBackgroundInput.value = (color.hexString as string).toUpperCase();
    }
  });
  let modal: HTMLElement = Utils.getHTMLElementById("pickerModal");
  modal.style.display = "grid";
};

const modalCloseSpan: HTMLElement = Utils.getHTMLElementById("closeSpan");
modalCloseSpan.onclick = () => {
  let modal: HTMLElement = Utils.getHTMLElementById("pickerModal");
  modal.style.display = "none";
};

/* ----------------- Document OnChange Actions -----------------  */

// Detect inputs state change
const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
for (let input of inputList) {
  document.getElementById(input).onchange = () => {
    Utils.getHTMLInputElementById(input).classList.remove("invalid");
  };
}
// Detect radio buttons state change
Object.keys(Constants.defaultInputsForModes).forEach(mode => {
  document.getElementById(mode).onclick = () => {
    Utils.getHTMLInputElementById(mode).checked && activeMode !== mode ? setDefaultForMode(mode) : null;
  };
});
// Detect checkboxes state change
Object.keys(Constants.CheckboxInputIds).forEach(id => {
  Utils.getHTMLElementById(Constants.CheckboxInputIds[id]).onchange = () => {
    toggleCheckboxSubOptions(Constants.CheckboxInputIds[id]);
  };
});
// Detect table font family dropdown state change
document.getElementById("tableFontFamily").onchange = () => {
  Utils.getHTMLElementById("tableFontStyle").innerHTML = Utils.constructFontStyleOptions(
    processedFontOptions,
    Utils.getValue("tableFontFamily", Constants.InputType.STRING) as string,
  );
};
// Detect header font family dropdown state change
document.getElementById("headerFontFamily").onchange = () => {
  Utils.getHTMLElementById("headerFontStyle").innerHTML = Utils.constructFontStyleOptions(
    processedFontOptions,
    Utils.getValue("headerFontFamily", Constants.InputType.STRING) as string,
  );
};
// Button Actions
document.getElementById("create").onclick = () => {
  createTable();
};
document.getElementById("reset").onclick = () => {
  createMessage ? resetInputToDefault(createMessage) : null;
};

/* Keyboard Navigation */
document.onkeydown = keyDown => {
  if (keyDown.key) {
    let activeElement = document.activeElement as HTMLInputElement;
    switch (keyDown.key) {
      case "Shift":
        isShiftHeld = true;
        keyDown.preventDefault();
        break;
      case "Alt":
        isAltHeld = true;
        keyDown.preventDefault();
        break;
      case Constants.ArrowPresses.UP:
        activeElement.value = computeValueOnArrowPress(
          Constants.ArrowPresses.UP,
          activeElement,
          isShiftHeld,
        ).toString();
        keyDown.preventDefault();
        break;
      case Constants.ArrowPresses.DOWN:
        activeElement.value = computeValueOnArrowPress(
          Constants.ArrowPresses.DOWN,
          activeElement,
          isShiftHeld,
        ).toString();
        keyDown.preventDefault();
        break;
      case "Tab":
        // Get selected Mode
        if (activeElement.id === "create" && isShiftHeld === false) {
          Utils.getHTMLInputElementById(Constants.defaultInputsForModes[Utils.getActiveMode()][0]).select();
          keyDown.preventDefault();
        } else if (
          activeElement === Utils.getHTMLInputElementById(Constants.defaultInputsForModes[Utils.getActiveMode()][0]) &&
          isShiftHeld === true
        ) {
          document.getElementById("create").focus();
          keyDown.preventDefault();
        }
        break;
      case "Enter":
        if (activeElement.type === "checkbox") {
          activeElement.checked = !activeElement.checked;
          toggleCheckboxSubOptions(activeElement.id);
        }
        break;
      case "C":
        isShiftHeld ? createTable() : null;
        isShiftHeld ? keyDown.preventDefault() : null;
        break;
      case "R":
        isShiftHeld ? (createMessage ? resetInputToDefault(createMessage) : null) : null;
        isShiftHeld ? keyDown.preventDefault() : null;
        break;
      case "1":
        isAltHeld && activeMode !== Constants.Modes.CELL_AND_TABLE_SIZE
          ? setDefaultForMode(Constants.Modes.CELL_AND_TABLE_SIZE)
          : null;
        isAltHeld ? keyDown.preventDefault() : null;
        break;
      case "2":
        isAltHeld && activeMode !== Constants.Modes.COUNT_AND_CELL_SIZE
          ? setDefaultForMode(Constants.Modes.COUNT_AND_CELL_SIZE)
          : null;
        isAltHeld ? keyDown.preventDefault() : null;
        break;
      case "3":
        isAltHeld && activeMode !== Constants.Modes.COUNT_AND_TABLE_SIZE
          ? setDefaultForMode(Constants.Modes.COUNT_AND_TABLE_SIZE)
          : null;
        isAltHeld ? keyDown.preventDefault() : null;
        break;
      default:
        break;
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
  Utils.processInputToMessage();
}

function computeValueOnArrowPress(
  arrowPressed: Constants.ArrowPresses,
  activeElement: HTMLInputElement,
  isShiftHeld: boolean,
): number {
  let value: number = parseInt(activeElement.value, 10);
  return value && !activeElement.list && activeElement.type === "text"
    ? isShiftHeld
      ? arrowPressed === Constants.ArrowPresses.UP
        ? (value += 10)
        : (value -= 10)
      : arrowPressed === Constants.ArrowPresses.UP
      ? (value += 1)
      : (value -= 1)
    : null;
}
/* ----------------- Checkbox SubOptions Toggling -----------------  */

// Toggle (enable or disable) header suboptions or subinputs
function toggleHeaderSubOptions(): void {
  Utils.toggleEditable(
    Constants.HtmlTagType.INPUT,
    "floatingFilter",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.CHECKBOX,
  );
  Utils.toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerHeight",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.HEADER_HEIGHT,
  );
  Utils.toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerFontFamily",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
  );
  Utils.toggleEditable(
    Constants.HtmlTagType.SELECT,
    "headerFontStyle",
    Utils.getHTMLInputElementById("header").checked,
    Utils.constructFontStyleOptions(processedFontOptions, Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY),
  );
  Utils.toggleEditable(
    Constants.HtmlTagType.INPUT,
    "headerFontSize",
    Utils.getHTMLInputElementById("header").checked,
    Constants.DefaultValuesForInputs.OVERALL_FONT_SIZE,
  );
  Utils.toggleEditable(
    Constants.HtmlTagType.INPUT,
    "floatingFilterHeight",
    Utils.getHTMLInputElementById("floatingFilter").checked,
    Constants.DefaultValuesForInputs.CHECKBOX,
  );
}
// Toggle checkbox suboptions or subinputs
function toggleCheckboxSubOptions(checkboxId: string): void {
  switch (checkboxId) {
    case Constants.CheckboxInputIds.HEADER:
      toggleHeaderSubOptions();
      break;
    case Constants.CheckboxInputIds.FLOATING_FILTER:
      Utils.toggleEditable(
        Constants.HtmlTagType.INPUT,
        "floatingFilterHeight",
        Utils.getHTMLInputElementById(checkboxId).checked,
        Constants.DefaultValuesForInputs.FLOATING_FILTER_HEIGHT,
      );
      break;
    case Constants.CheckboxInputIds.ALTERNATE_BACKGROUNDS:
      Utils.toggleEditable(
        Constants.HtmlTagType.INPUT,
        "stripedbackgroundColor",
        Utils.getHTMLInputElementById(checkboxId).checked,
        Constants.ColorNameToHex.WHITE,
      );
      break;
    case Constants.CheckboxInputIds.BORDERS:
      Utils.toggleEditable(
        Constants.HtmlTagType.INPUT,
        "borderColor",
        Utils.getHTMLInputElementById(checkboxId).checked,
        Constants.ColorNameToHex.GREY_C7,
      );
      break;
    default:
      break;
  }
}

/* ----------------- Pre-populate Input Values -----------------  */

/* Set or Reset To Create Message Default */
function resetInputToDefault(createMessage: Interfaces.PluginMessage): void {
  activeMode = createMessage.mode;
  Utils.getHTMLInputElementById(createMessage.mode).checked = true;
  Object.keys(Constants.inputIds).forEach(input => {
    // check if tag is of type SELECT
    if (Utils.getHTMLElementById(input).nodeName.toLowerCase() === Constants.HtmlTagType.SELECT) {
      // check if the SELECT HTML tag is for table font or header font
      if (input.toLowerCase().includes("header")) {
        // default value generation to prevent construction of options if header is disabled
        const defaultValue: string = createMessage.header
          ? Utils.constructFontStyleOptions(
              processedFontOptions,
              createMessage.headerFontFamily,
              createMessage.headerFontStyle,
            )
          : null;
        Utils.toggleEditable(Constants.HtmlTagType.SELECT, input, createMessage.header, defaultValue);
      } else {
        Utils.toggleEditable(
          Constants.HtmlTagType.SELECT,
          input,
          true,
          Utils.constructFontStyleOptions(
            processedFontOptions,
            createMessage.tableFontFamily,
            createMessage.tableFontStyle,
          ),
        );
      }
      // check if tag is one of the mode-specific ones
    } else if (Object.keys(Constants.inputsAffectedByMode).indexOf(input) > -1) {
      // then check if it's enabled for this mode
      if (Constants.defaultInputsForModes[createMessage.mode].indexOf(input) > -1) {
        Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, true, createMessage[input]);
      } else {
        Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, false, createMessage[input]);
      }
    } else {
      const dependentInputs: string[] = [
        "headerHeight",
        "headerFontFamily",
        "headerFontStyle",
        "headerFontSize",
        "floatingFilterHeight",
        "stripedbackgroundColor",
        "borderColor",
      ];
      // logic to determine if input is editable based on dependency input
      const editable: boolean =
        createMessage[input] === 0
          ? false
          : createMessage[input] === "N.A."
          ? false
          : dependentInputs.indexOf(input) > -1
          ? createMessage[input]
          : input === "floatingFilter"
          ? createMessage.header
          : true;
      Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, editable, createMessage[input]);
      // then set the checkbox state based on the stored values
      if (Constants.genericInputs[input] === Constants.DefaultValuesForInputs.CHECKBOX) {
        Utils.getHTMLInputElementById(input).checked = createMessage[input];
      }
    }
  });
  Utils.resetInvalidInput();
  Utils.getHTMLInputElementById(Constants.defaultInputsForModes[createMessage.mode][0]).select();
}
/* Set Input Values */
// Default per mode
function setDefaultForMode(mode: string): void {
  Utils.getHTMLInputElementById(mode).checked = true;
  const inputList: string[] = Object.keys(Constants.inputsAffectedByMode);
  for (let input of inputList) {
    if (Constants.defaultInputsForModes[mode].indexOf(input) > -1) {
      Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, true, Constants.inputsAffectedByMode[input]);
    } else {
      Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, false, Constants.inputsAffectedByMode[input]);
    }
  }
  Utils.resetInvalidInput();
  Utils.getHTMLInputElementById(Constants.defaultInputsForModes[mode][0]).select();
  activeMode = mode;
}
// Default for the rest
function setDefaultForGenericInputs(): void {
  Object.keys(Constants.genericInputs).forEach(input => {
    if (Constants.genericInputs[input] === Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_STYLE) {
      Utils.toggleEditable(
        Constants.HtmlTagType.SELECT,
        input,
        true,
        Utils.constructFontStyleOptions(
          processedFontOptions,
          Constants.DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
        ),
      );
    } else {
      Utils.toggleEditable(Constants.HtmlTagType.INPUT, input, true, Constants.genericInputs[input]);
      if (Constants.genericInputs[input] === Constants.DefaultValuesForInputs.CHECKBOX) {
        Utils.getHTMLInputElementById(input).checked = true;
      }
    }
  });
}
