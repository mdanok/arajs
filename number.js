{
  /*import * as nmconst from "./consts/named_const.mjs";
import * as nbconst from "./consts/number_const.mjs";
import * as araby from "./araby.js";
import { ArNumbers } from "./Numbers/ArNumber.mjs";
*/
}
const nmconst = require("./consts/named_const.js");
const nbconst = require("./consts/number_const.js");
const araby = require("./araby.js");
const { ArNumbers } = require("./Numbers/ArNumbers");

function text2number(text) {
  let total = 0;
  let partial = 0;
  text = araby.stripTashkeel(text);
  const words = text.split(" ");

  for (const word of words) {
    let modifiedWord = word;
    if (
      modifiedWord &&
      modifiedWord !== "واحد" &&
      "وفلبك".includes(modifiedWord[0])
    ) {
      modifiedWord = modifiedWord.slice(1);
    }
    if (modifiedWord !== "واحد" && modifiedWord.startsWith("و")) {
      modifiedWord = modifiedWord.slice(1);
    }

    if (nbconst.NUMBER_WORDS.hasOwnProperty(modifiedWord)) {
      const actualNumber = nbconst.NUMBER_WORDS[modifiedWord];
      if (actualNumber % 1000 === 0) {
        if (partial === 0) {
          partial = 1;
        }
        total += partial * actualNumber;
        partial = 0;
      } else {
        partial += nbconst.NUMBER_WORDS[modifiedWord];
      }
    }
  }

  total += partial;
  return total;
}

function number2text(anumber) {
  if (typeof anumber === "number") {
    anumber = anumber.toString();
  } else if (typeof anumber === "string") {
    try {
      const a = parseFloat(anumber);
    } catch (error) {
      return "صفر";
    }
  } else {
    return "صفر";
  }

  const arbn = new ArNumbers();
  return arbn.int2str(anumber);
}

