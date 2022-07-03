let playerScore = 0;
let computerScore = 0;


// player choice buttons
const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => playRound("rock", computerPlay));
const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => playRound("paper", computerPlay));
const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => playRound("scissors", computerPlay));

const caption = document.getElementById("caption")

// computer random choice
function computerPlay() {
    const rockPaperScissors = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[random]

}


function scoring() {
    const divPlayer = document.getElementById("player-score");
    const divComputer = document.getElementById("computer-score");
    if (caption.textContent == "Tie!") {
        return;
    } else if (caption.textContent === 'You Win! Rock beats Scissors' || caption.textContent === "You Win! Paper beats Rock" || caption.textContent === "You Win! Scissors beats Paper") {
        playerScore++;
        divPlayer.textContent = `Player Score: ${playerScore}`
    } else {
        computerScore++;
        divComputer.textContent = `Computer Score: ${computerScore}`
    }
}

function winner() {
    if (playerScore == 5) {
        caption.textContent = "Player Wins!";
    } else if (computerScore == 5) {
        caption.textContent = "Computer Wins!";
    }
}


function playRound(playerSelection, computerSelection) {
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
    scoring();
    if (playerScore == 5 || computerScore == 5) {
        winner();
    }

}






// function game() {


//     for (let i = 0; i < 5; i++) { // Play through 5 rounds
//         let outcome = caption.textContent;
//         console.log(outcome)
//         if (outcome === "Tie!") {
//         } else if (outcome == "You Win! Rock beats Scissors" || outcome == "You Win! Paper beats Rock" || outcome == "You Win! Scissors beats Paper") {
//             playerScore++;
//         } else {
//             computerScore++;
//         }
//     }
//     if (playerScore === computerScore) {
//         console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nGame is a Tie!")
//     } else if (playerScore > computerScore) {
//         console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nPlayer Wins!")
//     } else {
//         console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nComputer Wins!")

//     }

// }


