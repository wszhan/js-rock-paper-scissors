/*
Win cases: 
playerIndex - aiIndex == -1 ||
playerIndex - aiIndex == 2

Tie cases:
playerIndex === aiIndex
*/
const choices = ["🪨", "✂️", "📄"]

let playerIndex = null, computerIndex = null;
let playerWins = 0, computerWins = 0;
let playerWin = null;

const msg = document.getElementById('current-message');

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const playerChoiceIcon = document.getElementById("player-choice-icon");
const computerChoiceIcon = document.getElementById("computer-choice-icon");

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

function randomIndex() {
    return Math.floor(choices.length * Math.random());
}

function setPlayerIcon() {
    setIcon(playerIndex);
}
function setComputerIcon() {
    setIcon(computerIndex, computerChoiceIcon);
}

function setIcon(index, playerIconElement=playerChoiceIcon) {
    playerIconElement.innerHTML = choices[index];
}

function updateDisplay() {
    setPlayerIcon();
    setComputerIcon();
}

function decideWin() {
    let diff = playerIndex - computerIndex;

    if (diff === -1 || diff === 2) {
        playerWin = true;
        playerWins++;
        msg.innerHTML = "You Win! ✌️";
    } else if (diff === 0) {
        playerWin = null;
        msg.innerHTML = "It is a tie 👀";
    } else {
        playerWin = false;
        computerWins++;
        msg.innerHTML = "You lose 😭";
    }

    updateScoreboard();
}

function updateScoreboard() {
    playerScore.innerHTML = playerWins;
    computerScore.innerHTML = computerWins;
}

function playGame(playerChoiceIndex) {
    playerIndex = playerChoiceIndex;
    computerIndex = randomIndex();
    updateDisplay();
    decideWin();
}

rockButton.addEventListener("click", () => {
    playGame(0);
});

paperButton.addEventListener("click", () => {
    playGame(1);
});

scissorsButton.addEventListener("click", () => {
    playGame(2);
});

