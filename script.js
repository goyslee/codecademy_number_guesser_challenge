let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert("Your guess is out of range! Please enter a number between 0 and 9.");
    return;
  }

  const humanDifference = getAbsoluteDistance(humanGuess, target);
  const computerDifference = getAbsoluteDistance(computerGuess, target);

  return humanDifference <= computerDifference;
  if (humanDifference <= computerDifference) {
    return true;  // Human wins or ties
  } else {
    return false; // Computer wins
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};