export default class HolbertonClass {
  constructor(size, location) {
    this._size = Number(size);
    this._location = location;
  }

  toString() {
    return this._location;
  }
}
