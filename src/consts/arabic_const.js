const COMMA = "\u060C";
const SEMICOLON = "\u061B";
const QUESTION = "\u061F";
const HAMZA = "\u0621";
const ALEF_MADDA = "\u0622";
const ALEF_HAMZA_ABOVE = "\u0623";
const WAW_HAMZA = "\u0624";
const ALEF_HAMZA_BELOW = "\u0625";
const YEH_HAMZA = "\u0626";
const ALEF = "\u0627";
const BEH = "\u0628";
const TEH_MARBUTA = "\u0629";
const TEH = "\u062a";
const THEH = "\u062b";
const JEEM = "\u062c";
const HAH = "\u062d";
const KHAH = "\u062e";
const DAL = "\u062f";
const THAL = "\u0630";
const REH = "\u0631";
const ZAIN = "\u0632";
const SEEN = "\u0633";
const SHEEN = "\u0634";
const SAD = "\u0635";
const DAD = "\u0636";
const TAH = "\u0637";
const ZAH = "\u0638";
const AIN = "\u0639";
const GHAIN = "\u063a";
const TATWEEL = "\u0640";
const FEH = "\u0641";
const QAF = "\u0642";
const KAF = "\u0643";
const LAM = "\u0644";
const MEEM = "\u0645";
const NOON = "\u0646";
const HEH = "\u0647";
const WAW = "\u0648";
const ALEF_MAKSURA = "\u0649";
const YEH = "\u064a";
const MADDA_ABOVE = "\u0653";
const HAMZA_ABOVE = "\u0654";
const HAMZA_BELOW = "\u0655";
const ZERO = "\u0660";
const ONE = "\u0661";
const TWO = "\u0662";
const THREE = "\u0663";
const FOUR = "\u0664";
const FIVE = "\u0665";
const SIX = "\u0666";
const SEVEN = "\u0667";
const EIGHT = "\u0668";
const NINE = "\u0669";
const ZERO_W = "\u0030";
const ONE_W = "\u0031";
const TWO_W = "\u0032";
const THREE_W = "\u0033";
const FOUR_W = "\u0034";
const FIVE_W = "\u0035";
const SIX_W = "\u0036";
const SEVEN_W = "\u0037";
const EIGHT_W = "\u0038";
const NINE_W = "\u0039";
const ZERO_P = "\u06f0";
const ONE_P = "\u06f1";
const TWO_P = "\u06f2";
const THREE_P = "\u06f3";
const FOUR_P = "\u06f4";
const FIVE_P = "\u06f5";
const SIX_P = "\u06f6";
const SEVEN_P = "\u06f7";
const EIGHT_P = "\u06f8";
const NINE_P = "\u06f9";
const PERCENT = "\u066a";
const DECIMAL = "\u066b";
const THOUSANDS = "\u066c";
const STAR = "\u066d";
const MINI_ALEF = "\u0670";
const ALEF_WASLA = "\u0671";
const FULL_STOP = "\u06d4";
const BYTE_ORDER_MARK = "\ufeff";
const FATHATAN = "\u064b";
const DAMMATAN = "\u064c";
const KASRATAN = "\u064d";
const FATHA = "\u064e";
const DAMMA = "\u064f";
const KASRA = "\u0650";
const SHADDA = "\u0651";
const SUKUN = "\u0652";
const SMALL_ALEF = "\u0670";
const SMALL_WAW = "\u06E5";
const SMALL_YEH = "\u06E6";
const LAM_ALEF = "\ufefb";
const LAM_ALEF_HAMZA_ABOVE = "\ufef7";
const LAM_ALEF_HAMZA_BELOW = "\ufef9";
const LAM_ALEF_MADDA_ABOVE = "\ufef5";
const SIMPLE_LAM_ALEF = "\u0644\u0627";
const SIMPLE_LAM_ALEF_HAMZA_ABOVE = "\u0644\u0623";
const SIMPLE_LAM_ALEF_HAMZA_BELOW = "\u0644\u0625";
const SIMPLE_LAM_ALEF_MADDA_ABOVE = "\u0644\u0622";
const LETTERS = [
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
const NUMBERS_EAST = [
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
const NUMBERS_WEST = [
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
const NUMBERS_PERS = [
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
const TASHKEEL = [
  FATHATAN,
  DAMMATAN,
  KASRATAN,
  FATHA,
  DAMMA,
  KASRA,
  SUKUN,
  SHADDA,
];
const HARAKAT = [FATHATAN, DAMMATAN, KASRATAN, FATHA, DAMMA, KASRA, SUKUN];
const SHORTHARAKAT = [FATHA, DAMMA, KASRA, SUKUN];
const TANWIN = [FATHATAN, DAMMATAN, KASRATAN];
const NOT_DEF_HARAKA = TATWEEL;
const LIGUATURES = [
  LAM_ALEF,
  LAM_ALEF_HAMZA_ABOVE,
  LAM_ALEF_HAMZA_BELOW,
  LAM_ALEF_MADDA_ABOVE,
];
const HAMZAT = [
  HAMZA,
  WAW_HAMZA,
  YEH_HAMZA,
  HAMZA_ABOVE,
  HAMZA_BELOW,
  ALEF_HAMZA_BELOW,
  ALEF_HAMZA_ABOVE,
];
const ALEFAT = [
  ALEF,
  ALEF_MADDA,
  ALEF_HAMZA_ABOVE,
  ALEF_HAMZA_BELOW,
  ALEF_WASLA,
  ALEF_MAKSURA,
  SMALL_ALEF,
];
const WEAK = [ALEF, WAW, YEH, ALEF_MAKSURA];
const YEHLIKE = [YEH, YEH_HAMZA, ALEF_MAKSURA, SMALL_YEH];
const WAWLIKE = [WAW, WAW_HAMZA, SMALL_WAW];
const TEHLIKE = [TEH, TEH_MARBUTA];
const SMALL = [SMALL_ALEF, SMALL_WAW, SMALL_YEH];
const MOON = [
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

const SUN = [
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

const ALPHABETIC_ORDER = {
  [ALEF]: 1,
  [BEH]: 2,
  [TEH]: 3,
  [TEH_MARBUTA]: 3,
  [THEH]: 4,
  [JEEM]: 5,
  [HAH]: 6,
  [KHAH]: 7,
  [DAL]: 8,
  [THAL]: 9,
  [REH]: 10,
  [ZAIN]: 11,
  [SEEN]: 12,
  [SHEEN]: 13,
  [SAD]: 14,
  [DAD]: 15,
  [TAH]: 16,
  [ZAH]: 17,
  [AIN]: 18,
  [GHAIN]: 19,
  [FEH]: 20,
  [QAF]: 21,
  [KAF]: 22,
  [LAM]: 23,
  [MEEM]: 24,
  [NOON]: 25,
  [HEH]: 26,
  [WAW]: 27,
  [YEH]: 28,
  [HAMZA]: 29,
  [ALEF_MADDA]: 29,
  [ALEF_HAMZA_ABOVE]: 29,
  [WAW_HAMZA]: 29,
  [ALEF_HAMZA_BELOW]: 29,
  [YEH_HAMZA]: 29,
};
const NAMES = {
  [ALEF]: "ألف",
  [BEH]: "باء",
  [TEH]: "تاء",
  [TEH_MARBUTA]: "تاء مربوطة",
  [THEH]: "ثاء",
  [JEEM]: "جيم",
  [HAH]: "حاء",
  [KHAH]: "خاء",
  [DAL]: "دال",
  [THAL]: "ذال",
  [REH]: "راء",
  [ZAIN]: "زاي",
  [SEEN]: "سين",
  [SHEEN]: "شين",
  [SAD]: "صاد",
  [DAD]: "ضاد",
  [TAH]: "طاء",
  [ZAH]: "ظاء",
  [AIN]: "عين",
  [GHAIN]: "غين",
  [FEH]: "فاء",
  [QAF]: "قاف",
  [KAF]: "كاف",
  [LAM]: "لام",
  [MEEM]: "ميم",
  [NOON]: "نون",
  [HEH]: "هاء",
  [WAW]: "واو",
  [YEH]: "ياء",
  [HAMZA]: "همزة",
  [TATWEEL]: "تطويل",
  [ALEF_MADDA]: "ألف ممدودة",
  [ALEF_MAKSURA]: "ألف مقصورة",
  [ALEF_HAMZA_ABOVE]: "همزة على الألف",
  [WAW_HAMZA]: "همزة على الواو",
  [ALEF_HAMZA_BELOW]: "همزة تحت الألف",
  [YEH_HAMZA]: "همزة على الياء",
  [FATHATAN]: "فتحتان",
  [DAMMATAN]: "ضمتان",
  [KASRATAN]: "كسرتان",
  [FATHA]: "فتحة",
  [DAMMA]: "ضمة",
  [KASRA]: "كسرة",
  [SHADDA]: "شدة",
  [SUKUN]: "سكون",
};
const HAMZAT_STRING = HAMZAT.join("");
const HARAKAT_STRING = HARAKAT.join("");
const TASHKEEL_STRING = TASHKEEL.join("");
const HARAKAT_PATTERN = new RegExp("[" + HARAKAT_STRING + "]", "gu");
const LASTHARAKA_PATTERN = new RegExp(
  "[" + HARAKAT_STRING + "]$|[" + TANWIN.join("") + "]",
  "gu"
);
const SHORTHARAKAT_PATTERN = new RegExp(
  "[" + SHORTHARAKAT.join("") + "]",
  "gu"
);
const TASHKEEL_PATTERN = new RegExp("[" + TASHKEEL_STRING + "]", "gu");
const HAMZAT_PATTERN = new RegExp("[" + HAMZAT_STRING + "]", "gu");
const ALEFAT_PATTERN = new RegExp("[" + ALEFAT.join("") + "]", "gu");
const LIGUATURES_PATTERN = new RegExp("[" + LIGUATURES.join("") + "]", "gu");
const TOKEN_PATTERN = new RegExp(
  "([\\u0041-\\u005A\\u0061-\\u007A\\u0670\\u064B-\\u0652\\u0621-\\u064A']+|[^\\u0041-\\u005A\\u0061-\\u007A\\u0670\\u064B-\\u0652\\u0621-\\u064A']+)",
  "gu"
);
const TOKEN_PATTERN_SPLIT = /([\w\u0600-\u06FF']+)/gu;
const TOKEN_REPLACE = new RegExp("\\t|\\r|\\f|\\v| ", "gu");
const ARABIC_STRING = new RegExp(
  "([^\\u0600-\\u0652" +
    LAM_ALEF +
    LAM_ALEF_HAMZA_ABOVE +
    LAM_ALEF_MADDA_ABOVE +
    "\\s\\d])",
  "gu"
);
const ARABIC_RANGE =
  /([^\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF\u0750-\u077F])/gu;

const FIX_SPACES_PAT = /([^\w\u0600-\u06FF]+)(?:\s+)?/gu;
module.exports = {
  COMMA,
  SEMICOLON,
  QUESTION,
  HAMZA,
  ALEF_MADDA,
  ALEF_HAMZA_ABOVE,
  WAW_HAMZA,
  ALEF_HAMZA_BELOW,
  YEH_HAMZA,
  ALEF,
  BEH,
  TEH_MARBUTA,
  TEH,
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
  TATWEEL,
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
  MADDA_ABOVE,
  HAMZA_ABOVE,
  HAMZA_BELOW,
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
  PERCENT,
  DECIMAL,
  THOUSANDS,
  STAR,
  MINI_ALEF,
  ALEF_WASLA,
  FULL_STOP,
  BYTE_ORDER_MARK,
  FATHATAN,
  DAMMATAN,
  KASRATAN,
  FATHA,
  DAMMA,
  KASRA,
  SHADDA,
  SUKUN,
  SMALL_ALEF,
  SMALL_WAW,
  SMALL_YEH,
  LAM_ALEF,
  LAM_ALEF_HAMZA_ABOVE,
  LAM_ALEF_HAMZA_BELOW,
  LAM_ALEF_MADDA_ABOVE,
  SIMPLE_LAM_ALEF,
  SIMPLE_LAM_ALEF_HAMZA_ABOVE,
  SIMPLE_LAM_ALEF_HAMZA_BELOW,
  SIMPLE_LAM_ALEF_MADDA_ABOVE,
  LETTERS,
  NUMBERS_EAST,
  NUMBERS_WEST,
  NUMBERS_PERS,
  TASHKEEL,
  HARAKAT,
  SHORTHARAKAT,
  TANWIN,
  NOT_DEF_HARAKA,
  LIGUATURES,
  HAMZAT,
  ALEFAT,
  WEAK,
  YEHLIKE,
  WAWLIKE,
  TEHLIKE,
  SMALL,
  MOON,
  SUN,
  ALPHABETIC_ORDER,
  NAMES,
  HAMZAT_STRING,
  HARAKAT_STRING,
  TASHKEEL_STRING,
  HARAKAT_PATTERN,
  LASTHARAKA_PATTERN,
  SHORTHARAKAT_PATTERN,
  TASHKEEL_PATTERN,
  HAMZAT_PATTERN,
  ALEFAT_PATTERN,
  LIGUATURES_PATTERN,
  TOKEN_PATTERN,
  TOKEN_PATTERN_SPLIT,
  TOKEN_REPLACE,
  ARABIC_STRING,
  ARABIC_RANGE,
  FIX_SPACES_PAT,
};
