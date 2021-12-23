// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var letters = ["a", "b", "c"];
  var passwordLength = prompt(
    "How many characters would you like your password to contain?",
    "Enter a number"
  );

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    alert("This is not a number, enter a number between 8 and 128");
  } else if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
  }

  var lowercase = confirm("Do you want to include lowercase?");
  var uppercase = confirm("Do you want to include uppercase?");
  var numeric = confirm("Do you want to include numeric?");
  var special = confirm("Do you want to include special characters?");
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
