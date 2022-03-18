// Arrays
let letters = "abcdefghijklmnopqrstuvwxyz".split("");
let numbers = "123456789".split("");
let special = "!@#$%^&*?".split("");
// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generatePassword = function() {
   let userInput = prompt("How long would you like the password to be?\n\nChoose a number between 8 to 128.");
  if (userInput < 8 || userInput > 128) {
    confirm("Invalid option, please choose between 8 and 128");
    generatePassword();
  }
}