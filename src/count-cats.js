const CustomError = require("../extensions/custom-error");

module.exports = function countCats(obj) {
  return obj.flat(Infinity).filter(e => e === "^^").length;
};
