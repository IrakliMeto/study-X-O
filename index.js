const tableItems = document.querySelectorAll('.table-item');
let player = 1;
const table = [
  null, null, null,
  null, null, null,
  null, null, null,
];

const winningArray = [
  [1,2,3],
  [1,5,9],
  [1,4,6],
  [2,5,8],
  [3,6,9],
  [3,5,7],
  [4,5,6],
  [7,8,9],
];

function drawItem() {
  if(player === 1) {
    this.innerHTML = 'X'
    table[this.id] = 'X' 
    player = 2;
  } else {
    this.innerHTML = 'O'
    table[this.id] = 'O' 
    player = 1;
  }
  console.log(table, 'this')
}

for(let i = 0; i < tableItems.length; i++){
  tableItems[i].addEventListener('click', drawItem, {once : true});
};


