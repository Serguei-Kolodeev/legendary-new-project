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

  parse = () => {
    let parseLvlExpr = this.parseL1(); // + или -
    let token = this.readCurrent();
    if (token.type == "PLUS" || token.type == "MINUS") {
      console.log("PLUS MINUS");
    }
    return parseLvlExpr;
  };

  parseL1 = () => {
    let parseLvl2 = this.parseL2(); // * или /
    let token = this.readCurrent();
    if (token.type == "MULT" || token.type == "DIVIDE") {
      console.log("MULT DIVIDE");
    }
    return parseLvl2;
  };

  parseL2 = () => {
    //унарный минус
    let parseLvl3 = this.parseL3();
    let token = this.readCurrent();
    if (token.type == "MINUS") {
      console.log("UNARY MINUS");
    }
    return parseLvl3;
  };

  parseL3 = () => {
    // () или число
    let token = this.readCurrent();
    if (token.type == "OPENSQUAREBRACKET") {
      console.log("[");
    }
    if (token.type == "NUMBER") {
      console.log("PLUS MINUS");
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
    //console.log("parseAtom");
    let token = this.readCurrent();
    //console.log("parseAtom -> type ->" + token.type + ": value ->" + token.value);
    return this.maybeCall(() => {
      if (token.type == "LATINLETTER") {
        return this.parseAddress();
      }
      if (token.type == "MATHOPERATION") {
        //return this.parseUnary(token);
      }
      return this.readCurrent();
    });
    //return this.readCurrent();
  };

  parseAddress = () => {
    //console.log("parseAddres");
    let expr;
    let nextToken = this.readNext();
    if (nextToken.type == "NUMBER") {
      expr = {
        WORD: {
          TYPE: "WORD",
          ADDRESS: this.getCurrent(),
          VALUE: this.getCurrent(),
        },
      };
    }
    console.log(
      "parseAddres -> type ->" +
        expr.WORD.TYPE +
        ": value ->" +
        expr.WORD.ADDRESS.value +
        expr.WORD.VALUE.value
    );
    return expr;
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
