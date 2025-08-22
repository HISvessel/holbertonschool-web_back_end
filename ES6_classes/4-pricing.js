import Currency from "./3-currency.js"

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new Error("Amount must be a number")
    }

    this._amount = amount;
    this._currency = currency;
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
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}