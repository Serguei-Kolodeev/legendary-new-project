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
      console.log(this.getCurrent());
    }
  };

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
}
