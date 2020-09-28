const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	let dt = "";
	  if (typeof arr !== "object" ||  arr === null) {
    return false
  }
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "string") {
			dt +=arr[i].trim().charAt(0).toUpperCase();
		}
	}
	return dt.split("").sort().join("");
};
