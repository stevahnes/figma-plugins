import * as Constants from "./constants";

export interface CreateMessage {
  type: Constants.MessageType;
  columns?: number;
  columnWidth?: number;
  rows?: number;
  rowHeight?: number;
  tableFontFamily?: string;
  tableFontStyle?: string;
  tableFontSize?: number;
  borders?: boolean;
  alternateBackgrounds?: boolean;
  header?: boolean;
  headerHeight?: number;
  headerFontFamily?: string;
  headerFontStyle?: string;
  headerFontSize?: number;
  floatingFilter?: boolean;
  floatingFilterHeight?: number;
  primarybackgroundColor?: string;
  stripedbackgroundColor?: string;
  borderColor?: string;
  referenceCoordinates?: ReferenceCoordinates;
}

export interface ReferenceCoordinates {
  x: number;
  y: number;
}
