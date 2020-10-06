const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
let k = Math.log(2)/5730
let a = 15/(N)
    if ((typeof N === "string") && (+N) && ((+N > 0) && (+N < 15))) {
    return Math.ceil(Math.log(a) / k)
  } else {
    return false
  }
};
