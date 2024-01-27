const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(
  `----------------------------------------------Step1----------------------------------------------------\n`
);
const cloneArray = arrayNums;
cloneArray.push(55);
cloneArray.push(66);
console.log(`After adding values 55,56 original array is: ${arrayNums}`);
console.log(`After adding values 10,25 shallow clone array is: ${cloneArray}`);
console.log(`\n`);
console.log(
  `----------------------------------------------Step2----------------------------------------------------\n`
);
const deepClone = [...arrayNums];
arrayNums.splice(4, 0, 10);
arrayNums.splice(5, 0, 25);
console.log(
  `After updating values 10,25 before 90 original array is: ${arrayNums}`
);
console.log(
  `Result of deep clone array is: ${deepClone}`
);
console.log(`\n`);
console.log(
  `----------------------------------------------Step3----------------------------------------------------\n`
);
const arrayEven = [2, 30, 14, 8];
const mergeArray = [...arrayEven, arrayNums];
console.log(`After merging two array using spread(...) operator result is: ${mergeArray}`);
console.log(`\n`);
console.log(
  `----------------------------------------------Step4----------------------------------------------------\n`
);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91- 9086 5678 77"],
};
console.log(`Given employee_info object is:`, employee_info);
console.log(`\n`);
console.log(
  `----------------------------------------------Step5----------------------------------------------------\n`
);
console.log(`Employee "John Doe" address details are:`);
console.log(`Locality:`, employee_info.address.locality);
console.log(`City:`, employee_info.address.city);
console.log(`State:`, employee_info.address.state);
console.log(`Country:`, employee_info.address.country);
console.log(`Mobile Numbers: ${employee_info.mobiles}`);
console.log(`\n`);
console.log(
  `----------------------------------------------Step6----------------------------------------------------\n`
);
const deepCloneObj = JSON.parse(JSON.stringify(employee_info));

console.log(
  `Before updating value of original object country:`,
  employee_info.address.country
);

employee_info.country = "United Kindom";
console.log(
  `After updating value of original object country:`,
  employee_info.country
);
console.log(`\n`);
console.log(
  `Before updating value of cloned object salary:`,
  deepCloneObj.salary.july_month
);
deepCloneObj.salary.july_month = "80,0000INR";

console.log(
  `After updating value of cloned object salary:`,
  deepCloneObj.salary.july_month
);
console.log(`\n`);
console.log(
  `--------------------------------------------------------------------------------------------------------\n`
);
