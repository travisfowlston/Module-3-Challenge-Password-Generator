// Assignment code here

/* Created a function for all of the criteria */
var chooseChar = function() {
  
  /* Used a confirm function to ask whether to include UPPERCASE letters */
  var userChoiceUpper = confirm("Do you want to include UPPERCASE letters?");
    if (!userChoiceUpper) {
      userChoiceUpper = "";
    } else {
      userChoiceUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";      
    }
  
  /* Used a confirm function to ask whether to include lowercase letters */
  var userChoiceLower = confirm("Do you want to include lowercase letters?");
    if (!userChoiceLower) {
      userChoiceLower = "";
    } else {
      userChoiceLower = "abcdefghijklmnopqrstuvwxyz";      
    }
  
  /* Used a confirm function to ask whether to include numbers */
  var userChoiceNum = confirm("Do you want to include numbers [0123456789]?");
    if (!userChoiceNum) {
      userChoiceNum = "";
    } else {
      userChoiceNum = "0123456789";
    }  
  
  /* Used a confirm function to ask whether to include special characters */
  var userChoiceSpecial = confirm("Do you want to include special characters [!@#$%?^&*]?");
    if (!userChoiceSpecial) {
      userChoiceSpecial = "";
    } else {
      userChoiceSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

  /* Combines all the selected criteria from above */
  var chooseString = userChoiceUpper + userChoiceLower + userChoiceNum + userChoiceSpecial

  /* Checks to see if at least one of the criteria has been selected and gives an alert if criteria has not been satisfied */
  if (chooseString.length > 0) {
    return chooseString;
  } else {
    window.alert("You must choose a minimum of at least one type of character.");
    return chooseChar();
  }
}

/* Created a function to generate the password */
var createPassword = function() {
  
  /* Prompt user to choose the length of the password */
  var chooseLength = prompt("How long would you like the password to be? Choose a number between 8 and 128!");
  chooseLength = parseInt(chooseLength);
  
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
