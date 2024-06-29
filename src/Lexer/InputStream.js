export default class InputStream {
  _pointer = 0;
  _input;

  constructor(input) {
    this._input = input;
  }

  getCurrent = () => {
    //получаем элемент по текущему указателю
    let returned = this._input[this._pointer];
    this._pointer++;
    return returned;
  };

  readNext = () => {
    //смотрим следующий элемент
    return this._input[this._pointer];
  };

  isEndInput = () => {
    //проверка что ввод закончился
    return this.readNext() === undefined;
  };
}
