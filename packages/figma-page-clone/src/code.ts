const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 350,
  height: 510,
};

const childInstanceNodeRegex: RegExp = /I[0-9]+:[0-9]+;/;
const masterComponentsIds: string[] = [];
const clonedMasterComponentsIds: string[] = [];
const READ_ONLY_OR_DEPRECATED_KEYS: string[] = [
  "mainComponent",
  "masterComponent",
  "verticalPadding",
  "horizontalPadding",
  "hasMissingFont",
  "type",
  "id",
  "parent",
  "removed",
  "children",
  "absoluteTransform",
  "constrainProportions",
  "reactions",
  "overlayPositionType",
  "overlayBackground",
  "overlayBackgroundInteraction",
  "overflowDirection",
];

const FUNCTION_BASED_KEYS: string[] = ["width", "height"];

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
  "detach-instances": boolean;
  overwrite: boolean;
  sanitize: boolean;
  locked: boolean;
}) => {
  if (msg.type === "focus") {
    initiateUI();
  }
  if (msg.type === "cloned") {
    /* NOTE: PageClone actually clones EVERYTHING except DOCUMENT. However, I have not found a way to improve type casting  */
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
    let pageChildrenNodes: FrameNode[] = [];
    if (msg.overwrite) {
      // get all the FRAME names of current page
      const existingFrames: { id: string; name: string }[] = [];
      figma.currentPage.children.forEach(node => {
        existingFrames.push({ id: node.id, name: node.name });
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
          // add newFrameNode to cloneFrameNodes for detach instance logic
          pageChildrenNodes.push(newFrameNode);
        } else {
          // if there is none of the same name
          const newFrameNode: FrameNode = frameToClone.clone();
          // add newFrameNode to cloneFrameNodes for detach instance logic
          pageChildrenNodes.push(newFrameNode);
        }
      });
    } else {
      msg.frames.forEach(frame => {
        const newFrameNode: FrameNode = (figma.getNodeById(frame) as FrameNode).clone();
        // add newFrameNode to cloneFrameNodes for detach instance logic
        pageChildrenNodes.push(newFrameNode);
      });
    }
    if (msg["detach-instances"]) {
      let currentLayerNodes = [figma.currentPage];
      while (currentLayerNodes.length > 0) {
        let nextLayerNodes = [];
        currentLayerNodes.forEach(node => {
          if (node.children) {
            const instances: InstanceNode[] = node.findChildren(
              child => child.type === "INSTANCE" || child.type === "COMPONENT",
            ) as InstanceNode[];
            instances.length > 0 ? instances.forEach(instance => detachInstance(instance)) : null;
            nextLayerNodes = nextLayerNodes.concat(
              node.findChildren(child => child.type === "GROUP" || child.type === "FRAME"),
            );
          }
        });
        currentLayerNodes = [...nextLayerNodes];
      }
    }
    if (msg.sanitize) {
      const hiddenNodes = clone.findAll(node => node.visible === false && node.type !== "COMPONENT");
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
        masterComponentsIds.indexOf(node.mainComponent.id) === -1
          ? masterComponentsIds.push(node.mainComponent.id)
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
        // TODO findAll nodes within this instance that is not another instance
        // TODO remember the properties editable based on each type
        node.mainComponent = figma.getNodeById(
          clonedMasterComponentsIds[masterComponentsIds.indexOf(node.mainComponent.id)],
        ) as ComponentNode;
        // TODO re-apply the properties here (if works, need to optimize for text char replacement)
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
                const childMasterComponentParent: string = child.mainComponent.parent
                  ? child.mainComponent.parent.id
                  : "";
                // if child's master COMPONENT not in currentPage
                if (childMasterComponentParent !== figma.currentPage.id) {
                  // if child's master COMPONENT is not cloned yet
                  if (masterComponentsIds.indexOf(child.mainComponent.id) === -1) {
                    masterComponentsIds.push(child.mainComponent.id);
                    const masterClone = (child.mainComponent as ComponentNode).clone();
                    masterClone.visible = false;
                    clonedMasterComponentsIds.push(masterClone.id);
                    nextDeepCloneMasterComponentsIds.push(masterClone.id);
                    deepCloneMasterComponents = true;
                    child.mainComponent = masterClone;
                  } else {
                    child.mainComponent = figma.getNodeById(
                      clonedMasterComponentsIds[masterComponentsIds.indexOf(child.mainComponent.id)],
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

const detachInstance = (instance: InstanceNode): void => {
  const parent = instance.parent;
  const newFrame = figma.createFrame();
  for (const i in newFrame) {
    if (!READ_ONLY_OR_DEPRECATED_KEYS.includes(i)) {
      if (FUNCTION_BASED_KEYS.includes(i)) {
        if (i === "width" && instance[i] >= 0.01) {
          const resizeHeight: number = Math.max(newFrame.height, 0.01);
          newFrame.resize(instance[i], resizeHeight);
        }
        if (i === "height" && instance[i] >= 0.01) {
          const resizeWidth: number = Math.max(newFrame.width, 0.01);
          newFrame.resize(resizeWidth, instance[i]);
        }
      } else {
        // if cornerRadius is figma.mixed, rely on the other individual keys
        if (!(i === "cornerRadius" && instance[i] === figma.mixed)) {
          newFrame[i] = clone(instance[i]);
        }
      }
    }
  }
  instance.children.forEach(child => {
    const childClone: SceneNode = child.clone();
    if (child.type !== "TEXT") {
      for (const j in childClone) {
        if (!READ_ONLY_OR_DEPRECATED_KEYS.includes(j)) {
          if (FUNCTION_BASED_KEYS.includes(j)) {
            if (j === "width" && child[j] >= 0.01) {
              const resizeHeight: number = childClone.type === "LINE" ? 0 : Math.max(childClone.height, 0.01);
              childClone.resize(child[j], resizeHeight);
            }
            if (j === "height" && child[j] >= 0.01) {
              const resizeWidth: number = Math.max(childClone.width, 0.01);
              childClone.resize(resizeWidth, child[j]);
            }
          } else {
            // if cornerRadius is figma.mixed, rely on the other individual keys
            if (!(j === "cornerRadius" && child[j] === figma.mixed)) {
              childClone[j] = clone(child[j]);
            }
          }
        }
      }
    }

    newFrame.appendChild(childClone);
  });
  parent.insertChild(parent.children.indexOf(instance), newFrame);
  instance.remove();
};

// async function loadNodeFont(fontName: FontName): Promise<void> {
//   await figma.loadFontAsync(fontName).catch(error => console.error(error));
// }

function clone(val) {
  const type = typeof val;
  if (val === null) {
    return null;
  } else if (type === "undefined" || type === "number" || type === "string" || type === "boolean") {
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
