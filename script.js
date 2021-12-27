//THIS ONE

// // Assignment code here
// function generatePassword() {
//   const array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
//   self.crypto.getRandomValues(array1);

// var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
// self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


// function generatePassword() {
// var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
// self.crypto.getRandomValues(array);
// array.length
// }

function generatePassword() {
//crypto.getRandomValues(array1: ArrayBuffer)
var password = ""
var array2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]\|";
for (i = 1; i <=11; i++) {
  var char = Math.floor(Math.random() * array2.length + 1);
  password += array2.charAt(char);
};
return password;
}
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
