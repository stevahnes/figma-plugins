const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 300,
  height: 150,
};

figma.showUI(__html__, showUIOptions);
figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });

figma.ui.onmessage = (msg: { type: string; name: string; sanitize: boolean }) => {
  if (msg.type === "focus") {
    figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });
  }
  if (msg.type === "cloned") {
    const clone: PageNode = figma.currentPage.clone();
    clone.name = msg.name;
    const hiddenNodes = clone.findAll(node => node.visible === false);
    if (msg.sanitize) {
      hiddenNodes.forEach(node => {
        figma.getNodeById(node.id) ? node.remove() : null;
      });
    }
    figma.currentPage = figma.getNodeById(clone.id) as PageNode;
    figma.notify("👍 PageClone successfully cloned the selected page");
    figma.closePlugin();
  }
};
