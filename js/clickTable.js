// function cliCK the enter
function clickEnter(ref){
    if (window.event.keyCode === 13){
        let tableValue = document.getElementById(ref.id).value;
        document.getElementById(`${GLOBALROW}_${GLOBALCOLLUMN}`).innerHTML = tableValue;
        // put the index into array here
        tableArray[GLOBALROW - 1][GLOBALCOLLUMN - 1] = tableValue;
        calculateCell(GLOBALROW - 1, GLOBALCOLLUMN - 1);
        recalculateValues();
    }
}
function clickCells(clickCell) {
    // get the cell id
    let cellId = clickCell.id;
    console.log(cellId);
    let indexOfCells = clickCell.id.split('_');
    indexOfCells[0] = parseInt(indexOfCells[0]);
    indexOfCells[1] = parseInt(indexOfCells[1]);
    cellInd = indexOfCells;
    GLOBALROW = indexOfCells[0];
    GLOBALCOLLUMN = indexOfCells[1];
    //change the color of the clicked cell
    clickCell.style.backgroundColor = "#a4cffc";
    //output the value to the input field
    document.getElementById('value').value = tableArray[GLOBALROW - 1][GLOBALCOLLUMN - 1];
    
}
