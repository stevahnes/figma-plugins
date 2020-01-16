import "./ui.css";
import { ReferenceCoordinates } from "./interfaces/interfaces";
import * as Figma from "./utils/utils";

/* State Changes Variable */
let isShiftHeld: boolean = false;
let isAltHeld: boolean = false;

/* Run after onLoad */
window.addEventListener("load", function() {
  (document.getElementById("tableWidth") as HTMLInputElement).select();
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
    htmlTagById.value = "N.A.";
  }
  return null;
}

/* Toggle HTML Rendering */
function setDefault(mode: string) {
  switch (mode) {
    case "count-and-table-size":
      toggleEditable("columnWidth", false, "100");
      toggleEditable("rowHeight", false, "30");
      toggleEditable("tableWidth", true, "1024");
      toggleEditable("tableHeight", true, "768");
      toggleEditable("columns", true, "5");
      toggleEditable("rows", true, "8");
      (document.getElementById("tableWidth") as HTMLInputElement).select();
      break;
    case "count-and-cell-size":
      toggleEditable("columnWidth", true, "100");
      toggleEditable("rowHeight", true, "30");
      toggleEditable("tableWidth", false, "1024");
      toggleEditable("tableHeight", false, "768");
      toggleEditable("columns", true, "5");
      toggleEditable("rows", true, "8");
      (document.getElementById("columns") as HTMLInputElement).select();
      break;
    case "cell-and-table-size":
      toggleEditable("columnWidth", true, "100");
      toggleEditable("rowHeight", true, "30");
      toggleEditable("tableWidth", true, "1024");
      toggleEditable("tableHeight", true, "768");
      toggleEditable("columns", false, "5");
      toggleEditable("rows", false, "8");
      (document.getElementById("tableWidth") as HTMLInputElement).select();
      break;
  }
}

// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
  if (
    (document.getElementById("count-and-table-size") as HTMLInputElement)
      .checked
  ) {
    setDefault("count-and-table-size");
  }
};
document.getElementById("count-and-cell-size").onclick = () => {
  if (
    (document.getElementById("count-and-cell-size") as HTMLInputElement).checked
  ) {
    setDefault("count-and-cell-size");
  }
};
document.getElementById("cell-and-table-size").onclick = () => {
  if (
    (document.getElementById("cell-and-table-size") as HTMLInputElement).checked
  ) {
    setDefault("cell-and-table-size");
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
    "stripedbackgroundColor",
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
  } else if (keyDown.key === "Alt") {
    isAltHeld = true;
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
    // Selected Mode
    const mode: string = Figma.getValue("count-and-table-size", "boolean")
      ? "count-and-table-size"
      : Figma.getValue("count-and-cell-size", "boolean")
      ? "count-and-cell-size"
      : "cell-and-table-size";
    if (activeElement.id === "cancel" && isShiftHeld === false) {
      switch (mode) {
        case "count-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
        case "count-and-cell-size":
          (document.getElementById("columns") as HTMLInputElement).select();
          break;
        case "cell-and-table-size":
          (document.getElementById("tableWidth") as HTMLInputElement).select();
          break;
      }
      keyDown.preventDefault();
    } else if (
      mode === "count-and-cell-size" &&
      activeElement.id === "columns" &&
      isShiftHeld === true
    ) {
      document.getElementById("cancel").focus();
      keyDown.preventDefault();
    } else if (activeElement.id === "tableWidth" && isShiftHeld === true) {
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
          "stripedbackgroundColor",
          activeElement.checked,
          "#FFFFFF"
        );
      } else if (activeElement.id === "borders") {
        toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
      }
    }
  } else if (
    keyDown.key === "1" ||
    keyDown.key === "2" ||
    keyDown.key === "3"
  ) {
    if (isAltHeld) {
      switch (keyDown.key) {
        case "1":
          (document.getElementById(
            "cell-and-table-size"
          ) as HTMLInputElement).checked = true;
          setDefault("cell-and-table-size");
          break;
        case "2":
          (document.getElementById(
            "count-and-cell-size"
          ) as HTMLInputElement).checked = true;
          setDefault("count-and-cell-size");
          break;
        case "3":
          (document.getElementById(
            "count-and-table-size"
          ) as HTMLInputElement).checked = true;
          setDefault("count-and-table-size");
          break;
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
  // Selected Mode
  const mode: string = Figma.getValue("count-and-table-size", "boolean")
    ? "count-and-table-size"
    : Figma.getValue("count-and-cell-size", "boolean")
    ? "count-and-cell-size"
    : "cell-and-table-size";
  // Header Info
  const header = Figma.getValue("header", "boolean");
  const headerHeight = Figma.getValue("headerHeight", "number");
  const floatingFilter = Figma.getValue("floatingFilter", "boolean");
  const floatingFilterHeight = Figma.getValue("floatingFilterHeight", "number");
  // Constraints Processing
  let columns: number = 0;
  let columnWidth: number = 0;
  let rows: number = 0;
  let rowHeight: number = 0;
  let referenceCoordinates: ReferenceCoordinates = { x: 0, y: 0 };
  switch (mode) {
    case "count-and-table-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth =
        (Figma.getValue("tableWidth", "number") as number) / columns;
      rowHeight =
        ((Figma.getValue("tableHeight", "number") as number) -
          (headerHeight as number)) /
        rows;
      break;
    case "count-and-cell-size":
      columns = Figma.getValue("columns", "number") as number;
      rows = Figma.getValue("rows", "number") as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      break;
    case "cell-and-table-size":
      const tableWidth: number = Figma.getValue(
        "tableWidth",
        "number"
      ) as number;
      const tableHeight: number = Figma.getValue(
        "tableHeight",
        "number"
      ) as number;
      columnWidth = Figma.getValue("columnWidth", "number") as number;
      rowHeight = Figma.getValue("rowHeight", "number") as number;
      columns = Math.floor(tableWidth / columnWidth);
      rows = Math.floor(
        (tableHeight - (headerHeight as number)) / rowHeight + 1
      );
      referenceCoordinates.y = tableHeight % rowHeight;
      break;
  }
  // Properties and Customisations
  const borders = Figma.getValue("borders", "boolean");
  const alternateBackgrounds = Figma.getValue(
    "alternateBackgrounds",
    "boolean"
  );
  const primarybackgroundColor = Figma.getValue(
    "primarybackgroundColor",
    "string"
  );
  const stripedbackgroundColor = Figma.getValue(
    "stripedbackgroundColor",
    "string"
  );
  const borderColor = Figma.getValue("borderColor", "string");
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
