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
  'H',
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
function generatePass(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if (password === undefined) {
    return
  } //wtf is this???
  
  passwordText.value = password;
  
}
//
function generatePassword() {
  
  
}
//series of prompt when the user clicks on the gen pass button
function getUserSelection() {
  
  var characterLength = prompt( "How many characters do you want from in your password. Please select from 8-128.");
  console.log(characterLength)

  var getUppercase = confirm("Click OK if you want uppercase letters.");
  console.log(getUppercase);

  var getLowercase = confirm("Click OK if you want lowercase letters.");
  console.log(getLowercase)

  var getNumbers = confirm("Click OK if you want numbers");
  console.log(getNumbers)

  var getSpecialChar = confirm("Click OK if you want special characters");
  console.log(getSpecialChar)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);