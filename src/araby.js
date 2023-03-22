const AR_CONST = require("./consts/arabic_const.js");

const unichr = (code) => {
  return String.fromCharCode(code);
};

{
  /*const DIACRITICS = Array.from({ length: 0x06ff - 0x0600 }, (_, index) => {
  return String.fromCodePoint(0x0600 + index);
}).filter((char) => {
  return UnicodeData[char.codePointAt(0)] !== undefined; // Check if the code point exists in the Mn category
});
*/
}

const isSukun = (arChar) => arChar === AR_CONST.SUKUN;
const isShadda = (arChar) => arChar === AR_CONST.SHADDA;
const isTatweel = (arChar) => arChar === AR_CONST.TATWEEL;
const isTanwin = (arChar) => AR_CONST.TANWIN.includes(arChar);
const isTashkeel = (arChar) => AR_CONST.TASHKEEL.includes(arChar);
const isHaraka = (arChar) => AR_CONST.HARAKAT.includes(arChar);
const isShortHaraka = (arChar) => AR_CONST.SHORTHARAKAT.includes(arChar);
const isLigature = (arChar) => AR_CONST.LIGUATURES.includes(arChar);
const isHamza = (arChar) => AR_CONST.HAMZAT.includes(arChar);
const isAlef = (arChar) => AR_CONST.ALEFAT.includes(arChar);
const isYehLike = (arChar) => AR_CONST.YEHLIKE.includes(arChar);
const isWawLike = (arChar) => AR_CONST.WAWLIKE.includes(arChar);
const isTeh = (arChar) => AR_CONST.TEHLIKE.includes(arChar);
const isSmall = (arChar) => AR_CONST.SMALL.includes(arChar);
const isWeak = (arChar) => AR_CONST.WEAK.includes(arChar);
const isMoon = (arChar) => AR_CONST.MOON.includes(arChar);
const isSun = (arChar) => AR_CONST.SUN.includes(arChar);

const order = (archar) =>
  AR_CONST.ALPHABETIC_ORDER.hasOwnProperty(archar)
    ? AR_CONST.ALPHABETIC_ORDER[archar]
    : 0;

const name = (archar, default_name = "") =>
  AR_CONST.NAMES.hasOwnProperty(archar) ? AR_CONST.NAMES[archar] : default_name;

const arabicRange = () =>
  Array.from({ length: 0x0652 - 0x0600 + 1 }, (_, i) =>
    String.fromCharCode(0x0600 + i)
  );

const hasShadda = (word) => word.includes(AR_CONST.SHADDA);
const isVocalized = (word) => {
  return isArabicRange(word)
    ? word.split("").some((char) => isTashkeel(char))
    : false;
};
const isVocalizedText = (text) => AR_CONST.HARAKAT_PATTERN.test(text);
const isArabicString = (text) => !AR_CONST.ARABIC_STRING.test(text);
const isArabicRange = (text) => !AR_CONST.ARABIC_RANGE.test(text);
function isArabicWord(word) {
  const hasInvalidChars =
    /([^\u0600-\u0652\u0622\u0623\u0625\u0627\u0671\u0670\u0649\u064A])/g.test(
      word
    );
  const startsWithHarakaOrHamza =
    /^[\u0624\u0626]|\u0649$|[\u0651\u0652]{2}/.test(word);
  const hasInvalidCombination =
    /^.*[\u0629][^\u064E\u064F\u0650].*$|^.*[\u064E\u064F\u0650][^\u0629\u064A].*$/g.test(
      word
    );
  if (
    word.length === 0 ||
    hasInvalidChars ||
    startsWithHarakaOrHamza ||
    hasInvalidCombination
  ) {
    return false;
  }

  return true;
}

function getCharAt(word, index) {
  const position = index < 0 ? word.length + index : index;
  return word.charAt(position);
}

const firstChar = (word) => getCharAt(word, 0);
const secondChar = (word) => getCharAt(word, 1);
const lastChar = (word) => getCharAt(word, -1);
const secondLastChar = (word) => getCharAt(word, -2);

