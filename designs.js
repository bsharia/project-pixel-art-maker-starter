// Select the table
const table = document.getElementById("pixelCanvas");

/**
 * @description Draw the design grid
 * @param {string} event - passed down by the form
 */
function makeGrid(event){
    event.preventDefault();
    
    // get the height
    const height = document.getElementById("inputHeight").value;
    // get the width
    const width = document.getElementById("inputWidth").value;

    // Draw the table
    drawTable(height, width);
}

/**
 * @description Draws a table of height x width provide
 * @param {int} m - the height of the table
 * @param {int} n - the width of the table
 */
function drawTable(m, n){
    // REset table
    table.innerHTML = "";

    const tbody = document.createElement("tbody");

    for (let i = 0; i < m; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            cell.textContent = "";
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
}
