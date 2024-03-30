const isLetter = (character) => {
  return /[a-zA-Z_]/.test(character);
};

const isCyrilicLetter = (character) => {
  return /[а-яА-ЯЁё]/.test(character);
};

export const latinLetter1 = (wObj) => {
  //console.log(wObj)
  let token = false;
  //let {pointer, code, result} = wObj;
  //result = ""
  if (isLetter(wObj.getCharacter())) {
    wObj.setResult();
    wObj.shiftPointer();
  }
  wObj.isEndString();
  //console.log(wObj.isResult())
  token = wObj.isResult();
  //console.log('tl: ' + token)
  if (token) {
    console.log(wObj.getResult() + " (isLatinLetter) => " + wObj.getTail());
  }
  //[wObj.pointer, wObj.result] = [pointer, result]
  return token;
};

export const cyrilicLetter = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "oneCyrilicLetter",
  };
  let result = "";
  while (isCyrilicLetter(inputString[pointer])) {
    result = result + inputString[pointer];
    pointer = shiftPointer(pointer);
  }
  if (inputString[pointer] === undefined) {
    pointer = -1;
  }
  if (result.length <= 0) {
    result = undefined;
  } else {
    if (result.length > 1) {
      obj.type = "fewCyrilicLetter";
    }
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

export const latinLetter = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "oneLatinLetter",
  };
  let result = "";
  if (isLetter(inputString[pointer])) {
    result = result + inputString[pointer];
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
