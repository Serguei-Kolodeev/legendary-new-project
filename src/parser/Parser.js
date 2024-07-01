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
    console.log(
      "type ->" +
        this.readCurrent().type +
        ": value ->" +
        this.readCurrent().value
    );
    return this.readCurrent();
  };

  /*
  parseWord = () => {
    return this.maybeAddress(() => {
      return maybeAddresValue();
    });
  };

  maybeAddress = (expr) => {
    expr = expr();
    let token = this.readCurrent();
    return token.value == "LATINLETTER" ? "ADDRESS" : "NON ADDRESS";
  };
  */
}
