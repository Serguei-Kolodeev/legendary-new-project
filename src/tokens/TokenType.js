import * as regx from "../regex/Regex";

export default class TokenType {
  name;
  regex;
  htmlTag;
  text = "";

  constructor(name, regex, htmlTag) {
    this.name = name;
    this.regex = regex;
    this.htmlTag = htmlTag;
  }
}

export const tokenTypesList = {
  LATINLETTER: new TokenType("LATINLETTER", regx.letters, "latinletter"),
  NUMBER: new TokenType("NUMBER", regx.digits, "digit"),
  SEMICOLON: new TokenType("SEMICOLON", regx.semiColon, "semicolon"),
  SPACE: new TokenType("SPACE", regx.space, "space"),
  //ASSIGN: new TokenType("ASSIGN", "РАВНО"),
  //LOG: new TokenType("LOG", "КОНСОЛЬ"),
  //MATHOPERATION: new TokenType("PLUS", regx.mathOperation),
  //MINUS: new TokenType("MINUS", "МИНУС"),
  //OPENROUNDBRACKET: new TokenType("LPAR", regx.openRoundBracket),
  //CLOSEROUNDBRACKET: new TokenType("RPAR", regx.closeRoundBracket),
  //SLASH: new TokenType("RPAR", regx.slash),
  OTHER: new TokenType("OTHER", regx.others, "other"),
};
