// lab06/yatzyGame.js
// Skeleton for game state & flow control (turns, rounds, totals)

import { Dice } from "./dice.js";
import { YatzyEngine } from "./yatzyEngine.js";

export class YatzyGame {
  constructor({ players = 1, diceCount = 5, maxRolls = 3 } = {}) {
    this.players = players;
    this.currentPlayer = 0;
    this.currentRound = 1;
    this.maxRolls = maxRolls;

    this.dice = new Dice(diceCount);
    this.engine = new YatzyEngine();

    this.rollsThisTurn = 0;
    this.finished = false;
    this.totals = Array(players).fill(0);
  }

  startNewGame() {
    // TODO: reset all state, scores, rounds, etc.
  }

  roll() {
    if (this.rollsThisTurn >= this.maxRolls) return this.dice.values;
    this.rollsThisTurn += 1;
    return this.dice.roll();
  }

  scoreCategory(category) {
    // TODO: validate via engine, compute score, update totals & engine table
    // then call endTurn()
  }

  endTurn() {
    // TODO: advance to next player / next round and reset turn state
  }

  endGame() {
    // TODO: set finished, compute winner(s), return summary object
    return {
      finished: true,
      totals: this.totals,
      // winnerIndex: ...
    };
  }
}
