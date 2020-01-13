import { ReferenceCoordinates } from "../interfaces/interfaces";
import * as Figma from "../utils/utils";

export function generateBorders(
  borderType: "Horizontal" | "Vertical",
  visible: boolean = true,
  borderCount: number,
  borderSpacing: number,
  borderWidthMultiplier: number,
  borderWidthIndividual: number,
  header: boolean,
  headerHeight: number,
  referenceCoordinates: ReferenceCoordinates
): GroupNode {
  const linesNode: SceneNode[] = [];
  let borderWidth: number;
  if (header) {
    if (borderType === "Vertical") {
      borderWidth =
        (borderWidthMultiplier - 1) * borderWidthIndividual + headerHeight;
    } else {
      borderCount -= 1;
      borderWidth = borderWidthMultiplier * borderWidthIndividual;
    }
  } else {
    borderWidth = borderWidthMultiplier * borderWidthIndividual;
  }
  for (let i = 0; i < borderCount + 1; i++) {
    const line = figma.createLine();
    if (borderType === "Vertical") {
      line.rotation = 90;
      line.x = referenceCoordinates.x + i * borderSpacing;
    } else {
      line.y = referenceCoordinates.y - i * borderSpacing;
    }
    line.resize(borderWidth, 0);
    linesNode.push(line);
  }
  if (header && borderType === "Horizontal") {
    const line = figma.createLine();
    line.resize(borderWidth, 0);
    line.y =
      referenceCoordinates.y - headerHeight - borderCount * borderSpacing;
    linesNode.push(line);
  }
  const linesGroup: GroupNode = Figma.groupNodes(
    linesNode,
    Figma.getCurrentPage()
  );
  if (!visible) {
    linesGroup.visible = false;
  }
  linesGroup.name = borderType;
  return linesGroup;
}

export function generateRowBackground(
  rowBackgroundType: "Odd" | "Even",
  rowCount: number,
  rowHeight: number,
  rowWidth: number,
  alternateBackgrounds: boolean,
  header: boolean,
  referenceCoordinates: ReferenceCoordinates
): GroupNode {
  const rowBackgroundNode: SceneNode[] = [];
  const rowSpacing = rowHeight * 2;
  let computedRowCount = 0;
  let startingPoint = 0;
  if (header) {
    rowCount -= 1;
  }
  if (rowBackgroundType === "Odd") {
    computedRowCount = Math.round(rowCount / 2);
    startingPoint = referenceCoordinates.y - rowHeight;
  } else {
    computedRowCount = Math.floor(rowCount / 2);
    startingPoint = referenceCoordinates.y - rowSpacing;
  }
  for (let i = 0; i < computedRowCount; i++) {
    const background = figma.createRectangle();
    const backgroundFills = Figma.clone(background.fills);
    if (
      alternateBackgrounds &&
      ((!header && rowBackgroundType === "Even") ||
        (header && rowBackgroundType === "Odd"))
    ) {
      backgroundFills[0].color.r = 247 / 255;
      backgroundFills[0].color.g = 247 / 255;
      backgroundFills[0].color.b = 247 / 255;
    } else {
      backgroundFills[0].color.r = 1;
      backgroundFills[0].color.g = 1;
      backgroundFills[0].color.b = 1;
    }
    background.fills = backgroundFills;
    background.resize(rowWidth, rowHeight);
    background.y = startingPoint - i * rowSpacing;
    rowBackgroundNode.push(background);
  }
  const rowBackgroundGroup: GroupNode = Figma.groupNodes(
    rowBackgroundNode,
    Figma.getCurrentPage()
  );
  rowBackgroundGroup.name = rowBackgroundType;
  return rowBackgroundGroup;
}

export function generateTableTexts(
  rowCount: number,
  rowHeight: number,
  columnCount: number,
  columnWidth: number,
  header: boolean,
  referenceCoordinates: ReferenceCoordinates
) {
  const tableTextsNode: SceneNode[] = [];
  if (header) {
    rowCount -= 1;
  }
  for (let i = 0; i < columnCount; i++) {
    const columnTextsNode: SceneNode[] = [];
    const columnTextsStartingPosition =
      referenceCoordinates.x + i * columnWidth;
    for (let j = 0; j < rowCount; j++) {
      const text = figma.createText();
      loadNodeFont(text.fontName as FontName).then(_ => {
        text.name = "Row " + (rowCount - j);
        text.characters = "Sample";
        text.x = columnTextsStartingPosition;
        text.y = referenceCoordinates.y - (j + 1) * rowHeight;
        text.resize(columnWidth, rowHeight);
        text.textAlignVertical = "CENTER";
      });
      columnTextsNode.push(text);
    }
    const columnTextsGroup = Figma.groupNodes(
      columnTextsNode,
      Figma.getCurrentPage()
    );
    columnTextsGroup.name = "Column " + i;
    tableTextsNode.push(columnTextsGroup);
  }
  const tableTextsGroup: GroupNode = Figma.groupNodes(
    tableTextsNode,
    Figma.getCurrentPage()
  );
  tableTextsGroup.name = "Table Texts";
  return tableTextsGroup;
}

export function generateTableHeader(
  rowCount: number,
  rowHeight: number,
  columnCount: number,
  columnWidth: number,
  header: boolean,
  headerHeight: number,
  referenceCoordinates: ReferenceCoordinates
): GroupNode {
  if (header) {
    // Background
    const tableHeaderNode: SceneNode[] = [];
    const rowWidth = columnWidth * columnCount;
    const background = figma.createRectangle();
    const backgroundFills = Figma.clone(background.fills);
    backgroundFills[0].color.r = 247 / 255;
    backgroundFills[0].color.g = 247 / 255;
    backgroundFills[0].color.b = 247 / 255;
    background.fills = backgroundFills;
    background.resize(rowWidth, headerHeight);
    background.y =
      referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
    tableHeaderNode.push(background);
    // Texts
    const tableHeaderTextsNode: SceneNode[] = [];
    for (let i = 0; i < columnCount; i++) {
      const columnTextsStartingPosition =
        referenceCoordinates.x + i * columnWidth;
      const text = figma.createText();
      const fontName: FontName = { family: "Roboto", style: "Bold" };
      loadNodeFont(fontName).then(_ => {
        text.name = "Column Header " + i;
        text.characters = "SAMPLE";
        text.fontName = fontName;
        text.x = columnTextsStartingPosition;
        text.y =
          referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
        text.resize(columnWidth, headerHeight);
        text.textAlignVertical = "CENTER";
      });
      tableHeaderTextsNode.push(text);
    }
    const tableHeaderTextsGroup = Figma.groupNodes(
      tableHeaderTextsNode,
      Figma.getCurrentPage()
    );
    tableHeaderTextsGroup.name = "Column Headers";
    tableHeaderNode.push(tableHeaderTextsGroup);
    const tableHeaderGroup: GroupNode = Figma.groupNodes(
      tableHeaderNode,
      Figma.getCurrentPage()
    );
    tableHeaderGroup.name = "Table Header";
    return tableHeaderGroup;
  } else {
    return null;
  }
}

async function loadNodeFont(fontName: FontName): Promise<void> {
  await figma.loadFontAsync(fontName);
}
