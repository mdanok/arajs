import * as ar from "./consts/arabic_const.mjs";
import * as araby from "./araby.mjs";
import { toEnName } from "./toEn/app.mjs";
export const t2a_table = {
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

export const t2sampa_table = {
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

export const a2en_table = {
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

export const a2t_table = {};
for (const [k, v] of Object.entries(t2a_table)) {
  a2t_table[v] = k;
}

a2t_table[ar.ALEF] = "A";

const makeTrans = (from, to) => {
  const trans = {};
  for (let i = 0; i < from.length; i++) {
    trans[from[i]] = to[i];
  }
  return trans;
};

const T2D_TRANS = makeTrans(
  ar.NOT_DEF_HARAKA + ar.TASHKEEL_STRING,
  "012345678"
);
const T2A_TRANS = makeTrans(
  ar.NOT_DEF_HARAKA + ar.TASHKEEL_STRING,
  "0AUIauio3"
);
const D2T_TRANS = makeTrans(
  "012345678",
  ar.NOT_DEF_HARAKA + ar.TASHKEEL_STRING
);
const A2T_TRANS = makeTrans(
  "0AUIauio3",
  ar.NOT_DEF_HARAKA + ar.TASHKEEL_STRING
);

const E2W_TRANS = makeTrans(ar.NUMBERS_EAST, ar.NUMBERS_WEST);
const E2P_TRANS = makeTrans(ar.NUMBERS_EAST, ar.NUMBERS_PERS);
const W2E_TRANS = makeTrans(ar.NUMBERS_WEST, ar.NUMBERS_EAST);
const W2P_TRANS = makeTrans(ar.NUMBERS_WEST, ar.NUMBERS_PERS);
const P2E_TRANS = makeTrans(ar.NUMBERS_PERS, ar.NUMBERS_EAST);
const P2W_TRANS = makeTrans(ar.NUMBERS_PERS, ar.NUMBERS_WEST);

function translate(word, table) {
  return word
    .split("")
    .map((char) => table[char] || char)
    .join("");
}

export function tim2utf8(s) {
  let mystr = "";
  for (let mychar of s) {
    mystr += t2a_table[mychar] || mychar;
  }
  return mystr;
}

export function utf82tim(s) {
  let mystr = "";
  for (let mychar of s) {
    mystr += a2t_table[mychar] || mychar;
  }
  return mystr;
}

export function convertShadda(word, shadda = "~") {
  if (word[0] === shadda) {
    word = word.substring(1);
  }
  while (shadda in word) {
    let i = word.indexOf(shadda);
    if (i - 1 >= 0) {
      word = word.replace(shadda, word[i - 1], 1);
    }
  }
  return word;
}

export function tim2sampa(s) {
  let mystr = "";

  s = convertShadda(s);
  for (let mychar of s) {
    mystr += t2sampa_table[mychar] || mychar;
  }

  mystr = mystr.replace(/(?<=u)w/g, ":");
  mystr = mystr.replace(/(?<=i)j/g, ":");
  return mystr;
}

export function utf82latin(s) {
  let mystr = "";
  for (let mychar of s) {
    mystr += a2en_table[mychar] || mychar;
  }
  return mystr;
}
export function convert(text, codeFrom, codeTo) {
  const code1 = codeFrom.toLowerCase();
  const code2 = codeTo.toLowerCase();

  if (["utf", "utf8", "arabic"].includes(code1)) {
    if (["tim", "buckwalter"].includes(code2)) {
      return utf82tim(text);
    } else if (code2 === "sampa") {
      return tim2sampa(utf82tim(text));
    } else if (["latin", "ascii"].includes(code2)) {
      return utf82latin(text);
    } else {
      return text;
    }
  }

  if (["tim", "buckwalter"].includes(code1)) {
    if (["utf", "utf8", "arabic"].includes(code2)) {
      return tim2utf8(text);
    } else if (code2 === "sampa") {
      return tim2sampa(text);
    } else {
      return text;
    }
  }
}

export function segment_language(text) {
  if (!text) {
    return text;
  }

  const resultlist = [];
  const arabicRegex = /[\u0600-\u06FF]/;
  const whitespaceAndPunctRegex = /[\s\d\?, :\!\(\)]/;

  let arabic = arabicRegex.test(text[0]);
  let actualText = "";

  for (const k of text) {
    if (arabicRegex.test(k)) {
      if (arabic) {
        actualText += k;
      } else {
        resultlist.push(["latin", actualText]);
        arabic = true;
        actualText = k;
      }
    } else if (whitespaceAndPunctRegex.test(k)) {
      actualText += k;
    } else {
      if (arabic) {
        let i = actualText.length - 1;
        let tempText = "";

        while (!arabicRegex.test(actualText[i])) {
          i -= 1;
        }

        tempText = actualText.slice(i + 1);
        actualText = actualText.slice(0, i + 1);
        resultlist.push(["arabic", actualText]);
        arabic = false;
        actualText = tempText + k;
      } else {
        actualText += k;
      }
    }
  }

  if (arabic) {
    resultlist.push(["arabic", actualText]);
  } else {
    resultlist.push(["latin", actualText]);
  }

  return resultlist;
}

export function delimite_language(
  text,
  language = "arabic",
  start = "<arabic>",
  end = "</arabic>"
) {
  const new_chunks_list = [];
  const chunks = segment_language(text);
  for (let [lang, chunk] of chunks) {
    if (lang === language) {
      new_chunks_list.push(`${start}${chunk}${end}`);
    } else {
      new_chunks_list.push(chunk);
    }
  }
  return new_chunks_list.join(" ");
}

export function normalize_digits(text, source = "all", out = "west") {
  source = source.toLowerCase();
  out = out.toLowerCase();
  assert(
    source in ["all", "west", "east", "persian"],
    `Invalid option for 'source': ${source}`
  );
  assert(
    out in ["west", "east", "persian"],
    `Invalid option for 'out': ${out}`
  );
  if (source === out) {
    return text;
  }
  const source_to_out_tbl = {
    west: { east: W2E_TRANS, persian: W2P_TRANS },
    east: { west: E2W_TRANS, persian: E2P_TRANS },
    persian: { west: P2W_TRANS, east: P2E_TRANS },
  };
  if (source === "all") {
    delete source_to_out_tbl[out];
    for (let tbl of Object.values(source_to_out_tbl)) {
      text = translate(text, tbl[out]);
    }
    return text;
  }
  return translate(text, source_to_out_tbl[source][out]);
}
export function encode_tashkeel(word, method = "ascii") {
  const [letters, marks] = araby.separate(word);

  let transed;

  if (method === "decimal") {
    transed = translate(marks, T2D_TRANS);
  } else if (method === "ascii") {
    transed = translate(marks, T2A_TRANS);
  } else {
    transed = translate(marks, T2A_TRANS);
  }

  if (method === "decimal") {
    try {
      transed = parseInt(transed, 10);
    } catch {
      return { word, marks: "" };
    }
  }

  return { letters, marks: transed };
}

export function decode_tashkeel(word, marks, method = "ascii") {
  if (typeof marks !== "string") {
    marks = marks.toString();
  }
  marks = marks.padStart(word.length, "0");
  let transed;
  if (method === "decimal") {
    transed = translate(marks, D2T_TRANS);
  } else {
    transed = translate(marks, A2T_TRANS);
  }
  const word2 = araby.joint(word, transed);
  return word2;
}

export { toEnName };
