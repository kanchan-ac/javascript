console.log(`---------------------------------------Step1-----------------------------------------`);
function rectangle(length,width)
{
console.log(`Length: ${length}, Width: ${width}`);
A=length*width;
console.log(`Area of rectangle: ${A}`);
}
rectangle(5,10);
console.log(`---------------------------------------Step2-----------------------------------------`);
function replaceString(string)
{
    console.log(`Given string is: ${string}`);
    result=string.replace("Evening", "Night");
    console.log(`Result of replaced string: ${result}`);
}
replaceString("Good Evening");