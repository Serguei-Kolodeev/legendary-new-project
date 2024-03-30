import { tokenTypesList } from "../tokens/TokenType";

export default class Lexer {
  tokenList = [];
  codeObject = {
    pointer: 0,
    code: [], //"G00 G43 H1 D1 Z27.0 [#45];",
    result: "",
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

  constructor(code) {
    this.codeObject.code = code;
  }

  lexAnalysys = () => {
    if (this.codeObject.code !== undefined) {
      while (!this.codeObject.isEndString) {
        /* empty */
      }
    }
  };

  getToken = () => {
    let pos = 0;
    const tokenTypesValues = Object.values(tokenTypesList);
    let tokenType;
    let token;
    let [pointer, obj] = [0, undefined];

    //здесь должен получить токен
    token = this.code[pointer];
    //здесь проверяю на тип токена
    while (tokenTypesValues[pos] !== undefined && token !== undefined) {
      tokenType = tokenTypesValues[pos];
      [pointer, obj] = tokenType.regex();
      pos = +1;
    }
    return this.code[pointer] === undefined;
  };
}
