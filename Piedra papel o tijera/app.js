const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("#computerScore");
const winnerDisplay = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");
const playerChoice = document.querySelector("#playerSelection");
const computerChoice = document.querySelector("#computerSelection");
const roundWinnerDisplay = document.querySelector("#roundWinner");

let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    playRound(playerSelection, computerSelection);
    playerDisplay.textContent = playerScore;
    computerDisplay.textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
      showWinner();
      disableBtns();
    }
  });
});

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function disableBtns() {
  buttons.forEach((button) => {
    button.classList.add("disabled");
  });
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    roundWinner = "nobody";
  } else {
    switch (computerChoice) {
      case "rock":
        if (playerChoice === "paper") {
          playerScore++;
          roundWinner = "player";
        } else if (playerChoice === "scissors") {
          computerScore++;
          roundWinner = "computer";
        }
        break;
      case "paper":
        if (playerChoice === "scissors") {
          playerScore++;
          roundWinner = "player";
        } else if (playerChoice === "rock") {
          computerScore++;
          roundWinner = "computer";
        }
        break;
      case "scissors":
        if (playerChoice === "rock") {
          playerScore++;
          roundWinner = "player";
        } else if (playerChoice === "paper") {
          computerScore++;
          roundWinner = "computer";
        }
    }
  }
  showRoundWinner(roundWinner);
}

function showRoundWinner(winner) {
  if (winner === "player") {
    playerChoice.style.color = "green";
    computerChoice.style.color = "red";
    roundWinnerDisplay.textContent = "Player wins this round";
  } else if (winner === "computer") {
    playerChoice.style.color = "red";
    computerChoice.style.color = "green";
    roundWinnerDisplay.textContent = "Computer wins this round";
  } else if (winner === "nobody") {
    playerChoice.style.color = "black";
    computerChoice.style.color = "black";
    roundWinnerDisplay.textContent = "Nobody wins this round";
  }
}

function showWinner() {
  if (playerScore > computerScore) {
    winnerDisplay.textContent = "Player WINS!";
  } else if (computerScore > playerScore) {
    winnerDisplay.textContent = "Computer WINS";
  }
}
