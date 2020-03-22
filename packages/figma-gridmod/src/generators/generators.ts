import { SelectedGrid } from "../models/interfaces";

export const editColumns = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, false, amount, all, index);
  // TODO: create editRowBackgrounds, editTexts, editTableHeader
  return null;
};

export const editRows = (
  selectedGrid: SelectedGrid,
  decrease: boolean,
  amount: number,
  all: boolean,
  index?: number,
): void => {
  editBorders(selectedGrid, decrease, false, amount, all, index);
  // TODO: create editRowBackgrounds, editTexts, editTableHeader
  return null;
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
      moveBorders(allBorders["Horizontal"], decrease, amount, index))
    : (resizeBorders(allBorders["Horizontal"], decrease, amount, selectedGrid.columns, all),
      moveBorders(allBorders["Vertical"], decrease, amount, index));
};

const resizeBorders = (id: string, decrease: boolean, amount: number, multiplier: number, all: boolean): void => {
  const toAdd: number = decrease ? -1 * amount : amount;
  (figma.getNodeById(id) as GroupNode).children.forEach((child: LineNode) => {
    all ? child.resize(child.width + toAdd * multiplier, 0) : child.resize(child.width + toAdd, 0);
  });
};

const moveBorders = (id: string, decrease: boolean, amount: number, index?: number): any => {
  return [id, decrease, amount, index]; // TODO create algorithm to move borders based on the index (single move) or all (multi move)
};
