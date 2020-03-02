export interface CodeToUIMessage {
  isValidGridGen: boolean;
  selectedGridId: string;
  selectedGridName: string;
}

export interface UIToCodeMessage {
  type: string;
  payload: any;
}

export interface SelectedGrid {
  id: string;
  name: string;
}
