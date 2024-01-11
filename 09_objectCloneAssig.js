console.log(
  `=============================================================step1==============================================================`
);
const bankSbi = {
  name: "State Bank Of India",
  accNo: 1234567890,
  branchCode: 419,
  accBalance: 20000,
};
console.log(`Given 'bankSbi' object is:`, bankSbi);
console.log("\n");
console.log(
  `=============================================================step2==============================================================`
);
const bankLocation = {
  street: "Ganesh Nagar Road",
  city: "Thergaon",
  pincode: 411027,
};

console.log(`Given 'bankLocation' object is:`, bankLocation);
console.log(`\n`);
console.log(
  `=============================================================step3==============================================================`
);
const copyOfSbi = Object.assign({}, bankSbi);
const copyOfBankLocation = Object.assign({}, bankLocation);
console.log(`Result of cloning object->:`);
console.log(`\n`);
console.log(
  `Bank Name is`,
  copyOfSbi.name,
  `.`,
  `Account number is`,
  copyOfSbi.accNo,
  `and its located in`,
  copyOfBankLocation.street,
  `,`,
  copyOfBankLocation.city,
  `,`,
  copyOfBankLocation.pincode,
  `.Branch code is`,
  copyOfSbi.branchCode,
  `and Total balance present in account`,
  copyOfSbi.accBalance,
  `.`
);

console.log(`\n`);
console.log(
  `=============================================================step4==============================================================`
);
const rateOfInterst = {
  homeLoanInterest: 8.4,
  personalLoanInterest: 11.15,
  dueInterest: 2.5,
};
console.log(`Given 'rateOfInterst' object is:`, rateOfInterst);
console.log(`\n`);
console.log(
  `=============================================================step5==============================================================`
);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterst);
console.log(`Before merging 'bankSbi' object:`, bankSbi);
console.log(`Before merging 'bankLocation' object:`, bankLocation);
console.log(`Before merging 'rateOfInterst' object:`, rateOfInterst);

console.log(`After merging all objects:`);
console.log(`\n`);

console.log(
  `Bank Name is`,
  sbiDetails.name,
  `.`,
  `Account number is`,
  copyOfSbi.accNo,
  `and its located in`,
  sbiDetails.street,
  `,`,
  sbiDetails.city,
  `,`,
  sbiDetails.pincode,
  `.Branch code is`,
  sbiDetails.branchCode,
  `and Total balance present in account`,
  sbiDetails.accBalance,
  `.`,
  `SBI Home Loan Interest is`,
  sbiDetails.homeLoanInterest,
  `SBI Personal Loan Interest is`,
  sbiDetails.personalLoanInterest,
  `and SBI Due Loan Interest is`,
  sbiDetails.dueInterest
);

console.log(`\n`);
console.log(
  `=============================================================step6==============================================================`
);
console.log(`Bank details are below:`);
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(`${key} : ${element}`);
  }
}
