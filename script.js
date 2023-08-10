var characterLength = 8
var choice = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1","2","3","4","5","6","7","8","9"]
var symbols = ["!", "@", "#", "$", "%", "^", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|",];

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  // I would generatePassword based on prompts
  var password = "";
  for(var i = 0; i< characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choice.length)
    password = password + choice[randomIndex]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPromts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPromts) {
    var newPassword = generatePassword();
  
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";

  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts (){
  choice = [];

  characterLength = parseInt(prompt("How many Characters do you want")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 to 128 digits. you need to try again.");
    return false;
  }

  if (confirm("Would you like Uppercase letters?")) {
    choice = choice.concat(uppperCase);
  }
  if (confirm("Would you like lowercase letters?")) {
    choice = choice.concat(lowerCase);
  }
  if (confirm("Would you like numbers?")) {
    choice = choice.concat(numbers);
  }
  if (confirm("Would you like symbols?")) {
    choice = choice.concat(symbols);
  }
  return true;
}













