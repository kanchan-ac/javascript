console.log(`-----------------------------------------------Conditional Statement----------------------------------------------------------
`);
function marriageEligibility(gender, age) {
  console.log(`Gender: ${gender}, Age: ${age}`);
  if (age <= 0 || age == null || age == undefined || isNaN(age)) {
    console.log(`Sorry! You have entered invalid input\n`);
  } else {
    if (gender == "Male" && age >= 21 || gender == "Female" && age >= 18) {
      console.log(`Hey! you are eligible for marriage\n`);
    }
    else{
    console.log(`Sorry! You are not eligible for marriage\n`);
    }
  }
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);


