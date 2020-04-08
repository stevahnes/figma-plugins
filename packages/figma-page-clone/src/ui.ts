import "./ui.css";

let isShiftHeld: boolean = false;
let boundaryInputId: string = "";
let possibleFramesToClone: string[] = [];

onmessage = (msg: MessageEvent): void => {
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
    {
      pluginMessage: {
        type: "focus",
        frames: [],
        destinationId: "",
        name: "",
        "clone-master": false,
        overwrite: false,
        sanitize: false,
        locked: false,
      },
    },
    "*",
  );
};

document.getElementById("pages-in-document").onchange = () => {
  if ((document.getElementById("pages-in-document") as HTMLSelectElement).value === "") {
    // enable new page name textbox
    (document.getElementById("clone-name") as HTMLInputElement).disabled = false;
    // uncheck and disable overwrite
    (document.getElementById("overwrite") as HTMLInputElement).checked = false;
    (document.getElementById("overwrite") as HTMLInputElement).disabled = true;
    // focus on new page name textbox
    (document.getElementById("clone-name") as HTMLInputElement).focus();
  } else {
    // disable new page name textbox
    (document.getElementById("clone-name") as HTMLInputElement).disabled = true;
    // enable overwrite
    (document.getElementById("overwrite") as HTMLInputElement).disabled = false;
    (document.getElementById("clone-master") as HTMLInputElement).focus();
  }
};

document.getElementById("clone").onclick = () => {
  let framesToClone: string[] = [];
  possibleFramesToClone.forEach(frame => {
    (document.getElementById(frame) as HTMLInputElement).checked ? framesToClone.push(frame) : null;
  });
  const destinationId: string = (document.getElementById("pages-in-document") as HTMLSelectElement).value;
  const name: string = (document.getElementById("clone-name") as HTMLInputElement).value;
  if (destinationId) {
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "cloned",
            frames: framesToClone,
            destination: destinationId,
            name: "",
            "clone-master": (document.getElementById("clone-master") as HTMLInputElement).checked,
            overwrite: (document.getElementById("overwrite") as HTMLInputElement).checked,
            sanitize: (document.getElementById("sanitize") as HTMLInputElement).checked,
            locked: (document.getElementById("locked") as HTMLInputElement).checked,
          },
        },
        "*",
      );
    }, 50);
  } else if (name.length > 0) {
    document.getElementById("lds").classList.add("is-visible");
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "cloned",
            frames: framesToClone,
            destination: "",
            name: (document.getElementById("clone-name") as HTMLInputElement).value,
            "clone-master": (document.getElementById("clone-master") as HTMLInputElement).checked,
            overwrite: false,
            sanitize: (document.getElementById("sanitize") as HTMLInputElement).checked,
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
  let options: string = `<option value="" selected>New Page</option>`;
  pages.forEach((page: { id: string; name: string }) => {
    page.id !== currentPageId ? (options += `<option value="${page.id}">${page.name}</option>`) : null;
  });
  return options;
};

const constructAvailableFramesList = (frames: { id: string; name: string; selected: boolean }[]): string => {
  const preCheckedFramesAvailable: boolean = Boolean(frames.find(frame => frame.selected));
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
  /* Reset UI variables */
  boundaryInputId = "";
  possibleFramesToClone.length = 0;
  frames.forEach((frame: { id: string; name: string; selected: boolean }) => {
    boundaryInputId === "" ? (boundaryInputId = `${frame.id}`) : null;
    possibleFramesToClone.push(frame.id);
    const checked: string = preCheckedFramesAvailable ? (frame.selected ? "checked" : "") : "checked";
    availableFrames += `
    <div id="checkbox-container" class="row">
      <div class="column eighty">
        <p>${frame.name}&nbsp;</p>
      </div>
      <div class="column twenty">
        <div class="column" style="width: 15%;">
          <label class="container">
            <input id="${frame.id}" type="checkbox" ${checked}/>
            <span class="figma-checkbox"></span>
          </label>
        </div>
      </div>
    </div>
  `;
  });
  return availableFrames;
};
