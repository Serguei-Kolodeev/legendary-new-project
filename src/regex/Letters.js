const isLetter = (character) => {
  return /[a-zA-Z_]/.test(character);
};

const isCyrilicLetter = (character) => {
  return /[а-яА-ЯЁё]/.test(character);
};

export const latinLetter1 = (cObj) => {
  let token = false;
  if (isLetter(cObj.getCharacter())) {
    cObj.setResult();
    cObj.shiftPointer();
  }
  cObj.isEndString();
  token = cObj.isResult();
  //if (token) {
  //  console.log(cObj.getResult() + " (isLatinLetter) => " + cObj.getTail());
  //}
  return token;
};
