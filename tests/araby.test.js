// arabic.test.js
const { expect } = require("chai");
const araby = require("../src/araby");

describe("Arabic Module", () => {
  describe("stripTashkeel()", () => {
    it("should strip tashkeel for الْعَرَبِيَّةُ", () => {
      const word = "الْعَرَبِيَّةُ";
      const word_nm = "العربية";
      expect(araby.stripTashkeel(word)).to.equal(word_nm);
      expect(araby.stripTashkeel(word)).to.not.equal(word);
    });
  });

  describe("stripHarakat()", () => {
    it("should strip harakat for الْعَرَبِيَّةُ expect SHADDA", () => {
      const word = "الْعَرَبِيَّةُ";
      const word_nm = "العربيّة";
      expect(araby.stripHarakat(word)).to.equal(word_nm);
      expect(araby.stripHarakat(word)).to.not.equal(word);
    });
  });

  describe("stripTatweel()", () => {
    it("should strip tatweel for الْعَـرَبِيَّةُ", () => {
      const word = "الْعَـرَبِيَّةُ";
      const word_nm = "الْعَرَبِيَّةُ";
      expect(araby.stripTatweel(word)).to.equal(word_nm);
      expect(araby.stripTatweel(word)).to.not.equal(word);
    });
  });

  describe("stripLastHaraka()", () => {
    it("should strip last haraka for الْعَرَبِيّةُ", () => {
      const word = "الْعَرَبِيّةُ";
      const word_nm = "الْعَرَبِيّة";
      expect(araby.stripLastHaraka(word)).to.equal(word_nm);
      expect(araby.stripLastHaraka(word)).to.not.equal(word);
    });
  });

  describe("stripShadda()", () => {
    it("should strip shadda for الْعَرَبِيّةُ", () => {
      const word = "الْعَرَبِيّةُ";
      const word_nm = "الْعَرَبِيةُ";
      expect(araby.stripShadda(word)).to.equal(word_nm);
      expect(araby.stripShadda(word)).to.not.equal(word);
    });
  });

  describe("normalizeHamza()", () => {
    it("should normalize hamza in the text", () => {
      const text1 = "جاء سؤال الأئمة عن الإسلام آجلا";
      const text2 = "جاء سءال الءءمة عن الءسلام ءءجلا";
      expect(araby.normalizeHamza(text1)).to.equal(text2);
    });

    it("should normalize hamza in the text with tasheel method", () => {
      const text1 = "جاء سؤال الأئمة عن الإسلام آجلا";
      const text2 = "جاء سوال الايمة عن الاسلام اجلا";
      expect(araby.normalizeHamza(text1, "tasheel")).to.equal(text2);
    });
  });

  describe("normalizeAlef()", () => {
    it("should normalize alef characters in the text", () => {
      const text1 = "بِٱلْهُدَىٰ";
      const text2 = "بِالْهُدَا";
      expect(araby.normalizeAlef(text1)).to.equal(text2);
    });
  });

  describe("normalizeTeh()", () => {
    it("should normalize teh characters in the text", () => {
      const text1 = "سيارة";
      const text2 = "سياره";
      expect(araby.normalizeTeh(text1)).to.equal(text2);
    });
  });
  describe("normalizeLigature()", () => {
    it("should normalize ligature characters in the text", () => {
      const text1 = "ﻷنها ﻷلئ الاسلام";
      const text2 = "لانها لالئ الاسلام";
      expect(araby.normalizeLigature(text1)).to.equal(text2);
    });
  });

  describe("waznlike()", () => {
    it("should check if wazn is like the given word", () => {
      const word = "ضارب";
      const wazn = "فَاعِل";
      expect(araby.waznlike(word, wazn)).to.be.true;
    });
  });

  describe("shaddalike()", () => {
    it("should check if shadda is like the given words", () => {
      const word1 = "ردّ";
      const word2 = "ردَّ";
      expect(araby.shaddalike(word1, word2)).to.be.true;
    });
  });

  describe("vocalizedlike()", () => {
    it("should check if vocalized is like the given words", () => {
      const word1 = "سَلَام";
      const word2 = "سَلَام";
      expect(araby.vocalizedlike(word1, word2)).to.be.true;
    });
  });

  describe("fixSpaces()", () => {
    it("should fix spaces in the text", () => {
      const text1 =
        "كل فرد في الأمة مجند لمعركة المصير: الفلاح في حقله، والعامل في مصنعه، والطالب في معهده، والموظف في ديوانه...";
      const text2 =
        "كل فرد في الأمة مجند لمعركة المصير: الفلاح في حقله، والعامل في مصنعه، والطالب في معهده، والموظف في ديوانه...";
      expect(araby.fixSpaces(text1)).to.equal(text2);
    });
  });

  describe("autocorrect()", () => {
    it("should autocorrect word", () => {
      const word1 = "مُُضاعَفة";
      const word2 = "مُضاعَفة";
      expect(araby.autoCorrect(word1)).to.equal(word2);
    });
    it("should autocorrect text", () => {
      const text1 = "حَرَكَة مُُضاعَفة َسابقة  قبل شَّدة سابقاً";
      const text2 = "حَرَكَة مُضاعَفة سابقة  قبل شّدة سابقًا";
      expect(araby.autoCorrect(text1)).to.equal(text2);
    });
  });

  describe("spellit()", () => {
    it("should spell the given word", () => {
      const word1 = "مُضاّعَفة";
      const word2 = "ميم, ضمة, ضاد, ألف, شدة, عين, فتحة, فاء, تاء مربوطة";
      expect(araby.spellit(word1)).to.equal(word2);
    });
  });

  describe("tokenize()", () => {
    it("should tokenize the text", () => {
      const text = "العربية: لغة جميلة.";
      const wordlist = ["العربية", ":", "لغة", "جميلة", "."];
      expect(araby.tokenize(text)).to.deep.equal(wordlist);
    });
  });

  describe("sentenceTokenize()", () => {
    it("should tokenize sentences", () => {
      const text = "العربية لغة جميلة. والبلاد بعيدة، والشوق زائد";
      const sentences = ["العربية لغة جميلة.", "والبلاد بعيدة،", "والشوق زائد"];
      expect(araby.sentenceTokenize(text)).to.deep.equal(sentences);
    });
  });

  describe("tokenizeWithLocation()", () => {
    it("should tokenize with location", () => {
      const text = "العربية: لغة جميلة.";
      const locations = [
        { token: "العربية", start: 0, end: 7 },
        { token: "لغة", start: 9, end: 12 },
        { token: "جميلة", start: 13, end: 18 },
      ];
      expect(araby.tokenizeWithLocation(text)).to.deep.equal(locations);
    });
  });

  describe("joint()", () => {
    it("should join letters and marks", () => {
      const letters = "العربية";
      const marks = "َََََُْ";
      expect(araby.joint(letters, marks)).to.equal("اَلْعَرَبَيَةُ");
    });
  });

  describe("separate()", () => {
    it("should separate letters and marks", () => {
      const letters = "العربية";
      const marks = "ـَـْـَـَـَـَـُ";
      const word = "اَلْعَرَبَيَةُ";
      const [l, m] = araby.separate(word);

      expect(araby.separate(word)).to.deep.equal([letters, marks]);
    });
  });

  describe("vocalizedSimilarity()", () => {
    it("should test vocalized similarity", () => {
      const word1 = "ضَربٌ";
      const word2 = "ضَرْبٌ";
      expect(araby.vocalizedlike(word1, word2)).to.be.true;
      expect(araby.vocalizedSimilarity(word1, word2)).to.not.equal(-2);
      expect(araby.vocalizedSimilarity(word1, word2)).to.be.true;
    });
  });

  describe("reduceTashkeel()", () => {
    it("should reduce tashkeel", () => {
      const word1 = "يُتَسََلَّمْنَ";
      const word2 = "يُتسلّمن";
      expect(araby.reduceTashkeel(word1)).to.equal(word2);
    });
  });
});
