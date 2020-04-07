import "./ui.css";

let isShiftHeld: boolean = false;
let boundaryInputId: string = "";

onmessage = (msg: MessageEvent): void => {
  console.log("msg.data.pluginMessage :", msg.data.pluginMessage);
  document.getElementById("selected-page-name").innerHTML = msg.data.pluginMessage.name;
  const destinationOptions: string = constructDestinationPageOptions(
    msg.data.pluginMessage.pages,
    msg.data.pluginMessage.id,
  );
  const availableFrames: string = constructAvailableFramesList(msg.data.pluginMessage.frames);
  (document.getElementById("pages-in-document") as HTMLSelectElement).innerHTML = destinationOptions;
  document.getElementById("frames").innerHTML = availableFrames;
  (document.getElementById("clone-name") as HTMLInputElement).value = `Copy of ${msg.data.pluginMessage.name}`;
  (document.getElementById("clone-name") as HTMLInputElement).select();
};

window.onfocus = () => {
  parent.postMessage(
    { pluginMessage: { type: "focus", name: "", sanitize: false, "clone-master": false, locked: false } },
    "*",
  );
};

document.getElementById("pages-in-document").onchange = () => {
  (document.getElementById("pages-in-document") as HTMLSelectElement).value === "new-page"
    ? (((document.getElementById("clone-name") as HTMLInputElement).disabled = false),
      (document.getElementById("clone-name") as HTMLInputElement).focus())
    : ((document.getElementById("clone-name") as HTMLInputElement).disabled = true);
};

document.getElementById("clone").onclick = () => {
  const name: string = (document.getElementById("clone-name") as HTMLInputElement).value;
  if (name.length > 0) {
    document.getElementById("lds").classList.add("is-visible");
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "cloned",
            name: (document.getElementById("clone-name") as HTMLInputElement).value,
            sanitize: (document.getElementById("sanitize") as HTMLInputElement).checked,
            "clone-master": (document.getElementById("clone-master") as HTMLInputElement).checked,
            locked: (document.getElementById("locked") as HTMLInputElement).checked,
          },
        },
        "*",
      );
    }, 50);
  } else {
    document.getElementById("clone-name").classList.add("invalid");
  }
};

document.onkeydown = keyDown => {
  if (keyDown.key) {
    let activeElement = document.activeElement as HTMLInputElement;
    switch (keyDown.key) {
      case "Shift":
        isShiftHeld = true;
        keyDown.preventDefault();
        break;
      case "Tab":
        if (activeElement.id === "clone") {
          if (!isShiftHeld) {
            document.getElementById(boundaryInputId).focus();
            keyDown.preventDefault();
          }
        } else if (activeElement.id === boundaryInputId) {
          if (isShiftHeld) {
            document.getElementById("clone").focus();
            keyDown.preventDefault();
          }
        }
        break;
      case "Enter":
        if (activeElement.type === "checkbox") {
          activeElement.checked = !activeElement.checked;
        }
        break;
      default:
        break;
    }
  }
};

document.onkeyup = keyUp => {
  if (keyUp.key) {
    switch (keyUp.key) {
      case "Shift":
        isShiftHeld = false;
        keyUp.preventDefault();
        break;
    }
  }
};

const constructDestinationPageOptions = (pages: { id: string; name: string }[], currentPageId: string): string => {
  let options: string = `<option value="new-page" selected>New Page</option>`;
  pages.forEach((page: { id: string; name: string }) => {
    page.id !== currentPageId ? (options += `<option value="${page.id}">${page.name}</option>`) : null;
  });
  return options;
};

const constructAvailableFramesList = (frames: { id: string; name: string; selected: boolean }[]): string => {
  let availableFrames: string = `
  <div id="checkbox-container" class="row">
      <div class="column three-fourths">
        <h4>Available Frames</h4>
      </div>
      <div class="column quarter">
        <h4>Clone?</h4>
      </div>
    </div>
  `;
  boundaryInputId = ""; // reset the variable
  frames.forEach((frame: { id: string; name: string; selected: boolean }) => {
    boundaryInputId === "" ? (boundaryInputId = `frame-${frame.id}`) : null;
    const checked: string = frame.selected ? "checked" : "";
    availableFrames += `
    <div id="checkbox-container" class="row">
      <div class="column eighty">
        <p>${frame.name}&nbsp;</p>
      </div>
      <div class="column twenty">
        <div class="column" style="width: 15%;">
          <label class="container">
            <input id="frame-${frame.id}" type="checkbox" ${checked}/>
            <span class="figma-checkbox"></span>
          </label>
        </div>
      </div>
    </div>
  `;
  });
  return availableFrames;
};
