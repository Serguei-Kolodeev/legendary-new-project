const isBracket = (character) => {
  return /[(){}[]<>]/.test(character);
};

const isSquareBracket = (character) => {
  return /[[]]/.test(character);
};

const isOpenSquareBracket = (character) => {
  return /[[]/.test(character);
};

const isCloseSquareBracket = (character) => {
  return /[\]]/.test(character);
};

const isRoundBracket = (character) => {
  return /[()]/.test(character);
};

const isOpenRoundBracket = (character) => {
  return /[(]/.test(character);
};

const isCloseRoundBracket = (character) => {
  return /[)]/.test(character);
};

const isCurveBracket = (character) => {
  return /[{}]/.test(character);
};

const isOpenCurveBracket = (character) => {
  return /[{]/.test(character);
};

const isCloseCurveBracket = (character) => {
  return /[}]/.test(character);
};

export const openRoundBracket = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "openRoundBracket",
  };
  let result = "";
  if (isOpenRoundBracket(inputString[pointer])) {
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

export const closeRoundBracket = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "closeRoundBracket",
  };
  let result = "";
  if (isCloseRoundBracket(inputString[pointer])) {
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
