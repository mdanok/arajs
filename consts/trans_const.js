const ar = require("./arabic_const.js");

const transliterationTable = {
  A: ar.ALEF,
  b: ar.BEH,
  t: ar.TEH,
  p: ar.TEH_MARBUTA,
  v: ar.THEH,
  j: ar.JEEM,
  H: ar.HAH,
  x: ar.KHAH,
  d: ar.DAL,
  "*": ar.THAL,
  r: ar.REH,
  z: ar.ZAIN,
  s: ar.SEEN,
  $: ar.SHEEN,
  S: ar.SAD,
  D: ar.DAD,
  T: ar.TAH,
  Z: ar.ZAH,
  E: ar.AIN,
  g: ar.GHAIN,
  f: ar.FEH,
  q: ar.QAF,
  k: ar.KAF,
  l: ar.LAM,
  m: ar.MEEM,
  n: ar.NOON,
  h: ar.HEH,
  w: ar.WAW,
  y: ar.YEH,
  Y: ar.ALEF_MAKSURA,
  "'": ar.HAMZA,
  "&": ar.WAW_HAMZA,
  ">": ar.ALEF_HAMZA_ABOVE,
  "<": ar.ALEF_HAMZA_BELOW,
  "|": ar.ALEF_MADDA,
  "}": ar.YEH_HAMZA,
  _: ar.TATWEEL,
  a: ar.FATHA,
  F: ar.FATHATAN,
  i: ar.KASRA,
  K: ar.KASRATAN,
  u: ar.DAMMA,
  N: ar.DAMMATAN,
  "~": ar.SHADDA,
  o: ar.SUKUN,
  "`": ar.MINI_ALEF,

  "{": ar.ALEF,
};
const phonemeTable = {
  A: "a:",
  b: "b",
  t: "t",
  p: "h",
  v: "T",
  j: "g",
  H: "x",
  x: "X",
  d: "d",
  "*": "D",
  r: "r",
  z: "z",
  s: "s",
  $: "S",
  S: "s'",
  D: "d'",
  T: "t'",
  Z: "D'",
  E: "?'",
  g: "G",
  f: "f",
  q: "q",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  h: "h",
  w: "w",
  y: "j",
  Y: ":",
  "'": "?",
  "&": "?",
  ">": "?",
  "<": "?",
  "|": "?a:",
  "}": "?",
  _: "",
  a: "a",
  F: "an",
  i: "i",
  K: "in",
  u: "u",
  N: "un",
  "~": ar.SHADDA,
  o: "",
  "`": "a:",
  "{": "",
};

const arabicToEnglishTable = {
  ء: "2",
  آ: "A",
  أ: "A",
  ؤ: "2",
  إ: "2",
  ئ: "2",
  ا: "A",
  ب: "b",
  ة: "t",
  ت: "t",
  ث: "th",
  ج: "j",
  ح: "H",
  خ: "kh",
  د: "d",
  ذ: "dh",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "S",
  ض: "D",
  ط: "T",
  ظ: "zh",
  ع: "E",
  غ: "g",
  ـ: "",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "w",
  ى: "a",
  ي: "y",
  "ً": "an",
  "ٌ": "un",
  "ٍ": "in",
  "َ": "a",
  "ُ": "u",
  "ِ": "i",
  "ّ": "",
  "ْ": "",
  "ٰ": "a",
};

// Reverse the keys and values of the transliterationTable
const arabicToTransliterationTable = {};
for (const [k, v] of Object.entries(transliterationTable)) {
  arabicToTransliterationTable[v] = k;
}
arabicToTransliterationTable[ar.ALEF] = "A";

// Create a translation table mapping characters from the 'from' string to the corresponding characters in the 'to' string
const makeTrans = (from, to) => {
  const trans = {};
  for (let i = 0; i < from.length; i++) {
    trans[from[i]] = to[i];
  }
  return trans;
};

const easternToWesternNumbersTable = makeTrans(
  ar.NUMBERS_EAST,
  ar.NUMBERS_WEST
);
const easternToPersianNumbersTable = makeTrans(
  ar.NUMBERS_EAST,
  ar.NUMBERS_PERS
);
const westernToEasternNumbersTable = makeTrans(
  ar.NUMBERS_WEST,
  ar.NUMBERS_EAST
);
const westernToPersianNumbersTable = makeTrans(
  ar.NUMBERS_WEST,
  ar.NUMBERS_PERS
);
const persianToEasternNumbersTable = makeTrans(
  ar.NUMBERS_PERS,
  ar.NUMBERS_EAST
);
const persianToWesternNumbersTable = makeTrans(
  ar.NUMBERS_PERS,
  ar.NUMBERS_WEST
);

module.exports = {
  transliterationTable,
  phonemeTable,
  arabicToEnglishTable,
  arabicToTransliterationTable,
  easternToWesternNumbersTable,
  easternToPersianNumbersTable,
  westernToEasternNumbersTable,
  westernToPersianNumbersTable,
  persianToEasternNumbersTable,
  persianToWesternNumbersTable,
};
