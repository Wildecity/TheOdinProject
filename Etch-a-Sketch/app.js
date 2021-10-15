const container = document.querySelector(".container");
const color = document.querySelector("#color");
const btnBlack = document.querySelector("#black");
const btnRainbow = document.querySelector("#rainbow");
const btnEraser = document.querySelector("#eraser");
const btnClear = document.querySelector("#clear");

let resolution = 16;
let pixels = [];
let currentColor = "#000000";
let currentColorMode = "black";

function createDivs() {
  for (i = 1; i <= resolution * resolution; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    pixels.push(div);
  }
}

function appendDivs() {
  let sizeX = `${container.clientWidth / resolution}px`;
  let sizeY = `${container.clientHeight / resolution}px`;
  pixels.forEach((cell) => {
    cell.setAttribute(
      "style",
      `width: ${sizeX}; height: ${sizeY}; transition: background-color 400ms`
    );
    cell.addEventListener("mouseenter", (e) => {
      if (currentColorMode == "black") currentColor = "#000000";
      else if (currentColorMode == "color") currentColor = color.value;
      else if (currentColorMode == "rainbow") {
        currentColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`;
      } else if (currentColorMode == "eraser") currentColor = "#FFFFFF";
      e.target.style.backgroundColor = currentColor;
    });
    container.appendChild(cell);
  });
}

function changeRes() {
  container.innerHTML = "";
  resolution = prompt("Resolution?");
  pixels = [];
  createDivs();
  appendDivs();
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})`;
}

color.addEventListener("change", () => (currentColorMode = "color"));
btnBlack.addEventListener("click", () => {
  currentColorMode = "black";
  color.value = "#000000";
});
btnRainbow.addEventListener("click", () => {
  currentColorMode = "rainbow";
});
btnEraser.addEventListener("click", () => (currentColorMode = "eraser"));
btnClear.addEventListener("click", () => changeRes());

createDivs();
appendDivs();
