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
    if (this.codeObject._code !== undefined) {
      while (!this.codeObject.isEndString()) {
        token = this.getToken();
        if (token !== undefined) {
          tokens.push(
            new Token(
              this.codeObject.getTokenType().type,
              this.codeObject.getResult()
            )
          );
        }
      }
    }
    return tokens;
  };

  getToken = () => {
    let tokenTypePointer = 0;
    let isToken = false;

    while (this.tokenTypesValues[tokenTypePointer] !== undefined) {
      this.codeObject.clearResult();
      this.codeObject.setTokenType(this.tokenTypesValues[tokenTypePointer]);
      //tokenType = this.tokenTypesValues[tokenTypePointer];
      isToken = this.codeObject.isToken(); //tokenType.regex(this.codeObject);
      if (isToken) {
        //tokenType.text = this.codeObject.getResult();
        console.log(
          this.codeObject.getTokenType().type +
            ": " +
            this.codeObject.getResult() +
            " => " +
            this.codeObject.getTail()
        );
        break;
      }
      tokenTypePointer += 1;
    }
    return this.codeObject;
  };
}
