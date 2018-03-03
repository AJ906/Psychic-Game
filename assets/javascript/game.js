// Create an array of characters.
var words = ["Ferris", "Cameron", "Sloan", "Samantha", "Jake", 
                "Andie", "Blane", "Duckie", "Gary", 
                "Wyatt", "Lisa", "Kevin", "Buzz", 
                "Keith", "Watts", "Amanda", "John",
                "Claire", "Allison", "Brian", "Buck",
                "Clark", "Neal", "Del"];

//Choose random word from array.
    var randNum = Math.floor(Math.random() * words.length);
    var chosenWord = words[randNum];
    var underScore = [];
    console.log(chosenWord);

//Create underscores based on word length.

var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore()); 

//Get user guess.
//Check if guess is correct.
//If correct, push to "right" array.
//If incorrect, push to "wrong" array.


    