let rows = 20;
let columns = 10;

function clearSpreadsheetExcel() {
    createSpreadsheetExcel();
    document.getElementById('value').value = " ";
    for (var i = 0; i < TBLROWS; i++) {
        tableArray[i] = [];
        for (var j = 0; j < TBLCOLUMNS; j++) tableArray[i][j] = "";
    }
    console.log(tableArray);
}

function createSpreadsheetExcel() {
    var columns = 10;
    document.getElementById("SpreadsheetTable").innerHTML = buildingTable(rows, columns);
}

function buildingTable(rows, columns) {
    var divHTMLOutput = "<table border='1' cellpadding='0' cellspacing='0' class='TableClass'>";
    divHTMLOutput += "<tr><th></th>";

    for (var j = 0; j < columns; j++) divHTMLOutput += "<th>" + String.fromCharCode(j + 65) + "</th>";
    divHTMLOutput += "</tr>";

    for (var i = 1; i <= rows; i++) {
        divHTMLOutput += "<tr>";
        divHTMLOutput += "<td id='" + i + "_0' class='BaseColumn'>" + i + "</td>";

        for (var j = 1; j <= columns; j++) divHTMLOutput += "<td id='" + i + "_" + j + "' class='AlphaColumn' onclick='clickCell(this)'></td>";

        divHTMLOutput += "</tr>";
    }
    divHTMLOutput += "</table>";
    return divHTMLOutput;
}