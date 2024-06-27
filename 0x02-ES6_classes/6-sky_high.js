/* eslint-disable */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * @param {number} sqft - the number square root
   * @param {number} floors - room number in building
   *
   * Implement getters and setters
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
