// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var LowerCaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var ConfirmLength="";
var ConfirmLowerCaseletters;
var ConfirmUpperCaseletters;
var ConfirmNumbers;
var ConfirmSpecialChars;
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
var ConfirmLength =(prompt("How many characters would you like to use for your password?"));

while(ConfirmLength <=7 || ConfirmLength >=129) {
  alert("Error: The length of your Password must be between 8 and 128 characters");
  var ConfirmLength =(prompt("How many characters would you like to use for your password?"));
}
var ConfirmUpperCaseletters = confirm("Click OK if you'd like your Password to include at least one Upper Case Letter");
var ConfirmLowerCaseletters =confirm("Click OK if you'd like your Password to include at least one Lower Case Letter");
var ConfirmNumbers =confirm("Click Ok if you'd like your Password to include at least one Number");
var ConfirmSpecialChars =confirm("Click Ok if you'd like your Password to include at least one Special Character")

while(ConfirmUpperCaseletters === false && ConfirmLowerCaseletters === false && ConfirmSpecialChars === false && ConfirmNumbers === false){
alert("Security is key, please select at LEAST one parameter");
var ConfirmUpperCaseletters = confirm("Click OK if you'd like your Password to include at least one Upper Case Letter");
var ConfirmLowerCaseletters =confirm("Click OK if you'd like your Password to include at least one Lower Case Letter");
var ConfirmNumbers =confirm("Click Ok if you'd like your Password to include at least one Number");
var ConfirmSpecialChars =confirm("Click Ok if you'd like your Password to include at least one Special Character");
}
var passwordText =[]

if (ConfirmUpperCaseletters) {
  passwordText = passwordText.concat(UpperCaseletters)
}
if (ConfirmLowerCaseletters) {
  passwordText = passwordText.concat(LowerCaseletters)
}
if (ConfirmNumbers) {
  passwordText = passwordText.concat(Numbers)
}
if (ConfirmSpecialChars) {
  passwordText = passwordText.concat(SpecialChars)
}
console.log(passwordText)
var randomPassword=""

for(var i =0; i < ConfirmLength; i++) {
  randomPassword = randomPassword + passwordText[Math.floor(Math.random() * passwordText.lenth)];
console.log(randomPassword)
}
 return randomPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 