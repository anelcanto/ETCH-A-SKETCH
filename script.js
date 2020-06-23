const container = document.getElementById("container");
const btn= document.getElementById('clear-btn');

makeRows(16, 16);
redOnHover();
btn.addEventListener('click', clearGrid);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
function getGridItems(){
    return document.querySelectorAll('#container>.grid-item');
}
function redOnHover(){
    getGridItems().forEach(item => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "red";
    }))
}
function clearGrid() {
    container.innerHTML="";
    const nGrid = prompt('How many grids per line would you like to set?', 10);
    makeRows(nGrid,nGrid);
    redOnHover();   
}

