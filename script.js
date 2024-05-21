function insert_Row() {
    // Get the table element by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row element
    var newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create the left cell and set its content
    var newCell1 = newRow.insertCell(0);
    newCell1.innerHTML = "New Cell1";

    // Create the right cell and set its content
    var newCell2 = newRow.insertCell(1);
    newCell2.innerHTML = "New Cell2";
}
