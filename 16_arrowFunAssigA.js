console.log(`------------------------------------------step1--------------------------------------------------\n`);
const show = () => {
    console.log(`"Good Morning, Today is Tursday"\n`);
}
show();
console.log(`------------------------------------------step2--------------------------------------------------\n`);
const mul=(n1,n2,n3=1) => {
    result=n1*n2*n3;
    console.log(`Result of multiplicatication: ${result}`);
}
mul(5,5,2);
mul(10,4);
console.log(`\n`);
console.log(`------------------------------------------step3--------------------------------------------------\n`);
let result2;
const add=(s1,s2,s3,s4,s5) =>{
    result2=s1 + s2 + s3 + s4+ s5;
    return result2;
}
let resultValue;
resultValue=add(100,100,200,349,756)
console.log(`Addition of numbers: ${resultValue}`);
resultValue=add("I am"," learning"," ES6",' features'," in depth")
console.log(`Addition of string: ${resultValue}`);
