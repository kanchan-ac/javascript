const submitButton = document.querySelector("#addition");
const fieldOne = document.querySelector(".field-one");
const fieldTwo = document.querySelector(".field-two");

const resultValue = document.querySelector("#resultValue");

submitButton.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne + valueTwo;
  console.log(valueOne + valueTwo);
  // alert(` Addition is: ${valueOne + valueTwo}`);
  resultValue.innerHTML = result;
});
const submitButton2 = document.querySelector("#subtraction");
submitButton2.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne - valueTwo;
  console.log(valueOne - valueTwo);
  resultValue.innerHTML = result;
});
const submitButton3 = document.querySelector("#multi");
submitButton3.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne * valueTwo;
  console.log(valueOne * valueTwo);
  resultValue.innerHTML = result;
});
const submitButton4 = document.querySelector("#div");
submitButton4.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne / valueTwo;
  console.log(valueOne / valueTwo);
  resultValue.innerHTML = result;
});
const clearText = document.querySelector("#clear");
let inputs = document.querySelectorAll("input");

clearText.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  resultValue.innerHTML = 0;
});
