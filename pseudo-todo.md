# Steps
- ~~ON submit of the inputFOrm (sizePicker)~~
  - ~~get the height (inputHeight)~~
  - ~~get the width (inputWidth)~~

- ~~Use the input height and width to draw a table (of inputHeight x inputWidth)~~

- get the picker color
- listen for events on each cell of the table and paint with picker color
    - get the add event listener to the table
    - get the target of the table and set bgcolor to picker color.



DRAW n x n table
```js
function createTable(n) {
  // create table element
  var table = document.createElement("table");

  // create table rows
  for (var i = 0; i < n; i++) {
    var row = document.createElement("tr");

    // create table cells
    for (var j = 0; j < n; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }

    // add row to table
    table.appendChild(row);
  }

  return table;
}

// create table of size 5 x 5
var table = createTable(5);
document.body.appendChild(table);
```

DRAW m x n table
```js
function createTable(m, n) {
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  for (var i = 0; i < m; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < n; j++) {
      var cell = document.createElement("td");
      cell.textContent = "Row " + (i+1) + ", Column " + (j+1);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);
}

createTable(3, 4); // creates a 3 x 4 table
```


SELECT color
```html
<input type="color" id="myColor">

<script>
  // Select the color input field
  const colorInput = document.getElementById('myColor');

  // Set the value of the input field
  colorInput.value = '#ff0000';  // red
</script>

<input type="color" id="myColor">

<script>
  const colorInput = document.getElementById('myColor');

  colorInput.addEventListener('input', function() {
    console.log(`Color changed to: ${this.value}`);
  });
</script>

```

RESSPND TO Submit EVENT
```js
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Your code to handle the form submission goes here
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const inputValue = event.target.querySelector('input').value;

  // Do something with the input value
  console.log(inputValue);
});


<form onsubmit="handleFormSubmit(event)">
  <input type="text" />
  <button type="submit">Submit</button>
</form>

<script>
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const inputValue = event.target.querySelector('input').value;

  // Do something with the input value
  console.log(inputValue);
}
</script>

```
