const str = "how are you mate";
console.log(`Given string is: ${str}`);
const result2 =
  str.charAt(0).toUpperCase() +
  str.substring(1, 2) +
  str.charAt(2).toUpperCase() +
  " " +
  str.charAt(4).toUpperCase() +
  str.substring(5, 6) +
  str.charAt(6).toUpperCase() +
  " " +
  str.charAt(8).toUpperCase() +
  str.substring(9, 10) +
  str.charAt(10).toUpperCase() +
  " " +
  str.charAt(12).toUpperCase() +
  str.substring(13, 15) +
  str.charAt(15).toUpperCase() +
  str.substring(17, 18);
console.log(`Result of string is: ${result2}`);
