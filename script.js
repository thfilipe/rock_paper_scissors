function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[random]

}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please type Rock, Paper or Scissors:").toLowerCase();
    computerSelection = computerPlay();

    return playerSelection
}
console.log(playRound());