# dice.py
import random

class Dice:
    """A simple class to simulate rolling a six-sided dice."""

    def __init__(self):
        self.value = 1

    def roll(self):
        """Roll the dice and set a random value between 1 and 6."""
        self.value = random.randint(1, 6)

    def get_value(self):
        """Return the current dice value."""
        return self.value

    def __str__(self):
        """Return a string representation of the dice value."""
        return str(self.value)
