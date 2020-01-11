import { ReferenceCoordinates } from "../interfaces/interfaces";
import * as Figma from "../utils/utils";

export function generateBorders(
  borderType: "Horizontal" | "Vertical",
  visible: boolean = true,
  borderCount: number,
  borderSpacing: number,
  borderWidth: number,
  referenceCoordinates: ReferenceCoordinates
): GroupNode {
  const linesNode: SceneNode[] = [];
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
  referenceCoordinates: ReferenceCoordinates
): GroupNode {
  const rowBackgroundNode: SceneNode[] = [];
  const rowSpacing = rowHeight * 2;
  let computedRowCount = 0;
  let startingPoint = 0;
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
    if (rowBackgroundType === "Odd") {
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
  referenceCoordinates: ReferenceCoordinates
) {
  const tableTextsNode: SceneNode[] = [];
  for (let i = 0; i < columnCount; i++) {
    const columnTextsNode: SceneNode[] = [];
    const columnTextsStartingPosition =
      referenceCoordinates.x + i * columnWidth;
    for (let j = 0; j < rowCount; j++) {
      const text = figma.createText();
      loadNodeFont(text.fontName as FontName).then(_ => {
        text.name = "Row " + (rowCount - j);
        text.characters = "Text/Placeholder";
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
    columnTextsGroup.name = "Column " + (columnCount - i);
    tableTextsNode.push(columnTextsGroup);
  }
  const tableTextsGroup = Figma.groupNodes(
    tableTextsNode,
    Figma.getCurrentPage()
  );
  tableTextsGroup.name = "Table Texts";
  return tableTextsGroup;
}

async function loadNodeFont(fontName: FontName): Promise<void> {
  await figma.loadFontAsync(fontName);
}
