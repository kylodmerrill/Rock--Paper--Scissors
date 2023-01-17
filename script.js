// When button is selected, player's selection is saved as that button
const buttons = document.querySelectorAll('button');
let playerSelection = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound();
    });
});



// Create function to generate random number and return
// Rock, Paper, or Scissors for corresponding number
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return('Rock');
    } else if (randomNum == 1) {
        return('Paper');
    } else {
        return('Scissors');
    }
}

// Declare element variables
const playerChoice = document.querySelector('#p-return');
const cpuChoice = document.querySelector('#c-return');
const feedback = document.querySelector('#feedback');
const userScoreDisplay = document.querySelector('#user');
const cpuScoreDisplay = document.querySelector('#cpu');
const endResult = document.querySelector('#endResult');
let userWins = true;
let userScore = 0;
let cpuScore = 0;

// Create function to run through round. Player selection is saved from input of prompt.
// Computer selection is saved from random generated number from function. Convert both variables to 
// lower case. Output result for who wins the round
function playRound() {
    let computerSelection = getComputerChoice();
    lowerCasePlayer = playerSelection.toLowerCase();
    lowerCaseComputer = computerSelection.toLowerCase();

    if (lowerCasePlayer == 'rock' && lowerCaseComputer == 'scissors') {
        playerChoice.textContent = 'Rock';
        cpuChoice.textContent = 'Scissors';
        feedback.textContent = 'Rock beats Scissors. You win this round!';
        userWins = true;
    } else if (lowerCasePlayer == 'paper' && lowerCaseComputer == 'rock') {
        playerChoice.textContent = 'Paper';
        cpuChoice.textContent = 'Rock';
        feedback.textContent = 'Paper beats Rock. You win this round!';
        userWins = true;
    } else if (lowerCasePlayer == 'scissors' && lowerCaseComputer == 'paper') {
        playerChoice.textContent = 'Scissors';
        cpuChoice.textContent = 'Paper';
        feedback.textContent = 'Scissors beats Paper. You win this round!';
        userWins = true;
    } else if (lowerCasePlayer == 'rock' && lowerCaseComputer == 'paper') {
        playerChoice.textContent = 'Rock';
        cpuChoice.textContent = 'Paper';
        feedback.textContent = 'Paper beats Rock. You lose this round!';
        userWins = false;
    } else if (lowerCasePlayer == 'paper' && lowerCaseComputer == 'scissors') {
        playerChoice.textContent = 'Paper';
        cpuChoice.textContent = 'Scissors';
        feedback.textContent = 'Scissors beats Paper. You lose this round!';
        userWins = false;
    } else if (lowerCasePlayer == 'scissors' && lowerCaseComputer == 'rock') {
        playerChoice.textContent = 'Scissors';
        cpuChoice.textContent = 'Rock';
        feedback.textContent = 'Rock beats Scissors. You lose this round!';
        userWins = false;
    } else {
        playerChoice.textContent = `${playerSelection}`;
        cpuChoice.textContent = `${lowerCaseComputer}`;
        feedback.textContent = 'Tie!';
        userWins = null;
    }

    if (userWins === true) {
        userScore += 1;
        userScoreDisplay.textContent = `${userScore}`;
    } else if (userWins === false) {
        cpuScore += 1;
        cpuScoreDisplay.textContent = `${cpuScore}`;
    } else {}

    if (userScore > 4) {
        endResult.textContent = 'You win the game!!!';
    } else if (cpuScore > 4) {
        endResult.textContent = 'You lose the game :(';
        endResult.style.color = 'red';
    } else {}
}


