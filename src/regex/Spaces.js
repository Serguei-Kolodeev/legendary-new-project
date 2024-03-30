const isSpace = (character) => {
  return /[\s]/.test(character);
};

export const space = (wObj) => {
  //console.log(wObj)
  let token = false;
  //let {pointer, code, result} = wObj;
  //result = ""
  while (isSpace(wObj.getCharacter())) {
    wObj.setResult();
    wObj.shiftPointer();
  }
  wObj.isEndString();
  //console.log(wObj.isResult())
  token = wObj.isResult();
  //console.log('ts: ' + token)
  if (token) {
    console.log(wObj.getResult() + "(isSpace) => " + wObj.getTail());
  }
  //[wObj.pointer, wObj.result] = [pointer, result]
  return token;
};
