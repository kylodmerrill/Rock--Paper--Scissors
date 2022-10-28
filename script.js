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

// Create function to run through round. Player selection is saved from input of prompt.
// Computer selection is saved from random generated number from function. Convert both variables to 
// lower case. Output result for who wins the round
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

// Create function to run a full game with five rounds. 
// Variables are declared to keep score and are incremented upon each round
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
        if (result === 'Rock beats Scissors. You win!' || result === 'Paper beats Rock. You win!' || result === 'Scissors beats Paper. You win!') {
            playerScore += 1;
        } else if (result === 'Paper beats Rock. You lose!' || result === 'Scissors beats Paper. You lose!' || result === 'Rock beats Scissors. You lose!') {
            computerScore += 1;
        }
    }

// Winner of the game whole game is declared
    if (playerScore > computerScore) {
        console.log('You win ' + playerScore + ' to ' + computerScore + " !");
    } else if (computerScore > playerScore) {
        console.log('You lose ' + playerScore + ' to ' + computerScore + ' !');
    } else {
        console.log('It\'s a tie! ' + playerScore + ' to ' + computerScore);
    }
}

