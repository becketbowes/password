
function generatePassword() {
//crypto.getRandomValues(array1: ArrayBuffer)
var password = ""
var array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
let uuid = self.crypto.randomUUID();
for (i = 1; i <=11; i++) {
  var char = Math.floor(Math.random(uuid) * array1.length + 1);
  password += array1.charAt(char);
};
return password;
};
// var array2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
// for (i = 1; i <=11; i++) {
//   var char = Math.floor(Math.random() * array2.length + 1);
//   password += array2.charAt(char);
// };
// return password;
// }
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
