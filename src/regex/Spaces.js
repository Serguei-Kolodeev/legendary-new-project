const isSpace = (character) => {
  return /[\s]/.test(character);
};

export const space = (cObj) => {
  let token = false;

  while (isSpace(cObj.getCharacter())) {
    cObj.setResult();
    cObj.shiftPointer();
  }
  cObj.isEndString();
  token = cObj.isResult();
  // if (token) {
  //   console.log(cObj.getResult() + "(isSpace) => " + cObj.getTail());
  // }
  return token;
};
