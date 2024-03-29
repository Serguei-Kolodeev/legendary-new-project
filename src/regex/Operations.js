const isOperation = (character) => {
  return /[+-/*=<>]/.test(character);
};

export const mathOperation = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "mathOperation",
  };
  let result = "";
  while (isOperation(inputString[pointer])) {
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
