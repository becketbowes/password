//splitting up the arrays and making them global
var array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var array2 = "abcdefghijklmnopqrstuvwxyz";
var array3 = "0123456789";
var array4 = "!@#$%^&*(){}[]\|";
var arrayAlpha = (array1 + array2 + array3 + array4)

//question 1
//Determine password length
//8-128 charcters
var codeLength = function() {
  var howLong = "";
  var howLong = window.prompt("How many characters would you like the password to be? Please enter a number between 8 and 128");
  howLong = parseInt(howLong);
if (howLong > 128 || howLong < 8) {
      window.alert("Try again, my friend");
      codeLength();
    } else if (howLong < 129 && howLong > 7) {
      window.alert("Great, i'll make you a " + howLong + " character password");
      howLong = parseInt(howLong);
      codeType();
    } else {     
      window.alert("Try again, my friend");
      codeLength();
    }
};

//question 2
//user defining parameters at outset
//uppercase, lowercase, numeric, special
var codeType = function() {
  var whatKind = {
    uppercase: null,
    lowercase: null,
    numbers: null,
    special: null,
  };
  var whatKind = window.confirm("And how would you like that password? Should there be uppercase letters?");
  if (whatKind) {
    this.uppercase = array1;
  } 
  var whatKind = window.confirm("And how about lowercase letters?");
  if (whatKind) {
    this.lowercase = array2;
  }
  var whatKind = window.confirm("Would you like some numbers in there?");
  if (whatKind) {
    this.lowercase = array3;
  }
  var whatKind = window.confirm("Finally, would you like any special characters with your code?");
  if (whatKind) {
    this.lowercase = array4;
    doIt();
  } else {
    doIt();
  }
  return whatKind;
};

//question 3
//execute algorythm
var doIt = function() {
  window.confirm("Shall we?");
  if (doIt) {
    writePassword();
  } else {
    codeLength();
  }
};

//call banana values to send to the algorythym 
var bananaLength = codeLength();
var bananaArray = codeType();

//putting cryptoUUID in addition to the Math.random with full function for preplaned length and charset
function generatePassword() {
  var password = ""
  let uuid = self.crypto.randomUUID();
  for (i = 1; i <=bananaLength; i++) {
    var char = Math.floor(Math.random(uuid) * bananaArray.length + 1);
    password += bananaArray.charAt(char);
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
  generateBtn.addEventListener("click", codeLength);





// //defining possible arrays for the randomizing function
// var array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var array2 = "abcdefghijklmnopqrstuvwxyz";
// var array3 = "1234567890";
// var array4 = "!@#$%^&*(){}[]\|";



// // Add user options
// // 8-128 charcters
// var codeLength = function() {
//   var howLong = "";
//   var howLong = window.prompt("How many characters would you like the password to be? Please enter a number between 8 and 128")
//   howLong = parseInt(howLong)
// if (howLong > 128 || howLong < 8) {
//       window.alert("Try again, my friend");
//       codeLength();
//     } else if (howLong < 129 && howLong > 7) {
//       window.alert("Great, i'll make you a " + howLong + " character password");
//       codeType();
//     } else {     
//       window.alert("Try again, my friend");
//       codeLength();
//     }
//   return howLong;
// };


// // Generate password by building an array of characters, then passing a strong crypto (if available)
// // through a Math.random operation that chooses the characters at random from the array, loop it 
// // though the charAt function to generate an 11 character random password.
// function generatePassword() {
// var password = "";
// var arrayAlpha = (whatKind.uppercase + whatKind.lowercase + whatKind.numbers + whatKind.special);
// let uuid = self.crypto.randomUUID();
// for (i = 1; i <=howLong; i++) {
//   var char = Math.floor(Math.random(uuid) * arrayAlpha.length + 1);
//   password += arrayAlpha.charAt(char);
// };
// return password;
// };

// //Make the button
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", codeLength);

// //generateBtn.addEventListener("click", writePassword);





// //writePassword