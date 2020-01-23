var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import * as Figma from "../utils/utils";
/* Defaults/Constants */
const defaultBorderColor = "#C7C7C7";
const tableFontName = {
  family: "Roboto",
  style: "Regular",
};
const tableHeaderFontName = { family: "Roboto", style: "Bold" };
export function generateBorders(
  borderType,
  visible = true,
  borderCount,
  borderSpacing,
  borderWidthMultiplier,
  borderWidthIndividual,
  header,
  headerHeight,
  borderColor,
  referenceCoordinates,
) {
  const linesNode = [];
  let borderWidth;
  if (header) {
    if (borderType === "Vertical") {
      borderWidth = (borderWidthMultiplier - 1) * borderWidthIndividual + headerHeight;
    } else {
      borderCount -= 1;
      borderWidth = borderWidthMultiplier * borderWidthIndividual;
    }
  } else {
    borderWidth = borderWidthMultiplier * borderWidthIndividual;
  }
  const lineStrokesColor =
    borderColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) === null
      ? Figma.hexToRgb(defaultBorderColor)
      : Figma.hexToRgb(borderColor);
  for (let i = 0; i < borderCount + 1; i++) {
    const line = figma.createLine();
    const lineStrokes = Figma.clone(line.strokes);
    lineStrokes[0].color.r = lineStrokesColor.r / 255;
    lineStrokes[0].color.g = lineStrokesColor.g / 255;
    lineStrokes[0].color.b = lineStrokesColor.b / 255;
    line.strokes = lineStrokes;
    if (borderType === "Vertical") {
      line.rotation = 90;
      line.x = referenceCoordinates.x + i * borderSpacing;
      line.y = referenceCoordinates.y;
    } else {
      line.x = referenceCoordinates.x;
      line.y = referenceCoordinates.y - i * borderSpacing;
    }
    line.resize(borderWidth, 0);
    linesNode.push(line);
  }
  // create top line if header is included
  if (header && borderType === "Horizontal") {
    const line = figma.createLine();
    const lineStrokes = Figma.clone(line.strokes);
    lineStrokes[0].color.r = lineStrokesColor.r / 255;
    lineStrokes[0].color.g = lineStrokesColor.g / 255;
    lineStrokes[0].color.b = lineStrokesColor.b / 255;
    line.strokes = lineStrokes;
    line.resize(borderWidth, 0);
    line.x = referenceCoordinates.x;
    line.y = referenceCoordinates.y - headerHeight - borderCount * borderSpacing;
    linesNode.push(line);
  }
  const linesGroup = Figma.groupNodes(linesNode, Figma.getCurrentPage());
  if (!visible) {
    linesGroup.visible = false;
  }
  linesGroup.name = borderType;
  return linesGroup;
}
export function generateRowBackground(
  rowBackgroundType,
  rowCount,
  rowHeight,
  rowWidth,
  alternateBackgrounds,
  header,
  primaryBackgroundColor,
  stripedBackgroundColor,
  referenceCoordinates,
) {
  const rowBackgroundNode = [];
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
    let backgroundFillsColor;
    if (alternateBackgrounds) {
      if ((rowCount % 2 === 0 && rowBackgroundType === "Odd") || (rowCount % 2 !== 0 && rowBackgroundType === "Even")) {
        backgroundFillsColor = Figma.hexToRgb(stripedBackgroundColor);
      } else {
        backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
      }
    } else {
      backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
    }
    backgroundFills[0].color.r = backgroundFillsColor.r / 255;
    backgroundFills[0].color.g = backgroundFillsColor.g / 255;
    backgroundFills[0].color.b = backgroundFillsColor.b / 255;
    background.fills = backgroundFills;
    background.resize(rowWidth, rowHeight);
    background.y = startingPoint - i * rowSpacing;
    rowBackgroundNode.push(background);
  }
  const rowBackgroundGroup = Figma.groupNodes(rowBackgroundNode, Figma.getCurrentPage());
  rowBackgroundGroup.name = rowBackgroundType;
  return rowBackgroundGroup;
}
export function generateTableTexts(rowCount, rowHeight, columnCount, columnWidth, header, referenceCoordinates) {
  const tableTextsNode = [];
  if (header) {
    rowCount -= 1;
  }
  const textMargin = { x: 5, y: 5 };
  for (let i = 0; i < columnCount; i++) {
    const columnTextsNode = [];
    const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + textMargin.x;
    for (let j = 0; j < rowCount; j++) {
      const text = figma.createText();
      text.name = "Row " + (rowCount - j);
      text.x = columnTextsStartingPosition;
      text.y = referenceCoordinates.y + textMargin.y - (j + 1) * rowHeight;
      columnTextsNode.push(text);
    }
    const columnTextsGroup = Figma.groupNodes(columnTextsNode, Figma.getCurrentPage());
    columnTextsGroup.name = "Column " + (i + 1);
    tableTextsNode.push(columnTextsGroup);
  }
  const tableTextsGroup = Figma.groupNodes(tableTextsNode, Figma.getCurrentPage());
  const allTextsNodesGenerated = tableTextsGroup.findAll(node => node.type === "TEXT");
  loadNodeFont(tableFontName).then(() => {
    for (let textNode of allTextsNodesGenerated) {
      const text = textNode;
      text.fontName = tableFontName;
      text.characters = "Sample";
      text.textAlignVertical = "CENTER";
      text.resize(columnWidth - 1 - 2 * textMargin.x, rowHeight - 2 * textMargin.y);
    }
  });
  tableTextsGroup.name = "Table Texts";
  return tableTextsGroup;
}
export function generateTableHeader(
  rowCount,
  rowHeight,
  columnCount,
  columnWidth,
  header,
  headerHeight,
  floatingFilter,
  floatingFilterHeight,
  primaryBackgroundColor,
  referenceCoordinates,
) {
  if (header) {
    // Background
    const tableHeaderNode = [];
    const rowWidth = columnWidth * columnCount;
    const background = figma.createRectangle();
    const backgroundFills = Figma.clone(background.fills);
    const backgroundFillsColor = Figma.hexToRgb(primaryBackgroundColor);
    backgroundFills[0].color.r = backgroundFillsColor.r / 255;
    backgroundFills[0].color.g = backgroundFillsColor.g / 255;
    backgroundFills[0].color.b = backgroundFillsColor.b / 255;
    background.fills = backgroundFills;
    background.resize(rowWidth, headerHeight);
    background.y = referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
    background.name = "Header Background";
    tableHeaderNode.push(background);
    // Texts
    const tableHeaderTextsNode = [];
    const textHeight = floatingFilter ? headerHeight - floatingFilterHeight : headerHeight;
    const headerTextMargin = { x: 5, y: 5 };
    for (let i = 0; i < columnCount; i++) {
      const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + headerTextMargin.x;
      const text = figma.createText();
      text.name = "Column Header " + (i + 1);
      text.x = columnTextsStartingPosition;
      text.y = referenceCoordinates.y - headerHeight + headerTextMargin.y - (rowCount - 1) * rowHeight;
      tableHeaderTextsNode.push(text);
    }
    const tableHeaderTextsGroup = Figma.groupNodes(tableHeaderTextsNode, Figma.getCurrentPage());
    const allTextsNodesGenerated = tableHeaderTextsGroup.findAll(node => node.type === "TEXT");
    loadNodeFont(tableHeaderFontName).then(() => {
      for (let textNode of allTextsNodesGenerated) {
        const text = textNode;
        text.fontName = tableHeaderFontName;
        text.characters = "SAMPLE";
        text.textAlignVertical = "CENTER";
        text.resize(columnWidth - 1 - 2 * headerTextMargin.x, textHeight - 2 * headerTextMargin.y);
      }
    });
    tableHeaderTextsGroup.name = "Column Headers";
    tableHeaderNode.push(tableHeaderTextsGroup);
    // Floating Filters
    if (floatingFilter) {
      const floatingFiltersNode = [];
      const floatingFilterMargin = { x: 5, y: 5 };
      for (let i = 0; i < columnCount; i++) {
        const columnFloatingFiltersStartingPosition = referenceCoordinates.x + i * columnWidth + floatingFilterMargin.x;
        const floatingFilter = figma.createRectangle();
        const floatingFilterFills = Figma.clone(floatingFilter.fills);
        const floatingFilterFillsColor = Figma.hexToRgb("#FFFFFF");
        floatingFilterFills[0].color.r = floatingFilterFillsColor.r / 255;
        floatingFilterFills[0].color.g = floatingFilterFillsColor.g / 255;
        floatingFilterFills[0].color.b = floatingFilterFillsColor.b / 255;
        floatingFilter.fills = floatingFilterFills;
        floatingFilter.name = "Floating Filter Placeholder" + (i + 1);
        floatingFilter.resize(
          columnWidth - 1 - 2 * floatingFilterMargin.x,
          floatingFilterHeight - 2 * floatingFilterMargin.y,
        );
        floatingFilter.x = columnFloatingFiltersStartingPosition;
        floatingFilter.y =
          referenceCoordinates.y - floatingFilterHeight + floatingFilterMargin.y - (rowCount - 1) * rowHeight;
        floatingFiltersNode.push(floatingFilter);
      }
      const tableFloatingFiltersGroup = Figma.groupNodes(floatingFiltersNode, Figma.getCurrentPage());
      tableFloatingFiltersGroup.name = "Floating Filters";
      tableHeaderNode.push(tableFloatingFiltersGroup);
    }
    const tableHeaderGroup = Figma.groupNodes(tableHeaderNode, Figma.getCurrentPage());
    tableHeaderGroup.name = "Table Header";
    return tableHeaderGroup;
  } else {
    return null;
  }
}
function loadNodeFont(fontName) {
  return __awaiter(this, void 0, void 0, function*() {
    yield figma.loadFontAsync(fontName);
  });
}
