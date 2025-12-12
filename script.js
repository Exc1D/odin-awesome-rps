const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
    playSound("assets/sound-click.mp3");
  });
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(player) {
  const computer = getComputerChoice();

  let result = "";

  if (player === computer) {
    result = "It's  a tie!";
    playSound("assets/sound-tie.mp3");
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    result = `You win! ${player} beats ${computer}.`;
    playerScore++;
    playSound("assets/sound-win.mp3");
  } else {
    result = `You lose! ${computer} beats ${player}.`;
    computerScore++;
    playSound("assets/sound-lose.mp3");
  }
  resultEl.textContent = result;
  scoreEl.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function playSound(src) {
  const audio = new Audio(src);
  audio.volume = 0.5;
  audio.play();
}

document.getElementById("resetBtn").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  resultEl.textContent = "Score";
  scoreEl.textContent = `Player ${playerScore} - ${computerScore} Computer`;
});
