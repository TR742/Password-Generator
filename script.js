// Arrays
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "123456789";
let special = "!@#$%^&*?";
let options = lower;
let password = "";

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

// determines options for password creation
function generatePassword() {
  let length = prompt("How long would you like the password to be?\n\nChoose a number between 8 to 128.");
  if (length < 8 || length > 128) {
    confirm("Invalid option, please choose between 8 and 128");
    return; 
  };

  alert("For the following questions, please click\n\nOK = Yes\nCancel = No");

  let addNumbers = confirm("Numeric values\n\nWould you like to add numeric values to the password?");
  let addSpecials = confirm("Special characters\n\nWould you like to add special characters to the password?");
  let makeUpperCase = confirm("Capital letters\n\nWould you like all the letters in the password to be uppercase?");

  if (addNumbers) {
    options += numbers;
  };

  if (addSpecials) {
    options += special;
  };

  if (makeUpperCase) {
    options = options.toUpperCase();
  };
    
  for (i = 0; i < length; i++) {
    password += options[Math.floor(Math.random() * options.length)];
  }
  return password;
};