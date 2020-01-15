import "./ui.css";
import { ReferenceCoordinates } from "./interfaces/interfaces";
import * as Figma from "./utils/utils";

/* State Changes Variable */
let isShiftHeld: boolean = false;

/* Run after onLoad */
window.addEventListener("load", function() {
  (document.getElementById("columns") as HTMLInputElement).select();
});

/* Toggle HTML Rendering */
function toggleEditable(
  htmlTagId: string,
  isPrerequisiteSelected: boolean,
  defaultValue: string
): void {
  const htmlTagById: HTMLInputElement = document.getElementById(
    htmlTagId
  ) as HTMLInputElement;
  if ((htmlTagById as HTMLInputElement).checked) {
    (htmlTagById as HTMLInputElement).checked = false;
  }
  if (isPrerequisiteSelected) {
    htmlTagById.disabled = false;
    htmlTagById.value = defaultValue;
  } else {
    htmlTagById.disabled = true;
    htmlTagById.value = "";
  }
  return null;
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
  if (
    (document.getElementById("count-and-table-size") as HTMLInputElement)
      .checked
  ) {
    toggleEditable("columnWidth", false, "100");
    toggleEditable("rowHeight", false, "30");
    toggleEditable("tableWidth", true, "1024");
    toggleEditable("tableHeight", true, "768");
    toggleEditable("columns", true, "5");
    toggleEditable("rows", true, "8");
  }
};
document.getElementById("count-and-cell-size").onclick = () => {
  if (
    (document.getElementById("count-and-cell-size") as HTMLInputElement).checked
  ) {
    toggleEditable("columnWidth", true, "100");
    toggleEditable("rowHeight", true, "30");
    toggleEditable("tableWidth", false, "1024");
    toggleEditable("tableHeight", false, "768");
    toggleEditable("columns", true, "5");
    toggleEditable("rows", true, "8");
  }
};
document.getElementById("cell-and-table-size").onclick = () => {
  if (
    (document.getElementById("cell-and-table-size") as HTMLInputElement).checked
  ) {
    toggleEditable("columnWidth", true, "100");
    toggleEditable("rowHeight", true, "30");
    toggleEditable("tableWidth", true, "1024");
    toggleEditable("tableHeight", true, "768");
    toggleEditable("columns", false, "5");
    toggleEditable("rows", false, "8");
  }
};
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
  toggleEditable(
    "floatingFilter",
    (document.getElementById("header") as HTMLInputElement).checked,
    ""
  );
  toggleEditable(
    "headerHeight",
    (document.getElementById("header") as HTMLInputElement).checked,
    "60"
  );
  toggleEditable(
    "floatingFilterHeight",
    (document.getElementById("floatingFilter") as HTMLInputElement).checked,
    ""
  );
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
  toggleEditable(
    "floatingFilterHeight",
    (document.getElementById("floatingFilter") as HTMLInputElement).checked,
    "30"
  );
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
  toggleEditable(
    "stripedBackgroundColor",
    (document.getElementById("alternateBackgrounds") as HTMLInputElement)
      .checked,
    "#FFFFFF"
  );
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
  toggleEditable(
    "borderColor",
    (document.getElementById("borders") as HTMLInputElement).checked,
    "#C7C7C7"
  );
};

/* Keyboard Navigation */
document.onkeydown = keyDown => {
  let activeElement = document.activeElement as HTMLInputElement;
  if (keyDown.key === "Shift") {
    isShiftHeld = true;
  } else if (keyDown.key.match(/Arrow\w+/g)) {
    if (activeElement.type === "text") {
      let value: number = parseInt(activeElement.value);
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
      (document.activeElement as HTMLInputElement).value = value.toString();
    }
  } else if (keyDown.key === "Tab") {
    if (activeElement.id === "cancel" && isShiftHeld === false) {
      document.getElementById("columns").focus();
      keyDown.preventDefault();
    } else if (activeElement.id === "columns" && isShiftHeld === true) {
      document.getElementById("cancel").focus();
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
        toggleEditable(
          "stripedBackgroundColor",
          activeElement.checked,
          "#FFFFFF"
        );
      } else if (activeElement.id === "borders") {
        toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
      }
    }
  }
};
document.onkeyup = keyUp => {
  if (keyUp.key === "Shift") {
    isShiftHeld = false;
  }
};

/* Create and Cancel Button Actions */
document.getElementById("create").onclick = () => {
  const columns = Figma.getValue("columns", "number");
  const columnWidth = Figma.getValue("columnWidth", "number");
  const rows = Figma.getValue("rows", "number");
  const rowHeight = Figma.getValue("rowHeight", "number");
  const borders = Figma.getValue("borders", "boolean");
  const alternateBackgrounds = Figma.getValue(
    "alternateBackgrounds",
    "boolean"
  );
  const header = Figma.getValue("header", "boolean");
  const headerHeight = Figma.getValue("headerHeight", "number");
  const floatingFilter = Figma.getValue("floatingFilter", "boolean");
  const floatingFilterHeight = Figma.getValue("floatingFilterHeight", "number");
  const primarybackgroundColor = Figma.getValue(
    "primarybackgroundColor",
    "string"
  );
  const stripedbackgroundColor = Figma.getValue(
    "stripedbackgroundColor",
    "string"
  );
  const borderColor = Figma.getValue("borderColor", "string");
  const referenceCoordinates: ReferenceCoordinates = { x: 0, y: 0 };
  parent.postMessage(
    {
      pluginMessage: {
        type: "create-table",
        columns: columns,
        columnWidth: columnWidth,
        rows: rows,
        rowHeight: rowHeight,
        borders: borders,
        alternateBackgrounds: alternateBackgrounds,
        header: header,
        headerHeight: headerHeight,
        floatingFilter: floatingFilter,
        floatingFilterHeight: floatingFilterHeight,
        primarybackgroundColor: primarybackgroundColor,
        stripedbackgroundColor: stripedbackgroundColor,
        borderColor: borderColor,
        referenceCoordinates: referenceCoordinates
      }
    },
    "*"
  );
};
document.getElementById("cancel").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};