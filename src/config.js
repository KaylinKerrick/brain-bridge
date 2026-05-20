// Configuration file for future enhancements
// Game definitions, assets, and extended settings

export const GAME_CONFIG = {
  version: '1.0.0',
  targetAudience: 'Elderly patients with dementia',
  accessibility: {
    minTouchTarget: 56, // dp
    minFontSize: 18,    // dp
    focusOnSimplicity: true,
    highContrast: true,
  },
};

// Game definitions with metadata
export const GAMES = {
  MEMORY: {
    id: 'memory',
    name: 'Memory Game',
    description: 'Match pairs of cards to exercise your memory. Perfect for reminiscence therapy.',
    category: 'cognitive',
    difficulties: {
      easy: { pairCount: 4 },
      medium: { pairCount: 6 },
      hard: { pairCount: 8 },
    },
  },
  PUZZLE: {
    id: 'puzzle',
    name: 'Puzzle Game',
    description: 'Place puzzle pieces in the correct grid. Improves spatial reasoning and focus.',
    category: 'cognitive',
    difficulties: {
      easy: { gridSize: 3 },
      medium: { gridSize: 4 },
      hard: { gridSize: 5 },
    },
  },
};

// Reminiscence therapy themes (for future photo-based games)
export const THEMES = {
  ANIMALS: {
    name: 'Animals',
    photos: ['dog', 'cat', 'bird', 'butterfly', 'squirrel', 'bunny'],
    category: 'nature',
  },
  FLOWERS: {
    name: 'Flowers',
    photos: ['rose', 'tulip', 'daisy', 'sunflower', 'lily', 'orchid'],
    category: 'nature',
  },
  DECADES: {
    1950s: { name: '1950s', colors: ['#FFB6C1', '#87CEEB', '#FFD700', '#F0E68C'] },
    1960s: { name: '1960s', colors: ['#FF69B4', '#00CED1', '#DC143C', '#9932CC'] },
    1970s: { name: '1970s', colors: ['#8B4513', '#DAA520', '#FF8C00', '#6B8E23'] },
    1980s: { name: '1980s', colors: ['#FF1493', '#00CED1', '#00FF7F', '#FFD700'] },
  },
};

// Scoring algorithms
export const SCORING = {
  MEMORY: {
    baseScore: 100,
    perMove: 2,
    timeBonus: false,
    formula: (moves) => Math.max(0, 100 - moves * 2),
  },
  PUZZLE: {
    baseScore: 100,
    perMove: 2,
    timeBonus: false,
    formula: (moves) => Math.max(0, 100 - moves * 2),
  },
};

// User profiles for different cognitive levels
export const USER_PROFILES = {
  MILD: {
    name: 'Mild Cognitive Decline',
    maxPairs: 8,
    maxGridSize: 5,
    suggestedDifficulty: 'medium',
  },
  MODERATE: {
    name: 'Moderate Cognitive Decline',
    maxPairs: 6,
    maxGridSize: 4,
    suggestedDifficulty: 'easy',
  },
  ADVANCED: {
    name: 'Advanced Cognitive Decline',
    maxPairs: 4,
    maxGridSize: 3,
    suggestedDifficulty: 'easy',
  },
};

// Sound effects (when audio support is added)
export const SOUNDS = {
  MATCH: 'sounds/match.wav',
  PLACE: 'sounds/place.wav',
  WIN: 'sounds/win.wav',
  FLIP: 'sounds/flip.wav',
};

// Progress tracking (for future caregiver dashboard)
export const PROGRESS_TRACKING = {
  enabled: false,
  metricTracked: ['score', 'time', 'moves', 'accuracy'],
  dataExport: ['JSON', 'CSV'],
};

// Accessibility features (future enhancements)
export const ACCESSIBILITY_FEATURES = {
  VOICE_OVER: {
    enabled: false,
    description: 'Screen reader support',
  },
  LARGE_TEXT: {
    enabled: true,
    minSize: 18,
  },
  HIGH_CONTRAST: {
    enabled: true,
    colorBlindFriendly: false,
  },
  AUDIO_CUES: {
    enabled: false,
    description: 'Audio feedback for actions',
  },
  ADJUSTABLE_SPEED: {
    enabled: false,
    description: 'Slow down animations and transitions',
  },
};

// API endpoints (for future backend integration)
export const API = {
  enabled: false,
  baseUrl: 'https://api.brainbridge.app',
  endpoints: {
    saveProgress: '/progress',
    getChallenges: '/challenges',
    getLeaderboard: '/leaderboard',
  },
};
