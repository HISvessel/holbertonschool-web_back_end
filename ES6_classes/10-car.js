export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.kind]() {
    return this;
  }

  cloneCar() {
    const Kind =  this.constructor[Symbol.kind];
    return new Kind;    
  }
}
