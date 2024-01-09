console.log(
  `====================================================Step1====================================================`
);
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNumber}`);
let result = arrayNumber.length;
console.log(`Total numbers of elements in array: ${result}\n`);
console.log(
  `====================================================Step2====================================================`
);
const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum}`);
console.log(`First element of array is:${arrayNumber[0]}`);
let res = arrayNum.length - 1;
let lastElement = arrayNum[res];
console.log(`Last element of array is:${arrayNum[res]}\n`);
console.log(
  `====================================================Step3====================================================`
);
const arrayNum1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum}`);
let res1 = arrayNum1.length - 3;
let thirdLast = arrayNum1[res1];
console.log(`Last third elements of array is:${arrayNum1[res1]}\n`);
console.log(
  `====================================================Step4====================================================`
);
const arrayNum2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum2}`);
console.log(`Even Numbers are:`);
for (let numbers of arrayNum2) {
  if (numbers % 2 == 0) {
    console.log(`${numbers}`);
  }
}

console.log(
  `====================================================Step5====================================================`
);
const arrayNum3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum3}`);
console.log(`Odd Numbers are:`);
for (let numbers of arrayNum3) {
  if (numbers % 2 != 0) {
    console.log(`${numbers}`);
  }
}

console.log(
  `====================================================Step6====================================================`
);
const arrayNum4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum4}`);
let sum = 0;
for (const key in arrayNum4) {
  if (key % 2 == 0) {
    sum = sum + arrayNum4[key];
  }
}
console.log(`Sum of even position is: ${sum}\n`);
console.log(
  `====================================================Step7====================================================`
);
const arrayNum5 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum5}`);
let sumPos = 0;
for (const key in arrayNum5) {
  if (key % 2 != 0) {
    sumPos = sumPos + arrayNum5[key];
  }
}
console.log(`Sum of odd position is: ${sumPos}\n`);
console.log(
  `====================================================Step8====================================================`
);
const arrayNum6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum6}`);
let sumOfAllElement = 0;
for (const sum of arrayNum6) {
  sumOfAllElement = sumOfAllElement + sum;
}
console.log(`Sum of all elements in the arrray: ${sumOfAllElement}\n`);
console.log(
  `====================================================Step9====================================================`
);
const arrayNum7 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum7}`);
console.log(`Numbers are multiple by 5:`);
for (const multi of arrayNum7) {
  if (multi % 5 == 0) {
    console.log(`${multi}`);
  }
}

console.log(
  `====================================================Step10====================================================`
);
const arrayNum8 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum8}`);
let resultOf = arrayNum8.includes(101);
console.log(`Is number "101" is present in array: ${resultOf}\n`);
console.log(
  `====================================================Step11====================================================`
);
const arrayNum9 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum9}`);
let resultOfNo = arrayNum8.includes(23);
console.log(`Is number "23" is present in array: ${resultOfNo}\n`);
console.log(
  `====================================================Step12====================================================`
);
const arrayNum10 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum10}`);
arrayNum10.splice(3, 0, 55, 66);
console.log(
  `After inserting elements "55" and "66" at 3 index array is: ${arrayNum10}\n`
);
console.log(
  `====================================================Step13====================================================`
);
const arrayNum11 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is: ${arrayNum11}`);
arrayNum11.splice(4, 3);
console.log(
  `After deleting 3 elements that are starting from index 4: ${arrayNum11}\n`
);
