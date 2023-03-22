const araby = require("../araby");
const {
  easternToWesternNumbersTable,
  easternToPersianNumbersTable,
  westernToEasternNumbersTable,
  westernToPersianNumbersTable,
  persianToEasternNumbersTable,
  persianToWesternNumbersTable,
} = require("../consts/trans_const");
const {
  translate,
  tim2sampa,
  tim2utf8,
  utf82latin,
  utf82tim,
  convertShadda,
} = require("./utility");

function convert(text, codeFrom, codeTo) {
  const code1 = codeFrom.toLowerCase();
  const code2 = codeTo.toLowerCase();

  const utf2tim = () => utf82tim(text);
  const utf2latin = () => utf82latin(text);

  const converters = {
    utf: {
      tim: utf2tim,
      buckwalter: utf2tim,
      sampa: () => tim2sampa(utf2tim()),
      latin: utf2latin,
      ascii: utf2latin,
    },
    tim: {
      utf: () => tim2utf8(text),
      utf8: () => tim2utf8(text),
      arabic: () => tim2utf8(text),
      sampa: () => tim2sampa(text),
    },
  };

  const convertFn =
    converters[code1] && converters[code1][code2]
      ? converters[code1][code2]
      : () => text;
  return convertFn();
}

function segmentLanguage(text) {
  if (!text) {
    return text;
  }

  const result = [];
  const arabicRegex = /[\u0600-\u06FF]/;
  const whitespaceAndPunctRegex = /[\s\d\?, :\!\(\)]/;

  let isArabic = arabicRegex.test(text[0]);
  let currentText = "";

  for (const char of text) {
    if (arabicRegex.test(char)) {
      if (isArabic) {
        currentText += char;
      } else {
        result.push(["latin", currentText]);
        isArabic = true;
        currentText = char;
      }
    } else if (whitespaceAndPunctRegex.test(char)) {
      currentText += char;
    } else {
      if (isArabic) {
        let i = currentText.length - 1;
        let tempText = "";

        while (i >= 0 && !arabicRegex.test(currentText[i])) {
          i -= 1;
        }

        tempText = currentText.slice(i + 1);
        currentText = currentText.slice(0, i + 1);
        result.push(["arabic", currentText]);
        isArabic = false;
        currentText = tempText + char;
      } else {
        currentText += char;
      }
    }
  }

  result.push([isArabic ? "arabic" : "latin", currentText]);

  return result;
}

function delimiteLanguage(
  text,
  language = "arabic",
  start = "<arabic>",
  end = "</arabic>"
) {
  const chunks = segmentLanguage(text);
  return chunks
    .map(([lang, chunk]) =>
      lang === language ? `${start}${chunk}${end}` : chunk
    )
    .join(" ");
}

function normalizeDigits(text, source = "all", out = "west") {
  source = source.toLowerCase();
  out = out.toLowerCase();

  if (!["all", "west", "east", "persian"].includes(source)) {
    throw new Error(`Invalid option for 'source': ${source}`);
  }

  if (!["west", "east", "persian"].includes(out)) {
    throw new Error(`Invalid option for 'out': ${out}`);
  }

  if (source === out) {
    return text;
  }

  const sourceToOutTbl = {
    west: {
      east: westernToEasternNumbersTable,
      persian: westernToPersianNumbersTable,
    },
    east: {
      west: easternToWesternNumbersTable,
      persian: easternToPersianNumbersTable,
    },
    persian: {
      west: persianToWesternNumbersTable,
      east: persianToEasternNumbersTable,
    },
  };

  if (source === "all") {
    delete sourceToOutTbl[out];
    return Object.values(sourceToOutTbl).reduce((accText, tbl) => {
      return accText
        .split("")
        .map((char) => tbl[out][char] || char)
        .join("");
    }, text);
  }

  return text
    .split("")
    .map((char) => sourceToOutTbl[source][out][char] || char)
    .join("");
}
const text = "مرحبا";
const convertedText = convert(text, "utf", "tim");
module.exports = {
  convert,
  segmentLanguage,
  delimiteLanguage,
  normalizeDigits,
};
