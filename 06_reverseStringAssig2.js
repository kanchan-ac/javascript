console.log(
  `---------------------------------------Reverse String---------------------------------------`
);
function reverseString(str1, str2) {
  let revserString = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    let ch = str1.charAt(i);

    if (ch != " ") {
      revserString = revserString + str1.charAt(i);
    }
  }
  console.log(`Reverse string of "${str1}" is: ${revserString}\n`);

  let revserString2 = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    let char = str2.charAt(i);

    if (char != " ") {
      revserString2 = revserString2 + str2.charAt(i);
    }
  }
  console.log(`Reverse string of "${str2}" is: ${revserString2}\n`);
}
reverseString("Hard work always pays back", "Soon I will be Angular IT Champ");
