const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
	let tms = obj.repeatTimes,
		sep = obj.separator,
		add = obj.addition, 
		addTms = obj.additionRepeatTimes,
		addSep = obj.additionSeparator;
	str = String(str);
	if (add === null || typeof add === 'boolean') add = String(add);
	if (!sep) {sep = "+"};
	if (!tms) {tms = 1};

	if (add && addTms && addSep) {str +=(add + addSep).repeat(addTms).slice(0, -addSep.length)}
	else if (add && addTms) {str +=add.repeat(addTms)}
	else if (add) {str +=add};
	return (str + sep).repeat(tms).slice(0, -sep.length);
};