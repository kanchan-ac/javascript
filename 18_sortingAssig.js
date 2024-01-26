const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is: ${arrayRollNumber}`);

console.log(
  `---------------------------------------------------Step1---------------------------------------------------------\n`
);

const reverseArray = arrayRollNumber.reverse();
console.log(`Reverse Array:`, reverseArray);
console.log(`\n`);
console.log(
  `---------------------------------------------------Step2---------------------------------------------------------\n`
);
const sortMethod = arrayRollNumber.sort();
console.log(`Using sort() method:`, sortMethod);
console.log(`\n`);
console.log(
  `---------------------------------------------------Step3---------------------------------------------------------\n`
);
arrayRollNumber.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(`Array in ascending order:`, arrayRollNumber);
console.log(`\n`);
console.log(
  `---------------------------------------------------Step4---------------------------------------------------------\n`
);
const greaterNum = arrayRollNumber[arrayRollNumber.length - 1];
console.log(`Greatest number from array is:`, greaterNum);
console.log(`\n`);
console.log(
  `---------------------------------------------------Step5---------------------------------------------------------\n`
);
const smallerNum = arrayRollNumber[0];
console.log(`Smallest number from array is:`, smallerNum);
console.log(`\n`);
console.log(
  `---------------------------------------------------Step5---------------------------------------------------------\n`
);
function removeDuplicates(arrayRollNumber) {
  return arrayRollNumber.filter(
    (item, index) => arrayRollNumber.indexOf(item) === index
  );
}
console.log(
  `After removing duplicate element from the array:`,
  removeDuplicates(arrayRollNumber)
);
console.log(`\n`);
console.log(
  `-----------------------------------------------------------------------------------------------------------------\n`
);
