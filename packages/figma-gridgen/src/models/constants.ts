export const showUIOptions: ShowUIOptions = {
  width: 300,
  height: 625,
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

export const enum ArrowPresses {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
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

export enum CheckboxInputIds {
  HEADER = "header",
  FLOATING_FILTER = "floatingFilter",
  ALTERNATE_BACKGROUNDS = "alternateBackgrounds",
  BORDERS = "borders",
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
  columns: DefaultValuesForInputs.COLUMNS,
  rows: DefaultValuesForInputs.ROWS,
  columnWidth: DefaultValuesForInputs.COLUMN_WIDTH,
  rowHeight: DefaultValuesForInputs.ROW_HEIGHT,
};

export const genericInputs: { [key: string]: string } = {
  primarybackgroundColor: ColorNameToHex.GREY_F7,
  tableFontFamily: DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
  tableFontStyle: DefaultValuesForInputs.OVERALL_FONT_NAME_STYLE,
  tableFontSize: DefaultValuesForInputs.OVERALL_FONT_SIZE,
  header: DefaultValuesForInputs.CHECKBOX,
  headerHeight: DefaultValuesForInputs.HEADER_HEIGHT,
  headerFontFamily: DefaultValuesForInputs.OVERALL_FONT_NAME_FAMILY,
  headerFontStyle: DefaultValuesForInputs.OVERALL_FONT_NAME_STYLE,
  headerFontSize: DefaultValuesForInputs.OVERALL_FONT_SIZE,
  floatingFilter: DefaultValuesForInputs.CHECKBOX,
  floatingFilterHeight: DefaultValuesForInputs.FLOATING_FILTER_HEIGHT,
  alternateBackgrounds: DefaultValuesForInputs.CHECKBOX,
  stripedbackgroundColor: ColorNameToHex.WHITE,
  borders: DefaultValuesForInputs.CHECKBOX,
  borderColor: ColorNameToHex.GREY_C7,
};

export const inputIds: { [key: string]: InputType } = {
  tableWidth: InputType.NUMBER,
  tableHeight: InputType.NUMBER,
  columns: InputType.NUMBER,
  rows: InputType.NUMBER,
  primarybackgroundColor: InputType.STRING,
  tableFontFamily: InputType.STRING,
  tableFontStyle: InputType.STRING,
  tableFontSize: InputType.NUMBER,
  columnWidth: InputType.NUMBER,
  rowHeight: InputType.NUMBER,
  header: InputType.BOOLEAN,
  headerHeight: InputType.NUMBER,
  headerFontFamily: InputType.STRING,
  headerFontStyle: InputType.STRING,
  headerFontSize: InputType.NUMBER,
  floatingFilter: InputType.BOOLEAN,
  floatingFilterHeight: InputType.NUMBER,
  alternateBackgrounds: InputType.BOOLEAN,
  stripedbackgroundColor: InputType.STRING,
  borders: InputType.BOOLEAN,
  borderColor: InputType.STRING,
};

export const enum Modes {
  CELL_AND_TABLE_SIZE = "cell-and-table-size",
  COUNT_AND_CELL_SIZE = "count-and-cell-size",
  COUNT_AND_TABLE_SIZE = "count-and-table-size",
}
