import { UIToCodeMessageType } from "./constants";

export interface CodeToUIMessage {
  isValidGridGen: boolean;
  selectedGridId: string;
  selectedGridName: string;
}

export interface UIToCodeMessage {
  type: UIToCodeMessageType;
  payload: any;
}

export interface SelectedGrid {
  id: string;
  name: string;
}