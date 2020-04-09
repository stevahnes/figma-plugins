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
  frames: string[];
  destination: string;
  name: string;
  "clone-master": boolean;
  overwrite: boolean;
  sanitize: boolean;
  locked: boolean;
}) => {
  if (msg.type === "focus") {
    initiateUI();
  }
  if (msg.type === "cloned") {
    let clone: PageNode;
    // go to destination page or create new page
    if (msg.destination) {
      figma.currentPage = figma.getNodeById(msg.destination) as PageNode;
      clone = figma.currentPage;
    } else {
      clone = figma.createPage();
      figma.currentPage = figma.getNodeById(clone.id) as PageNode;
      clone.name = msg.name;
    }
    // clone logic based on overwrite or not
    if (msg.overwrite) {
      // get all the FRAME names of current page
      const existingFrames: { id: string; name: string }[] = [];
      figma.currentPage.children.forEach(node => {
        node.type === "FRAME" ? existingFrames.push({ id: node.id, name: node.name }) : null;
      });
      msg.frames.forEach(frame => {
        const frameToClone: FrameNode = figma.getNodeById(frame) as FrameNode;
        // check if a frame with same name exists in currentPage
        const existingFrameIndex: number = existingFrames.findIndex(frame => frame.name === frameToClone.name);
        // if there is an existing node of the same name
        if (existingFrameIndex > -1) {
          // get the node
          const existingFrameNode: FrameNode = figma.getNodeById(existingFrames[existingFrameIndex].id) as FrameNode;
          // clone the frame as per the msg.frames
          const newFrameNode: FrameNode = frameToClone.clone();
          // reposition cloned frame to old frame
          newFrameNode.x = existingFrameNode.x;
          newFrameNode.y = existingFrameNode.y;
          // delete existing or old frame
          existingFrameNode.remove();
          // for safety, splice the replace entry from existingFrameIndex in case there are 2 frames with same name;
          existingFrames.splice(existingFrameIndex, 1);
        } else {
          // if there is none of the same name
          frameToClone.clone();
        }
      });
    } else {
      msg.frames.forEach(frame => (figma.getNodeById(frame) as FrameNode).clone());
    }
    if (msg.sanitize) {
      const hiddenNodes = clone.findAll(node => node.visible === false);
      hiddenNodes.forEach(node => {
        !childInstanceNodeRegex.test(node.id) ? (figma.getNodeById(node.id) ? node.remove() : null) : null;
      });
    }
    if (msg["clone-master"]) {
      // get all INSTANCE type nodes
      const instanceNodes: InstanceNode[] = clone.findAll(
        node => node.type === "INSTANCE" && !childInstanceNodeRegex.test(node.id),
      ) as InstanceNode[];
      instanceNodes.forEach(node => {
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
      instanceNodes.forEach(node => {
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
      // ungroup and existing Master Components
      const masterComponentGroup: GroupNode = figma.currentPage.findOne(
        node => node.name === "Master Components" && node.type === "GROUP",
      ) as GroupNode;
      if (masterComponentGroup) {
        masterComponentGroup.children.forEach(child => figma.currentPage.appendChild(child));
        masterComponentGroup.remove();
      }
      // then group them into a components group
      const componentNodes: ComponentNode[] = figma.currentPage.findAll(
        node => node.type === "COMPONENT",
      ) as ComponentNode[];
      if (componentNodes.length > 0) {
        const componentGroup = figma.group(componentNodes, figma.currentPage);
        componentGroup.name = "Master Components";
      }
    }
    if (msg.locked) {
      clone.children.forEach((child: SceneNode) => (child.locked = true));
    }
    figma.notify(`👍 Successfully cloned selected frames into ${clone.name}`);
    figma.closePlugin();
  }
};
