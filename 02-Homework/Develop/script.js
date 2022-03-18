// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["@", "$", "#", "%", "(", ")", "-", "^", "&", "*", "_", "=", "+"];
  let endPass = []
  let lengthPrompt = prompt("Choose a password length between 8 and 128 characters")
  let numbPrompt = confirm("Would you like to include numbers in your password?")
  let upperPrompt = confirm("Would you like to include uppercase letters in your password?")
  let lowerPrompt = confirm("Would you like to include lowercase letters in your password?")
  let specialPrompt = confirm("Would you like to include special characters in your password?")

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
