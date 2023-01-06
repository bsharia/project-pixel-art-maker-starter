
// Select the table
const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {

    event.preventDefault();

    // Your code goes here!

    // Select the input sizes
    const sizeH = document.querySelector("#inputHeight").value;
    const sizeW = document.querySelector("#inputWidth").value;
    console.log(`drawing a table of ${sizeH} by ${sizeW}`);

    // Select the table

    // Draw the table with provide h x w
    // height = number of rows
    // width = number of columns
    createTable(sizeH, sizeW);

}

// Draw the table of m-height by n-width
function createTable(m, n){
    table.innerHTML = ""
    const tbody = document.createElement("tbody");

    for (let i = 0; i < m; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("td");
            // cell.textContent = `Row ${i+1}, Column ${j+1}`;
            cell.textContent = `  `;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody)
}

// Add on click listener to the table to paint cells
table.addEventListener("click", paintCanvas);

function paintCanvas(event) {
    // Select color input
    const color = document.querySelector("#colorPicker").value;
    // console.log(event.target.style.backgroundColor);
    event.target.style.backgroundColor = color;
}