const {
  phonemeTable,
  arabicToEnglishTable,
  arabicToTransliterationTable,
} = require("../consts/trans_const");

function translate(word, table) {
  return word
    .split("")
    .map((char) => table[char] || char)
    .join("");
}

function tim2utf8(inputStr) {
  return inputStr
    .split("")
    .map((char) => table[char] || char)
    .join("");
}

function utf82tim(inputStr) {
  return inputStr
    .split("")
    .map((char) => arabicToTransliterationTable[char] || char)
    .join("");
}

function convertShadda(word, shadda = "~") {
  if (word[0] === shadda) {
    word = word.substring(1);
  }

  let index = word.indexOf(shadda);

  while (index !== -1) {
    word =
      word.slice(0, index) +
      (index > 0 ? word[index - 1] : "") +
      word.slice(index + 1);
    index = word.indexOf(shadda);
  }

  return word;
}

function tim2sampa(inputStr) {
  inputStr = convertShadda(inputStr);
  return inputStr
    .split("")
    .map((char) => phonemeTable[char] || char)
    .join("")
    .replace(/(?<=u)w/g, ":")
    .replace(/(?<=i)j/g, ":");
}

function utf82latin(inputStr) {
  return inputStr
    .split("")
    .map((char) => arabicToEnglishTable[char] || char)
    .join("");
}

module.exports = {
  translate,
  tim2sampa,
  tim2utf8,
  utf82latin,
  utf82tim,
  convertShadda,
};
