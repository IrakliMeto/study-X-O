const tableItems = document.querySelectorAll('.table-item');
const notification = document.querySelector('.notification');
const reset = document.querySelector('.reset');

let player = 'O';
let ContinuePlay = true;


const table = [
  null, null, null,
  null, null, null,
  null, null, null,
];
const winningArray = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
];


function checkWin(){
  return winningArray.forEach(combination => {
    const isWinner = combination.every(item => table[item] === (player === 'X' ? "X" : "O"))
    console.log(player, 'player')

      if(isWinner) {
        ContinuePlay = false;
        notification.innerHTML = `player ${player} Win !`
        addLine(combination);
      }


      if(!isWinner && table.every(item => item !== null)){
        ContinuePlay = false;
        notification.innerHTML = 'Draw .!'
        addLine(combination);
      }
  })
}

function addLine(arr){
  for(let i = 0; i < arr.length; i++) {
    tableItems[arr[i]].classList.add('winned')
  }
}


function drawItem() {
  if(ContinuePlay) {
    if(this.innerHTML) return

    player === 'X' ? player = "O" : player = "X";

    this.innerHTML = `${player}`
    table[this.id] = `${player}` 

    checkWin();
  }
}


for(let i = 0; i < tableItems.length; i++){
  tableItems[i].addEventListener('click', drawItem);
};


reset.addEventListener('click', () => {
  for(let i = 0; i < table.length; i++) {
    table[i] = null;
  }
  for(let i = 0; i < tableItems.length; i++) {
    tableItems[i].classList.remove('winned');
    tableItems[i].innerHTML = '';
  }

  notification.innerHTML = '';
  ContinuePlay = true;
  player = 'O';
})
