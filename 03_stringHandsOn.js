console.log(`-----------------------------------------String Functions--------------------------------------------`);
function stringHandsOn()
{
    var str1="   Hey you are doing good, keep it up    ";
    console.log(`1) Given string is: ${str1}`);
    var res=str1.length;
    console.log(`2) Length of string is: ${res}`);
    var res=str1.trim(" ");
    console.log(`3) String after trimming: ${res}`);
    var result=str1.length-res.length;
    console.log(`4) After removing extra spaces length of string is: ${res.length} and Total numbers of extra spaces count: ${result}`);
    var result=str1.length-res.length;
    var char=res.charAt(0);
    var char2=res.charAt(33);
    console.log(`5) First and Last character present in string: ${char},${char2}`);
    var word=res.split(" ");
    console.log(`6) Total numbers of words present in string: ${word.length}`);
    var index=res.indexOf("good");
    console.log(`7) Index of word "good": ${index}`);
    var substring=res.substring(22);
    var slice=res.slice(22,34);
    console.log(`8) a) Substring of given string: ${substring} b) Slice of given string: ${slice}`);
    var ends=res.includes("up");
    console.log(`9) String ends with "up": ${ends}`);
    var start=res.includes("Hey");
    console.log(`10) String starts with "Hey": ${start}`);
}
stringHandsOn();
console.log(`---------------------------------------------------------------------------------------------------`);