console.log(`----------------------------------step1------------------------------------\n`);

const isPalindrom = function(word){
    const reverseWord = word.split('').reverse().join('');
    let palindrome = word === reverseWord ? `True` : `False`;
    console.log(`"${word}" Is a palindrome string -> ${palindrome}`);
};

isPalindrom("madam");
isPalindrom("dad");
isPalindrom("hello");
console.log(`\n`);

console.log(`----------------------------------step2------------------------------------\n`);

const isAnagram = function(str1, str2){


    const res1 = str1.toLowerCase().split('').sort().join('');
    const res2 = str2.toLowerCase().split('').sort().join('');


    const result = res1 === res2 ? `True` :  `False`;
    console.log(`Words "${str1}", "${str2}" are anagram -> ${result}`);
}

isAnagram("Silent", "Listen");
isAnagram("Hello", "World");
isAnagram("Such", "much");
console.log(`\n`);
console.log(`---------------------------------------------------------------------------\n`);
     