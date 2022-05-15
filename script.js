// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', generatePassword );


var smalLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalLetter =["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",];

function writePassowrd(){
  var password = arr;
  arr.length=10;
  
}

function generatePassword(){
var allDigits =[...smalLetter, ...capitalLetter, ...Number,...Special]
console.log(allDigits);
var arr = []
for(var i=0; i < allDigits.length; i++){

  let picker = Math.floor(Math.random() * allDigits.length)
  arr.push(allDigits[picker])
}
arr.length = 10
var passwordText =document.querySelector("#password");
 passwordText.value = arr.join();
console.log (arr.join())
}



