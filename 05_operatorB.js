console.log(
  `-----------------------------------------------Step1----------------------------------------------------`
);
function greaterNumber(n1, n2) {
  console.log(`Given numbers are: ${n1},${n2}`);
  var result =
    n1 > n2 ? `${n1} is greater number\n` : `${n2} is greater number`;
  console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(
  `-----------------------------------------------Step2----------------------------------------------------`
);
function isEvenOrOddNum(num) {
  console.log(`Given number is: ${num}`);
  var result = num % 2 == 0 ? "True" : "False";
  return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`Result of "29" number is ${returnValue}\n`);
var returnValue = isEvenOrOddNum(44);
console.log(`Result of "44" number is ${returnValue}\n`);
var returnValue = isEvenOrOddNum(0);
console.log(`Result of "0" number is ${returnValue}\n`);
var returnValue = isEvenOrOddNum(101);
console.log(`Result of "101" number is ${returnValue}\n`);
console.log(
  `-----------------------------------------------Step3----------------------------------------------------`
);
function wordLength(string) {
  console.log(`Given string is: ${string}`);
  console.log(`Length of string is: ${string.length}`);
  var result =
    string.length % 2 == 0
      ? `Result of string is "EVEN"\n`
      : `Result of string is "ODD"\n`;
  return result;
}
var resultValue = wordLength("JavaScript");
console.log(resultValue);
var resultValue = wordLength("Developer");
console.log(resultValue);
var resultValue = wordLength("Google");
console.log(resultValue);
