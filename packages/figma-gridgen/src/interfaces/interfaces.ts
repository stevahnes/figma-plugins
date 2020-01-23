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
