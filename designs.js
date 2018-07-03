// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(e) {
    e.preventDefault();
    return makeGrid();
});

var table = document.getElementById("pixelCanvas");





function makeGrid() {

    // Your code goes here!
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var color = document.getElementById("colorPicker").value;

    $("#pixelCanvas tr").remove();
    var printout = "";
    // console.log(height.value());
    console.log("This is the height : " + height);
    console.log("This is the width : " + width);
    console.log("This is the color : " + color);
    for (var i = 0; i < height; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < width; j++) {
        printout = printout + "X";
        var cell = row.insertCell(j);
        cell.bgColor = color;
        // cell.addEventListener("click", selectCell);
        cell.addEventListener("click", selectCell);
      }
      printout = printout + "\n";
    }
    document.getElementById("blankCanvas").value = printout;
    return false;
    // console.log();


}

function selectCell() {
    // document.getElementById("demo").innerHTML += "Clicked!<br>";
    var newColor = document.getElementById("colorPicker").value;
    (this).bgColor = newColor;
}
