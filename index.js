let humanScore = 0;
let computerScore = 0;

let currentRound = 0;
let gameLength = 10;

const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

const scoreboard = document.querySelector("#Scoreboard");
const roundLog = document.querySelector("#Round-log");

rockBtn.addEventListener("click", () => {
    getHumanChoice("rock");
});
paperBtn.addEventListener("click", () => {
    getHumanChoice("paper");
});
scissorsBtn.addEventListener("click", () => {
    getHumanChoice("scissors");
});

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.66) {
        return "paper";
    } else
        return "scissors";
}

function getHumanChoice(selection) {
    const computerSelection = getComputerChoice();
    let result = playRound(selection, computerSelection);
    console.log(result);
    currentRound++;
    console.log("Round " + currentRound + " result = Score: Player (" + humanScore + ") - CPU (" + computerScore + ")");
    updateUI(result);
}

function updateUI(log) {
    scoreboard.textContent = "Player | " + humanScore + " - " + computerScore + " | CPU ";
    roundLog.textContent = "" + log;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw! you both picked " + humanChoice;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
        humanScore++;
        return "You Win! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    } else if (computerChoice == "scissors" && humanChoice === "paper") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else return "Invalid selection, please try again";
}

