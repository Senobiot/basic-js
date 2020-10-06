const CustomError = require("../extensions/custom-error");

const chainMaker = {
   chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    String(value).length === 0 ? this.chain.push("()"):
    this.chain.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if (!this.chain[position - 1]) { 
        this.chain = [];
        throw new Error("error")};
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = []
    return result;
  }
};

module.exports = chainMaker;
