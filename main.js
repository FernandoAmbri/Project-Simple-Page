const container = document.querySelector(".container");

function displayGrid() {
  let divs = document.querySelectorAll("#test");
  if (divs.length > 0) {
    for (let i = 0; i < divs.length; i++) {
      divs[i].remove();
    }
  }
  let grid = prompt(
    "Enter the number of the divs you want to display per side."
  );
  let totalWidth = container.clientWidth / grid;
  if (grid <= 100) {
    for (let i = 1; i <= grid; i++) {
      for (let j = 1; j <= grid; j++) {
        const div = document.createElement("div");
        div.setAttribute("id", "test");
        div.style =
          "width: " +
          totalWidth +
          "px; height: " +
          totalWidth +
          "px; border: 1px solid black; cursor: pointer;";
        container.appendChild(div);
      }
    }
  }
  document.querySelectorAll("#test").forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style =
        "width: " +
        totalWidth +
        "px; height: " +
        totalWidth +
        "px; background: green; border: 1px solid black; cursor: pointer;";
    });
  });
}
