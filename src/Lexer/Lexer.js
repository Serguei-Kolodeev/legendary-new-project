import * as regx from "..//regex/Regex";
import * as token from "../tokens/Token";
import { tokenTypesList } from "../tokens/TokenType";

export default class Lexer {
  code = [];
  pos = 0;
  tokenList = [];
  workObject = {
    pointer: 0,
    code: "G00 G43 H1 D1 Z27.0 [#45];",
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
    this.code = code;
  }

  lexAnalysys = () => {
    if (this.code !== undefined) {
      while (this.nextToken()) {
        /* empty */
      }
    }
  };

  nextToken = () => {
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

    /*
    //let [pointer, obj] = [0, undefined];
    while (this.code[pointer] !== undefined) {
      [pointer, obj] = regx.address(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.latinLetter(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.signumDigit(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.digital(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.cyrilicLetter(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.space(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.mathOperation(pointer, this.code);
      if (obj.result !== undefined) {
        this.tokenList.push(obj);
        continue;
      }

      [pointer, obj] = regx.otherSymbol(pointer, this.code);
      this.tokenList.push(obj);
    }
    */

    return this.code[pointer] === undefined;
  };
}
