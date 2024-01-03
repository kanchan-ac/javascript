console.log(
  `---------------------------------------Step1-----------------------------------------`
);
var isEvenOrOdd = function (num) {
  console.log(`Given number is: ${num}`);
  var resultValue = "";
  if (num % 2 == 0) {
    resultValue = `Number is "EVEN"\n`;
  } else {
    resultValue = `Number is "ODD"\n`;
  }
  return resultValue;
};
var result = isEvenOrOdd(45);
console.log(result);
var result = isEvenOrOdd(70);
console.log(result);
var result = isEvenOrOdd(67);
console.log(result);
var result = isEvenOrOdd(98);
console.log(result);
console.log(
  `---------------------------------------Step2-----------------------------------------`
);
var eligibleForVote = function (age) {
  console.log(`Age is: ${age}`);
  if (age >= 18) {
    console.log(`Person is eligible for vote\n`);
  } else {
    console.log(`Person is not eligible for vote\n`);
  }
};
eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);
console.log(
  `---------------------------------------Step3-----------------------------------------`
);
var length = function (string) {
  console.log(`Given string is: ${string}`);
  if (string.length > 10) {
    console.log(`String contains more than 10 character\n`);
  } else {
    console.log(`String does not contains more than 10 character\n`);
  }
};
length("JavaScript-ES6");
console.log(
  `---------------------------------------Step4-----------------------------------------`
);
var stringStartWith = function (string) {
  if (string.startsWith("Java")) {
    console.log(`Given string ${string} starts with "Java" `);
  } else {
    console.log(`Given string "${string}" not starts with "Java" `);
  }
};
stringStartWith("JavaScript Language");
