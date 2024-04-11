export const otherSymbol = (cObj) => {
  let token = false;

  cObj.setResult();
  cObj.shiftPointer();

  cObj.isEndString();
  token = cObj.isResult();
  // if (token) {
  //   console.log(cObj.getResult() + " (isOtherSymbol) => " + cObj.getTail());
  // }
  return token;
};