function stripCharacters(text, characters) {
  if (!text) {
    return text;
  }

  for (const char of characters) {
    text = text.replace(new RegExp(char, "g"), "");
  }

  return text;
}

function stripHarakat(text) {
  return isVocalized(text) ? stripCharacters(text, AR_CONST.HARAKAT) : text;
}

function stripLastHaraka(text) {
  return isVocalized(text)
    ? text.replace(AR_CONST.LASTHARAKA_PATTERN, "")
    : text;
}

function stripTashkeel(text) {
  return isVocalized(text) ? stripCharacters(text, AR_CONST.TASHKEEL) : text;
}

function stripSmall(text) {
  return stripCharacters(text, AR_CONST.SMALL);
}

function stripTatweel(text) {
  return stripCharacters(text, [AR_CONST.TATWEEL]);
}

function stripShadda(text) {
  return stripCharacters(text, [AR_CONST.SHADDA]);
}

{
  /*
function strip_diacritics(text) {
  if (!text) {
    return text;
  }
  for (let i = 0; i < DIACRITICS.length; i++) {
    const char = DIACRITICS[i];
    text = text.replace(char, "");
  }
  return text;
}*/
}

const normalizeLigature = (text) => {
  return text
    ? text.replace(
        AR_CONST.LIGUATURES_PATTERN,
        `${AR_CONST.LAM}${AR_CONST.ALEF}`
      )
    : text;
};

const normalizeHamza = (word, method = "uniform") => {
  if (method === "tasheel" || method === "تسهيل") {
    const replacements = [
      [AR_CONST.ALEF_MADDA, AR_CONST.ALEF],
      [AR_CONST.ALEF_HAMZA_ABOVE, AR_CONST.ALEF],
      [AR_CONST.ALEF_HAMZA_BELOW, AR_CONST.ALEF],
      [AR_CONST.HAMZA_ABOVE, AR_CONST.ALEF],
      [AR_CONST.HAMZA_BELOW, AR_CONST.ALEF],
      [AR_CONST.WAW_HAMZA, AR_CONST.WAW],
      [AR_CONST.YEH_HAMZA, AR_CONST.YEH],
    ];
    for (const [from, to] of replacements) {
      word = word.replace(from, to);
    }
  } else {
    if (word.startsWith(AR_CONST.ALEF_MADDA)) {
      const prefix =
        word.length >= 3 &&
        !AR_CONST.HARAKAT.includes(word.charAt(1)) &&
        (word.charAt(2) === AR_CONST.SHADDA || word.length === 3)
          ? AR_CONST.HAMZA + AR_CONST.ALEF
          : AR_CONST.HAMZA + AR_CONST.HAMZA;
      word = prefix + word.substring(1);
    }
    word = word.replace(AR_CONST.ALEF_MADDA, AR_CONST.HAMZA + AR_CONST.HAMZA);
    word = word.replace(AR_CONST.HAMZAT_PATTERN, AR_CONST.HAMZA);
  }
  return word;
};

const normalizeTeh = (text) => {
  return text.replace(RegExp(AR_CONST.TEH_MARBUTA, "g"), AR_CONST.HEH);
};

const normalizeAlef = (text) => {
  text = text
    .replace(AR_CONST.SMALL_ALEF + AR_CONST.ALEF_MAKSURA, AR_CONST.ALEF_MAKSURA)
    .replace(
      AR_CONST.ALEF_MAKSURA + AR_CONST.SMALL_ALEF,
      AR_CONST.ALEF_MAKSURA
    );
  return text.replace(AR_CONST.ALEFAT_PATTERN, AR_CONST.ALEF);
};

