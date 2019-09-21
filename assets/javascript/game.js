var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var computerGuess;
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessessLeft-text");

function gameStart() {

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessesLeft = 9;
    userGuesses = [];
}

gameStart();

document.onkeyup = function (event) {

    var userGuess = event.key;
    if (userGuess === computerGuess) {
        console.log("Correct !")
        wins++
        gameStart();
    } else {
        console.log("Wrong !")
        userGuesses.push(userGuess);
        guessesLeft--
        console.log(guessesLeft)
        if (guessesLeft === 0) {
            losses++
            gameStart();
        }
    }

    userChoiceText.textContent = "You choose: " + userGuesses;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = guessesLeft;
}