class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    (this.emp_salary = emp_salary), (this.emp_company = emp_company);
  }
  getDetails() {
    console.log(
      `Employee ID: ${this.emp_id}, Employee Name: ${this.emp_name}, Employee Departmaent: ${this.emp_dept}`
    );
  }
  getDetails2() {
    console.log(
      `Employee ID: ${this.emp_id},Employee Departmaent: ${this.emp_dept},Company Name: ${this.emp_company}`
    );
  }
  getDetails3() {
    console.log(
      `Employee Name: ${this.emp_name} ,  Salary: ${this.emp_salary} Company Name: ${this.emp_company} `
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

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(
  `------------------------------------------------step1--------------------------------------------------------------\n`
);
arrayEmployees.sort((id1, id2) => {
  return id1.emp_id <= id2.emp_id ? 1 : -1;
});
console.log(`Employee Id's in descending order ==>`);
arrayEmployees.forEach((Element) => {
  Element.getDetails();
});
console.log(`\n`);

console.log(
  `------------------------------------------------step2--------------------------------------------------------------\n`
);
arrayEmployees.sort((str1, str2) => {
  return str1.emp_dept >= str2.emp_dept ? 1 : -1;
});
console.log(`Employee department in ascending order ==>`);
arrayEmployees.forEach((Element) => {
  Element.getDetails2();
});
console.log(`\n`);
console.log(
  `------------------------------------------------step3--------------------------------------------------------------\n`
);
arrayEmployees.sort((n1, n2) => {
  return n1.emp_salary <= n2.emp_salary ? 1 : -1;
});
console.log(`Employee salary in descending order ==>`);
arrayEmployees.forEach((Element) => {
  Element.getDetails3();
});
console.log(`\n`);
console.log(
  `------------------------------------------------------------------------------------------------------------------------`
);