function separate(word, extractShadda = false) {
  const reversedChars = [...word].reverse();
  const letters = [];
  const marks = [];

  let currentChar = reversedChars.pop();
  while (currentChar && AR_CONST.HARAKAT.includes(currentChar)) {
    currentChar = reversedChars.pop();
  }

  while (currentChar !== undefined) {
    if (AR_CONST.HARAKAT.includes(currentChar)) {
      marks.push(currentChar);
    } else if (currentChar === AR_CONST.SHADDA) {
      marks.push(AR_CONST.SUKUN, AR_CONST.NOT_DEF_HARAKA);
      letters.push(AR_CONST.SHADDA);
    } else {
      marks.push(AR_CONST.NOT_DEF_HARAKA);
      letters.push(currentChar);
    }
    currentChar = reversedChars.pop();
  }

  if (extractShadda) {
    const wordLetters = letters.join("");
    let shaddaPlaces = wordLetters.replace(
      new RegExp(`[^${AR_CONST.SHADDA}]`, "g"),
      AR_CONST.TATWEEL
    );
    shaddaPlaces = shaddaPlaces.replace(
      new RegExp(`${AR_CONST.TATWEEL}${AR_CONST.SHADDA}`, "g"),
      AR_CONST.SHADDA
    );
    const strippedWordLetters = stripShadda(wordLetters);
    return [strippedWordLetters, marks.join(""), shaddaPlaces];
  } else {
    return [letters.join(""), marks.join("")];
  }
}

function joint(letters, marks) {
  if (letters.length !== marks.length) {
    return "";
  }

  const reversedLetters = [...letters].reverse();
  const reversedMarks = [...marks].reverse();
  const wordStack = [];

  let currentLetter = reversedLetters.pop();
  let currentMark = reversedMarks.pop();

  while (currentLetter !== undefined && currentMark !== undefined) {
    if (currentLetter === AR_CONST.SHADDA) {
      const lastChar = wordStack.pop();
      if (!AR_CONST.HARAKAT.includes(lastChar)) {
        wordStack.push(lastChar);
      }
      wordStack.push(currentLetter);
      if (currentMark !== AR_CONST.NOT_DEF_HARAKA) {
        wordStack.push(currentMark);
      }
    } else {
      wordStack.push(currentLetter);
      if (currentMark !== AR_CONST.NOT_DEF_HARAKA) {
        wordStack.push(currentMark);
      }
    }
    currentLetter = reversedLetters.pop();
    currentMark = reversedMarks.pop();
  }

  if (reversedLetters.length > 0 || reversedMarks.length > 0) {
    return false;
  } else {
    return wordStack.join("");
  }
}

function vocalizedlike(word1, word2) {
  return vocalizedSimilarity(word1, word2) >= 0;
}

function waznlike(word1, wazn, extractRoot = false) {
  const reversedWord1 = Array.from(word1).reverse();
  const reversedWazn = Array.from(wazn).reverse();
  const root = [];

  let currentWordChar = reversedWord1.pop();
  let currentWaznChar = reversedWazn.pop();

  while (currentWordChar !== undefined && currentWaznChar !== undefined) {
    if (
      currentWordChar === currentWaznChar &&
      ![AR_CONST.FEH, AR_CONST.AIN, AR_CONST.LAM].includes(currentWaznChar)
    ) {
      currentWordChar = reversedWord1.pop();
      currentWaznChar = reversedWazn.pop();
    } else if (
      !AR_CONST.HARAKAT.includes(currentWordChar) &&
      [AR_CONST.FEH, AR_CONST.AIN, AR_CONST.LAM].includes(currentWaznChar)
    ) {
      root.push(currentWordChar);
      currentWordChar = reversedWord1.pop();
      currentWaznChar = reversedWazn.pop();
    } else if (
      AR_CONST.HARAKAT.includes(currentWordChar) &&
      !AR_CONST.HARAKAT.includes(currentWaznChar)
    ) {
      currentWordChar = reversedWord1.pop();
    } else if (
      !AR_CONST.HARAKAT.includes(currentWordChar) &&
      AR_CONST.HARAKAT.includes(currentWaznChar)
    ) {
      currentWaznChar = reversedWazn.pop();
    } else {
      break;
    }
  }
  root.reverse();
  if (reversedWord1.length > 0 || reversedWazn.length > 0) {
    return false;
  }
  if (currentWordChar !== undefined || currentWaznChar !== undefined) {
    return false;
  }
  return extractRoot ? root.reverse().join("") : true;
}

