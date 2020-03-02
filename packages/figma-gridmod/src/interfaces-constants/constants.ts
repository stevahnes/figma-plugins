export const showUIOptions: ShowUIOptions = {
  width: 300,
  height: 300,
  visible: true,
};

export const enum UIToCodeMessageType {
  WINDOW_FOCUS,
  EDIT_CONTENTS,
}

export const bareboneGridGenGroups: { [key: string]: string } = {
  "Row Background": "rowBackgroundId",
  "Table Texts": "tableTextsId",
  Borders: "bordersId",
};

export const hasTableHeader: { [key: string]: string } = { "Table Header": "tableHeaderId" };
