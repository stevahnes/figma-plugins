import "./ui.css";

/* Constants */
let isShiftHeld: boolean = false;

document.onkeydown = keyDown => {
  let value: number = parseInt(
    (document.activeElement as HTMLInputElement).value
  );
  if (keyDown.key === "Shift") {
    isShiftHeld = true;
  }
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
};

document.onkeyup = keyUp => {
  if (keyUp.key === "Shift") {
    isShiftHeld = false;
  }
};

document.getElementById("create").onclick = () => {
  const columnsInput = document.getElementById("columns") as HTMLInputElement;
  const columnsWidthInput = document.getElementById(
    "columnWidth"
  ) as HTMLInputElement;
  const rowsInput = document.getElementById("rows") as HTMLInputElement;
  const rowHeightInput = document.getElementById(
    "rowHeight"
  ) as HTMLInputElement;
  const columns = parseInt(columnsInput.value, 10);
  const columnWidth = parseInt(columnsWidthInput.value, 10);
  const rows = parseInt(rowsInput.value, 10);
  const rowHeight = parseInt(rowHeightInput.value, 10);
  parent.postMessage(
    {
      pluginMessage: {
        type: "create-table",
        columns: columns,
        columnWidth: columnWidth,
        rows: rows,
        rowHeight: rowHeight
      }
    },
    "*"
  );
};

document.getElementById("cancel").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
