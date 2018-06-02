//Creates an array that lists out all of the options.
var computerChoices = ["Patrick","Squidward","SpongeBob","Plankton","Bikini"];
var correctGuess = [];
var letterGuessed = [];
var wins = 0;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("Computer guess:" + computerGuess);

function startGame(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    for (var i = 0; i < computerGuess.length; i++) {
        correctGuess.push("_")
        console.log("Pushed")
    }
    console.log("Guess: " + correctGuess.join(" "))
    document.getElementById("currentWord").innerText = correctGuess.join(" ");
}

document.onkeyup = function(event) {
    startGame()
}