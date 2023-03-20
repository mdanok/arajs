const { arabicPrefixesMap } = require("./prefixes.js");
const { NamesDB } = require("./NamesDB.js");
const { additionalCases } = require("./cases.js");
const { tools } = require("./utility.js");

function translate(name) {
  if (!name) return "";
  if (NamesDB.has(name)) {
    return NamesDB.get(name);
  }
  if (arabicPrefixesMap.has(name)) {
    return arabicPrefixesMap.get(name);
  }

  const processName = (enName, currLetter, prevLetter, nextLetter, index) => {
    enName += tools.isFirstLetter(index)
      ? tools.convertFirstLetters(currLetter)
      : tools.convertLetter(currLetter);

    if (!tools.isLastLetter(index, name)) {
      enName +=
        tools.checkThreeLetters(currLetter, nextLetter, name[index + 2]) ||
        tools.checkNextLetter(currLetter, nextLetter);

      for (const caseObj of additionalCases) {
        if (caseObj.condition(currLetter, nextLetter, prevLetter)) {
          enName = caseObj.action(enName);
        }
      }
      enName += tools.checkMiddleLetters(prevLetter, currLetter, nextLetter);
      enName = tools.checkSpecialLetter(enName, currLetter, nextLetter);
    }

    return enName;
  };

  let enName = [...name].reduce(
    (acc, currLetter, index, nameArr) =>
      processName(
        acc,
        currLetter,
        nameArr[index - 1],
        nameArr[index + 1],
        index
      ),
    ""
  );

  enName = tools.checkLastLetter(enName, name[name.length - 1]);
  return tools.capitalize(enName);
}

function toEnName(str) {
  return str
    .split(" ")
    .map((value) => translate(value))
    .join(" ");
}

function extractNames(input) {
  const words = input.split(" ");
  const result = [];
  let currentNames = [];

  const isName = (word) => NamesDB.has(word) || word === "بن" || word === "بنت";

  for (const word of words) {
    if (isName(word)) {
      currentNames.push(word);
    } else {
      if (currentNames.length > 0) {
        result.push(currentNames.join(" "));
        currentNames = [];
      }
    }
  }

  if (currentNames.length > 0) {
    result.push(currentNames.join(" "));
  }

  return result;
}

function getRandomNames(count = 1) {
  const keys = Array.from(NamesDB.keys());
  const names = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    names.push(randomKey);
  }

  return names;
}

module.exports = {
  toEnName,
  extractNames,
  getRandomNames,
};
