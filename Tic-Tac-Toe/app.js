/* 
!===> Create gameboard [ARRAY] //! MODULE
!===> Create players {OBJECTS} //? FACTORY
!===> Control de Flow of the game {OBJECT}
!===> Function that renders the gameboard array
!===> Function that allow players to add marks on the board
!===>  Tie it to the DOM
!===>  Check if the spot is already taken
Function that check who wins, or if it's a tie
Clean up the board
*/

const boardGrid = document.querySelector(".board");
const display = document.querySelector(".display");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

const gameInfo = {
  playersList: [],
  isGameON: true,
  currentPlayer: "",
};

const gameControl = {
  renderBoard: () => {
    boardGrid.innerHTML = "";
    for (let i = 0; i <= 8; i++) {
      let newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.dataset.cell = i;
      newCell.textContent = gameboard.board[i];
      boardGrid.appendChild(newCell);
    }
  },
  isValidMove: (target) => {
    if (target.textContent === "" && gameInfo.isGameON === true) {
      return true;
    }
    return false;
  },
  addPlayerMark: (target) => {
    if (gameInfo.currentPlayer === gameInfo.playersList[0]) {
      target.textContent = "X";
      gameboard.board[target.dataset.cell] = "X";
    } else {
      target.textContent = "O";
      gameboard.board[target.dataset.cell] = "O";
    }
  },
  changeTurn: () => {
    if (gameInfo.isGameON) {
      if (gameInfo.currentPlayer === gameInfo.playersList[0]) {
        gameInfo.currentPlayer = gameInfo.playersList[1];
        display.textContent = "Player two's turn";
      } else {
        gameInfo.currentPlayer = gameInfo.playersList[0];
        display.textContent = "Player one's turn";
      }
    }
  },
};

const playerFactory = (name, symbol) => {
  gameInfo.playersList.push(name);
  return { name, symbol };
};

const playerOne = playerFactory("Player One", "X");
const playerTwo = playerFactory("Player Two", "O");

gameInfo.currentPlayer = gameInfo.playersList[0];

gameControl.renderBoard();

boardGrid.childNodes.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (gameControl.isValidMove(e.target)) {
      gameControl.addPlayerMark(e.target);
      checkWinner();
      gameControl.changeTurn();
      console.log(gameboard.board);
    }
  });
});

function checkWinner() {
  winningCombos.forEach((combo) => {
    if (gameInfo.isGameON) {
      let board = gameboard.board;
      let x = combo[0];
      let y = combo[1];
      let z = combo[2];
      if (board[x] && board[y] && board[z]) {
        if (board[x] === board[y] && board[y] === board[z]) {
          display.textContent = `${gameInfo.currentPlayer} WON!`;
          gameInfo.isGameON = false;
        }
      }
    }
  });
}
