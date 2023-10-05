/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

// Assignment code here
var chooseChar = function() {
  
  var userChoiceLower = confirm("Do you want to include lowercase letters?");
    if (!userChoiceLower) {
      userChoiceLower = "";
    } else {
      userChoiceLower = "abcdefghijklmnopqrstuvwxyz";      
    }

  var userChoiceUpper = confirm("Do you want to include UPPERCASE letters?");
    if (!userChoiceUpper) {
      userChoiceUpper = "";
    } else {
      userChoiceUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";      
    }

  var userChoiceNum = confirm("Do you want to include numbers [0123456789]?");
    if (!userChoiceNum) {
      userChoiceNum = "";
    } else {
      userChoiceNum = "0123456789";
    }  
  
  var userChoiceSpecial = confirm("Do you want to include special characters [!@#$%?^&*]?");
    if (!userChoiceSpecial) {
      userChoiceSpecial = "";
    } else {
      userChoiceSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

  var chooseString = userChoiceLower + userChoiceUpper + userChoiceNum + userChoiceSpecial

  if (chooseString.length > 0) {
    console.log("The string is " + chooseChar);
    return chooseString;
  } else {
    window.alert("You must choose a minimum of at least one type of character.");
    return chooseChar();
  }
}

var createPassword = function() {
  
  /* Prompt user to choose the length of the password */
  var chooseLength = prompt("How long would you like the password to be? Choose a number between 8 and 128!");
  chooseLength = parseInt(chooseLength);
  console.log("The choosen length is " + chooseLength);
  
  /* If not a number, length is less than 8, length is greater than 128, then return to beginning */
  if (isNaN(chooseLength) || chooseLength < 8 || chooseLength > 128) {
    return createPassword();
  }

  /* Creates the password based on the choosen criteria from the chooseChar function above */
  var setCriteria = chooseChar();
  var getPassword = "";
  
  /* Added a for loop using the Math.random function to generate a random combination based on the set criteria from the chooseChar function above */
  for (let index = 0, a = setCriteria.length; index < chooseLength; index++) {
    getPassword += setCriteria[Math.floor(Math.random() * a)];
  }
  console.log("The created password is " + getPassword);
  return getPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
