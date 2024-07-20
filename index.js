let humanScore = 0;
let computerScore = 0;

let gameLength = 10;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.66) {
        return "paper";
    } else
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        return "Draw! you both picked " + humanChoice;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
        humanScore++;
        return "You Win! Rock beats Scissors";
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    } else if (computerChoice == "scissors" && humanChoice.toLowerCase() === "paper") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else return "Invalid selection, please try again";
}

function playGame() {
    for (let i = 0; i < gameLength; i++) {
        let round = i + 1;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
        if (result === "Invalid selection, please try again") {
            i--;
        }
        console.log("Round " + round + " result = Score: Player (" + humanScore + ") - CPU (" + computerScore + ")");
    }
}

playGame();
