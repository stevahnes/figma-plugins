import "./ui.css";

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
document.getElementById("count-and-table-size").onchange = () => {
  //TODO
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
  } else if (keyDown.key.match(/Arrow\w +/g)) {
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
  const columnsInput = document.getElementById("columns") as HTMLInputElement;
  const columnsWidthInput = document.getElementById(
    "columnWidth"
  ) as HTMLInputElement;
  const rowsInput = document.getElementById("rows") as HTMLInputElement;
  const rowHeightInput = document.getElementById(
    "rowHeight"
  ) as HTMLInputElement;
  const bordersInput = document.getElementById("borders") as HTMLInputElement;
  const alternateBackgroundsInput = document.getElementById(
    "alternateBackgrounds"
  ) as HTMLInputElement;
  const headerInput = document.getElementById("header") as HTMLInputElement;
  const headerHeightInput = document.getElementById(
    "headerHeight"
  ) as HTMLInputElement;
  const floatingFilterInput = document.getElementById(
    "floatingFilter"
  ) as HTMLInputElement;
  const floatingFilterHeightInput = document.getElementById(
    "floatingFilterHeight"
  ) as HTMLInputElement;
  const primarybackgroundColorInput = document.getElementById(
    "primarybackgroundColor"
  ) as HTMLInputElement;
  const stripedbackgroundColorInput = document.getElementById(
    "stripedBackgroundColor"
  ) as HTMLInputElement;
  const borderColorInput = document.getElementById(
    "borderColor"
  ) as HTMLInputElement;
  const columns = parseInt(columnsInput.value, 10);
  const columnWidth = parseInt(columnsWidthInput.value, 10);
  const rows = parseInt(rowsInput.value, 10);
  const rowHeight = parseInt(rowHeightInput.value, 10);
  const borders = bordersInput.checked;
  const alternateBackgrounds = alternateBackgroundsInput.checked;
  const header = headerInput.checked;
  const headerHeight = parseInt(headerHeightInput.value, 10);
  const floatingFilters = floatingFilterInput.checked;
  const floatingFilterHeight = parseInt(floatingFilterHeightInput.value, 10);
  const primarybackgroundColor = primarybackgroundColorInput.value;
  const stripedbackgroundColor = stripedbackgroundColorInput.value;
  const borderColor = borderColorInput.value;
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
        floatingFilter: floatingFilters,
        floatingFilterHeight: floatingFilterHeight,
        primarybackgroundColor: primarybackgroundColor,
        stripedbackgroundColor: stripedbackgroundColor,
        borderColor: borderColor
      }
    },
    "*"
  );
};
document.getElementById("cancel").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
