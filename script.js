// Arrays
let letters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "123456789";
let special = "!@#$%^&*?";
let options = letters;

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

// prompts to generate password
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
    console.log('adding numbers to options', options);
  };

  if (addSpecials) {
    options += special;
    console.log('addingi specials to options', options);
  };

  if (makeUpperCase) {
    options = options.toUpperCase();
    console.log('making letters uppercase', options);
  };
};