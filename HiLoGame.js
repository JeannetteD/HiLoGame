//Javascript Hi/Lo Game
//Goal

//Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both //inclusive), and repeatedly asks the user for guesses.
//If the user's guess is too high or too low, the computer notifies them of that
//Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is //over.
//Hint: See Math.random()

function random() {
  var random = Math.floor((Math.random() * 100) + 1);
  alert (random);
  var userGuess = prompt ("Pick a random number between 1 and 100");

  while(random != parseInt(userGuess)){
    if (random < parseInt(userGuess)){
      alert("Your guess is too high!");
      userGuess = prompt ("Pick a random number between 1 and 100");
    }
    if (random > parseInt(userGuess)){
      alert("Your guess is too low!");
      userGuess = prompt ("Pick a random number between 1 and 100");
    }
  }
  if (random === parseInt(userGuess)) {
    alert ("You guessed it!");
  }
}
