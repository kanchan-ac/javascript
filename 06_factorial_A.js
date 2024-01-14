console.log(
  `-----------------------------------------------------------FactorialNumber---------------------------------------------------------------\n`
);
function factorialOfNum(num) {
  if (num == null && num == undefined) {
    return "Invalid Input";
  }

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
let resultValue = factorialOfNum(5);
console.log(`Factorial of 5: ${resultValue}`);
let resultValue1 = factorialOfNum(3);
console.log(`Factorial of 3: ${resultValue1}`);
let resultValue2 = factorialOfNum(null);
console.log(`Fcatorial of null value: ${resultValue2}`);
let resultValue3 = factorialOfNum(8);
console.log(`Factorial of 8: ${resultValue3}`);
let resultValue4 = factorialOfNum(undefined);
console.log(`Factorial of undefined value: ${resultValue4}`);
let resultValue5 = factorialOfNum(9);
console.log(`Factorial of 9: ${resultValue5}`);
let resultValue6 = factorialOfNum(0);
console.log(`Factorial of 0: ${resultValue6}\n`);
console.log(
  `------------------------------------------------------------------------------------------------------------------------------------------`
);
