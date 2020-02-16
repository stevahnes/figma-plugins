import {
  generateRowBackground,
  generateBorders,
  generateTableTexts,
  generateTableHeader,
  saveMessage,
} from "./generators/generators";
import * as Utils from "./utils/utils";
import * as Constants from "./interfaces_and_constants/constants";
import * as Interfaces from "./interfaces_and_constants/interfaces";

// This shows the HTML page in "ui.html".
figma.showUI(__html__, Constants.showUIOptions);

// Generate available font options and load saved states
let promise: [Promise<Font[]>, Promise<Interfaces.PluginMessage>] = [
  Utils.listAvailableFontsAsync(),
  Utils.getStorageData("BOO"),
];

Promise.all(promise).then(results => {
  const msg: { [key: string]: any } = {};
  const fonts = results[0];
  const createMessage = results[1];
  let fontOptions: { [key: string]: string[] } = {};
  let previousFont: string = "";
  fonts.forEach(font => {
    if (font.fontName.family !== previousFont) {
      fontOptions[font.fontName.family] = [font.fontName.style];
      previousFont = font.fontName.family;
    } else {
      fontOptions[font.fontName.family].push(font.fontName.style);
    }
  });
  msg.fontOptions = fontOptions;
  msg.createMessage = createMessage;
  figma.ui.postMessage(msg);
  figma.ui.show();
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  processMessage(msg);
};

function processMessage(message: Interfaces.PluginMessage): void {
  if (message.type === Constants.MessageType.CREATE) {
    /* Generate Background */
    const oddRowBackgroundGroup: GroupNode = generateRowBackground(
      Constants.RowBackgroundType.ODD,
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      message.header,
      message.primarybackgroundColor,
      message.stripedbackgroundColor,
      message.referenceCoordinates,
    );
    const evenRowBackgroundGroup: GroupNode = generateRowBackground(
      Constants.RowBackgroundType.EVEN,
      message.rows,
      message.rowHeight,
      message.columnWidth * message.columns,
      message.alternateBackgrounds,
      message.header,
      message.primarybackgroundColor,
      message.stripedbackgroundColor,
      message.referenceCoordinates,
    );
    const rowBackgroundNode: SceneNode[] = [oddRowBackgroundGroup, evenRowBackgroundGroup];
    const rowBackgroundGroup: GroupNode = Utils.groupNodes(rowBackgroundNode, figma.currentPage);
    rowBackgroundGroup.name = "Row Background";

    /* Generate Texts */
    const columnTextsGroup: GroupNode = generateTableTexts(
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.tableFontFamily,
      message.tableFontStyle,
      message.tableFontSize,
      message.header,
      message.referenceCoordinates,
    );

    /* Generate Headers */
    const tableHeaderGroup: GroupNode = generateTableHeader(
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.header,
      message.headerHeight,
      message.headerFontFamily,
      message.headerFontStyle,
      message.headerFontSize,
      message.floatingFilter,
      message.floatingFilterHeight,
      message.primarybackgroundColor,
      message.referenceCoordinates,
    );

    /* Generate Borders */
    const verticalLinesGroup: GroupNode = generateBorders(
      Constants.BorderType.VERTICAL,
      message.borders,
      message.columns,
      message.columnWidth,
      message.rows,
      message.rowHeight,
      message.header,
      message.headerHeight,
      message.borderColor,
      message.referenceCoordinates,
    );
    const horizontalLinesGroup: GroupNode = generateBorders(
      Constants.BorderType.HORIZONTAL,
      message.borders,
      message.rows,
      message.rowHeight,
      message.columns,
      message.columnWidth,
      message.header,
      message.headerHeight,
      message.borderColor,
      message.referenceCoordinates,
    );
    const borderLinesNode: SceneNode[] = [verticalLinesGroup, horizontalLinesGroup];
    const borderLinesGroup: GroupNode = Utils.groupNodes(borderLinesNode, figma.currentPage);
    borderLinesGroup.name = "Borders";

    /* Sort Group Nodes */
    const tableGroup = Utils.groupNodes([rowBackgroundGroup], figma.currentPage);
    tableGroup.appendChild(columnTextsGroup);
    if (tableHeaderGroup !== null) {
      tableGroup.appendChild(tableHeaderGroup);
    }
    tableGroup.appendChild(borderLinesGroup);
    tableGroup.name = "Table";
    figma.currentPage.selection = [tableGroup];
    figma.viewport.scrollAndZoomIntoView([tableGroup]);

    /* Save Message to Client Storage */
    saveMessage(Constants.MessageType.CREATE, message);
    return null;
  }
}
