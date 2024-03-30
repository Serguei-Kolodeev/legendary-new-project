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

export const semiColon = (wObj) => {
  let token = false;
  if (isSemiColon(wObj.getCharacter())) {
    wObj.setResult();
    wObj.shiftPointer();
  }
  wObj.isEndString();
  token = wObj.isResult();
  //console.log('tc: ' + token)
  if (token) {
    console.log(wObj.getResult() + " (isSemicolon) => " + wObj.getTail());
  }
  return token;
};
