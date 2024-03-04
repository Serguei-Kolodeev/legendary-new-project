const isDigit = (character) => {
  return /[\d.]/.test(character);
};

const isDot = (character) => {
  return /[.]/.test(character);
};

const isLetter = (character) => {
  return /[a-zA-Z_]/.test(character);
};

const isCyrilicLetter = (character) => {
  return /[а-яА-ЯЁё]/.test(character);
};

const isMathOperation = (character) => {
  return /[+-/*]/.test(character);
};

const isSignNumber = (character) => {
  return /[+-]/.test(character);
};

const isSpace = (character) => {
  return /[\s]/.test(character);
};

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

const isAngleBracket = (character) => {
  return /[<>]/.test(character);
};

const isOpenAngleBracket = (character) => {
  return /[<]/.test(character);
};

const isCloseAngleBracket = (character) => {
  return /[>]/.test(character);
};

const isSlash = (character) => {
  return /[/]/.test(character);
};

const isColon = (character) => {
  return /[:]/.test(character);
};

const isSemiColon = (character) => {
  return /[;]/.test(character);
};

const shiftPointer = (pointer) => {
  return ++pointer;
};

export const space = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "spaces",
  };
  let result = "";
  while (isSpace(inputString[pointer])) {
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

export const slash = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "slash",
  };
  let result = "";
  if (isSlash(inputString[pointer])) {
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

export const colon = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "colon",
  };
  let result = "";
  if (isColon(inputString[pointer])) {
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

export const semiColon = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "semicolon",
  };
  let result = "";
  if (isSemiColon(inputString[pointer])) {
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

export const fewLatinLetter = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "fewLatinLetter",
  };
  let result = "";
  while (isLetter(inputString[pointer])) {
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

export const mathOperation = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "mathOperation",
  };
  let result = "";
  while (isMathOperation(inputString[pointer])) {
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

export const otherSymbol = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "otherSymbol",
  };
  let result = "";
  result = result + inputString[pointer];
  pointer = shiftPointer(pointer);
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

//знак числа
export const signNumber = (pointer, inputString) => {
  let obj = {
    result: undefined,
    err: "no_error",
    type: "signNumber",
  };
  let result = "";
  while (isSignNumber(inputString[pointer])) {
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

//число со знаком
export const signumDigit = (pointer, inputString) => {
  let incomingPointer = pointer; //запоминаем начальную позицию распознавания
  let targetObj = {
    result: undefined,
    err: "no_error",
    type: "signumDigit",
  };
  let obj = undefined;

  //распознаем знак числа + или -
  [pointer, obj] = signNumber(pointer, inputString);
  if (obj.result !== undefined) {
    //если знак был распознан
    targetObj.result = obj.result; //сохраняем распознанный результат
    targetObj.err = obj.err;
  } else {
    //если знак был не распознан
    targetObj.result = undefined;
  }

  if (targetObj.result !== undefined) {
    //если был знак
    //пытаемся распознать число
    [pointer, obj] = digital(pointer, inputString);
    if (obj.result !== undefined) {
      //если число было распознано
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
      incomingPointer = pointer; //устанавливаем текущую позицию распознавания
    } else {
      //если число было не распознано
      targetObj.result = undefined;
    }
  }

  return [incomingPointer, targetObj];
};

//буакава с цифрой
export const address = (pointer, inputString) => {
  let incomingPointer = pointer; //запоминаем начальную позицию распознавания
  let targetObj = {
    result: undefined,
    err: "no_error",
    type: "address",
  };
  let obj = undefined;

  //распознаем одиночную латинскую букву
  [pointer, obj] = latinLetter(pointer, inputString);
  if (obj.result !== undefined) {
    //если буакава была распознана
    targetObj.result = obj.result; //сохраняем распознанный результат
    targetObj.err = obj.err;
  } else {
    //если буакава была не распознана
    targetObj.result = undefined;
  }

  //если была одиночная латинская буакава
  if (targetObj.result !== undefined) {
    //пытаемся распознать знак числа + или -
    //знак числа может быть, а может и не быть
    [pointer, obj] = signNumber(pointer, inputString);
    if (obj.result !== undefined) {
      //если знак был распознан
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    }
  }

  //если была одиночная латинская буакава
  if (targetObj.result !== undefined) {
    //пытаемся распознать число
    //число должно быть
    [pointer, obj] = digital(pointer, inputString);
    if (obj.result !== undefined) {
      //если число было распознано
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
      incomingPointer = pointer; //устанавливаем текущую позицию распознавания
    } else {
      //если число было не распознано
      targetObj.result = undefined;
    }
  }

  return [incomingPointer, targetObj];
};

//начало-конец блока в комметнарии
export const blockInfo = (pointer, inputString) => {
  // /T:1/
  // / - открывающая операторная скобка
  // T - тип блока (T - начало нового инструмента , E - начало нового сегмента)
  // : - разделитель
  // 1 - ID блока
  // / - закрывающая операторная скобка
  let incomingPointer = pointer; //запоминаем начальную позицию распознавания
  let targetObj = {
    result: undefined,
    err: "no_error",
    type: "blockInfo",
  };
  let obj = undefined;

  //распознаем косую черту
  [pointer, obj] = slash(pointer, inputString);
  if (obj.result !== undefined) {
    //если косая черта была распознана
    targetObj.result = obj.result; //сохраняем распознанный результат
    targetObj.err = obj.err;
  } else {
    //если косая черта была не распознана
    targetObj.result = undefined;
  }

  //если была косая черта
  if (targetObj.result !== undefined) {
    //пытаемся распознать одиночную латинскую буакаву
    [pointer, obj] = latinLetter(pointer, inputString);
    if (obj.result !== undefined) {
      //если буакава была распознана
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    } else {
      //если буакава была не распознана
      targetObj.result = undefined;
    }
  }

  //если была и косая черта и буакава
  if (targetObj.result !== undefined) {
    //пытаемся распознать двоеточию
    [pointer, obj] = colon(pointer, inputString);
    if (obj.result !== undefined) {
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    } else {
      //если двоеточия была не распознана
      targetObj.result = undefined;
    }
  }

  //если была и косая черта и буакава и двоеточия
  if (targetObj.result !== undefined) {
    //пытаемся распознать число без знака
    [pointer, obj] = digital(pointer, inputString);
    if (obj.result !== undefined) {
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    } else {
      //если числа была не распознана
      targetObj.result = undefined;
    }
  }

  //если была и косая черта и буакава и двоеточия и число
  if (targetObj.result !== undefined) {
    //пытаемся распознать косую черту
    [pointer, obj] = slash(pointer, inputString);
    //если все было: была и косая черта и буакава и двоеточия и число и ишо косая черта
    if (obj.result !== undefined) {
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
      incomingPointer = pointer; //устанавливаем текущую позицию распознавания
    } else {
      //если косая черта была не распознана
      targetObj.result = undefined;
    }
  }

  //если хоть одно условие не сошлося, вертаем все обратна

  return [targetObj, incomingPointer];
};

export const comment = (pointer, inputString) => {
  //(/T:1/ кокойты текст)
  // ( - начало комментария
  // /T:1/ - ID блока
  // кокойты текст - название блока
  // ) - конец комментария

  let incomingPointer = pointer; //запоминаем начальную позицию распознавания
  let targetObj = {
    result: undefined,
    err: "no_error",
    type: "address",
  };

  let openBlock = false;
  let closeBlock = false;
  let errBlock = false;
  let result;
  let obj = undefined;

  //распознаем открывающую круглую скобку
  [pointer, obj] = openRoundBracket(pointer, inputString);
  if (obj.result !== undefined) {
    //если открывающая круглая скобка была распознана
    targetObj.result = obj.result; //сохраняем распознанный результат
    //проверяем был ли уже открыт блок.
    if (openBlock) {
      obj.err = "error";
      errBlock = true;
    }
    targetObj.err = obj.err;
    openBlock = true;
  } else {
    //если открывающая круглая скобка была не распознана
    targetObj.result = undefined;
  }

  //пытаемся распознать начало блока кода
  //его можитьбыть можитьнебыть
  if (targetObj.result !== undefined) {
    [pointer, obj] = blockInfo(pointer, inputString);
    if (obj.result !== undefined) {
      //если начало блока кода была распознана
      targetObj.result = obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    }
  }

  //если была одиночная латинская буакава
  if (targetObj.result !== undefined) {
    //пытаемся распознать знак числа + или -
    //знак числа может быть, а может и не быть
    [pointer, obj] = signNumber(pointer, inputString);
    if (obj.result !== undefined) {
      //если знак был распознан
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
    }
  }

  //если была одиночная латинская буакава
  if (targetObj.result !== undefined) {
    //пытаемся распознать число
    //число должно быть
    [pointer, obj] = digital(pointer, inputString);
    if (obj.result !== undefined) {
      //если число было распознано
      targetObj.result += obj.result; //сохраняем распознанный результат
      targetObj.err = obj.err;
      incomingPointer = pointer; //устанавливаем текущую позицию распознавания
    } else {
      //если число было не распознано
      targetObj.result = undefined;
    }
  }

  return [incomingPointer, targetObj];
};
