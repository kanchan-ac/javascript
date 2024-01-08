console.log(`---------------------------------------step1---------------------------------------------------------------------\n`);
const fruitsName=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitsName}`);
console.log(`Arrray of first element is: ${fruitsName[0]}`);
let result;
for(let i=0;i<fruitsName.length;i++){
    let arr=fruitsName.length-1;
    result=fruitsName[arr];
}
console.log(`Arrray of last element is:${result}\n`);
console.log(`---------------------------------------step2--------------------------------------------------------------------\n`);
let fruitsSeason=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitsSeason}`);
fruitsSeason.splice(0,0,"Papaya");
console.log(`After adding element "Papaya" array is: ${fruitsSeason}\n`);
console.log(`---------------------------------------step3--------------------------------------------------------------------\n`);
let fruitArr=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArr}`);
fruitArr.splice(3,1);
console.log(`After deleting element "Mango" array is: ${fruitArr}\n`);
console.log(`---------------------------------------step4--------------------------------------------------------------------\n`);
let fruitArray=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArray}`);
fruitArray.push("Pineapple");
console.log(`After adding element "Pineapple" at last position array is:${fruitArray}\n`);
console.log(`---------------------------------------step5--------------------------------------------------------------------\n`);
let fruitArray1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArray1}`);
fruitArray1.splice(4,0,"Dragon Fruit");
console.log(`After adding element "Dragon Fruit" before "Water Melon" array is: ${fruitArray1}\n`);
console.log(`---------------------------------------step6--------------------------------------------------------------------\n`);
let fruitArray2=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArray2}`);
fruitArray2.splice(1,1,"Kiwi");
console.log(`After replacing element "Orange" with "Kiwi" array is: ${fruitArray2}\n`);
console.log(`---------------------------------------step7-------------------------------------------------------------------\n`);
const fruitArray3=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArray3}`);
const arr2=fruitArray3.slice(1,4);
console.log(`Elements staring from index 1 to 4: ${arr2}\n`);
console.log(`---------------------------------------step8---------------------------------------------------------------------------\n`);
const fruitArray4=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is: ${fruitArray4}`);
const arr3=fruitArray4.slice(fruitArray4.length-3);
console.log(`Last 3 elements of Array is: ${arr3}\n`);








