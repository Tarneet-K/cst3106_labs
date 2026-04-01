// lab06/yatzyEngine.js
// Skeleton for Yatzy scoring rules and validation

export class YatzyEngine {
  constructor() {
    // Example internal score table (category -> score or null)
    this.scoreTable = new Map();
    // TODO: initialize all categories you plan to support
    // e.g., ["Ones","Twos","Threes","Fours","Fives","Sixes","Three of a Kind","Four of a Kind","Full House","Small Straight","Large Straight","Yatzy","Chance"]
  }

  /**
   * Return score for the given category based on diceValues.
   * @param {string} category
   * @param {number[]} diceValues
   * @returns {number} score
   */
  calculateScore(category, diceValues) {
    // TODO: implement actual rule calculations
    return 0;
  }

  /**
   * Check whether selecting a category is valid for current diceValues.
   * @param {string} category
   * @param {number[]} diceValues
   * @returns {boolean}
   */
  isValidSelection(category, diceValues) {
    // TODO: implement validation (ex: can only score category once, etc.)
    return true;
  }

  /**
   * Persist a scored category
   * @param {string} category
   * @param {number} score
   */
  setScore(category, score) {
    // TODO: implement (store in scoreTable)
  }

  /**
   * Get current scoreboard object/map
   */
  getScores() {
    // TODO: return a snapshot of scoreTable
    return {};
  }
}
