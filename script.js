

const inputBox = document.querySelector("#length");
const passwordShow = document.querySelector("#password");
const generateButton = document.querySelector(".generate-button");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%&()?><";
let allCharacter = uppercase + lowerCase + number + symbol;

function generatePassword() {
  let passwordLength = inputBox.value; // Get the value of the input field

  if (passwordLength < 4) {
    alert("Password length must be at least 4 characters.");
    return;
  }

  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < passwordLength) {
    password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
  }

  passwordShow.value = password;
}

generateButton.addEventListener("click", generatePassword);
