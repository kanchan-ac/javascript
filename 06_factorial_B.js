console.log(
  `-----------------------------------------------------------factorialOfWordsCount---------------------------------------------------------------\n`
);

function factorialOfWordsCount(string) {
  if (string == null && string == undefined) {
    return "Invalid Invalid";
  }
  console.log(`Given String is: ${string}`);
  let res = string.split(" ");
  if (string=="") {
    res.length=0;
    
  }
  console.log(`Total numbers of words present in string: ${res.length}`);
  let fact = 1;
  for (let i = 1; i <= res.length; i++) {
    fact = fact * i;
  }
  return fact;
}
let resultValue = factorialOfWordsCount("Revision is the mother of Success");
console.log(`Result of factorial string: ${resultValue}\n`);
let resultValue1 = factorialOfWordsCount(
  "We never fail, we always learn, Mind it"
);
console.log(`Result of factorial string: ${resultValue1}\n`);
let resultValue2 = factorialOfWordsCount(null);
console.log(`Result of null value: ${resultValue2}\n`);
let resultValue3 = factorialOfWordsCount("");
console.log(`Result of "": ${resultValue3}\n`);
let resultValue4 = factorialOfWordsCount("Kanchan Ashish Choudhari");
console.log(`Result of factorial string: ${resultValue4}\n`);
console.log(
  `---------------------------------------------------------------------------------------------------------------------------------------------`
);
