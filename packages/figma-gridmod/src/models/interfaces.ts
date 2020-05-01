import { UIToCodeMessageType } from "./constants";

export interface CodeToUIMessage {
  isValidGridGen: boolean;
  selectedGrid: SelectedGrid;
}

export interface UIToCodeMessage {
  type: UIToCodeMessageType;
  payload: any;
}

export interface SelectedGrid {
  id: string;
  name: string;
  rows: number; // without header
  columns: number;
  rowBackgroundId: string;
  tableTextsId: string;
  bordersId: string;
  tableHeaderId: string;
  minimumTextWidth: number;
  minimumTextHeight: number;
}
