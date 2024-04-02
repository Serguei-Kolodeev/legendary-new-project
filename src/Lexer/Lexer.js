import { tokenTypesList } from "../tokens/TokenType";
import Token from "../tokens/Token";

export default class Lexer {
  codeObject = {
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
  tokenTypesValues = Object.values(tokenTypesList);

  constructor(code) {
    this.codeObject.code = code;
  }

  lexAnalysys = () => {
    let token = undefined;
    let tokens = [];
    if (this.codeObject.code !== undefined) {
      while (!this.codeObject.isEndString) {
        token = this.getToken();
        if (token !== undefined) {
          tokens.push(new Token(token.type, token.text));
        }
      }
    }
    return tokens;
  };

  getToken = () => {
    let tokenType;
    let tokenTypePointer = 0;
    let isToken = false;

    while (this.tokenTypesValues[tokenTypePointer] !== undefined) {
      this.codeObject.clearResult();
      tokenType = this.tokenTypesValues[tokenTypePointer];
      isToken = tokenType.regex(this.codeObject);
      if (isToken) {
        tokenType.text = this.codeObject.getResult();
        console.log(
          tokenType.name +
            ": " +
            tokenType.text +
            " => " +
            this.codeObject.getTail()
        );
        break;
      }
      tokenTypePointer = +1;
    }
    return tokenType;
  };
}
