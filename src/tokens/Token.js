export default class Token {
  type;
  text;
  pos;

  constructor(type, text, pos) {
    this.type = type;
    this.text = text;
    this.pos = pos;
  }
}
