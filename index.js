const araby = require("./araby");
const number = require("./number");
const trans = require("./trans/trans");
const names = require("./Names/Names");

module.exports = {
  ...araby,
  ...number,
  ...trans,
  ...names,
};
