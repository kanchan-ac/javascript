const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(
  `---------------------------------------Step1-----------------------------------------\n`
);
arrayNumbers.forEach((element, index) => {
  console.log(index, " -> ", element);
});
console.log(
  `---------------------------------------Step2-----------------------------------------\n`
);
console.log(`Positive numbers are:`);
arrayNumbers.forEach((element) => {
  if (element >= 0) {
    console.log(element);
  }
});
console.log(
  `---------------------------------------Step3-----------------------------------------\n`
);
const array = [];
console.log(`Negative numbers are:`);
arrayNumbers.forEach((element) => {
  if (element < 0) {
    array.push(element);
  }
});
console.log(array);
console.log(
  `---------------------------------------Step4-----------------------------------------\n`
);
console.log(`Even numbers are:`);
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
console.log(
  `---------------------------------------Step5-----------------------------------------\n`
);
let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of all elements in the array: ${sum}`);
console.log(
  `---------------------------------------Step6-----------------------------------------\n`
);
console.log(`Even indexed array value:`);
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
