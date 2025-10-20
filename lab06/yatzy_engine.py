# yatzy_engine.py
from dice import Dice

class YatzyEngine:
    """Handles the game logic for rolling and scoring dice in Yatzy."""

    def __init__(self, num_dice=5):
        """Create a Yatzy engine with a given number of dice (default 5)."""
        self.dice_list = [Dice() for _ in range(num_dice)]
        self.saved = [False] * num_dice

    def roll_dice(self):
        """Roll all unsaved dice."""
        for i, dice in enumerate(self.dice_list):
            if not self.saved[i]:
                dice.roll()

    def get_dice_values(self):
        """Return a list of the current dice values."""
        return [dice.get_value() for dice in self.dice_list]

    def toggle_save(self, index):
        """Toggle whether a die at a given index is saved or not."""
        if 0 <= index < len(self.saved):
            self.saved[index] = not self.saved[index]

    def reset_saves(self):
        """Reset all dice to unsaved for a new turn."""
        self.saved = [False] * len(self.saved)
