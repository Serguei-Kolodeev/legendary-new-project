const isDigit = (character) => {
  return /[\d.]/.test(character);
};

const isDot = (character) => {
  return /[.]/.test(character);
};

export const digital1 = (cObj) => {
  let token = false;
  while (isDigit(cObj.getCharacter())) {
    cObj.setResult();
    cObj.shiftPointer();
  }
  cObj.isEndString();
  token = cObj.isResult();
  // if (token) {
  //   console.log(cObj.getResult() + " (isDigit) => " + cObj.getTail());
  // }
  return token;
};

/*
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
*/
