console.log(
  `---------------------------------------------------------------displayObjects----------------------------------------------------------------------------------\n`
);
function Bank(bankName, location, ifscCode, branchCode) {
  (this.bankName = bankName),
    (this.location = location),
    (this.ifscCode = ifscCode),
    (this.branchCode = branchCode);
  this.display = function () {
    console.log(`Bank Details...`);
    console.log(
      `Bank Name: ${this.bankName} Bank Location: ${this.location} ISFC Code: ${this.ifscCode} Branch Code: ${this.branchCode}\n`
    );
  };
}
const yesBank = new Bank("Yes Bank", "Barshi", "YESB0BMSB17", "BMSB17");
const sbiBank = new Bank(
  "State Bank Of India",
  "Malkapur",
  "SBIN0000419",
  "000419"
);
const mahBank = new Bank(
  "Bank Of Maharashtra",
  "Malkapur",
  "MAHB0000574",
  "000574"
);
const axisBank = new Bank("Axis Bank", "Malkapur", "UTIB0002010", "002010");
yesBank.display();
sbiBank.display();
mahBank.display();
axisBank.display();
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(
  `---------------------------------------------------------------step3&4--------------------------------------------------------------------------------------------\n`
);
console.log(`After adding data member open and close time of bank...`);
console.log(`Open Time: ${mahBank.openTime}`);
console.log(`Close Time: ${mahBank.closeTime}`);
console.log(
  `---------------------------------------------------------------step5------------------------------------------------------------------------------------------------\n`
);
console.log(`Open time of SBI Bank is: ${sbiBank.openTime}`);
console.log(`Close time of SBI Bank is: ${sbiBank.closeTime}\n`);
console.log(
  `---------------------------------------------------------------step6------------------------------------------------------------------------------------------------\n`
);
console.log(`Open time of Axis Bank is: ${sbiBank.openTime}`);
console.log(`Close time of Axis Bank is: ${sbiBank.closeTime}\n`);
console.log(
  `---------------------------------------------------------------step7------------------------------------------------------------------------------------------------\n`
);
console.log(`Bank Name is: ${yesBank.bankName}`);
console.log(`Branch Code of Yes Bank: ${yesBank.branchCode}`);
console.log(`Open time of Yes Bank is: ${yesBank.openTime}\n`);
