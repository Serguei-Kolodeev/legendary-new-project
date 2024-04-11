export default class CodeObject {
  pointer = 0;
  code = [];
  result = "";
  tokenType = "";

  constructor(code) {
    this.code = code;
  }

  shiftPointer = () => {
    ++this.pointer;
  };

  getCharacter = () => {
    return this.code[this.pointer];
  };

  clearResult = () => {
    this.result = "";
  };

  setResult = () => {
    this.result += this.getCharacter();
  };

  getResult = () => {
    return this.result;
  };

  getTail = () => {
    return this.pointer < 0 ? "" : this.code.slice(this.pointer);
  };

  isEndString = () => {
    let isEnd = this.code[this.pointer] === undefined;
    if (isEnd) {
      this.pointer = -1;
    }
    return isEnd;
  };

  isResult = () => {
    let isResult = this.result.length > 0;
    if (!isResult) {
      this.result = undefined;
    }
    return isResult;
  };
}

/*
export const codeObject = {
  pointer: 0,
  code: [], //"G00 G43 H1 D1 Z27.0 [#45];",
  result: "",
  tokenType: "",
  shiftPointer() {
    ++this.pointer;
  },
  getCharacter() {
    return this.code[this.pointer];
  },
  clearResult() {
    this.result = "";
  },
  setResult() {
    this.result += this.getCharacter();
  },
  getResult() {
    return this.result;
  },
  getTail() {
    return this.pointer < 0 ? "" : this.code.slice(this.pointer);
  },
  isEndString() {
    let isEnd = this.code[this.pointer] === undefined;
    if (isEnd) {
      this.pointer = -1;
    }
    return isEnd;
  },
  isResult() {
    let isResult = this.result.length > 0;
    if (!isResult) {
      this.result = undefined;
    }
    return isResult;
  },
};
*/
