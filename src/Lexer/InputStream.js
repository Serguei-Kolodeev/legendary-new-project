export default class InputStream {
  _pointer = 0;
  _input;
  _current;

  constructor(input) {
    this._input = input;
  }

  getCurrent = () => {
    //получаем элемент по текущему указателю и сдвигаем указатель
    this._current = this._input[this._pointer];
    this._pointer++;
    return this._current;
  };

  readCurrent = () => {
    //смотрим элемент по текущему указателю без сдвига указателя
    this._current = this._input[this._pointer];
    return this._current;
  };

  readNext = () => {
    //смотрим следующий элемент
    return this._input[this._pointer + 1];
  };

  isEndInput = () => {
    //проверка что ввод закончился
    return this.readNext() === undefined;
  };
}
