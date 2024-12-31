const choices = ['rock', 'paper', 'scissors'];

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
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(winner === 'tie' ? "It's a tie!" : winner === 'user' ? 'You win!' : 'Computer wins!');
  return winner;
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let userChoice;
    while (true) {
      userChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
      if (choices.includes(userChoice)) {
        break;
      } else {
        alert('Invalid input! Please enter rock, paper, or scissors.');
      }
    }
    const winner = playRound(userChoice);

    if (winner === 'user') {
      userScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

  console.log('Final Scores:');
  console.log(`You: ${userScore}`);
  console.log(`Computer: ${computerScore}`);

  if (userScore > computerScore) {
    console.log('You are the overall winner!');
  } else if (userScore < computerScore) {
    console.log('Computer is the overall winner!');
  } else {
    console.log("It's an overall tie!");
  }
}

// Start the game
playGame();
