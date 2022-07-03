// player select buttons
const rockBtn = document.getElementById("rock")
rockBtn.addEventListener("click", () => playRound("rock", computerPlay))
const paperBtn = document.getElementById("paper")
paperBtn.addEventListener("click", () => playRound("paper", computerPlay))
const scissorsBtn = document.getElementById("scissors")
scissorsBtn.addEventListener("click", () => playRound("scissors", computerPlay))

// computer random play
function computerPlay() {
    const rockPaperScissors = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[random]

}


function playRound(playerSelection, computerSelection) {
    const caption = document.getElementById("caption")
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        caption.textContent = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        caption.textContent = 'You Win! Rock beats Scissors';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        caption.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        caption.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        caption.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        caption.textContent = "You Lose! Rock beats Scissors";
    } else {
        caption.textContent = "You Lose! Scissors beats Paper";
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) { // Play through 5 rounds
        let outcome = playRound();
        console.log(outcome)
        if (outcome === "Tie!") {
        } else if (outcome == "You Win! Rock beats Scissors" || outcome == "You Win! Paper beats Rock" || outcome == "You Win! Scissors beats Paper") {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    if (playerScore === computerScore) {
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nGame is a Tie!")
    } else if (playerScore > computerScore) {
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nPlayer Wins!")
    } else {
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nComputer Wins!")

    }

}

game()