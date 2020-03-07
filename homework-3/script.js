// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  
  // Read user input
  var passwordLengthStr = prompt("How many character in your password?");
  var passwordLength = parseInt(passwordLengthStr); // convert string into number

  if (passwordLength !== NaN && passwordLength >= 8 && passwordLength <= 128) {
    alert("Good passwordLength");
  } else {
    return "Password did not meet length criteria. Try again";
  }

  // Confirm pwd preferences
  var lowercase = confirm("Would you like lowercase characters?");
  var uppercase = confirm("Would you like uppercase characters?");
  var numeric = confirm("Would you like numeric characters?");
  var special = confirm("Would you like special characters?");

  if (lowercase || uppercase || numeric || special) {
    alert("One selected character");
  } else {
    return "Need to select at least one character type. Try again";
  }

  // Generate Password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = lowercaseChars.toUpperCase();
  var numericChars = "1234567890";
  var specialChars = " !\"#$%& '()*+,-./:;<=>?@[\]^_`{|}~";
  
  var password = "";
  for (var i = 0; i < passwordLength; i++){
    if (lowercase) {
      password = password.concat(lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)));
    }
    if (uppercase) {
      password = password.concat(uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)));
    }
    if (numeric) {
      password = password.concat(numericChars.charAt(Math.floor(Math.random() * numericChars.length))); 
    }
    if (special) {
      password = password.concat(specialChars.charAt(Math.floor(Math.random() * specialChars.length)));
    }  
  }
  // Limit password length
  password = password.substring(0, passwordLength);
  return password;
}
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
