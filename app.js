const boxes = document.querySelectorAll('.box');

const playerx = 'X';
const playero = 'O';
let turn = playerx;

currentBoard = Array(boxes.length);
console.log(currentBoard);





boxes.forEach((box) => box.addEventListener("click", boxClicked));

function boxClicked(e) {
    const box = e.target;
    const boxNumber = box.dataset.index;
     var b1 = document.getElementById("b1").value;
   var b2 = document.getElementById("b2").value;
   var b3 = document.getElementById("b3").value;
   var b4 = document.getElementById("b4").value;
   var b5 = document.getElementById("b5").value;
   var b6 = document.getElementById("b6").value;
   var b7 = document.getElementById("b7").value;
   var b8 = document.getElementById("b8").value;
   var b9 = document.getElementById("b9").value;
   
    if(turn === playerx) {
        box.innerHTML = playerx;
        currentBoard[boxNumber - 1] = playerx;
            if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
                document.getElementById('winner').innerHTML = "Player X won";
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                console.log('Player X won');
                } 
                else {
                    turn = playero;
                }
   
            }else {
        box.innerHTML = playero;
        currentBoard[boxNumber - 1] = playero;
        turn = playerx;
    }
}



function clearBoard() {
    currentBoard.fill(null);
    boxes.forEach((box) => box.innerText = '');
    turn = playerx;
}


