const table = document.querySelector(".chess-board");
const RowArray = document.querySelectorAll("tr");
const RowList=Array.from(RowArray);

function initialState() {
    let i=0;
    let j=0;
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            if((i+j)%2==0){
                RowList[i].children[j].style.backgroundColor="black";
            }
            else{
                RowList[i].children[j].style.backgroundColor="white";
            }
        }
    }
}

table.addEventListener("mouseover", (event)=>{
    const rowIndex = RowList.findIndex(row => row.contains(event.target));
    const columns=Array.from(RowList[rowIndex].querySelectorAll('td'));
    const colIndex=columns.findIndex(col=>col==event.target);
    let currRow = rowIndex;
    let currCol = colIndex;
    while (currRow >= 0 && currRow < 8 && currCol >= 0 && currCol < 8) {
        RowList[currRow].children[currCol].style.backgroundColor = "blue";
        currRow--;
        currCol--
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        RowList[currRow].children[currCol].style.backgroundColor="blue";
        currCol++;
        currRow++;
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        RowList[currRow].children[currCol].style.backgroundColor="blue";
        currCol++;
        currRow--;
    }
    currRow=rowIndex;
    currCol=colIndex;
    while(currRow>=0 && currRow<8 && currCol>=0 && currCol<8){
        RowList[currRow].children[currCol].style.backgroundColor="blue";
        currCol--;
        currRow++;
    }
    RowList[rowIndex].children[colIndex].style.backgroundColor="#ADD8E6";
})
table.addEventListener("mouseout",(event)=>{
   initialState();
})