function vocalizeNumber(wordlist, syn_tags = "") {
  let newlist = [];
  let prefix = "";
  let nextword = "";

  let tags = syn_tags;
  if (wordlist.length === 1) {
    let word = wordlist[0];
    let word_nm = araby.stripTashkeel(word);
    let key = word_nm;
    let voc = word;

    if (
      word_nm &&
      !word_nm &&
      word_nm !== "واحد" &&
      ["و", "ف", "ل", "ب", "ك"].includes(word[0])
    ) {
      if (["ل", "ب", "ك"].includes(word_nm[0])) {
        tags += "مجرور";
      }
      key = word.slice(1);
    } else if (word_nm !== "واحد" && word_nm.startsWith("و")) {
      key = word_nm.slice(1);
    }

    if (
      key in nbconst.NUMBER_WORDS &&
      ![
        "عشر",
        "خمس",
        "سبع",
        "تسع",
        "خمسا",
        "سبعا",
        "تسعا",
        "عشرا",
        "ألفين",
        "عشرة",
        "صفر",
        "ألف",
      ].includes(key)
    ) {
      voc = prefix + nbconst.VOCALIZED_NUMBER_WORDS[key]["i"];
    }
    return [voc];
  }

  for (let i = 0; i < wordlist.length; i++) {
    let word = wordlist[i];
    let word_nm = araby.stripTashkeel(word);
    let key = word_nm;

    if (
      i === 0 &&
      word_nm &&
      word_nm !== "واحد" &&
      ["و", "ف", "ل", "ب", "ك"].includes(word[0])
    ) {
      if (["ل", "ب", "ك"].includes(word_nm[0])) {
        tags += "مجرور";
      }
      key = word.slice(1);
    } else if (word_nm !== "واحد" && word_nm.startsWith("و")) {
      key = word_nm.slice(1);
    }
    if (key in nbconst.NUMBER_WORDS) {
      if (word_nm.endsWith("ين")) {
        tags += "مجهول";
      } else if (word_nm.endsWith("ان") || word_nm.endsWith("ون")) {
        tags += "مرفوع";
      }
    }
  }

  let pre_key = "";
  for (let i = 0; i < wordlist.length; i++) {
    let word = wordlist[i];
    let nextword = i + 1 < wordlist.length ? wordlist[i + 1] : "";

    let key = word;
    let prefix;

    if (
      word &&
      word !== "واحد" &&
      ["و", "ف", "ل", "ب", "ك"].includes(word[0])
    ) {
      key = word.slice(1);
      prefix = word[0];
      if (["و", "ف", "ك"].includes(prefix)) {
        prefix += "َ";
      } else if (["ل", "ب"].includes(prefix)) {
        prefix += "ِ";
      }
    } else {
      prefix = "";
    }

    if (key in nbconst.VOCALIZED_NUMBER_WORDS) {
      let voc = "";

      if (nbconst.VOCALIZED_NUMBER_WORDS[key]["s"] === "*") {
        voc = prefix + nbconst.VOCALIZED_NUMBER_WORDS[key]["i"];
      } else if (nextword === "عشر" || nextword === "عشرة") {
        voc = prefix + nbconst.VOCALIZED_NUMBER_WORDS[key]["n"];
      } else if (
        key === "عشر" &&
        pre_key in nbconst.NUMBER_TEN_MASCULIN_UNITS
      ) {
        voc = "عَشَرَ";
      } else if (
        key === "عشرة" &&
        pre_key in nbconst.NUMBER_TEN_FEMININ_UNITS
      ) {
        voc = "عَشْرَةَ";
      } else if (tags.includes("مرفوع")) {
        voc =
          prefix +
          (nextword.startsWith("و")
            ? nbconst.VOCALIZED_NUMBER_WORDS[key]["r2"]
            : nbconst.VOCALIZED_NUMBER_WORDS[key]["r"]);
      } else if (tags.includes("مجهول")) {
        voc = prefix + nbconst.VOCALIZED_NUMBER_WORDS[key]["i"];
      } else if (tags.includes("مجرور")) {
        voc =
          prefix +
          (nextword.startsWith("و")
            ? nbconst.VOCALIZED_NUMBER_WORDS[key]["j2"]
            : nbconst.VOCALIZED_NUMBER_WORDS[key]["j"]);
      } else if (tags.includes("منصوب")) {
        voc =
          prefix +
          (nextword.startsWith("و")
            ? nbconst.VOCALIZED_NUMBER_WORDS[key]["n2"]
            : nbconst.VOCALIZED_NUMBER_WORDS[key]["n"]);
      } else {
        voc = prefix + nbconst.VOCALIZED_NUMBER_WORDS[key]["i"];
      }
      newlist.push(voc);
    } else {
      newlist.push(prefix + key);
    }
    pre_key = key;
  }
  return newlist;
}

function isUnit(word) {
  return nbconst.UNIT_WORDS.hasOwnProperty(word);
}

function vocalizeUnit(numeric, unit) {
  const unitNm = araby.stripTashkeel(unit);
  if (!isUnit(unitNm)) {
    return unit;
  }
  let tags = "";
  let vocalizedUnit = unit;

  if (numeric >= 0 && numeric <= 2) {
    return unit;
  } else if (numeric % 100 === 0 || numeric % 1000 === 0) {
    tags = "SingleMajrour";
    vocalizedUnit = nbconst.UNIT_WORDS[unitNm]["a"];
  } else if (numeric % 100 <= 10) {
    tags += "Plural";
    vocalizedUnit = nbconst.UNIT_WORDS[unitNm]["p"];
  } else if (numeric % 100 < 100) {
    tags += "SingleMansoub";
    vocalizedUnit = nbconst.UNIT_WORDS[unitNm]["n"];
  } else {
    tags = "";
    vocalizedUnit = nbconst.UNIT_WORDS[unitNm]["i"];
  }

  if (!vocalizedUnit) {
    return "Error" + tags;
  } else {
    return vocalizedUnit;
  }
}

function getPreviousTag(word) {
  word = araby.stripTashkeel(word);

  if (nmconst.NOUN_NASEB_LIST.includes(word)) {
    return "منصوب";
  } else if (nmconst.JAR_LIST.includes(word)) {
    return "مجرور";
  } else if (nmconst.RAFE3_LIST.includes(word)) {
    return "مرفوع";
  } else {
    return "";
  }
}

