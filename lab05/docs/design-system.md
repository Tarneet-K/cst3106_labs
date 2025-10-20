# Design System – Yatzy 

## Colors
| Name       | Hex     | Usage                         |
|------------|---------|-------------------------------|
| Primary    | #F472B6 | Buttons / accents / section headings |
| Hover      | #DB2777 | Button hover/active           |
| Background | #FFEFF7 | Page background (soft pink)   |
| Card       | #FFFFFF | Dice & Scorecard panels       |
| Border     | #F4D9E5 | Card & dice borders           |
| Text       | #1F2937 | Body text                     |

**Rationale:** Soft pink keeps the UI playful and friendly. Dark text on a light pastel maintains readability. White “card” panels and gentle shadows separate sections so the page feels clean and organized.

## Typography
- Headings: Lilita One (already used for the “Yatzy” title)
- Body: Inter (no change requested)

## Spacing & Shape
- Base spacing: 12px
- Card radius: 16px
- Dice radius: 14px
- Shadow: soft (0 8–20px, 0.05–0.06 opacity)

## States
- Dice hover: lift + pink glow (border → #F472B6)
- (Future) Held die: light pink fill (#FDE2E4) to indicate selection

## Accessibility
- Sufficient contrast (dark text on light background)
- Large hit targets (85×85px dice, pill button)
- Clear grouping with cards and headings
