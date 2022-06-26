function computerPlay() {
    const rockPaperScissors = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[random]

}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Please type Rock, Paper or Scissors:").toLowerCase();
    computerSelection = computerPlay();
    // console.log("Player: " + playerSelection + " " + "Computer: " + computerSelection)

    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else {
        return "You Lose! Scissors beats Paper"
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
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log("Game is a Tie!")
    } else if (playerScore > computerScore) {
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log("Player Wins!")
    } else {
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log("Computer Wins!")
    }

}

game()