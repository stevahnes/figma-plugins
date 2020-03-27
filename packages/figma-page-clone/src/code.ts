const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 300,
  height: 205,
};

const masterComponentsIds: string[] = [];
const clonedMasterComponentsIds: string[] = [];

figma.showUI(__html__, showUIOptions);
figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });

figma.ui.onmessage = (msg: {
  type: string;
  name: string;
  sanitize: boolean;
  "clone-master": boolean;
  locked: boolean;
}) => {
  if (msg.type === "focus") {
    figma.ui.postMessage({ id: figma.currentPage.id, name: figma.currentPage.name });
  }
  if (msg.type === "cloned") {
    const clone: PageNode = figma.currentPage.clone();
    figma.currentPage = figma.getNodeById(clone.id) as PageNode;
    const oldName: string = clone.name;
    clone.name = msg.name;
    if (msg.sanitize) {
      const hiddenNodes = clone.findAll(node => node.visible === false);
      const instanceNodeRegex: RegExp = /I[0-9]+:[0-9]+;/;
      hiddenNodes.forEach(node => {
        !instanceNodeRegex.test(node.id) ? (figma.getNodeById(node.id) ? node.remove() : null) : null;
      });
    }
    if (msg["clone-master"]) {
      // get all INSTANCE type nodes
      const instanceNodes = clone.findAll(node => node.type === "INSTANCE");
      (instanceNodes as InstanceNode[]).forEach(node =>
        masterComponentsIds.indexOf(node.masterComponent.id) === -1
          ? masterComponentsIds.push(node.masterComponent.id)
          : null,
      );
      // get and store the unique master COMPONENT nodes, if they are not in cloned page
      masterComponentsIds.forEach(id => {
        if (figma.getNodeById(id).parent.id !== figma.currentPage.id) {
          const masterClone = (figma.getNodeById(id) as ComponentNode).clone();
          masterClone.visible = false;
          clonedMasterComponentsIds.push(masterClone.id);
        }
      });
      // remap individual INSTANCE nodes to their new master COMPONENT nodes
      (instanceNodes as InstanceNode[]).forEach(node => {
        node.masterComponent = figma.getNodeById(
          clonedMasterComponentsIds[masterComponentsIds.indexOf(node.masterComponent.id)],
        ) as ComponentNode;
      });
    }
    if (msg.locked) {
      clone.children.forEach((child: SceneNode) => (child.locked = true));
    }
    figma.notify(`👍 Successfully cloned ${oldName} into ${clone.name}`);
    figma.closePlugin();
  }
};
