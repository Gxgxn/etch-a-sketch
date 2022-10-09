let gridContainer = document.getElementById("container");
let colValue = 16;

//creating grid
function createGrid(colValue) {
  for (i = 1; i < colValue * colValue; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}
createGrid(16);

//adding eventlistener to each element
let cells = document.querySelectorAll(".cell"); //returns an array

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#e74c3c";
    console.log("f");
  });
});
