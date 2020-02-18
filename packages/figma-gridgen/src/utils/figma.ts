export function notify(message: string, timeout?: number): NotificationHandler {
  return figma.notify(message, { timeout: timeout });
}

export function closePlugin(): void {
  return figma.closePlugin();
}

/* Fonts Util */
// Function to load selected font
export async function loadNodeFont(fontName: FontName): Promise<void> {
  await figma.loadFontAsync(fontName).catch(error => console.error(error));
}

// Function to list all available fonts on Figma
export async function listAvailableFontsAsync(): Promise<Font[]> {
  return await figma.listAvailableFontsAsync().catch(error => {
    console.error(error);
    return null;
  });
}

/* Client Storage */
export async function getStorageData(key: string): Promise<any | undefined> {
  return await figma.clientStorage.getAsync(key).catch(error => {
    console.error(error);
    return null;
  });
}
export async function setStorageData(key: string, value: any): Promise<void> {
  await figma.clientStorage.setAsync(key, value).catch(error => console.error(error));
}

/* Figma API Function Abstraction */
export function groupNodes(nodes: ReadonlyArray<BaseNode>, parent: BaseNode & ChildrenMixin): GroupNode {
  return figma.group(nodes, parent);
}

export function getCurrentPage(): PageNode {
  return figma.currentPage;
}

export function getSelection(): readonly SceneNode[] {
  return getCurrentPage().selection;
}

export function setSelection(node: SceneNode[]): null {
  figma.currentPage.selection = node;
  return null;
}

export function scrollAndZoomIntoView(node: SceneNode[]): null {
  figma.viewport.scrollAndZoomIntoView(node);
  return null;
}
