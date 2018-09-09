
var wins = 0;
var losses = 0;
var guesses = 10;
var letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var lettersGuessedText = document.getElementById("letters-guessed-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");

//generate random letter
var randomLetter = letterArr[Math.floor(Math.random() * letterArr.length)];
    console.log(randomLetter);
    

document.onkeyup = function(event) {
    //determine key pressed
    var userGuess = event,key;
    console.log(event,key)

    if (userGuess === randomLetter) {
        wins++;
    }
    else {
        guesses--;
        if  (guesses = 0) {
            losses--;
        }
    }

    lettersGuessedText.textContent = "Your Guesses so Far: " + userGuess;
    guessesLeftText.textContent = "Guesses Left: " + guesses;
    winsText.textContent = "Wins: " + window;
    lossesText = "Losses: " + losses;

};