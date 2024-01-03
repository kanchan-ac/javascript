console.log(
  `---------------------------------------Step1-----------------------------------------`
);
function maleMarriageEligibility(gender, age, boyName) {
  var result =
    age >= 21 && gender == "Male"
      ? `Hey ${boyName} you are eligible for Marrige\n`
      : `Sorry ${boyName} you are not eligible for Marrige\n`;
  console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(
  `---------------------------------------Step2-----------------------------------------`
);
function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    age >= 18 && gender == "Female"
      ? `Hey ${girlName} you are eligible for Marrige\n`
      : `Sorry ${girlName} you are not eligible for Marrige\n`;
  console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
