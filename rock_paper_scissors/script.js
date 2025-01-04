const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

// DOM elements
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const messageParagraph = document.getElementById('message');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Event listeners
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);

  let resultMessage = '';

  if (winner === 'tie') {
    resultMessage = `It's a tie! You both chose ${userChoice}.`;
  } else if (winner === 'user') {
    userScore++;
    resultMessage = `You win! ${capitalize(userChoice)} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `Computer wins! ${capitalize(computerChoice)} beats ${userChoice}.`;
  }

  // Update scores
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;

  // Update message
  messageParagraph.textContent = resultMessage;

  checkWinner();
}

function checkWinner() {
  if (userScore === 5 || computerScore === 5) {
    // Disable buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (userScore === 5) {
      messageParagraph.textContent = '🎉 Congratulations! You won the game!';
    } else {
      messageParagraph.textContent = '💻 Sorry, the computer won the game.';
    }

    // Add a reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.style.marginTop = '20px';
    resetButton.classList.add('reset-button');
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
      // Reset scores
      userScore = 0;
      computerScore = 0;
      userScoreSpan.textContent = userScore;
      computerScoreSpan.textContent = computerScore;

      // Enable buttons
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;

      // Reset message
      messageParagraph.textContent = 'Make your move!';

      // Remove reset button
      resetButton.remove();
    });
  }
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
