const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(qty, speed) {
	let turns = Math.pow(2, qty) - 1,
		seconds = Math.floor(turns/(speed/3600)),
		obj = {turns: turns,
				seconds: seconds
		};
	return obj
};
