# yatzy_game.py
from yatzy_engine import YatzyEngine

def main():
    print("🎲 Welcome to Yatzy! 🎲")
    game = YatzyEngine()

    while True:
        input("\nPress Enter to roll the dice...")
        game.roll_dice()
        values = game.get_dice_values()
        print("You rolled:", values)

        # Ask player if they want to save dice
        save_input = input("Enter dice numbers to save (1–5) separated by spaces, or press Enter to roll again: ")
        if save_input:
            indices = [int(x) - 1 for x in save_input.split() if x.isdigit()]
            for i in indices:
                game.toggle_save(i)

        roll_again = input("Roll again? (y/n): ").lower()
        if roll_again != 'y':
            print("\nFinal dice:", game.get_dice_values())
            print("Thanks for playing Yatzy!")
            break

        print("Saved dice:", [i + 1 for i, saved in enumerate(game.saved) if saved])

if __name__ == "__main__":
    main()
