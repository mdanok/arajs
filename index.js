const araby = require("./src/araby");
const number = require("./src/number");
const trans = require("./src/trans/trans");

module.exports = {
  ...araby,
  ...number,
  ...trans,
};
