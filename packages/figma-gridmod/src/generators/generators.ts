import { SelectedGrid } from "../models/interfaces";

// export const editColumns = (
//   selectedGrid: SelectedGrid,
//   decrease: boolean,
//   amount: number,
//   all: boolean,
//   index?: number,
// ): void => {
//   // TODO: create editBorders, editRowBackgrounds, editTexts, editTableHeader
//   return null;
// };

// export const editRows = (
//   selectedGrid: SelectedGrid,
//   decrease: boolean,
//   amount: number,
//   all: boolean,
//   index?: number,
// ): void => {
//   // TODO: create editBorders, editRowBackgrounds, editTexts, editTableHeader
//   return null;
// };

export const getBorderTypesId = (selectedGrid: SelectedGrid): { [key: string]: string } => {
  const allBorders: { [key: string]: string } = {};
  (figma.getNodeById(selectedGrid.bordersId) as GroupNode).children.forEach(
    sceneNode => (allBorders[sceneNode.name] = sceneNode.id),
  );
  return allBorders;
};

// const editBorders = (selectedGrid: SelectedGrid, row: boolean, amount: number, all: boolean, index?: number): void => {
//   const allBorders: { [key: string]: string } = getBorderTypesId(selectedGrid);
//   row ? resizeBorders(allBorders["Vertical"], amount, all) : resizeBorders(allBorders["Horizontal"], amount, all);
// };

// const resizeBorders = (id: string, amount: number, all: boolean): void => {
//   (figma.getNodeById(id) as GroupNode).children.forEach((child: LineNode) => {
//     child.resize(child.width + amount, 0); // TODO need to multiply with # of resized items and consider header presence!
//   });
// };
