// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  // promt the user for password length
  // check to see if the user actually entered a length
  // 4 confirms
  // 1 special characters
  // 2 numbers
  // 3 lowercase
  // uppercase
  // generate password based on user specifications
  //NOTE: user especifications come from confirms
  //
  var passwordLengthStr = prompt("How many character in your password?");
  var passwordLength = parseInt(passwordLengthStr); // covert string into number

  if (passwordLength !== NaN && passwordLength >= 8 && passwordLength <= 128) {
    alert("Good passwordLength");
  } else {
    alert("Bad password Length. Try again");
    return;
  }
  console.log(passwordLengthStr);
  console.log(passwordLength);
  var lowercase = confirm("Would you like lowercase characters?");
  var uppercase = confirm("Would you like uppercase characters?");
  var numeric = confirm("Would you like numeric characters?");
  var special = confirm("Would you like special characters?");
  console.log('lowercase:', lowercase);
  if (lowercase || uppercase || numeric || special) {
    alert("One selected character");
  } else {
    alert("No characters selected. Try again");
    return;
  }


  // if (lowercase) {
  //   alert("Password will have lowercase character");
  // }
  // if (uppercase) {
  //   alert("Password will have uppercase character");
  // }
  // if (numeric) {
  //   alert("Password will have numeric character");
  // }
  // if (special) {
  //   alert("Password will have special character");
  // }

  for (var i =0;i<10; i++){
  
  }
  // return "something";

  console.log("Generating my password!");

//WRITE PASSWORD TO THE #PASSWORD INPUT
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
