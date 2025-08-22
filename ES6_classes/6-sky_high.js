import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    }
  get sqft() {
    return this._sqft;
  }
  set sqft(input) {
    this._sqft = input;
  }

  get floors() {
    return this._floors;
  }
  set floors(input) {
    this._floors = input;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`
  }
}
