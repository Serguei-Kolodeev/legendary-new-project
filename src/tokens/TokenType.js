import * as regx from "../regex/Regex";

export default class TokenType {
  name;
  regex;

  constructor(name, regex) {
    this.name = name;
    this.regex = regex;
  }
}

export const tokenTypesList = {
  LATINLETTER: new TokenType("LATINLETTER", regx.letters),
  NUMBER: new TokenType("NUMBER", regx.digits),
  SEMICOLON: new TokenType("SEMICOLON", regx.semiColon),
  SPACE: new TokenType("SPACE", regx.space),
  //ASSIGN: new TokenType("ASSIGN", "РАВНО"),
  //LOG: new TokenType("LOG", "КОНСОЛЬ"),
  //MATHOPERATION: new TokenType("PLUS", regx.mathOperation),
  //MINUS: new TokenType("MINUS", "МИНУС"),
  //OPENROUNDBRACKET: new TokenType("LPAR", regx.openRoundBracket),
  //CLOSEROUNDBRACKET: new TokenType("RPAR", regx.closeRoundBracket),
  //SLASH: new TokenType("RPAR", regx.slash),
  OTHER: new TokenType("OTHER", regx.others),
};
