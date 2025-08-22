import Currency from "./3-currency.js"

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new Error("Amount must be a number")
    }

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
  static convertPrize(_amount, conversionRate) {
    return this._amount * conversionRate;
  }
}