export interface CreateMessage {
  type: string;
  columns?: number;
  columnWidth?: number;
  rows?: number;
  rowHeight?: number;
  borders?: boolean;
  alternateBackgrounds?: boolean;
  header?: boolean;
  headerHeight?: number;
  floatingFilters?: boolean;
}

export interface ReferenceCoordinates {
  x: number;
  y: number;
}
