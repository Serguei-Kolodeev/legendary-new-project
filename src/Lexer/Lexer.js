import { tokenTypesList } from "../tokens/TokenType";
import Token from "../tokens/Token";
import CodeObject from "../Lexer/CodeObject.js";

export default class Lexer {
  tokenTypesValues = Object.values(tokenTypesList);
  codeObject;
  constructor(code) {
    this.codeObject = new CodeObject(code);
  }

  lexAnalysys = () => {
    let token = undefined;
    let tokens = [];
    if (this.codeObject.code !== undefined) {
      while (!this.codeObject.isEndString()) {
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
      tokenTypePointer += 1;
    }
    return tokenType;
  };
}
