let rows = 20;
let columns = 10;

function clearSpreadsheet() {
    createSpreadsheet();
    document.getElementById('value').value = " ";
    for (var i = 0; i < TBLROWS; i++) {
        tableArray[i] = [];
        for (var j = 0; j < TBLCOLUMNS; j++) tableArray[i][j] = "";
    }
    console.log(tableArray);
}

function createSpreadsheet() {
    var columns = 10;
    document.getElementById("SpreadsheetTable").innerHTML = buildTable(rows, columns);
}

function buildTable(rows, columns) {
    var divHTML = "<table border='1' cellpadding='0' cellspacing='0' class='TableClass'>";
    divHTML += "<tr><th></th>";

    for (var j = 0; j < columns; j++) divHTML += "<th>" + String.fromCharCode(j + 65) + "</th>";
    divHTML += "</tr>";

    for (var i = 1; i <= rows; i++) {
        divHTML += "<tr>";
        divHTML += "<td id='" + i + "_0' class='BaseColumn'>" + i + "</td>";

        for (var j = 1; j <= columns; j++) divHTML += "<td id='" + i + "_" + j + "' class='AlphaColumn' onclick='clickCell(this)'></td>";

        divHTML += "</tr>";
    }
    divHTML += "</table>";
    return divHTML;
}