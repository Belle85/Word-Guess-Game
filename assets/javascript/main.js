//Creates an array that lists out all of the options.
var computerChoices = ["Patrick","Squidward","SpongeBob","Plankton","Bikini"];
var letterGuessed = [];
var wins = 0;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("Computer guess:" + computerGuess);