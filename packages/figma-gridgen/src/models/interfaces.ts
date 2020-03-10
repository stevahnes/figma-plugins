import * as Constants from "./constants";

export interface PluginMessage {
  type: Constants.MessageType;
  mode: string;
  tableWidth?: number;
  tableHeight?: number;
  columns?: number;
  rows?: number;
  primarybackgroundColor?: string;
  tableFontFamily?: string;
  tableFontStyle?: string;
  tableFontSize?: number;
  columnWidth?: number;
  rowHeight?: number;
  header?: boolean;
  headerHeight?: number;
  headerFontFamily?: string;
  headerFontStyle?: string;
  headerFontSize?: number;
  floatingFilter?: boolean;
  floatingFilterHeight?: number;
  alternateBackgrounds?: boolean;
  stripedbackgroundColor?: string;
  borders?: boolean;
  borderColor?: string;
  referenceCoordinates?: ReferenceCoordinates;
}

export interface ReferenceCoordinates {
  x: number;
  y: number;
}
