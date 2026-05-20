// Utility functions for game logic

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Create placeholder cards for memory game
 */
export const createMemoryCards = (pairCount = 6) => {
  const cards = [];
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1',
    '#FFA07A', '#98D8C8', '#F7DC6F'
  ];

  for (let i = 0; i < pairCount; i++) {
    const card = {
      id: i,
      pairId: i,
      color: colors[i % colors.length],
      matched: false,
      isFlipped: false,
    };
    cards.push(card);
    cards.push({ ...card, id: i + pairCount, matched: false, isFlipped: false });
  }

  return shuffleArray(cards);
};

/**
 * Create puzzle pieces
 */
export const createPuzzlePieces = (gridSize = 4) => {
  const pieces = [];
  const totalPieces = gridSize * gridSize;

  for (let i = 0; i < totalPieces; i++) {
    pieces.push({
      id: i,
      position: i,
      correctPosition: i,
      placed: false,
    });
  }

  return shuffleArray(pieces);
};

/**
 * Calculate game difficulty based on user performance
 */
export const calculateDifficulty = (score, attempts) => {
  if (attempts === 0) return 'easy';
  const successRate = score / attempts;
  if (successRate > 0.8) return 'hard';
  if (successRate > 0.5) return 'medium';
  return 'easy';
};

/**
 * Format time in mm:ss format
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};
