const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const choices = ["rock", "paper", "scissors"];

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const playRound = (getHumanChoice) => {
    if (roundsPlayed >= 5 || playerScore >= 3 || computerScore >= 3) return;

    const computer = getComputerChoice();
    const player = getHumanChoice;
    roundsPlayed++;

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
    scoreEl.textContent = `Player ${playerScore} - ${computerScore} Computer (Round ${roundsPlayed}/5)`;

    if (roundsPlayed === 5 || playerScore >= 3 || computerScore >= 3) {
      setTimeout(() => {
        if (playerScore > computerScore) {
          resultEl.textContent = "Game Over - You Win!";
          playSound("assets/sound-win.mp3");
        } else if (computerScore > playerScore) {
          resultEl.textContent = "Game Over - Computer Wins!";
          playSound("assets/sound-lose.mp3");
        } else {
          resultEl.textContent = "Game Over - It's a Tie!";
          playSound("assets/sound-tie.mp3");
        }
      }, 1000);
    }
  };

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.dataset.choice);
      playSound("assets/sound-click.mp3");
    });
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    resultEl.textContent = "Score";
    scoreEl.textContent = `Player ${playerScore} - ${computerScore} Computer (Round ${roundsPlayed}/5)`;
  });
}

function playSound(src) {
  const audio = new Audio(src);
  audio.volume = 0.5;
  audio.play();
}

playGame();
