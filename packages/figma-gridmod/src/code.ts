const validGridGenCheck = (): void => {
  let isValidGridGen: boolean = true;
  const selection = figma.currentPage.selection[0];
  if (selection) {
    if (selection.name === "Table") {
      const childNodesName: string[] = ["Row Background", "Table Texts", "Table Header", "Borders"];
      (selection as GroupNode).children.forEach(child => {
        childNodesName.indexOf(child.name) === -1 ? (isValidGridGen = false) : null;
      });
    } else {
      isValidGridGen = false;
    }
  } else {
    isValidGridGen = false;
  }
  figma.ui.postMessage(isValidGridGen);
};

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Check if selection is a valid GridGen
validGridGenCheck();

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  console.log(msg);
  if (msg) {
    validGridGenCheck();
  }
};
