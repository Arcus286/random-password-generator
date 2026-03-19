let characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","-","_","=","+",
  "[","]","{","}","|",":",";","'","<",">",",",".","?","/"
];
let firstText = document.getElementById("first-text")
let secondText = document.getElementById("second-text")
let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function(){
  firstText.textContent = "";
  secondText.textContent = "";
  for(let i = 1;i<=15;i++){
    firstText.textContent += characters[Math.floor(Math.random() * characters.length)];
  }
  for(let i = 1;i<=15;i++){
    secondText.textContent += characters[Math.floor(Math.random() * characters.length)];
  }
})