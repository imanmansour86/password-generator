// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characterSet = "";
  var pw = "";

  // Ask the user for the length of the password
  var passwordLength = prompt(
    "How many characters would you like your password to contain?",
    "Enter a number"
  );
  //If user cancels the prompt
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

    // user must include at least one of the confirm messages
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

    if (lowercaseConfirm) {
      //add at least one lower case character to the password
      characterSet += lowercase;
      var lowercaseCharacter = lowercase.charAt(
        Math.floor(Math.random() * lowercase.length)
      );
      pw += lowercaseCharacter;
    }
    if (uppercaseConfirm) {
      //add at least one upper case character to the password
      characterSet += uppercase;
      var uppercaseCharacter = uppercase.charAt(
        Math.floor(Math.random() * uppercase.length)
      );
      pw += uppercaseCharacter;
    }
    if (specialConfirm) {
      //add at least one special case character to the password
      characterSet += specialCharacters;
      var specialcaseCharacter = specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );
      pw += specialcaseCharacter;
    }
    if (numericConfirm) {
      //add at least one numeric case character to the password
      characterSet += numbers;
      var numericcaseCharacter = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      pw += numericcaseCharacter;
    }
  }
  for (var i = pw.length; i < passwordLength; i++) {
    pw += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
