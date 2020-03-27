const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 300,
  height: 180,
};

figma.showUI(__html__, showUIOptions);
figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });

figma.ui.onmessage = (msg: { type: string; name: string; sanitize: boolean; locked: boolean }) => {
  if (msg.type === "focus") {
    figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });
  }
  if (msg.type === "cloned") {
    const clone: PageNode = figma.currentPage.clone();
    const oldName: string = clone.name;
    clone.name = msg.name;
    if (msg.sanitize) {
      const hiddenNodes = clone.findAll(node => node.visible === false);
      const instanceNodeRegex: RegExp = /I[0-9]+:[0-9]+;/;
      hiddenNodes.forEach(node => {
        !instanceNodeRegex.test(node.id) ? (figma.getNodeById(node.id) ? node.remove() : null) : null;
      });
    }
    if (msg.locked) {
      clone.children.forEach((child: SceneNode) => (child.locked = true));
    }
    figma.currentPage = figma.getNodeById(clone.id) as PageNode;
    figma.notify(`👍 Successfully cloned ${oldName} into ${clone.name}`);
    figma.closePlugin();
  }
};
