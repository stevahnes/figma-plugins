import "./ui.css";

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
