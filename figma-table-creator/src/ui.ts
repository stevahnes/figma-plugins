import "./ui.css";

/* State Changes */
let isShiftHeld: boolean = false;

/* Toggle of Floating Filter Checkbox Rendering */
document.getElementById("header").onchange = () => {
  toggleFloatingFiltersVisibility(
    (document.getElementById("header") as HTMLInputElement).checked
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
        toggleFloatingFiltersVisibility(activeElement.checked);
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
  const floatingFiltersInput = document.getElementById(
    "floatingFilter"
  ) as HTMLInputElement;
  const columns = parseInt(columnsInput.value, 10);
  const columnWidth = parseInt(columnsWidthInput.value, 10);
  const rows = parseInt(rowsInput.value, 10);
  const rowHeight = parseInt(rowHeightInput.value, 10);
  const borders = bordersInput.checked;
  const alternateBackgrounds = alternateBackgroundsInput.checked;
  const header = headerInput.checked;
  const floatingFilters = floatingFiltersInput.checked;
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
        floatingFilters: floatingFilters
      }
    },
    "*"
  );
};
document.getElementById("cancel").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};

function toggleFloatingFiltersVisibility(isHeaderSelected: boolean): void {
  if (isHeaderSelected) {
    document
      .getElementById("floatingFiltersCheckbox")
      .classList.add("is-visible");
  } else {
    (document.getElementById(
      "floating-filter"
    ) as HTMLInputElement).checked = false;
    document
      .getElementById("floatingFiltersCheckbox")
      .classList.remove("is-visible");
  }
  return null;
}
