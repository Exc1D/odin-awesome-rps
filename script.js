const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "papers", "scissors"];

document.querySelector(".choice").forEach((button) => {
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
    (player === "papers" && computer === "rock") ||
    (player === "scissors" && computer === "papers")
  ) {
    result = `You win! ${player} beats ${computer}.`;
    playerScore++;
    playSound("assets/souund-win.mp3");
  } else {
    result = `You lose! ${computer} beats ${player}.`;
    computerScore++;
    playSound("assets/sound-lose.mp3");
  }
  resultEl.textContent = result;
  scoreEl.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function playSound() {
  const audio = new Audio(src);
  audio.volume = 0.4;
  audio.play();
}
