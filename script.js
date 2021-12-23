// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!$^&*-=+_?";

  var password = "";

  var passwordLength = promptUser();
  console.log("here " + passwordLength);

  // var lowercase = confirm("Do you want to include lowercase?");
  // var uppercase = confirm("Do you want to include uppercase?");
  // var numeric = confirm("Do you want to include numeric?");
  // var special = confirm("Do you want to include special characters?");

  // var generatedPaswword = "";

  // for (var i = 0; i < passwordLength; i++) {
  //   var test = Math.floor(Math.random() * passwordLength);
  // }
}

function promptUser() {
  var passwordLength = prompt(
    "How many characters would you like your password to contain?",
    "Enter a number"
  );
  //If user cancel the prompt
  if (!passwordLength) {
    return;
  }
  //check if the entered answered is a number
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    alert("This is not a number, enter a number between 8 and 128");
    promptUser();
  } else if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
  }
  return passwordLength;
}

promptUser();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
