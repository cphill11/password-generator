// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//create function for generate password
function generatePassword() {
  var charsNumbers = "0123456789";
  var charsLowercase = "abcdefghijklmnopqrstuvwxyz";
  var charsSymbols = "!@#$%^&*()";
  var charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var chars = "";

  var passwordLength = prompt("How long?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmUppercase = confirm("Would you like to include upper case letters?");
  var confirmLowercase = confirm ("Would you like to confirm lower case letters?");
  var confirmSymbols = confirm("Would you like to use symbols?");
  var password = "";

 // create requirement for at least one input to be chosen
 if (confirmNumbers === false && confirmUppercase === false && confirmLowercase === false && confirmSymbols === false) {
  // must write return statement or defaults to a return at start
  return "Your Secure Password requires at least one selection";
}

 // create paramaters for password length to be between 8 & 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    return "Password must be between 8 and 128 characters";
  }

// concatenation of characters
  if (confirmNumbers === true) {
    chars = chars + charsNumbers;
  } 
  
  if (confirmUppercase === true) {
    chars = chars + charsUppercase;
  } 
  
  if (confirmLowercase === true) {
    chars = chars + charsLowercase;
  } 
  
  if (confirmSymbols === true) {
    chars = chars + charsSymbols;
  } 

// for loop to create a password from variables
 for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
 }

return (password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);