function extractNumberPhrases(text) {
  const phrases = [];

  const wordlist = araby.tokenize(text);
  const positions = detectNumberPhrasesPosition(wordlist);

  for (const pos of positions) {
    if (pos.length >= 2) {
      if (pos[0] <= wordlist.length && pos[1] <= wordlist.length) {
        phrases.push(wordlist.slice(pos[0], pos[1] + 1).join(" "));
      }
    }
  }
  return phrases;
}

function extractNumberContext(text) {
  const phrases = [];
  const wordlist = araby.tokenize(text);
  const positions = detectNumberPhrasesPosition(wordlist);

  for (const pos of positions) {
    if (pos.length >= 2) {
      if (pos[0] <= wordlist.length && pos[1] <= wordlist.length) {
        let prev = "";
        let nextword = "";

        if (pos[0] - 1 >= 0) {
          prev = wordlist[pos[0] - 1];
        }

        if (pos[1] + 1 < wordlist.length) {
          nextword = wordlist[pos[1] + 1];
        }

        phrases.push([
          prev,
          wordlist.slice(pos[0], pos[1] + 1).join(" "),
          nextword,
        ]);
      }
    }
  }
  return phrases;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function detectNumberPhrasesPosition(wordlist) {
  const phrases = [];
  let startNumber = -1;
  let endNumber = false;

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];

    let nextword = null;
    if (i + 1 < wordlist.length) {
      nextword = araby.stripTashkeel(wordlist[i + 1]);
    }

    const wordNm = araby.stripTashkeel(word);
    let key = wordNm;

    if (
      wordNm &&
      !startNumber &&
      wordNm !== "واحد" &&
      ["و", "ف", "ل", "ب", "ك"].includes(wordNm[0])
    ) {
      key = wordNm.slice(1);
    } else if (wordNm !== "واحد" && wordNm.startsWith("و")) {
      key = wordNm.slice(1);
    }

    if (nbconst.NUMBER_WORDS.hasOwnProperty(key) || isNumeric(key)) {
      if (
        !["أحد", "إحدى", "اثنا", "اثني", "اثنتي", "اثنتا"].includes(key) ||
        nextword === "عشر" ||
        nextword === "عشرة"
      ) {
        if (startNumber < 0) {
          startNumber = i;
        }
        endNumber = i;
      }
    } else {
      if (startNumber >= 0) {
        phrases.push([startNumber, endNumber]);
      }
      startNumber = -1;
    }
  }

  if (startNumber >= 0) {
    phrases.push([startNumber, endNumber]);
  }

  return phrases;
}

function detectNumbers(wordlist) {
  let starts = false;
  const taglist = [];

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];

    let nextword = null;
    if (i + 1 < wordlist.length) {
      nextword = araby.stripTashkeel(wordlist[i + 1]);
    }

    const wordNm = araby.stripTashkeel(word);
    let key = wordNm;

    if (
      wordNm &&
      !starts &&
      wordNm !== "واحد" &&
      ["و", "ف", "ل", "ب", "ك"].includes(wordNm[0])
    ) {
      key = wordNm.slice(1);
    } else if (wordNm !== "واحد" && wordNm.startsWith("و")) {
      key = wordNm.slice(1);
    }

    if (nbconst.NUMBER_WORDS.hasOwnProperty(key) || isNumeric(key)) {
      if (
        !["أحد", "إحدى", "اثنا", "اثني", "اثنتي", "اثنتا"].includes(key) ||
        nextword === "عشر" ||
        nextword === "عشرة"
      ) {
        if (!starts) {
          taglist.push("DB");
          starts = true;
        } else {
          taglist.push("DI");
        }
      } else {
        starts = false;
        taglist.push("O");
      }
    } else {
      starts = false;
      taglist.push("O");
    }
  }

  return taglist;
}

