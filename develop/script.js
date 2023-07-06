// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Different characters to use for password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}";

  // Select Password Length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length! Please enter a length between 8 and 128.");
    return "";
  }

  var includeLowercase = confirm("Do you want to use lowercase characters?");
  var includeUppercase = confirm("Do you want to use uppercase characters?");
  var includeNumeric = confirm("Do you want to use numeric characters?");
  var includeSpecial = confirm("Do you want to use special characters?");

  // Select character type for password
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Selection of characters based on what users chooses
  var characterSelect = "";
  if (includeLowercase) characterSelect += lowercaseChars;
  if (includeUppercase) characterSelect += uppercaseChars;
  if (includeNumeric) characterSelect += numericChars;
  if (includeSpecial) characterSelect += specialChars;

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSelect.length);
    password += characterSelect.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);