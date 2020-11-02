//Create an aray global array
let tableArray = [];

//Create global letiables to store rows and columns info
let GLOBALROW;
let GLOBALCOLLUMN;

const TBLROWS = 20;
const TBLCOLUMNS = 10;
//create a 2D array 
for (let i = 0; i < TBLROWS; i++) {
    tableArray[i] = [];
    for (let j = 0; j < TBLCOLUMNS; j++) tableArray[i][j] = "";
}
console.log(tableArray);

// Formula to split a string into an array of substrings
function getFormula(tbValue) {
    let pattern = /[:|\(|\)]/;
    // The split() method is used to split a string into an array of substrings, and returns the new array.
    let ar = tbValue.split(pattern);
    let sum = ar[0].toUpperCase();

    if (ar.length < 3) return null;else if (sum !== "=SUM") return null;else return ar;
}

// recalculateValues values
function recalculateValues() {
    for (let i = 0; i < TBLROWS; i++) {
        for (let j = 0; j < TBLCOLUMNS; j++) {
            // check to see if table element is a formula
            if (tableArray[i][j].indexOf("=SUM") !== -1) {
                calculateCell(i, j);
            }
        }
    }
}

// function calculateCell
function calculateCell(row, column) {
    let tokenArray = getFormula(tableArray[row][column]);

    if (tokenArray !== null) {
        let fromColumn = tokenArray[1].substr(0, 1);
        let fromRow = tokenArray[1].substr(1, tokenArray[1].length - 1);

        let toColumn = tokenArray[2].substr(0, 1);
        let toRow = tokenArray[2].substr(1, tokenArray[2].length - 1);

        let fromRowIndex = parseFloat(fromRow) - 1;
        let fromColIndex = fromColumn.charCodeAt(0) - 65;

        let toRowIndex = parseFloat(toRow) - 1;
        let toColIndex = toColumn.charCodeAt(0) - 65;

        let sumTotal = 0;

        for (let i = fromRowIndex; i <= toRowIndex; i++) {
            for (let j = fromColIndex; j <= toColIndex; j++) {
                if (isFloat(tableArray[i][j])) sumTotal += parseFloat(tableArray[i][j]);
            }
        }

        let cellID = row + 1 + "_" + (column + 1);
        let ref = document.getElementById(cellID);
        ref.innerHTML = sumTotal;
    }
}

// is float
function isFloat(s) {
    let ch = "";
    let justFloat = "0123456789.";
    if (s.length == 0) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        ch = s.substr(i, 1);

        if (justFloat.indexOf(ch) == -1) return false;
    }
    return true;
}