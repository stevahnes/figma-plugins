const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 300,
  height: 125,
};

figma.showUI(__html__, showUIOptions);
figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });

figma.ui.onmessage = (msg: { type: string; name: string }) => {
  if (msg.type === "focus") {
    figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });
  }
  if (msg.type === "cloned") {
    const clone: PageNode = figma.currentPage.clone();
    clone.name = msg.name;
    figma.currentPage = figma.getNodeById(clone.id) as PageNode;
    figma.notify("👍 PageClone successfully cloned the selected page");
    figma.closePlugin();
  }
};
