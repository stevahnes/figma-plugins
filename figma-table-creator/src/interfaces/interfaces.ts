export interface CreateMessage {
  type: string;
  columns?: number;
  columnWidth?: number;
  rows?: number;
  rowHeight?: number;
  header?: boolean;
}

export interface ReferenceCoordinates {
  x: number;
  y: number;
}
