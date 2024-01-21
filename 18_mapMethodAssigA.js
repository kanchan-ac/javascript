const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`---------------------------------Step1-------------------------------------\n`);
console.log(`Given array is: ${arrayNumbers}`);

const arrayOfNum= arrayNumbers.map( (element ) => {

    return element=element+10 ;
});

console.log(`Result of addition:`,arrayOfNum);console.log(`\n`);

console.log(`---------------------------------Step2-------------------------------------\n`);
console.log(`Given array is: ${arrayNumbers}`);
const arrayOfCube= arrayNumbers.map( (element ) => {

    return element=element*element*element ;
});
console.log(`Result of cube:`,arrayOfCube);console.log(`\n`);
console.log(`---------------------------------Step3-------------------------------------\n`);
console.log(`Given array is: ${arrayNumbers}`);
const arrayOfIndex= arrayNumbers.map( (element,index ) => {

    return element=index+element;
});
console.log(`After adding index value into its corresponding element`,arrayOfIndex);
console.log(`\n`);
console.log(`---------------------------------------------------------------------------\n`);



