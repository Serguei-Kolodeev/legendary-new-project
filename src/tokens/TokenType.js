import * as regx from "..//regex/Regex";

export default class TokenType {
  name;
  regex;

  constructor(name, regex) {
    this.name = name;
    this.regex = regex;
  }
}

export const tokenTypesList = {
  ADDRESS: new TokenType("ADDRESS", regx.latinLetter),
  NUMBER: new TokenType("NUMBER", regx.digital),
  LATLETTERS: new TokenType("LATLETTERS", regx.fewLatinLetter),
  CYRLETTERS: new TokenType("CYRLETTERS", regx.cyrilicLetter),
  SEMICOLON: new TokenType("SEMICOLON", regx.semiColon),
  SPACE: new TokenType("SPACE", regx.space),
  //ASSIGN: new TokenType("ASSIGN", "РАВНО"),
  //LOG: new TokenType("LOG", "КОНСОЛЬ"),
  MATHOPERATION: new TokenType("PLUS", regx.mathOperation),
  //MINUS: new TokenType("MINUS", "МИНУС"),
  OPENROUNDBRACKET: new TokenType("LPAR", regx.openRoundBracket),
  CLOSEROUNDBRACKET: new TokenType("RPAR", regx.closeRoundBracket),
  SLASH: new TokenType("RPAR", regx.slash),
};
