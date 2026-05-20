# Brain Bridge 🧠

Therapeutic games for elderly patients with dementia, designed with **accessibility-first principles**. The app focuses on cognitive stimulation and reminiscence therapy through memory and puzzle games.

## Features

✅ **Memory Game** - Match pairs of cards with visual feedback
✅ **Puzzle Game** - Place puzzle pieces in the correct grid positions
✅ **Accessibility-First Design**:
  - Large buttons (56dp minimum touch targets)
  - Large text (18dp minimum body text)
  - High contrast colors
  - Simple, uncluttered UI
  - Minimal cognitive load

✅ **Difficulty Levels** - Easy, Medium, Hard
✅ **Cross-Platform** - Works on iOS, Android, and Web
✅ **Score Tracking** - Tracks moves, time, and performance

## Project Structure

```
brain-bridge/
├── src/
│   ├── games/
│   │   ├── memory/          # Memory matching game
│   │   │   ├── MemoryGame.js
│   │   │   └── MemoryCard.js
│   │   └── puzzle/          # Puzzle placement game
│   │       ├── PuzzleGame.js
│   │       └── PuzzlePiece.js
│   ├── screens/
│   │   ├── HomeScreen.js    # Game selection & difficulty
│   │   └── ResultsScreen.js # Results & scoring
│   └── shared/
│       ├── components/      # Reusable UI components
│       │   ├── LargeButton.js
│       │   └── Card.js
│       ├── styles/
│       │   └── theme.js    # Accessibility-first theme
│       └── utils/
│           └── gameUtils.js # Game logic utilities
├── App.js                   # Main app container & navigation
├── index.js                 # Entry point
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Expo CLI (optional: `npm install -g expo-cli`)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platform:
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

## Usage

1. **Select a Game** - Choose between Memory or Puzzle games
2. **Choose Difficulty** - Pick Easy, Medium, or Hard
3. **Play** - Follow on-screen instructions
4. **View Results** - See your score, moves, and time
5. **Play Again or Go Home** - Continue or return to game selection

## Accessibility Features

### Visual Accessibility
- **Large Buttons**: 56dp minimum (Touch targets should be 48-56dp per WCAG guidelines)
- **Large Text**: Body text is 18dp, headings up to 36dp
- **High Contrast**: Dark text (#333333) on light backgrounds (#FFFFFF)
- **Color Palette**: Carefully selected colors for visibility

### Cognitive Accessibility
- **Simple UI**: Minimal menu options and clear navigation
- **Large Cards**: Easy to tap, easy to see
- **Clear Feedback**: Visual responses to user actions
- **Slow Animations**: 800ms flip delay for better comprehension

### Design Principles
- **Consistency**: Predictable layouts and interactions
- **Simplicity**: One task per screen
- **Feedback**: Clear success/failure indicators
- **Errors**: Large, obvious error messages

## Theme Configuration

Edit `src/shared/styles/theme.js` to customize:
- Colors (primary: `#4A90E2`, secondary: `#F5A623`)
- Typography sizes and weights
- Spacing and padding
- Border radius
- Touch target sizes

## Game Logic

### Memory Game
- **Pairs**: 8 cards (Easy), 12 cards (Medium), 16 cards (Hard)
- **Scoring**: 100 - (moves × 2)
- **Goal**: Match all pairs in minimum moves

### Puzzle Game
- **Grid**: 3×3 (Easy), 4×4 (Medium), 5×5 (Hard)
- **Scoring**: 100 - (moves × 2)
- **Goal**: Place all pieces in correct positions

## Placeholder Assets

The app currently uses:
- **Solid Colors**: Cards have distinct background colors
- **Simple Shapes**: Numbers and checkmarks for feedback
- **No External Images**: All visual elements are generated with React Native

To customize:
1. Replace colors in `src/shared/styles/theme.js`
2. Modify game piece styles in game components
3. Add images to an `assets/` folder

## Future Enhancements

- [ ] Photo-based memory games (reminiscence therapy)
- [ ] Audio cues and narration
- [ ] Progress tracking & achievements
- [ ] Caregiver dashboard
- [ ] Adjustable timer & difficulty progression
- [ ] Themed games (animals, seasons, decades)
- [ ] Multiplayer mode for social engagement
- [ ] Data export for therapists

## Contributing

Contributions are welcome! Please:
1. Test on both web and mobile
2. Follow accessibility guidelines
3. Maintain large UI elements
4. Keep interactions simple

## License

MIT

## Support

For accessibility issues or feature requests, please create an issue.

---

**Note**: This app is designed specifically for elderly users with dementia. Regular usability testing with the target audience is recommended.
