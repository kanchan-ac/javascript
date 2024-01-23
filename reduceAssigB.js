class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    (this.emp_salary = emp_salary), (this.emp_company = emp_company);
  }
  getDetails() {
    console.log(
      `Employee ID: ${this.emp_id}, Employee Name: ${this.emp_name}, Employee Departmaent: ${this.emp_dept}, Salary: ${this.emp_salary},Company Name: ${this.emp_company}`
    );
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(
  `------------------------------------Step1----------------------------------------\n`
);
const employeeFromWipro = arrayEmps.filter((element) => {
  return element.emp_company == "Wipro";
});
console.log(`List of all employee from "Wipro"==>`);

employeeFromWipro.forEach((element) => {
  element.getDetails();
});
console.log(`\n`);
console.log(
  `------------------------------------Step2------------------------------------------\n`
);
const employeeFromHrAndIt = arrayEmps.filter((element) => {
  return element.emp_dept == "HR" || element.emp_dept == "IT";
});
console.log(`List of all employee from "IT" OR "HR Dept==>`);

employeeFromHrAndIt.forEach((element) => {
  element.getDetails();
});
console.log(`\n`);
console.log(
  `-----------------------------------Step3--------------------------------------------\n`
);
const employeeId = arrayEmps.filter((element) => {
  return element.emp_id > 50;
});
console.log(`List of all employee Id's are greater than 50==>`);

employeeId.forEach((element) => {
  element.getDetails();
});
console.log(`\n`);
console.log(
  `---------------------------------Step4------------------------------------------------\n`
);
const employeeName = arrayEmps.filter((element) => {
  if (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  ) {
    return element.emp_name;
  }
});
console.log(
  `List of all employee names start with letter 'A' or 'V' or 'M'==>`
);

employeeName.forEach((element) => {
  element.getDetails();
});
console.log(`\n`);
console.log(
  `---------------------------------Step5-------------------------------------------------\n`
);
const sumOfMarks = arrayEmps.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(`Average salary of all employee: ${sumOfMarks / arrayEmps.length}`);
console.log(`\n`);
console.log(
  `---------------------------------Step6---------------------------------------------------\n`
);
const employeeFromITDept = arrayEmps.filter((element) => {
  return element.emp_dept == "IT";
});
const averageSalary = employeeFromITDept.reduce((rt, element) => {
  return rt + element.emp_salary;
}, 0);
console.log(
  `Average salary of 'IT' Dept: ${averageSalary / employeeFromITDept.length}`
);
console.log(`\n`);
console.log(
  `-----------------------------------------------------------------------------------------\n`
);
