const isColon = (character) => {
  return /[:]/.test(character);
};

const isSemiColon = (character) => {
  return /[;]/.test(character);
};

const isComma = (character) => {
  return /[,]/.test(character);
};

const isSingleQuote = (character) => {
  return /[']/.test(character);
};

const isDoubleQuote = (character) => {
  return /["]/.test(character);
};

const isExclamation = (character) => {
  return /[!]/.test(character);
};

const isQuestion = (character) => {
  return /[?]/.test(character);
};

export const semiColon = (cObj) => {
  let token = false;
  if (isSemiColon(cObj.getCharacter())) {
    cObj.setResult();
    cObj.shiftPointer();
  }
  cObj.isEndString();
  token = cObj.isResult();
  // if (token) {
  //   console.log(cObj.getResult() + " (isSemicolon) => " + cObj.getTail());
  // }
  return token;
};
