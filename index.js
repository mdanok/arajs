const araby = require("./araby");
const number = require("./number");
const trans = require("./trans/trans");

module.exports = {
  ...araby,
  ...number,
  ...trans,
};
