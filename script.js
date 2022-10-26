function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 4);
    if (randomNum == 1) {
        return('Rock');
    } else if (randomNum == 2) {
        return('Paper');
    } else {
        return('Scissors');
    }
}

function playRound() {
    let playerSelection = window.prompt('Type Rock, Paper, or Scissors!', 'Rock');
    let computerSelection = getComputerChoice();
    lowerCasePlayer = playerSelection.toLowerCase();
    lowerCaseComputer = computerSelection.toLowerCase();

    if (lowerCasePlayer == 'rock' && lowerCaseComputer == 'scissors') {
        return 'Rock beats Scissors. You win!';
    } else if (lowerCasePlayer == 'paper' && lowerCaseComputer == 'rock') {
        return 'Paper beats Rock. You win!';
    } else if (lowerCasePlayer == 'scissors' && lowerCaseComputer == 'paper') {
        return 'Scissors beats Paper. You win!';
    } else if (lowerCasePlayer == 'rock' && lowerCaseComputer == 'paper') {
        return 'Paper beats Rock. You lose!';
    } else if (lowerCasePlayer == 'paper' && lowerCaseComputer == 'scissors') {
        return 'Scissors beats Paper. You lose!';
    } else if (lowerCasePlayer == 'scissors' && lowerCaseComputer == 'rock') {
        return 'Rock beats Scissors. You lose!';
    } else {
        return 'Tie!';
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

