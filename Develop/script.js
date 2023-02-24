// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Password Characters
const numberCharacters = "0123456789" .split("");
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = lowerCase.map(char => char.toUpperCase());

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8-128;
// var password = "";

// Password Options User Input

function passwordOptions() {
const useNum = confirm("Would you like  special characters?");
const useSpecial = confirm("Would you like to use numbers?");
const useLower = confirm("Would you like to use lowercase characters?");
const useUpper = confirm("Would you like to use uppercase characters?");
const charCount = parseInt(prompt("How many characters do you want?"), 12);

return {
  useNum,
  useSpecial,
  useLower,
  useUpper,
  charCount

}
}

//  Generate Password
function generatePassword(options) {
  let password = "";
  let passwordChars = [];
for (let i = 0; i < options.charCount; i++) {
  var randomNumber = Math.floor(Math.random() * passwordChars.length);
  password = passwordChars.substring(randomNumber, randomNumber +1);
 }
 console.log(password)
 return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword("#generatePassword");
  if (password && password.length >= 8){  
    passwordText.value = password;
  } else {
    // alert user password does not meet the standard
    alert("Unable to generate password. Select one or more characters types and a minimum length of 8 characters.")
  }
  }
 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);