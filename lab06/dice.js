// lab06/dice.js
// Skeleton for Dice module (roll logic + values storage)

export class Dice {
  /**
   * @param {number} count - number of dice in play
   */
  constructor(count = 5) {
    this.count = count;
    this.values = Array(count).fill(1);
    this.held = Array(count).fill(false);
  }

  /**
   * Roll all non-held dice and update this.values
   * @returns {number[]} updated values
   */
  roll() {
    // TODO: replace with real logic
    // Example (enable when implementing):
    // this.values = this.values.map((v, i) => this.held[i] ? v : (1 + Math.floor(Math.random() * 6)));
    return this.values;
  }

  /**
   * Toggle hold for a die index (0..count-1)
   * @param {number} index
   */
  toggleHold(index) {
    // TODO: implement
  }

  /**
   * Release all holds (used when starting a new turn)
   */
  resetHolds() {
    // TODO: implement
  }
}
