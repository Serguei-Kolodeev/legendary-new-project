export default class CodeObject {
  _pointer = 0;
  _code = [];
  _result = "";
  _tokenType;

  constructor(code) {
    this._code = code;
  }

  shiftPointer = () => {
    ++this._pointer;
  };

  getCharacter = () => {
    return this._code[this._pointer];
  };

  clearResult = () => {
    this._result = "";
  };

  setResult = () => {
    this._result += this.getCharacter();
  };

  getResult = () => {
    return this._result;
  };

  getTail = () => {
    return this._pointer < 0 ? "" : this._code.slice(this._pointer);
  };

  isEndString = () => {
    let isEnd = this._code[this._pointer] === undefined;
    if (isEnd) {
      this._pointer = -1;
    }
    return isEnd;
  };

  isResult = () => {
    let isResult = this._result.length > 0;
    if (!isResult) {
      this._result = undefined;
    }
    return isResult;
  };

  setTokenType = (type) => {
    this._tokenType = type;
  };

  getTokenType = () => {
    return this._tokenType;
  };

  isToken = () => {
    return this._tokenType.regex(this);
  };
}
