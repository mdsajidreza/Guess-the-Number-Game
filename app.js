let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (!userGuess) {
    message.textContent = "⛔ Please enter a number!";
  } else if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
}
