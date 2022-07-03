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

    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log("Tie!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
    } else {
        console.log("You Lose! Scissors beats Paper")
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