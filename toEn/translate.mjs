import tools from "./utility.mjs";
import { additionalCases } from "./cases.mjs";
import { NamesDB } from "./NamesDB.mjs";
import { arabicPrefixesMap } from "./prefixes.mjs";
export function trans(name) {
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
