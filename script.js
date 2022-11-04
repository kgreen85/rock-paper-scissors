let computerScore = 0;
let playerScore = 0;


function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice;
}


function playerChoice(){
    let player = prompt("Choose Rock, Paper, or Scissors");
    return player;
}


function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerChoice().toLowerCase();

    if (computerSelection == playerSelection) {
        return "It's a Tie"
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")){
            computerScore = ++computerScore;
            return "You Lose! " + computerSelection + " beats " + playerSelection
        }
    else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
        ) {
            playerScore = ++playerScore;
            return "You Win! " + playerSelection + " beats " + computerSelection
        }
}


function game(){
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {
            console.log(playRound())
        };
    };
    if (playerScore > computerScore) {
        return "You Won!!!"
    }
    else if (playerScore < computerScore) {
        return "You Lost!!!"
    }
};