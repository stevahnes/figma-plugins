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
  // editTexts(selectedGrid, decrease, false, amount, all);
  selectedGrid.tableHeaderId !== "" ? editTableHeader(selectedGrid, decrease, false, amount, all) : null;
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
  // editTexts(selectedGrid, decrease, true, amount, all);
  selectedGrid.tableHeaderId !== "" ? editTableHeader(selectedGrid, decrease, true, amount, all) : null;
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
  row
    ? (resizeBorders(allBorders["Vertical"], decrease, amount, selectedGrid.rows, all),
      moveBorders(allBorders["Horizontal"], decrease, amount, all, index))
    : (resizeBorders(allBorders["Horizontal"], decrease, amount, selectedGrid.columns, all),
      moveBorders(allBorders["Vertical"], decrease, amount, all, index));
};

const resizeBorders = (id: string, decrease: boolean, amount: number, multiplier: number, all: boolean): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  (figma.getNodeById(id) as GroupNode).children.forEach((child: LineNode) => {
    all ? child.resize(child.width + toAdd * multiplier, 0) : child.resize(child.width + toAdd, 0);
  });
};

const moveBorders = (id: string, decrease: boolean, amount: number, all: boolean, index?: number): void => {
  const bordersToMove: GroupNode = figma.getNodeById(id) as GroupNode;
  const bordersToMoveGroupName = bordersToMove.name;
  const startIndex: number = !all ? index : 1;
  let toAdd: number = amount;
  // Top to bottom logic not needed as reference coordinate is always {0,0}
  if (bordersToMoveGroupName === "Vertical") {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Vertical borders, increase === add as rightward is +ve
      !decrease ? (bordersToMove.children[i].x += toAdd) : (bordersToMove.children[i].x -= toAdd);
      toAdd += amount;
    }
  } else {
    for (let i: number = startIndex; i < bordersToMove.children.length; i++) {
      // for Horizontal borders, increase === subtract as upward is negative
      !decrease ? (bordersToMove.children[i].y -= toAdd) : (bordersToMove.children[i].y += toAdd);
      toAdd += amount; // FIXME last border might be header top, add by headerHeight instead
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
    index % 2 === 0
      ? row
        ? oddBackgrounds.children[Math.floor(index / 2)].resize(
            currentDimensions.width,
            currentDimensions.height + toAdd,
          )
        : oddBackgrounds.children[Math.floor(index / 2)].resize(
            currentDimensions.width + selectedGrid.columns * toAdd,
            currentDimensions.height,
          )
      : row
      ? evenBackgrounds.children[Math.floor(index / 2)].resize(
          currentDimensions.width,
          currentDimensions.height + toAdd,
        )
      : evenBackgrounds.children[Math.floor(index / 2)].resize(
          currentDimensions.width + selectedGrid.columns * toAdd,
          currentDimensions.height,
        );
    // then move the backgrounds to its correct position
    for (let i: number = index; i < totalBackgroundsCount; i++) {
      i % 2 === 0
        ? row
          ? (oddBackgrounds.children[Math.floor(i / 2)].y -= (i + 1) * toAdd)
          : null
        : row
        ? (evenBackgrounds.children[Math.floor(i / 2)].y -= (i + 1) * toAdd)
        : null;
    }
  }
};

// const editTexts = (
//   selectedGrid: SelectedGrid,
//   decrease: boolean,
//   row: boolean,
//   amount: number,
//   all: boolean,
//   index?: number,
// ): void => {
//   console.log("selectedGridTexts :", (figma.getNodeById(selectedGrid.tableTextsId) as GroupNode).children);
//   // TODO
// };

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
      for (let i: number = 1; i < tableHeaderTexts.children.length; i++) {
        tableHeaderTexts.children[i].x += i * toAdd;
      }
    } else {
      // edit background dimension
      tableHeader.children[0].resize(headerBackgroundDimension.width + toAdd, headerBackgroundDimension.height);
      // move and resize texts
      const tableHeaderTexts: GroupNode = tableHeader.children[1] as GroupNode;
      for (let i: number = index + 1; i < tableHeaderTexts.children.length; i++) {
        tableHeaderTexts.children[i].x += (i - index + 2) * toAdd;
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
