//Create an aray global array
let tableArray = [];

//Create global variables to store rows and columns info
let GLOBALROW;
let GLOBALCOLLUMN;

const TBLROWS = 20;
const TBLCOLUMNS = 10;
//create a 2D array 
for (var i = 0; i < TBLROWS; i++) {
    tableArray[i] = [];
    for (var j = 0; j < TBLCOLUMNS; j++) tableArray[i][j] = "";
}
console.log(tableArray);

//Formula to 
function getFormula(tbValue) {
    var pattern = /[:|\(|\)]/;
    // The split() method is used to split a string into an array of substrings, and returns the new array.
    var ar = tbValue.split(pattern);
    var sum = ar[0].toUpperCase();

    if (ar.length < 3) return null;else if (sum !== "=SUM") return null;else return ar;
}

//recalculate values
function recalculate() {
    for (var i = 0; i < TBLROWS; i++) {
        for (var j = 0; j < TBLCOLUMNS; j++) {
            // check to see if table element is a formula
            if (tableArray[i][j].indexOf("=SUM") !== -1) {
                calculateCell(i, j);
            }
        }
    }
}

//function calculate
function calculateCell(row, column) {
    var tokenArray = getFormula(tableArray[row][column]);

    if (tokenArray !== null) {
        var fromColumn = tokenArray[1].substr(0, 1);
        var fromRow = tokenArray[1].substr(1, tokenArray[1].length - 1);

        var toColumn = tokenArray[2].substr(0, 1);
        var toRow = tokenArray[2].substr(1, tokenArray[2].length - 1);

        var fromRowIndex = parseFloat(fromRow) - 1;
        var fromColIndex = fromColumn.charCodeAt(0) - 65;

        var toRowIndex = parseFloat(toRow) - 1;
        var toColIndex = toColumn.charCodeAt(0) - 65;

        var sumTotal = 0;

        for (var i = fromRowIndex; i <= toRowIndex; i++) {
            for (var j = fromColIndex; j <= toColIndex; j++) {
                if (isFloat(tableArray[i][j])) sumTotal += parseFloat(tableArray[i][j]);
            }
        }

        var cellID = row + 1 + "_" + (column + 1);
        var ref = document.getElementById(cellID);
        ref.innerHTML = sumTotal;
    }
}

//is float
function isFloat(s) {
    var ch = "";
    var justFloat = "0123456789.";
    if (s.length == 0) {
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        ch = s.substr(i, 1);

        if (justFloat.indexOf(ch) == -1) return false;
    }
    return true;
}