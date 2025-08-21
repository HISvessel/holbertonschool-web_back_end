export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  get code() {
    return this._code;
  }
  set code(input) {
    this._code = input;
  }
  get name() {
    return this._name;
  }
  set name(input) {
    this._name = input;
  }
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    };
}
