let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';
let gameEnded = false;

function makeMove(row, col) {
  if (gameEnded || board[row][col] !== '') return;

  board[row][col] = currentPlayer;
  document.getElementById('board').children[row].children[col].textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    alert(currentPlayer + ' wins!');
    gameEnded = true;
  } else if (checkDraw()) {
    alert('It\'s a draw!');
    gameEnded = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
      (board[0][i] === player && board[1][i] === player && board[2][i] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameEnded = false;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
