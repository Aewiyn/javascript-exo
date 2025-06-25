let playerScore = 0;
let computerScore = 0;

function handleClick(playerChoice) {
    document.getElementById("playerChoice").textContent = playerChoice;
    const computerChoice = getComputerChoice();
    document.getElementById("computerChoice").textContent = computerChoice;
    const result = verifyWinner(playerChoice, computerChoice);
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;

    resultElement.classList.remove("green", "red", "gray");

    if (result === "Player wins!") {
        playerScore++;
        document.getElementById("playerScore").textContent = playerScore;
        resultElement.classList.add("green");
        
    } else if (result === "Computer wins!") {
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
        resultElement.classList.add("red");
    } else {
        resultElement.classList.add("gray");
    }
}

document.getElementById("rock").addEventListener('click', function() {
    handleClick("rock");
});

document.getElementById("paper").addEventListener('click', function() {
    handleClick("paper");
});

document.getElementById("scissors").addEventListener('click', function() {
    handleClick("scissors");
});

document.getElementById("reset").addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = "";
    document.getElementById("playerChoice").textContent = "";
    document.getElementById("computerChoice").textContent = "";
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function verifyWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (playerChoice === "rock" && computerChoice === "scissors") return "Player wins!";
    if (playerChoice === "paper" && computerChoice === "rock") return "Player wins!";
    if (playerChoice === "scissors" && computerChoice === "paper") return "Player wins!";
    return "Computer wins!";
}