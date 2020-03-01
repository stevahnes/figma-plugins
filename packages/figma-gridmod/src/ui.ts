onmessage = msg => {
  const isValidGridGen = msg.data.pluginMessage;
  isValidGridGen
    ? ((document.getElementById("invalid").style.display = "none"),
      (document.getElementById("valid").style.display = "block"))
    : ((document.getElementById("invalid").style.display = "block"),
      (document.getElementById("valid").style.display = "none"));
};

window.onfocus = () => {
  parent.postMessage({ pluginMessage: true }, "*");
};
