export const COMMA = "\u060C";
export const SEMICOLON = "\u061B";
export const QUESTION = "\u061F";
export const HAMZA = "\u0621";
export const ALEF_MADDA = "\u0622";
export const ALEF_HAMZA_ABOVE = "\u0623";
export const WAW_HAMZA = "\u0624";
export const ALEF_HAMZA_BELOW = "\u0625";
export const YEH_HAMZA = "\u0626";
export const ALEF = "\u0627";
export const BEH = "\u0628";
export const TEH_MARBUTA = "\u0629";
export const TEH = "\u062a";
export const THEH = "\u062b";
export const JEEM = "\u062c";
export const HAH = "\u062d";
export const KHAH = "\u062e";
export const DAL = "\u062f";
export const THAL = "\u0630";
export const REH = "\u0631";
export const ZAIN = "\u0632";
export const SEEN = "\u0633";
export const SHEEN = "\u0634";
export const SAD = "\u0635";
export const DAD = "\u0636";
export const TAH = "\u0637";
export const ZAH = "\u0638";
export const AIN = "\u0639";
export const GHAIN = "\u063a";
export const TATWEEL = "\u0640";
export const FEH = "\u0641";
export const QAF = "\u0642";
export const KAF = "\u0643";
export const LAM = "\u0644";
export const MEEM = "\u0645";
export const NOON = "\u0646";
export const HEH = "\u0647";
export const WAW = "\u0648";
export const ALEF_MAKSURA = "\u0649";
export const YEH = "\u064a";
export const MADDA_ABOVE = "\u0653";
export const HAMZA_ABOVE = "\u0654";
export const HAMZA_BELOW = "\u0655";
export const ZERO = "\u0660";
export const ONE = "\u0661";
export const TWO = "\u0662";
export const THREE = "\u0663";
export const FOUR = "\u0664";
export const FIVE = "\u0665";
export const SIX = "\u0666";
export const SEVEN = "\u0667";
export const EIGHT = "\u0668";
export const NINE = "\u0669";
export const ZERO_W = "\u0030";
export const ONE_W = "\u0031";
export const TWO_W = "\u0032";
export const THREE_W = "\u0033";
export const FOUR_W = "\u0034";
export const FIVE_W = "\u0035";
export const SIX_W = "\u0036";
export const SEVEN_W = "\u0037";
export const EIGHT_W = "\u0038";
export const NINE_W = "\u0039";
export const ZERO_P = "\u06f0";
export const ONE_P = "\u06f1";
export const TWO_P = "\u06f2";
export const THREE_P = "\u06f3";
export const FOUR_P = "\u06f4";
export const FIVE_P = "\u06f5";
export const SIX_P = "\u06f6";
export const SEVEN_P = "\u06f7";
export const EIGHT_P = "\u06f8";
export const NINE_P = "\u06f9";
export const PERCENT = "\u066a";
export const DECIMAL = "\u066b";
export const THOUSANDS = "\u066c";
export const STAR = "\u066d";
export const MINI_ALEF = "\u0670";
export const ALEF_WASLA = "\u0671";
export const FULL_STOP = "\u06d4";
export const BYTE_ORDER_MARK = "\ufeff";
export const FATHATAN = "\u064b";
export const DAMMATAN = "\u064c";
export const KASRATAN = "\u064d";
export const FATHA = "\u064e";
export const DAMMA = "\u064f";
export const KASRA = "\u0650";
export const SHADDA = "\u0651";
export const SUKUN = "\u0652";
export const SMALL_ALEF = "\u0670";
export const SMALL_WAW = "\u06E5";
export const SMALL_YEH = "\u06E6";
export const LAM_ALEF = "\ufefb";
export const LAM_ALEF_HAMZA_ABOVE = "\ufef7";
export const LAM_ALEF_HAMZA_BELOW = "\ufef9";
export const LAM_ALEF_MADDA_ABOVE = "\ufef5";
export const SIMPLE_LAM_ALEF = "\u0644\u0627";
export const SIMPLE_LAM_ALEF_HAMZA_ABOVE = "\u0644\u0623";
export const SIMPLE_LAM_ALEF_HAMZA_BELOW = "\u0644\u0625";
export const SIMPLE_LAM_ALEF_MADDA_ABOVE = "\u0644\u0622";
export const LETTERS = [
  ALEF,
  BEH,
  TEH,
  TEH_MARBUTA,
  THEH,
  JEEM,
  HAH,
  KHAH,
  DAL,
  THAL,
  REH,
  ZAIN,
  SEEN,
  SHEEN,
  SAD,
  DAD,
  TAH,
  ZAH,
  AIN,
  GHAIN,
  FEH,
  QAF,
  KAF,
  LAM,
  MEEM,
  NOON,
  HEH,
  WAW,
  ALEF_MAKSURA,
  YEH,
  HAMZA,
  ALEF_MADDA,
  ALEF_HAMZA_ABOVE,
  WAW_HAMZA,
  ALEF_HAMZA_BELOW,
  YEH_HAMZA,
].join("");

