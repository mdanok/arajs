import {
  firstLetters,
  specialLetters,
  lastLetters,
  letters,
  middleLetters,
  nextLetters,
  threeLetters,
} from "./cases.mjs";

const getKey = (...args) => args.join("-");

const getMiddleLetterReplacement = (prevLetter, currLetter, nextLetter) =>
  middleLetters.get(getKey(prevLetter, currLetter, nextLetter)) || "";

const getNextLettersReplacement = (letter, nextLetter) =>
  nextLetters.get(getKey(letter, nextLetter)) || "";

const getThreeLettersReplacement = (firstLetter, secondLetter, thirdLetter) =>
  threeLetters.get(getKey(firstLetter, secondLetter, thirdLetter)) || "";

const tools = {
  isFirstLetter: (index) => !index,

  convertFirstLetters: (letter) =>
    firstLetters.get(letter) ?? tools.convertLetter(letter),

  convertLetter: (letter) => letters.get(letter) ?? letter,

  checkNextLetter: (letter, nextLetter) =>
    getNextLettersReplacement(letter, nextLetter),

  checkSpecialLetter: (enName, letter, nextLetter) => {
    const specialInfo = specialLetters.get(letter);
    if (specialInfo && specialInfo.letters.includes(nextLetter)) {
      return specialInfo.action === "slice"
        ? enName.slice(0, -1) + specialInfo.value
        : enName;
    }
    return enName;
  },

  checkLastLetter: (enName, letter) => {
    const lastInfo = lastLetters.get(letter);
    if (lastInfo && lastInfo.action === "slice") {
      return enName.slice(0, -1) + lastInfo.value;
    }
    return enName;
  },

  isLastLetter: (index, arName) => index === arName.length - 1,

  checkThreeLetters: (firstLetter, secondLetter, thirdLetter) =>
    getThreeLettersReplacement(firstLetter, secondLetter, thirdLetter),

  checkMiddleLetters: (beforeLetter, middle, afterLetter) =>
    getMiddleLetterReplacement(beforeLetter, middle, afterLetter),

  capitalize: (string) => string.charAt(0).toUpperCase() + string.slice(1),
};

export default tools;