function shaddalike(partial, fully) {
  if (!hasShadda(partial)) {
    return true;
  }

  if (!hasShadda(fully) && hasShadda(partial)) {
    return false;
  }

  partial = stripHarakat(partial);
  fully = stripHarakat(fully);

  const partialStack = [...partial].reverse();
  const fullyStack = [...fully].reverse();

  let currentPartialChar = partialStack.pop();
  let currentFullyChar = fullyStack.pop();

  while (currentPartialChar !== undefined && currentFullyChar !== undefined) {
    if (currentPartialChar === currentFullyChar) {
      currentPartialChar = partialStack.pop();
      currentFullyChar = fullyStack.pop();
    } else if (
      currentPartialChar === AR_CONST.SHADDA &&
      currentFullyChar !== AR_CONST.SHADDA
    ) {
      break;
    } else if (
      currentPartialChar !== AR_CONST.SHADDA &&
      currentFullyChar === AR_CONST.SHADDA
    ) {
      currentFullyChar = fullyStack.pop();
    } else {
      break;
    }
  }

  return partialStack.length === 0 && fullyStack.length === 0;
}

function reduceTashkeel(text) {
  const reductionPatterns = [
    `(?<!(${AR_CONST.WAW}|${AR_CONST.YEH}))(${AR_CONST.SUKUN}|${AR_CONST.FATHA})`,
    `${AR_CONST.DAMMA}(?=${AR_CONST.WAW})`,
    `${AR_CONST.KASRA}(?=${AR_CONST.YEH})`,
    `${AR_CONST.FATHA}(?=${AR_CONST.ALEF})`,
    `(?<=\\s(${AR_CONST.WAW}|${AR_CONST.YEH}))${AR_CONST.FATHA}`,
    `(?<=${AR_CONST.ALEF_HAMZA_BELOW})${AR_CONST.KASRA}`,
  ];

  return reductionPatterns.reduce((reducedText, pattern) => {
    const regex = new RegExp(pattern, "g");
    return reducedText.replace(regex, "");
  }, text);
}
function vocalizedSimilarity(word1, word2) {
  const stack1 = Array.from(word1);
  const stack2 = Array.from(word2);
  let errCount = 0;
  const vowels = AR_CONST.HARAKAT;

  const skipVowels = (stack) => {
    while (vowels.includes(stack[stack.length - 1])) {
      stack.pop();
    }
  };

  while (stack1.length > 0 && stack2.length > 0) {
    skipVowels(stack1);
    skipVowels(stack2);

    const last1 = stack1.pop();
    const last2 = stack2.pop();

    if (
      last1 !== last2 &&
      last1 !== AR_CONST.SHADDA &&
      last2 !== AR_CONST.SHADDA
    ) {
      errCount += 1;
    }
  }

  return errCount > 0 ? -errCount : true;
}
function sentenceTokenize(text) {
  const regex = /([.,:;،؟?\n])+([\n\t\r ])+/g;
  const sentences = text.replace(regex, "$1<SPLIT>").split("<SPLIT>");
  return sentences;
}

function tokenize(text = "", conditions = [], morphs = []) {
  if (text) {
    if (!Array.isArray(conditions)) {
      conditions = [conditions];
    }
    if (!Array.isArray(morphs)) {
      morphs = [morphs];
    }

    let tokens = text.match(AR_CONST.TOKEN_PATTERN).filter(Boolean);
    tokens = tokens
      .map((tok) => tok.replace(AR_CONST.TOKEN_REPLACE, ""))
      .filter((tok) => tok);
    if (conditions.length) {
      tokens = tokens.filter((tok) => conditions.every((cond) => cond(tok)));
    }

    if (morphs.length) {
      tokens = tokens.map((tok) => {
        for (let m of morphs) {
          tok = m(tok);
        }
        return tok;
      });
    }
    return tokens.filter(Boolean);
  } else {
    return [];
  }
}

