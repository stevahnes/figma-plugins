const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 300,
  height: 500,
};

const childInstanceNodeRegex: RegExp = /I[0-9]+:[0-9]+;/;
const masterComponentsIds: string[] = [];
const clonedMasterComponentsIds: string[] = [];

const initiateUI = (): void => {
  const pages: { id: string; name: string }[] = [];
  const frames: { id: string; name: string; selected: boolean }[] = [];
  figma.root.children.forEach((child: PageNode) => {
    pages.push({ id: child.id, name: child.name });
  });
  figma.currentPage.children.forEach((child: FrameNode) => {
    frames.push({
      id: child.id,
      name: child.name,
      selected: figma.currentPage.selection.indexOf(child) !== -1,
    });
  });
  figma.ui.postMessage({ pages: pages, id: figma.currentPage.id, name: figma.currentPage.name, frames: frames });
};

let deepCloneMasterComponents: boolean = true;
let deepCloneMasterComponentsIds: string[] = [];

figma.showUI(__html__, showUIOptions);
initiateUI();

figma.ui.onmessage = (msg: {
  type: string;
  name: string;
  sanitize: boolean;
  "clone-master": boolean;
  locked: boolean;
}) => {
  if (msg.type === "focus") {
    initiateUI();
  }
  if (msg.type === "cloned") {
    const clone: PageNode = figma.currentPage.clone();
    figma.currentPage = figma.getNodeById(clone.id) as PageNode;
    const oldName: string = clone.name;
    clone.name = msg.name;
    if (msg.sanitize) {
      const hiddenNodes = clone.findAll(node => node.visible === false);
      hiddenNodes.forEach(node => {
        !childInstanceNodeRegex.test(node.id) ? (figma.getNodeById(node.id) ? node.remove() : null) : null;
      });
    }
    if (msg["clone-master"]) {
      // get all INSTANCE type nodes
      const instanceNodes = clone.findAll(node => node.type === "INSTANCE" && !childInstanceNodeRegex.test(node.id));
      (instanceNodes as InstanceNode[]).forEach(node => {
        masterComponentsIds.indexOf(node.masterComponent.id) === -1
          ? masterComponentsIds.push(node.masterComponent.id)
          : null;
      });
      // get and store the unique master COMPONENT nodes, if they are not in cloned page
      masterComponentsIds.forEach(id => {
        const parentId: string = figma.getNodeById(id).parent ? figma.getNodeById(id).parent.id : "";
        if (parentId !== figma.currentPage.id) {
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
      // deep clone INSTANCE nodes of new master COMPONENT nodes
      deepCloneMasterComponentsIds = [...clonedMasterComponentsIds];
      while (deepCloneMasterComponents) {
        deepCloneMasterComponents = false; // reset deepCloneMasterComponents
        const nextDeepCloneMasterComponentsIds: string[] = [];
        deepCloneMasterComponentsIds.forEach(id => {
          // if it has children
          if ((figma.getNodeById(id) as ComponentNode).children) {
            (figma.getNodeById(id) as ComponentNode).children.forEach(child => {
              // if any of them are INSTANCE components
              if (child.type === "INSTANCE") {
                // get the id of the location of the child's master COMPONENT node
                const childMasterComponentParent: string = child.masterComponent.parent
                  ? child.masterComponent.parent.id
                  : "";
                // if child's master COMPONENT not in currentPage
                if (childMasterComponentParent !== figma.currentPage.id) {
                  // if child's master COMPONENT is not cloned yet
                  if (masterComponentsIds.indexOf(child.masterComponent.id) === -1) {
                    masterComponentsIds.push(child.masterComponent.id);
                    const masterClone = (child.masterComponent as ComponentNode).clone();
                    masterClone.visible = false;
                    clonedMasterComponentsIds.push(masterClone.id);
                    nextDeepCloneMasterComponentsIds.push(masterClone.id);
                    deepCloneMasterComponents = true;
                    child.masterComponent = masterClone;
                  } else {
                    child.masterComponent = figma.getNodeById(
                      clonedMasterComponentsIds[masterComponentsIds.indexOf(child.masterComponent.id)],
                    ) as ComponentNode;
                  }
                }
              }
            });
          }
        });
        deepCloneMasterComponentsIds = [...nextDeepCloneMasterComponentsIds];
      }
      // then group them into a components group
      const componentGroup = figma.group(
        figma.currentPage.findAll(node => node.type === "COMPONENT"),
        figma.currentPage,
      );
      componentGroup.name = "Master Components";
    }
    if (msg.locked) {
      clone.children.forEach((child: SceneNode) => (child.locked = true));
    }
    figma.notify(`👍 Successfully cloned ${oldName} into ${clone.name}`);
    figma.closePlugin();
  }
};
