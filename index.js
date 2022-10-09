let gridContainer = document.getElementById("container-cell");
let colValue = 16;
let gridRange = document.getElementById("size");
let createGridBtn = document.querySelector("#create-grid");
let gridActive = false;
//creating grid
function createGrid(colValue) {
  for (i = 1; i < colValue * colValue; i++) {
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

//clears populated grid
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

function colorChange(e) {
  e.target.style.backgroundColor = "#e74c3c";
}
