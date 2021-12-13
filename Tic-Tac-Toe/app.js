/* 
!===> Create game [ARRAY] //! MODULE
!===> Create players {OBJECTS} //? FACTORY
!===> Control de Flow of the game {OBJECT}
!===> Function that renders the game array
!===> Function that allow players to add marks on the board
!===>   Tie it to the DOM
!===>   Check if the spot is already taken
!===> Function that check who wins, or if it's a tie
!===> Clean up the board
*/

const boardGrid = document.querySelector("#board");
const display = document.querySelector("#display");
const resetBtn = document.querySelector("#resetBtn");
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

const game = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let playersList = [];
  let isON = true;
  let currentPlayer = "";
  return { board, playersList, isON, currentPlayer };
})();

const gameControl = {
  renderBoard: () => {
    boardGrid.innerHTML = "";
    for (let i = 0; i <= 8; i++) {
      let newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.dataset.cell = i;
      newCell.textContent = game.board[i];
      boardGrid.appendChild(newCell);
    }
    boardGrid.childNodes.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        if (gameControl.isValidMove(e.target)) {
          gameControl.addPlayerMark(e.target);
          gameControl.checkWinner();
          gameControl.changeTurn();
        }
      });
    });
  },

  isValidMove: (target) => {
    if (target.textContent === "" && game.isON === true) {
      return true;
    }
    return false;
  },
  addPlayerMark: (target) => {
    if (game.currentPlayer === game.playersList[0]) {
      target.textContent = "X";
      game.board[target.dataset.cell] = "X";
    } else {
      target.textContent = "O";
      game.board[target.dataset.cell] = "O";
    }
  },
  changeTurn: () => {
    if (game.isON) {
      if (game.currentPlayer === game.playersList[0]) {
        game.currentPlayer = game.playersList[1];
        display.textContent = "Player Two's turn";
      } else {
        game.currentPlayer = game.playersList[0];
        display.textContent = "Player One's turn";
      }
    }
  },
  reset: () => {
    game.board = ["", "", "", "", "", "", "", "", ""];
    game.isON = true;
    gameControl.renderBoard();
    game.currentPlayer = game.playersList[0];
    display.textContent = `Player One's turn`;
  },

  checkWinner: () => {
    winningCombos.forEach((combo) => {
      if (game.isON) {
        let board = game.board;
        let x = combo[0];
        let y = combo[1];
        let z = combo[2];
        if (board[x] && board[y] && board[z]) {
          if (board[x] === board[y] && board[y] === board[z]) {
            display.textContent = `${game.currentPlayer} WON!`;
            game.isON = false;
            for (let cell of boardGrid.children) {
              cell.classList.add("disabled");
            }
          }
        }
      }
    });
    //IF THERE'S NO WINNER, CHECK IF IT'S A TIE
    if (game.isON) {
      if (game.board.every((cell) => cell !== "")) {
        display.textContent = `It's a TIE`;
        game.isON = false;
        for (let cell of boardGrid.children) {
          cell.classList.add("disabled");
        }
      }
    }
  },
};

const playerFactory = (name, symbol) => {
  game.playersList.push(name);
  return { name, symbol };
};

const playerOne = playerFactory("Player One", "X");
const playerTwo = playerFactory("Player Two", "O");

game.currentPlayer = game.playersList[0];

gameControl.renderBoard();

resetBtn.addEventListener("click", gameControl.reset);
