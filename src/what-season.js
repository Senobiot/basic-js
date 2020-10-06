const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  }
  let m = date.getMonth(),
      season = "";
  m === 11 || m === 0 || m === 1 ? season = "winter" :
  m === 2 || m === 3 || m === 4 ? season = "spring" :
  m === 5 || m === 6 || m === 7 ? season = "summer" :
  season = "autumn";

  return season
};
