console.log(
  `====================================================step1==========================================================`
);
function squareOfWordLenght(word) {
  console.log(`Given String is: ${word}`);
  var len = word.length;
  console.log(`Length of string is: ${len}`);
  var result = len * len;
  return result;
}
var returnResult = squareOfWordLenght("JavaScript");
console.log(`Length of square is: ${returnResult}\n`);
var returnResult = squareOfWordLenght("Google Chrome");
console.log(`Length of square is is: ${returnResult}\n`);
var returnResult = squareOfWordLenght("Developer Smart");
console.log(`Length of square is: ${returnResult}\n`);
console.log(
  `====================================================step2==========================================================`
);
function string() {
  var string = "I am Angular Developer";
  console.log(`Given string is: ${string}`);
  var result = string.length;
  console.log(`Length of string is: ${result}`);
  var word = string.split(" ");
  console.log(`Total number of words are: ${word.length}\n`);
  var div = result / word.length;
  console.log(`Division of total words: ${div}`);
  var mul = result * word.length;
  console.log(`Multiplication of total words: ${mul}`);
}
string();
