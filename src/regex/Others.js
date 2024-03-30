export const otherSymbol = (wObj) => {
  //console.log(wObj)
  let token = false;
  //let {pointer, code, result} = wObj;
  //result = ""
  wObj.setResult();
  wObj.shiftPointer();

  wObj.isEndString();
  //console.log(wObj.isResult())
  token = wObj.isResult();
  //console.log('to: ' + token)
  if (token) {
    console.log(wObj.getResult() + " (isOtherSymbol) => " + wObj.getTail());
  }
  return token;
};
