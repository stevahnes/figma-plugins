import "./ui.css";

onmessage = (msg: MessageEvent): void => {
  document.getElementById("selected-page-name").innerHTML = msg.data.pluginMessage.name;
  document.getElementById("clone-name").focus();
};

window.onfocus = () => {
  parent.postMessage({ pluginMessage: { type: "focus", name: "" } }, "*");
};

document.getElementById("create").onclick = () => {
  parent.postMessage(
    { pluginMessage: { type: "cloned", name: (document.getElementById("clone-name") as HTMLInputElement).value } },
    "*",
  );
};

document.onkeydown = keyDown => {
  if (keyDown.key) {
    let activeElement = document.activeElement;
    switch (keyDown.key) {
      case "Tab":
        // Get selected Mode
        if (activeElement.id === "create") {
          document.getElementById("clone-name").focus();
          keyDown.preventDefault();
        } else if (activeElement.id === "clone-name") {
          document.getElementById("create").focus();
          keyDown.preventDefault();
        }
        break;
      default:
        break;
    }
  }
};
