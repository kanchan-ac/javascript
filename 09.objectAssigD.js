console.log(
  `=================================createObject/nestedObject/array============+=================`
);
let professor = {
  name: "Dr. Preeti Patil",
  gender: "Female",
  age: 47,
  isMarried: false,
  qualification: "PhD",
  location: "Pune",
  degress: {
    engineering: "IT",
    diploma: "CS",
    ssc: "Science",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],
};
console.log(professor);
console.log(`\n`);
console.log(
  `===================================addNewProperty============+==========================`
);
professor.totalExperience = "14 years";
console.log(`After adding new property "totalExperience" result is:`);
console.log(`Total Experience:${professor.totalExperience}`);
console.log(`\n`);
console.log(
  `===================================updateNewProperty============+==========================`
);
professor.isMarried = true;
console.log(`After updating the value of "isMarried" result is:`);
console.log(professor);
console.log(`\n`);
console.log(
  `===================================addNewElementAt2ndndex============+========================`
);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(
  `After adding new element "Oracle Certified" at index 2 result is:`
);
console.log(professor.certificates);
console.log(`\n`);
console.log(
  `===================================lastElementOfArray============+========================`
);
let res = professor.certificates.length - 1;
let lastElement = professor.certificates[res];
console.log(`Last element of array is: ${professor.certificates[res]}`);
console.log(`\n`);
console.log(
  `===================================completeObject============+========================`
);
console.log(`Result of complete object:`);
console.log(professor);
console.log(`\n`);

console.log(
  `===================================arrayTraverse============+========================`
);
let text = [];
for (const i of professor.certificates) {
  text.push(i);
}
console.log(`Traverse array using for of loop: ${text}`);
console.log(`\n`);
