let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function resetScore() {
  playerScore = 0;
  computerScore = 0;
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
    return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Es un empate!`;
  }
  switch (computerChoice) {
    case "rock":
      if (playerChoice === "paper") {
        playerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Gana el jugador!`;
      } else if (playerChoice === "scissors") {
        computerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice} Gana la computadora`;
      }
      break;
    case "paper":
      if (playerChoice === "scissors") {
        playerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Gana el jugador!`;
      } else if (playerChoice === "rock") {
        computerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Gana la computadora!`;
      }
      break;
    case "scissors":
      if (playerChoice === "rock") {
        playerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Gana el jugador!`;
      } else if (playerChoice === "paper") {
        computerScore++;
        return `computadora eligio ${computerChoice} y jugador eligio ${playerChoice}. Gana la computadora!`;
      }
      break;
  }
}
function game() {
  resetScore();
  while (playerScore < 5 && computerScore < 5) {
    newSelection();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`JUGADOR (${playerScore}) - COMPUTADORA (${computerScore})`);
  }
  showWinner();
  resetScore();
}

function newSelection() {
  playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
  computerSelection = computerPlay();
}

function showWinner() {
  if (playerScore > computerScore) {
    console.log(`Gana el JUGADOR (${playerScore} - ${computerScore})`);
  } else if (computerScore > playerScore) {
    console.log(`Gana el JUGADOR (${computerScore} - ${playerScore})`);
  } else {
    console.log(`ES UN EMPATE! (${computerScore} - ${playerScore})`);
  }
}

game();
