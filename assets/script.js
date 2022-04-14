//listing all possible characters
var specialCharacters = [
"~",
"`",
"!",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")",
"{",
"}",
"[",
"]",
"_",
"-",
"<",
">",
"?",
"'",
";",
":"
];

var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H'
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]; 

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var numbers = [
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'0'
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//this is a function declaration

function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  if (password === undefined) {
    return
  } 
  passwordText.value = password;
  
}
//create arrays containing all random possible chactacters
//filter out not okay characters
//make it randomly select all of the characters to generate the password
// write all the possible passwords here
function generatePassword() {
  
  var characterLength = parseInt(prompt( "How many characters do you want from in your password. Please select from 8-128."))
  /* in this characterLength variable you are setting if statements which sets up the parameters for the the length of the password */
  if (Number.isNaN(characterLength)) {
  alert ("You must enter a number.")
  return generatePassword()
  }
  
  if (characterLength < 8) {
    alert("You must enter at least 8 characters.")
    return generatePassword() ;
  
  } else if (characterLength > 128) {
    alert ("Must be less than 128");
    return generatePassword()
  }

  var getUppercase = confirm("Click OK if you want uppercase letters.");
  
  var getLowercase = confirm("Click OK if you want lowercase letters.");
  
  var getNumbers = confirm("Click OK if you want numbers.");
  
  var getSpecialChar = confirm("Click OK if you want special characters.");

  if (!getUppercase && !getLowercase && !getNumbers && !getSpecialChar) {
    alert("You must make a selection.")
    return generatePassword();
  }
  var possibleCharacters = []; //starts off empty
  var generatedPassword = ""; //starts off empty


  if (getLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase) /* concat = takes an array and joins it with another array
    possibleCharacters starts off empty, then you take that empty array and concat it with the lowerCase array (global characters)*/
  }
  if (getUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase)
  }
  if (getSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }
  if (getNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers)
  }

  for (var i = 0; i < characterLength; i++) {
    var randomChar = Math.floor(Math.random() * possibleCharacters.length) /* here in this for-loop you create another variable
    that will randomize all of the possible characters and have it stopping the length of each array*/
    generatedPassword += possibleCharacters[randomChar]
  }
return generatedPassword //returning the generatedPasswords which will fill in the blank strings with the randomize password
}
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);