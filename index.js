let gridContainer = document.getElementById("container-cell");
let colValue = 16;
let gridRange = document.getElementById("size");
let createGridBtn = document.querySelector("#create-grid");
let clearGrid = document.querySelector("#clear-grid");
let gridActive = false;
let clrPicker = document.querySelector("#clr-pick");
let colorVal;
//creating grid
function createGrid(colValue) {
  for (i = 1; i <= colValue * colValue; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.style.gridTemplateColumns = `repeat(${colValue}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${colValue}, 1fr)`;
    gridContainer.appendChild(cell);
  }
}
//default population
createGrid(15);

//On click listner to start/stop process etching

gridContainer.addEventListener("click", () => {
  captureCells();
  gridActive = !gridActive;
});

//event for value range
gridRange.addEventListener("change", () => {
  let label = document.getElementById("size-display");
  label.innerText = `Grid-Size: ${gridRange.value}`;
});
//grid change eventLisnter
createGridBtn.addEventListener("click", () => {
  removeGrid();
  createGrid(gridRange.value);
});

//clear-grid removes color from grid
clearGrid.addEventListener("click", (e) => {
  document
    .querySelectorAll(".cell")
    .forEach((cell) => (cell.style.backgroundColor = "transparent"));
});

//removes populated grid
function removeGrid() {
  document.querySelectorAll(".cell").forEach((cell) => cell.remove());
}

//add event listener to created elements
function captureCells() {
  let cells = document.querySelectorAll(".cell"); //returns an array

  cells.forEach((cell) => {
    if (!gridActive) {
      cell.addEventListener("mouseenter", colorChange);
    } else {
      cell.removeEventListener("mouseenter", colorChange);
    }
  });
}

const colorButtons = document.querySelector("#color-input");
colorButtons.addEventListener("click", function () {
  console.log(colorButtons.colorChoice.value);
});

function colorChange(e) {
  colorVal = colorButtons.colorChoice.value;
  switch (colorVal) {
    case "monochrome":
      e.target.style.backgroundColor = generateMono();
      break;
    case "random":
      e.target.style.backgroundColor = generateRandom();
      break;
    case "custom":
      e.target.style.backgroundColor = clrPicker.value;
      break;
    default:
      e.target.style.backgroundColor = "#e74c3c";
  }
}
//mono colours
function generateMono() {
  let v = Math.floor(Math.random() * 226);
  return `rgb(${v},${v},${v})`;
}

//  random colour generator
function generateRandom() {
  let r = Math.floor(Math.random() * 226);
  let g = Math.floor(Math.random() * 226);
  let a = Math.floor(Math.random() * 226);
  return `rgb(${r},${g},${a})`;
}
