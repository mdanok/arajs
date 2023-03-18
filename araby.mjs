import * as arconst from "./consts/arabic_const.mjs";

export const unichr = (code) => {
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
export function is_sukun(archar) {
  return archar === arconst.SUKUN;
}

export function is_shadda(archar) {
  return archar === arconst.SHADDA;
}

export function is_tatweel(archar) {
  return archar === arconst.TATWEEL;
}

export function is_tanwin(archar) {
  return arconst.TANWIN.includes(archar);
}

export function is_tashkeel(archar) {
  return arconst.TASHKEEL.includes(archar);
}

export function is_haraka(archar) {
  return arconst.HARAKAT.includes(archar);
}

export function is_shortharaka(archar) {
  return arconst.SHORTHARAKAT.includes(archar);
}

export function is_ligature(archar) {
  return arconst.LIGUATURES.includes(archar);
}

export function is_hamza(archar) {
  return arconst.HAMZAT.includes(archar);
}

export function is_alef(archar) {
  return arconst.ALEFAT.includes(archar);
}

export function is_yehlike(archar) {
  return arconst.YEHLIKE.includes(archar);
}

export function is_wawlike(archar) {
  return arconst.WAWLIKE.includes(archar);
}

export function is_teh(archar) {
  return arconst.TEHLIKE.includes(archar);
}

export function is_small(archar) {
  return arconst.SMALL.includes(archar);
}

export function is_weak(archar) {
  return arconst.WEAK.includes(archar);
}

export function is_moon(archar) {
  return arconst.MOON.includes(archar);
}

export function is_sun(archar) {
  return arconst.SUN.includes(archar);
}

export function order(archar) {
  return arconst.ALPHABETIC_ORDER.hasOwnProperty(archar)
    ? arconst.ALPHABETIC_ORDER[archar]
    : 0;
}

export function name(archar, default_name = "") {
  return arconst.NAMES.hasOwnProperty(archar)
    ? arconst.NAMES[archar]
    : default_name;
}
export function arabicrange() {
  const mylist = [];
  for (let i = 0x0600; i <= 0x0652; i++) {
    try {
      mylist.push(String.fromCharCode(i));
    } catch (e) {
      // pass
    }
  }
  return mylist;
}

export function has_shadda(word) {
  if (shaddaRegex.test(word)) {
    return true;
  }
  return false;
}

export function is_vocalized(word) {
  for (const char of word) {
    if (is_tashkeel(char)) {
      return true;
    }
  }
  return false;
}

export function is_vocalizedtext(text) {
  return arconst.HARAKAT_PATTERN.test(text);
}

export function is_arabicstring(text) {
  return !arconst.ARABIC_STRING.test(text);
}

export function is_arabicrange(text) {
  if (arconst.ARABIC_RANGE.test(text)) {
    return false;
  }
  return true;
}

export function is_arabicword(word) {
  if (word.length === 0) {
    return false;
  } else if (
    word.match(
      /([^\u0600-\u0652\u0622\u0623\u0625\u0627\u0671\u0670\u0649\u064A])/g
    )
  ) {
    return false;
  } else if (
    is_haraka(word.charAt(0)) ||
    word.charAt(0) === "\u0624" ||
    word.charAt(0) === "\u0626"
  ) {
    return false;
  } else if (word.match(/^.*\u0649$/)) {
    return false;
  } else if (
    word.match(/^.*[\u0629][^\u064E\u064F\u0650].*$/g) ||
    word.match(/^.*[\u064E\u064F\u0650][^\u0629\u064A].*$/g) ||
    word.match(/[\u0651\u0652]{2}/g)
  ) {
    return false;
  } else {
    return true;
  }
}

export function first_char(word) {
  return word.charAt(0);
}

export function second_char(word) {
  return word.charAt(1);
}

export function last_char(word) {
  return word.charAt(word.length - 1);
}

export function secondlast_char(word) {
  return word.charAt(word.length - 2);
}
export function strip_harakat(text) {
  if (!text) {
    return text;
  } else if (is_vocalized(text)) {
    for (const char of arconst.HARAKAT) {
      text = text.replace(new RegExp(char, "g"), "");
    }
  }
  return text;
}

export function strip_lastharaka(text) {
  if (text) {
    if (is_vocalized(text)) {
      return text.replace(arconst.LASTHARAKA_PATTERN, "");
    }
  }
  return text;
}

export function strip_tashkeel(text) {
  if (!text) {
    return text;
  } else if (is_vocalized(text)) {
    for (let i = 0; i < arconst.TASHKEEL.length; i++) {
      const char = arconst.TASHKEEL[i];
      const TASHKEELRegex = new RegExp(char, "g");
      text = text.replace(TASHKEELRegex, "");
    }
  }
  return text;
}

export function strip_small(text) {
  if (!text) {
    return text;
  }
  for (let i = 0; i < arconst.SMALL.length; i++) {
    const char = arconst.SMALL[i];
    text = text.replace(char, "");
  }
  return text;
}

export function strip_tatweel(text) {
  const TATWEELRegex = new RegExp(arconst.TATWEEL, "g");
  return text.replace(TATWEELRegex, "");
}

export function strip_shadda(text) {
  const SHADDARegex = new RegExp(arconst.SHADDA, "g");
  return text.replace(SHADDARegex, "");
}
{
  /*
export function strip_diacritics(text) {
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

export function normalize_ligature(text) {
  if (text) {
    return text.replace(arconst.LIGUATURES_PATTERN, LAM + ALEF);
  }
  return text;
}
export function normalize_hamza(word, method = "uniform") {
  if (method === "tasheel" || method === "تسهيل") {
    word = word.replace(arconst.ALEF_MADDA, arconst.ALEF);
    word = word.replace(arconst.ALEF_HAMZA_ABOVE, arconst.ALEF);
    word = word.replace(arconst.ALEF_HAMZA_BELOW, arconst.ALEF);
    word = word.replace(arconst.HAMZA_ABOVE, arconst.ALEF);
    word = word.replace(arconst.HAMZA_BELOW, arconst.ALEF);
    word = word.replace(arconst.WAW_HAMZA, arconst.WAW);
    word = word.replace(arconst.YEH_HAMZA, arconst.YEH);
  } else {
    if (word.startsWith(arconst.ALEF_MADDA)) {
      if (
        word.length >= 3 &&
        !arconst.HARAKAT.includes(word.charAt(1)) &&
        (word.charAt(2) === arconst.SHADDA || word.length === 3)
      ) {
        word = arconst.HAMZA + arconst.ALEF + word.substring(1);
      } else {
        word = arconst.HAMZA + arconst.HAMZA + word.substring(1);
      }
    }
    word = word.replace(arconst.ALEF_MADDA, arconst.HAMZA + arconst.HAMZA);
    word = word.replace(arconst.HAMZAT_PATTERN, arconst.HAMZA);
  }
  return word;
}

export function normalize_teh(text) {
  return text.replace(arconst.TEH_MARBUTA_PATTERN, arconst.HEH);
}

export function normalize_alef(text) {
  text = text.replace(
    arconst.SMALL_ALEF + arconst.ALEF_MAKSURA,
    arconst.ALEF_MAKSURA
  );
  text = text.replace(
    arconst.ALEF_MAKSURA + arconst.SMALL_ALEF,
    arconst.ALEF_MAKSURA
  );
  return text.replace(arconst.ALEFAT_PATTERN, arconst.ALEF);
}

export function separate(word, extract_shadda = false) {
  const stack1 = [...word].reverse();
  const letters = [];
  const marks = [];
  const vowels = arconst.HARAKAT;
  let last1 = stack1.pop();
  while (last1 && vowels.includes(last1)) {
    last1 = stack1.pop();
  }
  while (last1 !== undefined) {
    if (vowels.includes(last1)) {
      marks.push(last1);
    } else if (last1 === arconst.SHADDA) {
      marks.push(arconst.SUKUN);
      marks.push(arconst.NOT_DEF_HARAKA);
      letters.push(arconst.SHADDA);
    } else {
      marks.push(arconst.NOT_DEF_HARAKA);
      letters.push(last1);
    }
    last1 = stack1.pop();
  }
  if (extract_shadda) {
    const wordletters = letters.join("");
    let shaddaplaces = wordletters.replace(
      new RegExp(`[^${arconst.SHADDA}]`, "g"),
      arconst.TATWEEL
    );
    shaddaplaces = shaddaplaces.replace(
      new RegExp(`${arconst.TATWEEL}${arconst.SHADDA}`, "g"),
      arconst.SHADDA
    );
    const strippedwordletters = strip_shadda(wordletters);
    return [strippedwordletters, marks.join(""), shaddaplaces];
  } else {
    return [letters.join(""), marks.join("")];
  }
}

export function joint(letters, marks) {
  if (letters.length !== marks.length) {
    return "";
  }

  const stackLetter = [...letters].reverse();
  const stackMark = [...marks].reverse();
  const wordStack = [];
  let lastLetter = stackLetter.pop();
  let lastMark = stackMark.pop();
  const vowels = arconst.HARAKAT;

  while (lastLetter !== undefined && lastMark !== undefined) {
    if (lastLetter === arconst.SHADDA) {
      const top = wordStack.pop();
      if (!vowels.includes(top)) {
        wordStack.push(top);
      }
      wordStack.push(lastLetter);
      if (lastMark !== arconst.NOT_DEF_HARAKA) {
        wordStack.push(lastMark);
      }
    } else {
      wordStack.push(lastLetter);
      if (lastMark !== arconst.NOT_DEF_HARAKA) {
        wordStack.push(lastMark);
      }
    }
    lastLetter = stackLetter.pop();
    lastMark = stackMark.pop();
  }

  if (stackLetter.length > 0 || stackMark.length > 0) {
    return false;
  } else {
    return wordStack.join("");
  }
}

export function vocalizedlike(word1, word2) {
  if (vocalized_similarity(word1, word2) < 0) {
    return false;
  } else {
    return true;
  }
}

export function waznlike(word1, wazn, extractRoot = false) {
  const stack1 = Array.from(word1);
  const stack2 = Array.from(wazn);
  const root = [];
  let last1 = stack1.pop();
  let last2 = stack2.pop();
  const vowels = arconst.HARAKAT;

  while (last1 !== undefined && last2 !== undefined) {
    if (
      last1 === last2 &&
      ![arconst.FEH, arconst.AIN, arconst.LAM].includes(last2)
    ) {
      last1 = stack1.pop();
      last2 = stack2.pop();
    } else if (
      !vowels.includes(last1) &&
      [arconst.FEH, arconst.AIN, arconst.LAM].includes(last2)
    ) {
      root.push(last1);
      last1 = stack1.pop();
      last2 = stack2.pop();
    } else if (vowels.includes(last1) && !vowels.includes(last2)) {
      last1 = stack1.pop();
    } else if (!vowels.includes(last1) && vowels.includes(last2)) {
      last2 = stack2.pop();
    } else {
      break;
    }
  }

  root.reverse();

  if (!(stack1.length === 0 && stack2.length === 0)) {
    return false;
  } else if (last1 !== undefined || last2 !== undefined) {
    return false;
  } else {
    if (extractRoot) {
      return root.join("");
    } else {
      return true;
    }
  }
}
//Assuming has_shadda() and strip_harakat() are defined elsewhere

export function shaddalike(partial, fully) {
  if (!has_shadda(partial)) {
    return true;
  } else if (!has_shadda(fully) && has_shadda(partial)) {
    return false;
  }

  partial = strip_harakat(partial);
  fully = strip_harakat(fully);
  let pstack = [...partial];
  let vstack = [...fully];
  let plast = pstack.pop();
  let vlast = vstack.pop();

  while (plast !== undefined && vlast !== undefined) {
    if (plast === vlast) {
      plast = pstack.pop();
      vlast = vstack.pop();
    } else if (plast === SHADDA && vlast !== arconst.SHADDA) {
      break;
    } else if (plast !== SHADDA && vlast === arconst.SHADDA) {
      vlast = vstack.pop();
    } else {
      break;
    }
  }

  if (pstack.length !== 0 || vstack.length !== 0) {
    return false;
  } else {
    return true;
  }
}

export function reduce_tashkeel(text) {
  const patterns = [
    `(?<!(${arconst.WAW}|${arconst.YEH}))(${arconst.SUKUN}|${arconst.FATHA})`,
    `${arconst.DAMMA}(?=${arconst.WAW})`,
    `${arconst.KASRA}(?=${arconst.YEH})`,
    `${arconst.FATHA}(?=${arconst.ALEF})`,
    `(?<=\\s(${arconst.WAW}|${arconst.YEH}))${arconst.FATHA}`,
    `(?<=${arconst.ALEF_HAMZA_BELOW})${arconst.KASRA}`,
  ];

  let reduced = text;
  for (const pat of patterns) {
    const regex = new RegExp(pat, "g");
    reduced = reduced.replace(regex, "");
  }

  return reduced;
}
export function vocalized_similarity(word1, word2) {
  const stack1 = Array.from(word1);
  const stack2 = Array.from(word2);
  let last1 = stack1.pop();
  let last2 = stack2.pop();
  let errCount = 0;
  const vowels = arconst.HARAKAT;

  while (last1 !== undefined && last2 !== undefined) {
    if (last1 === last2) {
      last1 = stack1.pop();
      last2 = stack2.pop();
    } else if (vowels.includes(last1) && !vowels.includes(last2)) {
      last1 = stack1.pop();
    } else if (!vowels.includes(last1) && vowels.includes(last2)) {
      last2 = stack2.pop();
    } else {
      if (last1 === arconst.SHADDA) {
        last1 = stack1.pop();
      } else if (last2 === arconst.SHADDA) {
        last2 = stack2.pop();
      } else {
        last1 = stack1.pop();
        last2 = stack2.pop();
        errCount += 1;
      }
    }
  }

  if (errCount > 0) {
    return -errCount;
  } else {
    return true;
  }
}
export function sentence_tokenize(text) {
  text = text.replace(/([.,:;،؟?\n])+([\n\t\r ])+/gu, "$1<SPLIT>");
  const sentences = text.split("<SPLIT>");
  return sentences;
}

export function tokenize(text = "", conditions = [], morphs = []) {
  if (text) {
    if (!Array.isArray(conditions)) {
      conditions = [conditions];
    }
    if (!Array.isArray(morphs)) {
      morphs = [morphs];
    }
    let tokens = text.split(arconst.TOKEN_PATTERN).filter(Boolean);

    tokens = tokens
      .map((tok) => tok.replace(arconst.TOKEN_REPLACE, ""))
      .filter((tok) => tok.replace(arconst.TOKEN_REPLACE, ""));
    if (conditions.length) {
      tokens = tokens.filter((tok) => conditions.every((cond) => cond(tok)));
    }
    if (morphs.length) {
      function morph(tok) {
        for (let m of morphs) {
          tok = m(tok);
        }
        return tok;
      }
      tokens = tokens.map((tok) => morph(tok));
    }
    return tokens.filter(Boolean);
  } else {
    return [];
  }
}

export function tokenize_with_location(text) {
  const tokens = [];
  const matches = text.matchAll(arconst.TOKEN_PATTERN_SPLIT);

  for (const match of matches) {
    tokens.push({
      token: text.slice(match.index, match.index + match[0].length),
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  return tokens;
}
export function fix_spaces(text) {
  text = text.replace(arconst.FIX_SPACES_PAT, (match, p1) => {
    return p1.replace(/\s+/g, "") + " ";
  });
  return text.trim();
}

export function autocorrect(text) {
  text = text.replace(
    new RegExp(`(?<=\\s|\\d)([${arconst.TASHKEEL_STRING}])+`, "gu"),
    ""
  );
  text = text.replace(new RegExp(`^([${arconst.TASHKEEL_STRING}])+`, "u"), "");
  text = text.replace(
    new RegExp(`${arconst.ALEF}${arconst.FATHATAN}`, "gu"),
    `${arconst.FATHATAN}${arconst.ALEF}`
  );
  text = text.replace(
    new RegExp(
      `(?<=${arconst.ALEF}|${arconst.ALEF_MAKSURA}|${arconst.TEH_MARBUTA})([${arconst.SUKUN}])+`,
      "gu"
    ),
    ""
  );
  text = text.replace(
    new RegExp(`([${arconst.HARAKAT_STRING}])+(?=[${arconst.SHADDA}])`, "gu"),
    ""
  );
  text = text.replace(
    new RegExp(
      `(?<=[${arconst.HARAKAT_STRING}])([${arconst.HARAKAT_STRING}])+`,
      "gu"
    ),
    ""
  );

  return text;
}

export function spellit(word, lang = "ar") {
  const names = [];
  for (let c of word) {
    names.push(name(c, c));
  }
  return names.join(", ");
}
