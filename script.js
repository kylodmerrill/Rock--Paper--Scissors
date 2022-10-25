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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats Scissors. You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Paper beats Rock. You win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Scissors beats Paper. You win!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Paper beats Rock. You lose!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Scissors beats Paper. You lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Rock beats Scissors. You lose!';
    } else {
        return 'Tie!';
    }
}

