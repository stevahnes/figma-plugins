const showUIOptions: ShowUIOptions = {
  visible: true,
  width: 350,
  height: 510,
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
  newFrame.name = instance.name;
  newFrame.x = instance.x;
  newFrame.y = instance.y;
  newFrame.resize(instance.width, instance.height);
  newFrame.visible = instance.visible;
  newFrame.rotation = instance.rotation;
  newFrame.locked = instance.locked;
  newFrame.isMask = instance.isMask;
  newFrame.constraints = instance.constraints;
  newFrame.clipsContent = instance.clipsContent;
  newFrame.layoutMode = instance.layoutMode;
  newFrame.cornerSmoothing = instance.cornerSmoothing;
  if (typeof instance.cornerRadius === "number") {
    newFrame.cornerRadius = instance.cornerRadius;
  } else {
    newFrame.topLeftRadius = instance.topLeftRadius;
    newFrame.topRightRadius = instance.topRightRadius;
    newFrame.bottomLeftRadius = instance.bottomLeftRadius;
    newFrame.bottomRightRadius = instance.bottomRightRadius;
  }
  // parent frame auto-layout
  newFrame.layoutMode = instance.layoutMode;
  newFrame.primaryAxisSizingMode = instance.primaryAxisSizingMode;
  newFrame.counterAxisSizingMode = instance.counterAxisSizingMode;
  newFrame.primaryAxisAlignItems = instance.primaryAxisAlignItems;
  newFrame.counterAxisAlignItems = instance.counterAxisAlignItems;
  newFrame.paddingLeft = instance.paddingLeft;
  newFrame.paddingRight = instance.paddingRight;
  newFrame.paddingTop = instance.paddingTop;
  newFrame.paddingBottom = instance.paddingBottom;
  newFrame.itemSpacing = instance.itemSpacing;
  // fill properties
  newFrame.fills = instance.fills ? clone(instance.fills) : [];
  // strokes properties
  newFrame.strokes = instance.strokes ? clone(instance.strokes) : [];
  newFrame.strokeWeight = instance.strokeWeight;
  newFrame.strokeMiterLimit = instance.strokeMiterLimit;
  newFrame.strokeAlign = instance.strokeAlign;
  newFrame.strokeCap = instance.strokeCap;
  newFrame.strokeJoin = instance.strokeJoin;
  // inheritance auto-layout properties
  newFrame.layoutAlign = instance.layoutAlign;
  newFrame.layoutGrow = instance.layoutGrow;
  instance.children.forEach(child => {
    const childClone: SceneNode = child.clone();
    childClone.name = child.name;
    childClone.x = child.x;
    childClone.y = child.y;
    childClone.visible = child.visible;
    childClone.rotation = child.rotation;
    childClone.locked = child.locked;
    // inheritance auto-layout properties
    childClone.layoutAlign = child.layoutAlign;
    childClone.layoutGrow = child.layoutGrow;
    switch (child.type) {
      case "TEXT":
        (childClone as TextNode).opacity = child.opacity;
        (childClone as TextNode).blendMode = child.blendMode;
        (childClone as TextNode).isMask = child.isMask;
        (childClone as TextNode).constraints = child.constraints;
        // (childClone as TextNode).textAlignHorizontal = child.textAlignHorizontal;
        // (childClone as TextNode).textAlignVertical = child.textAlignVertical;
        // (childClone as TextNode).textAutoResize = child.textAutoResize;
        // (childClone as TextNode).paragraphIndent = child.paragraphIndent;
        // (childClone as TextNode).paragraphSpacing = child.paragraphSpacing;
        // (childClone as TextNode).autoRename = child.autoRename;
        break;
      case "SLICE":
        break;
      case "LINE":
        (childClone as LineNode).opacity = child.opacity;
        (childClone as LineNode).blendMode = child.blendMode;
        (childClone as LineNode).isMask = child.isMask;
        (childClone as LineNode).constraints = child.constraints;
        // fill properties
        (childClone as LineNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as LineNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as LineNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as LineNode).strokeWeight = child.strokeWeight;
        (childClone as LineNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as LineNode).strokeAlign = child.strokeAlign;
        (childClone as LineNode).strokeCap = child.strokeCap;
        (childClone as LineNode).strokeJoin = child.strokeJoin;
        break;
      case "FRAME":
        (childClone as FrameNode).opacity = child.opacity;
        (childClone as FrameNode).blendMode = child.blendMode;
        (childClone as FrameNode).isMask = child.isMask;
        (childClone as FrameNode).constraints = child.constraints;
        (childClone as FrameNode).clipsContent = child.clipsContent;
        // parent frame auto-layout
        (childClone as FrameNode).layoutMode = child.layoutMode;
        (childClone as FrameNode).primaryAxisSizingMode = child.primaryAxisSizingMode;
        (childClone as FrameNode).counterAxisSizingMode = child.counterAxisSizingMode;
        (childClone as FrameNode).primaryAxisAlignItems = child.primaryAxisAlignItems;
        (childClone as FrameNode).counterAxisAlignItems = child.counterAxisAlignItems;
        (childClone as FrameNode).paddingLeft = child.paddingLeft;
        (childClone as FrameNode).paddingRight = child.paddingRight;
        (childClone as FrameNode).paddingTop = child.paddingTop;
        (childClone as FrameNode).paddingBottom = child.paddingBottom;
        (childClone as FrameNode).itemSpacing = child.itemSpacing;
        // corner radius properties
        (childClone as FrameNode).cornerSmoothing = child.cornerSmoothing;
        if (typeof child.cornerRadius === "number") {
          (childClone as FrameNode).cornerRadius = child.cornerRadius;
        } else {
          (childClone as FrameNode).topLeftRadius = child.topLeftRadius;
          (childClone as FrameNode).topRightRadius = child.topRightRadius;
          (childClone as FrameNode).bottomLeftRadius = child.bottomLeftRadius;
          (childClone as FrameNode).bottomRightRadius = child.bottomRightRadius;
        }
        // fill properties
        (childClone as FrameNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as FrameNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as FrameNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as FrameNode).strokeWeight = child.strokeWeight;
        (childClone as FrameNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as FrameNode).strokeAlign = child.strokeAlign;
        (childClone as FrameNode).strokeCap = child.strokeCap;
        (childClone as FrameNode).strokeJoin = child.strokeJoin;
        break;
      case "RECTANGLE":
        (childClone as RectangleNode).opacity = child.opacity;
        (childClone as RectangleNode).blendMode = child.blendMode;
        (childClone as RectangleNode).isMask = child.isMask;
        (childClone as RectangleNode).constraints = child.constraints;
        (childClone as RectangleNode).cornerSmoothing = child.cornerSmoothing;
        if (typeof child.cornerRadius === "number") {
          (childClone as RectangleNode).cornerRadius = child.cornerRadius;
        } else {
          (childClone as RectangleNode).topLeftRadius = child.topLeftRadius;
          (childClone as RectangleNode).topRightRadius = child.topRightRadius;
          (childClone as RectangleNode).bottomLeftRadius = child.bottomLeftRadius;
          (childClone as RectangleNode).bottomRightRadius = child.bottomRightRadius;
        }
        // fill properties
        (childClone as RectangleNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as RectangleNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as RectangleNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as RectangleNode).strokeWeight = child.strokeWeight;
        (childClone as RectangleNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as RectangleNode).strokeAlign = child.strokeAlign;
        (childClone as RectangleNode).strokeCap = child.strokeCap;
        (childClone as RectangleNode).strokeJoin = child.strokeJoin;
        break;
      case "POLYGON":
        (childClone as PolygonNode).opacity = child.opacity;
        (childClone as PolygonNode).blendMode = child.blendMode;
        (childClone as PolygonNode).isMask = child.isMask;
        (childClone as PolygonNode).constraints = child.constraints;
        if (typeof child.cornerRadius === "number") {
          (childClone as PolygonNode).cornerRadius = child.cornerRadius;
        }
        (childClone as PolygonNode).cornerSmoothing = child.cornerSmoothing;
        // fill properties
        (childClone as PolygonNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as PolygonNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as PolygonNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as PolygonNode).strokeWeight = child.strokeWeight;
        (childClone as PolygonNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as PolygonNode).strokeAlign = child.strokeAlign;
        (childClone as PolygonNode).strokeCap = child.strokeCap;
        (childClone as PolygonNode).strokeJoin = child.strokeJoin;
        break;
      case "ELLIPSE":
        (childClone as EllipseNode).opacity = child.opacity;
        (childClone as EllipseNode).blendMode = child.blendMode;
        (childClone as EllipseNode).isMask = child.isMask;
        (childClone as EllipseNode).constraints = child.constraints;
        if (typeof child.cornerRadius === "number") {
          (childClone as EllipseNode).cornerRadius = child.cornerRadius;
        }
        (childClone as EllipseNode).cornerSmoothing = child.cornerSmoothing;
        // fill properties
        (childClone as EllipseNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as EllipseNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as EllipseNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as EllipseNode).strokeWeight = child.strokeWeight;
        (childClone as EllipseNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as EllipseNode).strokeAlign = child.strokeAlign;
        (childClone as EllipseNode).strokeCap = child.strokeCap;
        (childClone as EllipseNode).strokeJoin = child.strokeJoin;
        break;
      case "STAR":
        (childClone as StarNode).opacity = child.opacity;
        (childClone as StarNode).blendMode = child.blendMode;
        (childClone as StarNode).isMask = child.isMask;
        (childClone as StarNode).constraints = child.constraints;
        if (typeof child.cornerRadius === "number") {
          (childClone as StarNode).cornerRadius = child.cornerRadius;
        }
        (childClone as StarNode).cornerSmoothing = child.cornerSmoothing;
        // fill properties
        (childClone as StarNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as StarNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as StarNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as StarNode).strokeWeight = child.strokeWeight;
        (childClone as StarNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as StarNode).strokeAlign = child.strokeAlign;
        (childClone as StarNode).strokeCap = child.strokeCap;
        (childClone as StarNode).strokeJoin = child.strokeJoin;
        break;
      case "VECTOR":
        (childClone as VectorNode).opacity = child.opacity;
        (childClone as VectorNode).blendMode = child.blendMode;
        (childClone as VectorNode).isMask = child.isMask;
        (childClone as VectorNode).constraints = child.constraints;
        if (typeof child.cornerRadius === "number") {
          (childClone as VectorNode).cornerRadius = child.cornerRadius;
        }
        (childClone as VectorNode).cornerSmoothing = child.cornerSmoothing;
        // fill properties
        (childClone as VectorNode).fills = child.fills ? clone(child.fills) : [];
        // stroke properties
        (childClone as VectorNode).strokes = child.strokes ? clone(child.strokes) : [];
        // effects properties
        (childClone as VectorNode).effects = child.effects ? clone(child.effects) : [];
        (childClone as VectorNode).strokeWeight = child.strokeWeight;
        (childClone as VectorNode).strokeMiterLimit = child.strokeMiterLimit;
        (childClone as VectorNode).strokeAlign = child.strokeAlign;
        (childClone as VectorNode).strokeCap = child.strokeCap;
        (childClone as VectorNode).strokeJoin = child.strokeJoin;
        break;
    }
    newFrame.appendChild(childClone);
  });
  parent.insertChild(parent.children.indexOf(instance), newFrame);
  instance.remove();
};

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
