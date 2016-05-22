//generates random word  and capitalizes it;
var words = ["chipotle"]; //, "guacamole", "is", "way", "overpriced"];
var n = words.length;
var idx = Math.floor(Math.random() * n);
var currentWord = words[idx];
var capCurrentWord = currentWord.toLowerCase();
//console.log(capCurrentWord);
//var splitWord = capCurrentWord.split('');
//console.log(splitWord);
//creates spaces for the word and puts it into an array
var spaces = [];
//var createBox = [];
var space = '';
var letters = [];
var i = 0;
while (i < capCurrentWord.length) {
  space = space + "_";
  spaces.push(space[i]);
  i++;
}
console.log(spaces);
// checks to see if player letter is in capCurrentWord
var input = "e";
for (var a = 0; a < capCurrentWord.length; a++) {
  if (capCurrentWord.charAt(a) === input) {
    //letters.push(splitWord.indexOf(input));
    var guess = (capCurrentWord.charAt(a));
    var guessIdx = capCurrentWord.indexOf(guess);
    //console.log(guess, guessIdx);
    spaces.splice(guessIdx, 1, guess);
    console.log(spaces);
  } else {
    //console.log("try again");
  }
}
