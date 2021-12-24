// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characterSet = "";

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
    return;
  } else if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
  } else if (passwordLength >= 8 && passwordLength < 129) {
    var lowercaseConfirm = confirm("Do you want to include lowercase?");
    var uppercaseConfirm = confirm("Do you want to include uppercase?");
    var numericConfirm = confirm("Do you want to include numeric?");
    var specialConfirm = confirm("Do you want to include special characters?");
    if (
      !lowercaseConfirm &&
      !uppercaseConfirm &&
      !numericConfirm &&
      !specialConfirm
    ) {
      alert("At least one character type should be selected");
    }

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    characterSet = "";

    if (lowercaseConfirm) {
      characterSet += lowercase;
    }
    if (uppercaseConfirm) {
      characterSet += uppercase;
    }
    if (specialConfirm) {
      characterSet += specialCharacters;
    }
    if (numericConfirm) {
      characterSet += numbers;
    }

    console.log("character set here is " + characterSet);
  }

  var pw = "";
  var text = "";

  for (var i = 0; i < passwordLength; i++) {
    // var test = Math.floor(Math.random() * passwordLength);
    text = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    pw = pw + text;
    // pw += test;

    // return pw;
    //   console.log("my pw + " + pw);
  }
  console.log("my great pw is " + pw);

  //condition for special chatacter

  return pw; //return number of characters for the password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
