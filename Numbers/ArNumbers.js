const nbconst = require("../consts/number_const.js");

class ArNumbers {
  constructor() {
    this._individual = nbconst.INDIVIDUALS;
    this.complications = nbconst.COMPLICATIONS;
    this._feminine = 1;
    this._format = 1;
  }

  setFeminine(value) {
    let flag = true;
    if (value === 1 || value === 2) {
      this._feminine = value;
    } else {
      flag = false;
    }
    return flag;
  }

  setFormat(value) {
    let flag = true;
    if (value === 1 || value === 2) {
      this._format = value;
    } else {
      flag = false;
    }
    return flag;
  }

  getFeminine() {
    return this._feminine;
  }

  getFormat() {
    return this._format;
  }

  int2str(number, outputCharset = null, main = null) {
    const temp = number.split(".");
    let string = this._int2str(temp[0]);
    if (temp.length > 1) {
      const dec = this._int2str(temp[1]);
      string += " فاصلة " + dec;
    }
    if (main) {
      if (!outputCharset) {
        outputCharset = main.getOutputCharset();
      }
      string = main.coreConvert(string, "utf-8", outputCharset);
    }
    return string;
  }
  _int2str(numberStr) {
    let blocks = [];
    let items = [];
    let string = "";

    let number;
    try {
      number = parseInt(numberStr, 10);
    } catch (error) {
      number = 0;
    }

    if (number > 0) {
      let numberPart = "";
      while (numberStr.length > 3) {
        blocks.push(numberStr.slice(-3));
        numberStr = numberStr.slice(0, -3);
      }
      blocks.push(numberStr);
      let blocksNum = blocks.length - 1;
      let i = blocksNum;
      while (i >= 0) {
        number = Math.floor(parseInt(blocks[i], 10));
        let text = this._writtenBlock(number);
        if (text) {
          if (number === 1 && i !== 0) {
            text = this.complications[i][4];
          } else if (number === 2 && i !== 0) {
            text = this.complications[i][this._format];
          } else if (number > 2 && number < 11 && i !== 0) {
            text += " " + this.complications[i][3];
          } else if (i !== 0) {
            text += " " + this.complications[i][4];
          }
          items.push(text);
        }
        i -= 1;
      }
      string = items.join(" و ");
    } else {
      string = "صفر";
    }
    return string;
  }

  _writtenBlock(number) {
    let items = [];
    let string = "";
    number = parseInt(number, 10);

    if (number > 99) {
      let hundred = Math.floor(number / 100) * 100;
      number = number % 100;

      if (hundred === 200) {
        items.push(this._individual[hundred][this._format]);
      } else {
        items.push(this._individual[hundred]);
      }
    }
    if (number === 2 || number === 12) {
      items.push(this._individual[number][this._feminine][this._format]);
    } else if (number < 20) {
      items.push(this._individual[number][this._feminine]);
    } else {
      let ones = number % 10;
      let tens = Math.floor(number / 10) * 10;
      tens = parseInt(tens, 10);

      if (ones === 2) {
        items.push(this._individual[ones][this._feminine][this._format]);
      } else if (ones > 0) {
        items.push(this._individual[ones][this._feminine]);
      }
      items.push(this._individual[tens][this._format]);
    }

    if (items.includes("")) {
      items = items.filter((item) => item !== "");
    }
    string = items.join(" و ");
    return string;
  }
}
module.exports = { ArNumbers };
