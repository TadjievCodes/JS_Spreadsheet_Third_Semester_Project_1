//function clikc the enter
function clickEnter(ref){
    if (window.event.keyCode === 13){
        let tableValue = document.getElementById(ref.id).value;
        document.getElementById(`${GLOBALROW}_${GLOBALCOLLUMN}`).innerHTML = tableValue;
        // put the index into array here
        tableArray[GLOBALROW - 1][GLOBALCOLLUMN - 1] = tableValue;
        calculateCell(GLOBALROW - 1, GLOBALCOLLUMN - 1);
        recalculate();
    }
}
function clickCell(clickCell) {
    //get the cell id
    let cellId = clickCell.id;
    console.log(cellId);
    var indexOfCell = clickCell.id.split('_');
    indexOfCell[0] = parseInt(indexOfCell[0]);
    indexOfCell[1] = parseInt(indexOfCell[1]);
    cellInd = indexOfCell;
    GLOBALROW = indexOfCell[0];
    GLOBALCOLLUMN = indexOfCell[1];
    //change the color of the clicked cell
    clickCell.style.backgroundColor = "#a4cffc";
    //output the value to the input field
    document.getElementById('value').value = tableArray[GLOBALROW - 1][GLOBALCOLLUMN - 1];
    
}
