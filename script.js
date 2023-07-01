// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

const characterAmountRange = document.getElementById("characterAmountRange");

const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement =document.getElementById("includeUppercase")
const includeNumbersElement =document.getElementById("includeNumbers")
const includeSymbolsElement =document.getElementById("includeSymbols")
const passwordGeneratorForm = document.getElementById("passwordGeneratorForm");

// const LOWERCASE_CHAR_CODES = (65,97)
// const UPPERCASE_CHAR_CODES = arrayFormLowToHigh(97,122)
// const NUMBER_CHAR_CODES = arrayFormLowToHigh(48,57)
// const SYMBOL_CHAR_CODES = arrayFormLowToHigh(33,47).contact(
//   arrayFormLowToHigh(58,64)const LOWERCASE_CHAR_CODES: 97
 const LOWERCASE_CHAR_CODES: any
const UPPERCASE_CHAR_CODES: any
const NUMBER_CHAR_CODES: any
const SYMBOL_CHAR_CODES = arrayFormLowToHigh(33,47).contact(
  arrayFormLowToHigh(58,64)const LOWERCASE_CHAR_CODES: 97
  ).concat(

// const UPPERCASE_CHAR_CODES = arrayFormLowToHigh(97,122)
// const NUMBER_CHAR_CODES = arrayFormLowToHigh(48,57)
// const SYMBOL_CHAR_CODES = arrayFormLowToHigh(33,47).contact(
//   arrayFormLowToHigh(58,64)const LOWERCASE_CHAR_CODES: 97

sgAmount);
characterAmountRange.addEventListener("input", synCharacterAmount);


// const LOWERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90); 
// const UPPERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90);

const LOWERCASE_CHAR_CODES: any
const UPPERCASE_CHAR_CODES: any

form.addEventListener("submit"),
  (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeNumbersElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeNumbersElement.checked;
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
  };

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {console.log(LOWERCASE_CHAR_CODES)


}


  

function arrayFormLowToHigh(low, high) 
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }

  {
    return array
  }

 

function synCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value;
  characterAmountRange.value;
}
