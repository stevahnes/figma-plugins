import { SelectedGrid } from "../models/interfaces";

export const editColumns = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, false, amount, all, index);
  editBackgrounds(selectedGrid, selectedGrid.rows, decrease, false, amount, all, index);
  editTexts(selectedGrid, decrease, false, amount, all, index);
  selectedGrid.tableHeaderId !== "" ? editTableHeader(selectedGrid, decrease, false, amount, all, index) : null;
};

export const editRows = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, true, amount, all, index);
  editBackgrounds(selectedGrid, selectedGrid.rows, decrease, true, amount, all, index);
  editTexts(selectedGrid, decrease, true, amount, all, index);
  selectedGrid.tableHeaderId !== "" ? editTableHeader(selectedGrid, decrease, true, amount, all, index) : null;
};

export const getBorderTypesId = (selectedGrid: SelectedGrid): { [key: string]: string } => {
  const allBorders: { [key: string]: string } = {};
  (figma.getNodeById(selectedGrid.bordersId) as GroupNode).children.forEach(
    sceneNode => (allBorders[sceneNode.name] = sceneNode.id),
  );
  return allBorders;
};

const editBorders = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const allBorders: { [key: string]: string } = getBorderTypesId(selectedGrid);
  const hasHeader: boolean = selectedGrid.tableHeaderId !== "";
  row
    ? (resizeBorders(allBorders["Vertical"], decrease, amount, selectedGrid.rows, all),
      moveBorders(hasHeader, allBorders["Horizontal"], decrease, amount, all, index))
    : (resizeBorders(allBorders["Horizontal"], decrease, amount, selectedGrid.columns, all),
      moveBorders(hasHeader, allBorders["Vertical"], decrease, amount, all, index));
};

const resizeBorders = (id: string, decrease: boolean, amount: number, multiplier: number, all: boolean): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  (figma.getNodeById(id) as GroupNode).children.forEach((child: LineNode) => {
    all ? child.resize(child.width + toAdd * multiplier, 0) : child.resize(child.width + toAdd, 0);
  });
};

const moveBorders = (
  hasHeader: boolean,
  id: string,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const bordersToMove: GroupNode = figma.getNodeById(id) as GroupNode;
  const bordersToMoveGroupName = bordersToMove.name;
  const startIndex: number = !all ? index : 1;
  let toAdd: number = amount;
  // Top to bottom logic not needed as reference coordinate is always {0,0}
  if (bordersToMoveGroupName === "Vertical") {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Vertical borders, increase === add as rightward is +ve
      !decrease ? (bordersToMove.children[i].x += toAdd) : (bordersToMove.children[i].x -= toAdd);
      all ? (toAdd += amount) : null;
    }
  } else {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Horizontal borders, increase === subtract as upward is negative
      !decrease ? (bordersToMove.children[i].y -= toAdd) : (bordersToMove.children[i].y += toAdd);
      if (!(i === bordersToMove.children.length - 2 && hasHeader)) {
        all ? (toAdd += amount) : null;
      }
    }
  }
};

const editBackgrounds = (
  selectedGrid: SelectedGrid,
  totalBackgroundsCount: number,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  const oddBackgrounds: GroupNode = (figma.getNodeById(selectedGrid.rowBackgroundId) as GroupNode)
    .children[0] as GroupNode;
  const evenBackgrounds: GroupNode = (figma.getNodeById(selectedGrid.rowBackgroundId) as GroupNode)
    .children[1] as GroupNode;
  const currentDimensions: { width: number; height: number } = {
    width: oddBackgrounds.children[0].width,
    height: oddBackgrounds.children[0].height,
  };
  if (all) {
    for (let i: number = 0; i < totalBackgroundsCount; i++) {
      i % 2 === 0
        ? row
          ? (oddBackgrounds.children[Math.floor(i / 2)].resize(
              currentDimensions.width,
              currentDimensions.height + toAdd,
            ),
            (oddBackgrounds.children[Math.floor(i / 2)].y -= (i + 1) * toAdd))
          : oddBackgrounds.children[Math.floor(i / 2)].resize(
              currentDimensions.width + selectedGrid.columns * toAdd,
              currentDimensions.height,
            )
        : row
        ? (evenBackgrounds.children[Math.floor(i / 2)].resize(
            currentDimensions.width,
            currentDimensions.height + toAdd,
          ),
          (evenBackgrounds.children[Math.floor(i / 2)].y -= (i + 1) * toAdd))
        : evenBackgrounds.children[Math.floor(i / 2)].resize(
            currentDimensions.width + selectedGrid.columns * toAdd,
            currentDimensions.height,
          );
    }
  } else {
    if (row) {
      // resize and move the background of interest first
      (index - 1) % 2 === 0
        ? (oddBackgrounds.children[Math.floor((index - 1) / 2)].resize(
            currentDimensions.width,
            currentDimensions.height + toAdd,
          ),
          (oddBackgrounds.children[Math.floor((index - 1) / 2)].y -= toAdd))
        : (evenBackgrounds.children[Math.floor((index - 1) / 2)].resize(
            currentDimensions.width,
            currentDimensions.height + toAdd,
          ),
          (evenBackgrounds.children[Math.floor((index - 1) / 2)].y -= toAdd));
      // then move the other backgrounds to its correct position
      for (let i: number = index; i < totalBackgroundsCount; i++) {
        i % 2 === 0
          ? (oddBackgrounds.children[Math.floor(i / 2)].y -= toAdd)
          : (evenBackgrounds.children[Math.floor(i / 2)].y -= toAdd);
      }
    } else {
      // resize all backgrounds (move not needed)
      for (let i: number = 0; i < totalBackgroundsCount; i++) {
        i % 2 === 0
          ? oddBackgrounds.children[Math.floor(i / 2)].resize(currentDimensions.width + toAdd, currentDimensions.height)
          : evenBackgrounds.children[Math.floor(i / 2)].resize(
              currentDimensions.width + toAdd,
              currentDimensions.height,
            );
      }
    }
  }
};

