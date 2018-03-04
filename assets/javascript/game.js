// Creates an array that lists out all letter choices.
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", 
"i", "o", "p", "a", "s", "d", "f", 
"g", "h", "j", "k", "l", "z", "x", 
"c", "v", "b", "n", "m"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// var game = true;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {



// Determines which key was pressed.
var userGuess = event.key;
var guessArr = new Array(userGuess);

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This logic determines the outcome of the game (win/loss), and increments the appropriate number.
if ((userGuess === "q") || (userGuess === "w") || (userGuess === "e") || (userGuess === "r") || 
(userGuess === "t") || (userGuess === "y") || (userGuess === "u") || (userGuess === "i") || 
(userGuess === "o") || (userGuess === "p") || (userGuess === "a") || (userGuess === "s") || 
(userGuess === "d") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || 
(userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "z") || 
(userGuess === "x") || (userGuess === "c") || (userGuess === "v") || (userGuess === "b") || 
(userGuess === "n") || (userGuess === "m"))
{
if (userGuess === computerGuess) {
wins++; 
} 

for(i=0; i<10; i++){
guessesLeft--;
break;
}

//Tried methods to get guesses to display; couldn't get it to work


// var playerGuesses = $("")
// document.getElementById("lettersGuessed").innerText;
// 		if(playerGuesses.indexOf(key) === -1) {
// 			document.getElementById("lettersGuessed").innerText += key
// 			if(guessesLeft > 0) {
// 				guessesLeft--;
// 				document.getElementById("guessesLeft").innerText = userGuess;
//             }
//         }
// while (userGuess !== computerGuess && guessesLeft > 0) {
//     guessArr.push(userGuess);
// }
// console.log(guessArr);
//   if (guessesLeft > 0) {
//       guessesLeft--; 

//   }

if (guessesLeft === 0) {
losses++; 
guessesLeft = 10;
}


// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
var html =
"<p>You chose: " + userGuess + "</p>" + "<br>" +
"<p>The computer chose: " + computerGuess + "</p>" + "<br>" +
"<p>wins: " + wins + "</p>" + "<br>" +
"<p>losses: " + losses + "</p>" + "<br>" +
"<p>guesses left: " + guessesLeft + "</p>";
//   "<p>letters guessed: " + playerGuesses + "</p>";
// var playerGuesses = 

//   "<p>letters guessed: " + playerGuesses + "</p>"


// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
}
};
