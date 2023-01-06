
// Select the table
const table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
/**
 * @description Responds to a html form submission
 * @param {string} event - the submit form event
 */
function makeGrid(event) {

    event.preventDefault();

    // Select the input sizes
    const sizeH = document.querySelector("#inputHeight").value;
    const sizeW = document.querySelector("#inputWidth").value;
    // console.log(`drawing a table of ${sizeH} by ${sizeW}`);

    // Draw the table with provided h x w
    // height = number of rows
    // width = number of columns
    createTable(sizeH, sizeW);

}

/**
 * @description Draw the table of m-height by n-width
 * @param {integer} m - the height of the table 
 * @param {integer} n - width of the table
 */
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

// Add on click listener to the table to paint cell
table.addEventListener("click", paintCanvas);


/**
 * @description Respond to a click event on a cell of the table
 * @param {string} event - the click event passed to the function
 */
function paintCanvas(event) {
    // Select color input
    const color = document.querySelector("#colorPicker").value;
    // console.log(event.target.style.backgroundColor);
    event.target.style.backgroundColor = color;
}