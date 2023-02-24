// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Password Characters
const numberCharacters = "0123456789" .split("");
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
const upperCase = "abcdefghijklmnopqrstuvwxyz".split("");
const lowerCase = lowerCase.map(char => char.toUpperCase());


// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8-128;
var password = "";

// Password Options User Input

function PasswordOptions() {
const useNum = confirm("Use special characters?");
const useSpecial = confirm("Use numbers?");
const useLower = confirm("Use lowercase characters?");
const useUpper = confirm("Use uppercase characters?");
const charCount = parseInt(prompt("How many characters do you want?"), 12);

return {
  useNum,
  useSpecial,
  useLower,
  useUpper,
  charCount

}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword("#generatePassword");
  // var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }


 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);