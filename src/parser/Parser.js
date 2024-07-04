/*
строка может начинаться с символов:
[A-Za-z] LATINLETTER
;SEMICOLON
SPACE
[OpenSquareBracket
(OpenRoundBracket
%isPercent
#isHash
/isSlash
*/

import InputStream from "../Lexer/InputStream";

export default class Parser extends InputStream {
  tokenStream = [];
  constructor(tokenSteram) {
    super(tokenSteram);
    this.tokenStream = tokenSteram;
  }

  getAllTokens = () => {
    while (!this.isEndInput()) {
      this.parseExpression();
      console.log(this.getCurrent());
    }
  };

  parseExpression = () => {
    console.log("parseExpression");
    return this.maybeCall(() => {
      return this.maybeBinary(this.parseAtom());
    });
  };

  maybeCall = (expr) => {
    console.log("maybeCall");
    expr = expr();
    return expr;
  };

  maybeBinary = (left) => {
    console.log("maybeBinary");
    return left;
  };

  parseAtom = () => {
    console.log("parseAtom");
    let token = this.readCurrent();
    console.log("type ->" + token.type + ": value ->" + token.value);
    return this.maybeCall(() => {
      if (token.type == "LATINLETTER") {
        return this.parseAddress(token);
      }
      if (token.type == "MATHOPERATION") {
        return this.parseUnary(token);
      }
      return this.readCurrent();
    });
    //return this.readCurrent();
  };

  parseAddress = (expr) => {
    console.log("parseAddres");
    expr = expr();
    let token = this.readCurrent();
    console.log("type ->" + token.type + ": value ->" + token.value);
  };

  parseUnary = (expr) => {
    console.log("parseUnary");
    expr = expr();
    let token = this.readCurrent();
    console.log("type ->" + token.type + ": value ->" + token.value);
  };

  /*
  parseWord = () => {
    return this.maybeAddress(() => {
      return maybeAddresValue();
    });
  };


  */
}
