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

/* Clone function taken from Figma Plugin API example */
export function clone(val) {
  const type = typeof val;
  if (val === null) {
    return null;
  } else if (
    type === "undefined" ||
    type === "number" ||
    type === "string" ||
    type === "boolean"
  ) {
    return val;
  } else if (type === "object") {
    if (val instanceof Array) {
      return val.map(x => clone(x));
    } else if (val instanceof Uint8Array) {
      return new Uint8Array(val);
    } else {
      let o = {};
      for (const key in val) {
        o[key] = clone(val[key]);
      }
      return o;
    }
  }
  throw "unknown";
}

/* HEX to RGB Conversion */
export function hexToRgb(hex: string): RGB {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}
