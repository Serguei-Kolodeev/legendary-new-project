const isDigit = (character) => {
  return /[\d.]/.test(character);
};

const isDot = (character) => {
  return /[.]/.test(character);
};

export const digital1 = (wObj) => {
  //console.log(wObj)
  let token = false;
  //let {pointer, code, result} = wObj;
  //result = ""
  while (isDigit(wObj.getCharacter())) {
    wObj.setResult();
    wObj.shiftPointer();
  }
  wObj.isEndString();
  //console.log(wObj.isResult())
  token = wObj.isResult();
  //console.log('td: ' + token)
  if (token) {
    console.log(wObj.getResult() + " (isDigit) => " + wObj.getTail());
  }
  //[wObj.pointer, wObj.result] = [pointer, result]
  return token;
};

export const digital = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "intDigit",
  };
  let dot = false;
  let result = "";
  while (isDigit(inputString[pointer])) {
    result = result + inputString[pointer];
    if (isDot(inputString[pointer])) {
      obj.type = "floatDigit";
      if (dot) {
        obj.err = "error";
      } else {
        dot = true;
      }
    }
    pointer = shiftPointer(pointer);
  }
  if (inputString[pointer] === undefined) {
    pointer = -1;
  }
  if (result.length <= 0) {
    result = undefined;
  } else {
    obj.result = result;
    console.log(
      obj.result +
        "(" +
        obj.type +
        "-" +
        obj.err +
        ") => " +
        (pointer < 0 ? "" : inputString.slice(pointer))
    );
  }
  return [pointer, obj];
};
