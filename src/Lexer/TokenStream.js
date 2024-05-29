export default class TokenStream {
  _inputStream;
  _result = "";
  _tokenType;

  constructor(input) {
    this._inputStream = input;
  }
}
