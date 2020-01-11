/* Figma API Function Abstraction */
export function groupNodes(
  nodes: ReadonlyArray<BaseNode>,
  parent: BaseNode & ChildrenMixin
): GroupNode {
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
