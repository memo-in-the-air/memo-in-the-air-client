document.getElementById("addMemoGrid")?.addEventListener(
  "click",
  function addMemoGrid() {
    const aPlane = document.createElement("a-plane");
    aPlane.setAttribute("position", "0 1.7 -5");
    aPlane.setAttribute("rotation", "0 0 0");
    aPlane.setAttribute("width", "1.5");
    aPlane.setAttribute("height", "1.5");
    aPlane.setAttribute("material", "color: #FFFF4C; opacity: 0.7;");
    aPlane.setAttribute("id", "memoGrid");

    document.getElementById("aScene")?.appendChild(aPlane);
  },
  { once: true },
);
