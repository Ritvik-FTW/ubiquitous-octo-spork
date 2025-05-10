// JavaScript Dice Game

let player1Score = 0, player2Score = 0;
let turn = 1;
let currentPlayer = 1;
let gameOver = false;
let message = "";

// Function to roll the dice
const rollDice = () => Math.floor(Math.random() * 6) + 1;

// Function to play a turn
const playTurn = () => {
    if (gameOver) return;

    let roll = rollDice();
    let resultMessage = message + `Turn ${turn}: Player ${currentPlayer} rolls ${roll}\n`;

    if (currentPlayer === 1) {
        player1Score += roll;
        if (player1Score >= 20) {
            message = resultMessage + `Player 1 wins with ${player1Score} points!`;
            gameOver = true;
            return;
        }
        currentPlayer = 2;
    } else {
        player2Score += roll;
        if (player2Score >= 20) {
            message = resultMessage + `Player 2 wins with ${player2Score} points!`;
            gameOver = true;
            return;
        }
        currentPlayer = 1;
        turn++;
    }

    message = resultMessage;
    updateUI();
};

// Function to reset the game
const resetGame = () => {
    player1Score = 0;
    player2Score = 0;
    turn = 1;
    currentPlayer = 1;
    message = "";
    gameOver = false;
    updateUI();
};

// Function to update the UI
const updateUI = () => {
    document.getElementById('player1-score').textContent = `Player 1: ${player1Score}`;
    document.getElementById('player2-score').textContent = `Player 2: ${player2Score}`;
    document.getElementById('message').textContent = message;
    document.getElementById('current-player').textContent = `Player ${currentPlayer}'s Turn`;
    document.getElementById('roll-button').disabled = gameOver;
};

// Event Listeners
document.getElementById('roll-button').addEventListener('click', playTurn);
document.getElementById('reset-button').addEventListener('click', resetGame);

// Initial UI update
updateUI();
