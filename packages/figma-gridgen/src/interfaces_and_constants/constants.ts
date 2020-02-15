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

export const enum HtmlTagType {
  INPUT = "input",
  SELECT = "select",
}

export const maxDimensionInPixels: number = 5000;

export const maxNumberOfRowsOrColumns: number = 100;

export const enum DefaultValuesForInputs {
  DISABLED = "N.A.",
  CHECKBOX = "",
  OVERALL_FONT_NAME_FAMILY = "Roboto",
  OVERALL_FONT_NAME_STYLE = "Regular",
  OVERALL_FONT_SIZE = "12",
  TABLE_WIDTH = "1024",
  TABLE_HEIGHT = "768",
  COLUMN_WIDTH = "100",
  ROW_HEIGHT = "30",
  HEADER_HEIGHT = "60",
  FLOATING_FILTER_HEIGHT = "30",
  COLUMNS = "5",
  ROWS = "8",
}

export const inputsAffectedByMode: { [key: string]: string } = {
  tableWidth: DefaultValuesForInputs.TABLE_WIDTH,
  tableHeight: DefaultValuesForInputs.TABLE_HEIGHT,
  columnWidth: DefaultValuesForInputs.COLUMN_WIDTH,
  rowHeight: DefaultValuesForInputs.ROW_HEIGHT,
  columns: DefaultValuesForInputs.COLUMNS,
  rows: DefaultValuesForInputs.ROWS,
};