function detectNumberWords(text) {
  const phrasesContext = extractNumberContext(text);
  for (const phCon of phrasesContext) {
    if (phCon.length >= 3) {
      const previous = phCon[0];
      const phrase = phCon[1];
      const nextword = phCon[2];
      const numberedWords = phrase;
      const numeric = text2number(numberedWords);
      const tags = getPreviousTag(previous);
      const wordlist = araby.stripTashkeel(numberedWords).split(" ");
      const vocalized = vocalizeNumber(wordlist, tags);

      const sim = araby.vocalizedSimilarity(numberedWords, vocalized);
      const vocUnit = vocalizeUnit(numeric, nextword);
      const simUnit = araby.vocalizedSimilarity(vocUnit, nextword);

      if (sim < 0) {
        console.log(
          [
            sim,
            Array.isArray(numberedWords) ? numberedWords.join(" ") : "",
            Array.isArray(vocalized) ? vocalized.join(" ") : "",
          ].join("\t")
        );
        console.log([numeric, previous, phrase, nextword].join(" "));
        console.log([nextword, vocUnit, simUnit].join("\t"));
      }
    }
  }
}

function preTashkeelNumber(wordlist) {
  const taglist = detectNumbers(wordlist);
  let previous = "";
  const vocalizedList = [];
  let chunk = [];
  let previousTag = "";

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];
    const tag = taglist[i];

    if (tag === "DB" || tag === "DI") {
      chunk.push(word);
    } else {
      if (chunk.length > 0) {
        previousTag = getPreviousTag(previous);
        const vocalized = vocalizeNumber(chunk, previousTag);
        vocalizedList.push(...vocalized);
        chunk = [];
      }
      vocalizedList.push(word);
      previous = word;
    }
  }

  if (chunk.length > 0) {
    const vocalized = vocalizeNumber(chunk, previousTag);
    vocalizedList.push(...vocalized);
    chunk = [];
  }

  return vocalizedList;
}

function number2ordinal(anumber, feminin = false) {
  let a = 0;
  if (typeof anumber === "number") {
    anumber = anumber.toString();
  } else if (typeof anumber === "string") {
    try {
      a = parseInt(anumber, 10);
    } catch (error) {
      return "صفر";
    }
  } else {
    return "الصفر";
  }

  if (a === 1) {
    if (feminin) {
      return "الأولى";
    } else {
      return "الأول";
    }
  }

  const arbn = new ArNumbers();
  let arbn_str = arbn.int2str(anumber);

  arbn_str = arbn_str.replace(/و /g, "و");
  const tokens = arbn_str.split(" ");

  const newList = [];
  const ordinalWords = feminin
    ? nbconst.UNITS_ORDINAL_WORDS_FEMININ
    : nbconst.UNITS_ORDINAL_WORDS;

  if (tokens.length) {
    let tok = tokens[0];
    if (ordinalWords.hasOwnProperty(tok)) {
      tok = ordinalWords[tok];
    }

    tok = "ال" + tok;
    newList.push(tok);

    for (let i = 1; i < tokens.length; i++) {
      tok = tokens[i];

      if (tok.startsWith(araby.WAW)) {
        tok = tok.slice(1);
        if (ordinalWords.hasOwnProperty(tok)) {
          tok = ordinalWords[tok];
        }
        tok = "وال" + tok;
      }
      newList.push(tok);
    }
  }

  if (newList.slice(-1)[0] === "الحادي") {
    newList.pop();
    newList.push("الواحد");
  } else if (newList.slice(-1)[0] === "الحادية") {
    newList.pop();
    newList.push("الواحدة");
  }

  const ordinalString = newList.join(" ");
  return ordinalString;
}

{
  /*function toArabic(number) {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return number
    .toString()
    .split("")
    .map((digit) => arabicNumerals[parseInt(digit)])
    .join("");
}

function toRoman(number) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";
  for (const key in romanNumerals) {
    while (number >= romanNumerals[key]) {
      roman += key;
      number -= romanNumerals[key];
    }
  }

  return roman;
}

function toPersian(number) {
  const persianNumerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((digit) => persianNumerals[parseInt(digit)])
    .join("");
}*/
}

module.exports = {
  text2number,
  number2text,
  vocalizeNumber,
  isUnit,
  vocalizeUnit,
  getPreviousTag,
  extractNumberPhrases,
  extractNumberContext,
  detectNumberPhrasesPosition,
  detectNumbers,
  detectNumberWords,
  preTashkeelNumber,
  number2ordinal,
};
