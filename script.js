// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var characterSet = [];

  var passwordLength = promptUser();
  console.log("passwordLength from user choice here is " + passwordLength);

  var pw = "";
  var text = "";
  var testobject = "abcd123%$";
  for (var i = 0; i < passwordLength; i++) {
    // var test = Math.floor(Math.random() * passwordLength);
    text = testobject.charAt(Math.floor(Math.random() * testobject.length));
    pw = pw + text;
    // pw += test;

    // return pw;
    //   console.log("my pw + " + pw);
  }
  console.log("my great pw is " + pw);
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
  } else if (passwordLength >= 8 && passwordLength < 129) {
    var lowercase = confirm("Do you want to include lowercase?");
    var uppercase = confirm("Do you want to include uppercase?");
    var numeric = confirm("Do you want to include numeric?");
    var special = confirm("Do you want to include special characters?");
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("At least one character type should be selected");
    }

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!$^&*-=+_?";

    characterSet = "";
    if (lowercase) {
      characterSet = lowercase;
    } else if (lowercase && uppercase) {
      characterSet = lowercase + uppercase;
    } else if (lowercase && specialCharacters) {
      characterSet = lowercase + specialCharacters;
    } else if (lowercase && uppercase && specialCharacters) {
      characterSet = lowercase + uppercase + specialCharacters;
    } else if (uppercase) {
      characterSet = uppercase;
    } else if (uppercase && specialCharacters) {
      characterSet = uppercase + specialCharacters;
    } else if (specialCharacters) {
      characterSet = specialCharacters;
    }

    console.log("character set here is " + characterSet);
  }

  //condition for special chatacter

  return passwordLength; //return number of characters for the password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
