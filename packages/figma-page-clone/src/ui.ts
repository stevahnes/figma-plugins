import "./ui.css";

let isShiftHeld: boolean = false;

onmessage = (msg: MessageEvent): void => {
  document.getElementById("selected-page-name").innerHTML = msg.data.pluginMessage.name;
  document.getElementById("clone-name").focus();
};

window.onfocus = () => {
  parent.postMessage({ pluginMessage: { type: "focus", name: "", sanitize: false, locked: false } }, "*");
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
          isShiftHeld ? document.getElementById("sanitize").focus() : document.getElementById("clone-name").focus();
          keyDown.preventDefault();
        } else if (activeElement.id === "clone-name") {
          isShiftHeld ? document.getElementById("clone").focus() : document.getElementById("sanitize").focus();
          keyDown.preventDefault();
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
