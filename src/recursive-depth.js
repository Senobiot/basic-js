const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		for (let value of arr) {
			if (Array.isArray(value)) {
			return 1 + this.calculateDepth(arr.flat());
			}
		}
	return 1;
	}
};