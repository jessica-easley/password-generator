// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword("#generatePassword");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password Characters
const numberCharacters = "0123456789" .split("");
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
const upperCase = "abcdefghijklmnopqrstuvwxyz".split("");
const lowerCase = lowerCaseChars.map(char => char.toUpperCase());


// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8-25;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }


 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);