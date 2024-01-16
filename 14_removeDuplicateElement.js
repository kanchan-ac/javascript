function removeDuplicateElement(arr){
    console.log(`Given array is: ${arr}`);
    console.log(`After Removing dulicate element:`);
    
    let uniqueArr = [];

    for(let element of arrayNum) {
        if(uniqueArr.indexOf(element) === -1) {
            uniqueArr.push(element);
        }
    }
    console.log(uniqueArr);
}

const arrayNum = [11,3,4,11,4,7,3];
removeDuplicateElement(arrayNum);