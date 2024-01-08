console.log(
  `------------------------------step1------------------------------------`
);
function countVowels(str) {
  console.log(`Given string is: ${str}`);
  let count = 0;
  for (let i = 0; i <= str.length; i++)
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "U" ||
      str.charAt(i) == "A" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "O"
    ) {
      count++;
    }
  console.log(`Total numbers of vowels are present in string: ${count}\n`);
}
countVowels("I am very good IT Developer");
console.log(
  `------------------------------step2------------------------------------`
);
function sumOfCube() {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum = sum + i * i * i;
  }
  console.log(`Sum of cube from 1 to 5: ${sum}\n`);
}
sumOfCube();
console.log(
  `------------------------------step3------------------------------------`
);
function oddPositionedChars(str1, str2) {
  console.log(`Given string is:${str1}`);
  console.log(`Odd position of characters are:`);
  for (let i = 0; i <= str1.length; i++) {
    if (i % 2 != 0 && str1.charAt(i) != " ") {
      console.log(str1.charAt(i));
    }
  }
  console.log(`Given string is:${str2}`);
  console.log(`Odd position of characters are:`);

  for (let i = 0; i <= str2.length; i++) {
    if (i % 2 != 0 && str2.charAt(i) != " ") {
      console.log(str2.charAt(i));
    }
  }
}
oddPositionedChars("Hard work always pays back", "Soon I will be UI IT Champ");
