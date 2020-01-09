export interface CreateMessage {
  type: string;
  columns?: number;
  columnWidth?: number;
  rows?: number;
  rowHeight?: number;
}

export interface ReferenceCoordinates {
  x: number;
  y: number;
}