function tokenizeWithLocation(text) {
  const tokens = [];
  const tokenPattern = new RegExp(
    `(${AR_CONST.TOKEN_PATTERN_SPLIT.source})`,
    "gu"
  );
  const matches = text.matchAll(tokenPattern);

  for (const match of matches) {
    if (match[0].trim() !== "") {
      tokens.push({
        token: match[0],
        start: match.index,
        end: match.index + match[0].length,
      });
    }
  }

  return tokens;
}
console.log(separate("اَلْعَرَبَيَةُ"));
function fixSpaces(text) {
  text = text.replace(
    AR_CONST.FIX_SPACES_PAT,
    (match, p1) => p1.replace(/\s+/g, "") + " "
  );
  return text.trim();
}

function autoCorrect(text) {
  text = text.replace(
    new RegExp(`(?<=\\s|\\d)([${AR_CONST.TASHKEEL_STRING}])+`, "gu"),
    ""
  );
  text = text.replace(new RegExp(`^([${AR_CONST.TASHKEEL_STRING}])+`, "u"), "");
  text = text.replace(
    new RegExp(`${AR_CONST.ALEF}${AR_CONST.FATHATAN}`, "gu"),
    `${AR_CONST.FATHATAN}${AR_CONST.ALEF}`
  );
  text = text.replace(
    new RegExp(
      `(?<=${AR_CONST.ALEF}|${AR_CONST.ALEF_MAKSURA}|${AR_CONST.TEH_MARBUTA})([${AR_CONST.SUKUN}])+`,
      "gu"
    ),
    ""
  );
  text = text.replace(
    new RegExp(`([${AR_CONST.HARAKAT_STRING}])+(?=[${AR_CONST.SHADDA}])`, "gu"),
    ""
  );
  text = text.replace(
    new RegExp(
      `(?<=[${AR_CONST.HARAKAT_STRING}])([${AR_CONST.HARAKAT_STRING}])+`,
      "gu"
    ),
    ""
  );

  return text;
}

function spellit(word, lang = "ar") {
  const names = [];
  for (let c of word) {
    names.push(name(c, lang));
  }
  return names.join(", ");
}

function wordFrequency(inputString, limit = 100) {
  const wordFrequency = new Map();
  const words = inputString.split(/\s+/);
  for (const word of words) {
    if (word.trim() !== "") {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    }
  }
  const sortedWordFrequency = new Map(
    [...wordFrequency].sort((a, b) => b[1] - a[1]).slice(0, limit)
  );

  return sortedWordFrequency;
}

function charFrequency(inputString) {
  const charFrequency = new Map();

  for (const char of inputString) {
    if (char.trim() !== "") {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  }

  const sortedCharFrequency = new Map(
    [...charFrequency].sort((a, b) => b[1] - a[1])
  );

  return sortedCharFrequency;
}
module.exports = {
  unichr,
  isSukun,
  isShadda,
  isTatweel,
  isTanwin,
  isTashkeel,
  isHaraka,
  isShortHaraka,
  isLigature,
  isHamza,
  isAlef,
  isYehLike,
  isWawLike,
  isTeh,
  isSmall,
  isWeak,
  isMoon,
  isSun,
  order,
  name,
  arabicRange,
  hasShadda,
  isVocalized,
  isVocalizedText,
  isArabicString,
  isArabicRange,
  isArabicWord,
  getCharAt,
  firstChar,
  secondChar,
  lastChar,
  secondLastChar,
  stripCharacters,
  stripHarakat,
  stripLastHaraka,
  stripTashkeel,
  stripSmall,
  stripTatweel,
  stripShadda,
  normalizeLigature,
  normalizeHamza,
  normalizeTeh,
  normalizeAlef,
  separate,
  joint,
  vocalizedlike,
  waznlike,
  shaddalike,
  reduceTashkeel,
  vocalizedSimilarity,
  sentenceTokenize,
  tokenize,
  tokenizeWithLocation,
  fixSpaces,
  autoCorrect,
  spellit,
  wordFrequency,
  charFrequency,
};