export const NUMBERS_EAST = [
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
];
export const NUMBERS_WEST = [
  ZERO_W,
  ONE_W,
  TWO_W,
  THREE_W,
  FOUR_W,
  FIVE_W,
  SIX_W,
  SEVEN_W,
  EIGHT_W,
  NINE_W,
];
export const NUMBERS_PERS = [
  ZERO_P,
  ONE_P,
  TWO_P,
  THREE_P,
  FOUR_P,
  FIVE_P,
  SIX_P,
  SEVEN_P,
  EIGHT_P,
  NINE_P,
];
export const TASHKEEL = [
  FATHATAN,
  DAMMATAN,
  KASRATAN,
  FATHA,
  DAMMA,
  KASRA,
  SUKUN,
  SHADDA,
];
export const HARAKAT = [
  FATHATAN,
  DAMMATAN,
  KASRATAN,
  FATHA,
  DAMMA,
  KASRA,
  SUKUN,
];
export const SHORTHARAKAT = [FATHA, DAMMA, KASRA, SUKUN];
export const TANWIN = [FATHATAN, DAMMATAN, KASRATAN];
export const NOT_DEF_HARAKA = TATWEEL;
export const LIGUATURES = [
  LAM_ALEF,
  LAM_ALEF_HAMZA_ABOVE,
  LAM_ALEF_HAMZA_BELOW,
  LAM_ALEF_MADDA_ABOVE,
];
export const HAMZAT = [
  HAMZA,
  WAW_HAMZA,
  YEH_HAMZA,
  HAMZA_ABOVE,
  HAMZA_BELOW,
  ALEF_HAMZA_BELOW,
  ALEF_HAMZA_ABOVE,
];
export const ALEFAT = [
  ALEF,
  ALEF_MADDA,
  ALEF_HAMZA_ABOVE,
  ALEF_HAMZA_BELOW,
  ALEF_WASLA,
  ALEF_MAKSURA,
  SMALL_ALEF,
];
export const WEAK = [ALEF, WAW, YEH, ALEF_MAKSURA];
export const YEHLIKE = [YEH, YEH_HAMZA, ALEF_MAKSURA, SMALL_YEH];
export const WAWLIKE = [WAW, WAW_HAMZA, SMALL_WAW];
export const TEHLIKE = [TEH, TEH_MARBUTA];
export const SMALL = [SMALL_ALEF, SMALL_WAW, SMALL_YEH];
export const MOON = [
  HAMZA,
  ALEF_MADDA,
  ALEF_HAMZA_ABOVE,
  ALEF_HAMZA_BELOW,
  ALEF,
  BEH,
  JEEM,
  HAH,
  KHAH,
  AIN,
  GHAIN,
  FEH,
  QAF,
  KAF,
  MEEM,
  HEH,
  WAW,
  YEH,
];
export const SUN = [
  TEH,
  THEH,
  DAL,
  THAL,
  REH,
  ZAIN,
  SEEN,
  SHEEN,
  SAD,
  DAD,
  TAH,
  ZAH,
  LAM,
  NOON,
];
export const ALPHABETIC_ORDER = {
  ALEF: 1,
  BEH: 2,
  TEH: 3,
  TEH_MARBUTA: 3,
  THEH: 4,
  JEEM: 5,
  HAH: 6,
  KHAH: 7,
  DAL: 8,
  THAL: 9,
  REH: 10,
  ZAIN: 11,
  SEEN: 12,
  SHEEN: 13,
  SAD: 14,
  DAD: 15,
  TAH: 16,
  ZAH: 17,
  AIN: 18,
  GHAIN: 19,
  FEH: 20,
  QAF: 21,
  KAF: 22,
  LAM: 23,
  MEEM: 24,
  NOON: 25,
  HEH: 26,
  WAW: 27,
  YEH: 28,
  HAMZA: 29,
  ALEF_MADDA: 29,
  ALEF_HAMZA_ABOVE: 29,
  WAW_HAMZA: 29,
  ALEF_HAMZA_BELOW: 29,
  YEH_HAMZA: 29,
};
export const NAMES = {
  ALEF: "ألف",
  BEH: "باء",
  TEH: "تاء",
  TEH_MARBUTA: "تاء مربوطة",
  THEH: "ثاء",
  JEEM: "جيم",
  HAH: "حاء",
  KHAH: "خاء",
  DAL: "دال",
  THAL: "ذال",
  REH: "راء",
  ZAIN: "زاي",
  SEEN: "سين",
  SHEEN: "شين",
  SAD: "صاد",
  DAD: "ضاد",
  TAH: "طاء",
  ZAH: "ظاء",
  AIN: "عين",
  GHAIN: "غين",
  FEH: "فاء",
  QAF: "قاف",
  KAF: "كاف",
  LAM: "لام",
  MEEM: "ميم",
  NOON: "نون",
  HEH: "هاء",
  WAW: "واو",
  YEH: "ياء",
  HAMZA: "همزة",
  TATWEEL: "تطويل",
  ALEF_MADDA: "ألف ممدودة",
  ALEF_MAKSURA: "ألف مقصورة",
  ALEF_HAMZA_ABOVE: "همزة على الألف",
  WAW_HAMZA: "همزة على الواو",
  ALEF_HAMZA_BELOW: "همزة تحت الألف",
  YEH_HAMZA: "همزة على الياء",
  FATHATAN: "فتحتان",
  DAMMATAN: "ضمتان",
  KASRATAN: "كسرتان",
  FATHA: "فتحة",
  DAMMA: "ضمة",
  KASRA: "كسرة",
  SHADDA: "شدة",
  SUKUN: "سكون",
};
export const HAMZAT_STRING = HAMZAT.join("");
export const HARAKAT_STRING = HARAKAT.join("");
export const TASHKEEL_STRING = TASHKEEL.join("");
export const HARAKAT_PATTERN = new RegExp("[" + HARAKAT_STRING + "]", "gu");
export const LASTHARAKA_PATTERN = new RegExp(
  "[" + HARAKAT_STRING + "]$|[" + TANWIN.join("") + "]",
  "gu"
);
export const SHORTHARAKAT_PATTERN = new RegExp(
  "[" + SHORTHARAKAT.join("") + "]",
  "gu"
);
export const TASHKEEL_PATTERN = new RegExp("[" + TASHKEEL_STRING + "]", "gu");
export const HAMZAT_PATTERN = new RegExp("[" + HAMZAT_STRING + "]", "gu");
export const ALEFAT_PATTERN = new RegExp("[" + ALEFAT.join("") + "]", "gu");
export const LIGUATURES_PATTERN = new RegExp(
  "[" + LIGUATURES.join("") + "]",
  "gu"
);
export const TOKEN_PATTERN = /([^\w\s\u0670\u064b-\u0652']+)/gu;
export const TOKEN_PATTERN_SPLIT = /([\w\u0600-\u06FF']+)/gu;
export const TOKEN_REPLACE = new RegExp("\\t|\\r|\\f|\\v| ", "gu");
export const ARABIC_STRING = new RegExp(
  "([^\\u0600-\\u0652" +
    LAM_ALEF +
    LAM_ALEF_HAMZA_ABOVE +
    LAM_ALEF_MADDA_ABOVE +
    "\\s\\d])",
  "gu"
);
export const ARABIC_RANGE =
  /([^\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF\u0750-\u077F])/gu;

export const FIX_SPACES_PAT = /([^\w\u0600-\u06FF]+)(?:\s+)?/gu;
