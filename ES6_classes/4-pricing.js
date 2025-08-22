import Currency from "./3-currency.js"

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = new Currency(currency.code, currency.name);
  }

  get amount() {
    return this._amount;
  }

  set amount(input) {
    this._amount = input;
  }

    get currency() {
    return this._currency;
  }

  set currency(input) {
    this._currency = input;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
  static convertPrize(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      console.error("Parameters must be numbers")
    }
    return this._amount * conversionRate;
  }
}