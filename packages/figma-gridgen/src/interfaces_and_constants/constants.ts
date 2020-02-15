export const showUIOptions: ShowUIOptions = {
  width: 300,
  height: 620,
  visible: false,
};

export const enum MessageType {
  CREATE = "create-table",
}

export const enum InputType {
  NUMBER,
  BOOLEAN,
  STRING,
}

export const defaultBorderColor: string = ColorNameToHex.GREY_C7;

export const maxRGB: number = 255;

export const enum Rotation {
  QUARTER = 90,
  HALF = 180,
  THREE_QUARTERS = 270,
}

export const sampleText: string = "Sample";

export const enum TextVerticalAlignment {
  TOP = "TOP",
  CENTER = "CENTER",
  BOTTOM = "BOTTOM",
}

export const enum ColorNameToHex {
  WHITE = "#FFFFFF",
  GREY_F7 = "#F7F7F7",
  GREY_C7 = "#C7C7C7",
}

export const enum BorderType {
  HORIZONTAL = "Horizontal",
  VERTICAL = "Vertical",
}

export const enum RowBackgroundType {
  ODD = "Odd",
  EVEN = "Even",
}

export const defaultInputsForModes: { [key: string]: string[] } = {
  // first on list is the default selected
  "count-and-table-size": ["tableWidth", "tableHeight", "columns", "rows"],
  "count-and-cell-size": ["columns", "rows", "columnWidth", "rowHeight"],
  "cell-and-table-size": ["tableWidth", "tableHeight", "columnWidth", "rowHeight"],
};

export const defaultValuesForInputs: { [key: string]: string } = {
  tableWidth: "1024",
  tableHeight: "768",
  columnWidth: "100",
  rowHeight: "30",
  columns: "5",
  rows: "8",
};