const editTexts = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  const tabletexts: GroupNode = figma.getNodeById(selectedGrid.tableTextsId) as GroupNode;
  if (!row) {
    if (all) {
      for (let i: number = 0; i < tabletexts.children.length; i++) {
        const columnTexts: GroupNode = tabletexts.children[i] as GroupNode;
        columnTexts.x += i * toAdd;
        for (let j: number = 0; j < columnTexts.children.length; j++) {
          columnTexts.children[j].resize(columnTexts.children[j].width + toAdd, columnTexts.children[j].height);
        }
      }
    } else {
      const columnTextsToResize: GroupNode = tabletexts.children[index - 1] as GroupNode;
      for (let i: number = 0; i < columnTextsToResize.children.length; i++) {
        columnTextsToResize.children[i].resize(
          columnTextsToResize.children[i].width + toAdd,
          columnTextsToResize.children[i].height,
        );
      }
      for (let i: number = index; i < tabletexts.children.length; i++) {
        const columnTexts: GroupNode = tabletexts.children[i] as GroupNode;
        columnTexts.x += toAdd;
      }
    }
  } else {
    const startIndex: number = all ? 0 : index - 1;
    for (let i: number = 0; i < tabletexts.children.length; i++) {
      const columnTexts: GroupNode = tabletexts.children[i] as GroupNode;
      for (let j: number = startIndex; j < columnTexts.children.length; j++) {
        if (all || j === startIndex) {
          columnTexts.children[j].resize(columnTexts.children[j].width, columnTexts.children[j].height + toAdd);
        }
        all ? (columnTexts.children[j].y -= (j + 1) * toAdd) : (columnTexts.children[j].y -= toAdd);
      }
    }
  }
};

const editTableHeader = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  row: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  const tableHeader: GroupNode = figma.getNodeById(selectedGrid.tableHeaderId) as GroupNode;
  const headerBackgroundDimension: { width: number; height: number } = {
    width: tableHeader.children[0].width,
    height: tableHeader.children[0].height,
  };
  if (!row) {
    if (all) {
      // edit background dimension
      tableHeader.children[0].resize(
        headerBackgroundDimension.width + selectedGrid.columns * toAdd,
        headerBackgroundDimension.height,
      );
      // move and resize texts
      const tableHeaderTexts: GroupNode = tableHeader.children[1] as GroupNode;
      for (let i: number = 0; i < tableHeaderTexts.children.length; i++) {
        tableHeaderTexts.children[i].resize(
          tableHeaderTexts.children[i].width + toAdd,
          tableHeaderTexts.children[i].height,
        );
        i > 0 ? (tableHeaderTexts.children[i].x += i * toAdd) : null;
      }
    } else {
      // edit background dimension
      tableHeader.children[0].resize(headerBackgroundDimension.width + toAdd, headerBackgroundDimension.height);
      // move and resize texts
      const tableHeaderTexts: GroupNode = tableHeader.children[1] as GroupNode;
      tableHeaderTexts.children[index - 1].resize(
        tableHeaderTexts.children[index - 1].width + toAdd,
        tableHeaderTexts.children[index - 1].height,
      );
      for (let i: number = index; i < tableHeaderTexts.children.length; i++) {
        tableHeaderTexts.children[i].x += toAdd;
      }
    }
  } else {
    if (all) {
      tableHeader.y -= selectedGrid.rows * toAdd;
    } else {
      tableHeader.y -= toAdd;
    }
  }
};
