import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import MemoryGame from './src/games/memory/MemoryGame';
import PuzzleGame from './src/games/puzzle/PuzzleGame';
import { theme } from './src/shared/styles/theme';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [gameResults, setGameResults] = useState(null);

  const handleGameStart = (game, difficultyLevel) => {
    setSelectedGame(game);
    setDifficulty(difficultyLevel);
    setCurrentScreen('game');
  };

  const handleGameComplete = (results) => {
    setGameResults(results);
    setCurrentScreen('results');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedGame(null);
    setDifficulty('easy');
    setGameResults(null);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onGameStart={handleGameStart}
          />
        );
      case 'game':
        if (selectedGame === 'memory') {
          return (
            <MemoryGame
              difficulty={difficulty}
              onComplete={handleGameComplete}
              onBack={handleBackToHome}
            />
          );
        } else if (selectedGame === 'puzzle') {
          return (
            <PuzzleGame
              difficulty={difficulty}
              onComplete={handleGameComplete}
              onBack={handleBackToHome}
            />
          );
        }
        break;
      case 'results':
        return (
          <ResultsScreen
            results={gameResults}
            onBackToHome={handleBackToHome}
            onPlayAgain={() => setCurrentScreen('game')}
          />
        );
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Brain Bridge</Text>
            <Text style={styles.subtitle}>Therapeutic Games for Memory & Cognition</Text>
            <Text style={styles.status}>App is working!</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.appContainer}>
      {renderScreen()}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
  title: {
    ...theme.textStyles.title,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  subtitle: {
    ...theme.textStyles.subtitle,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  status: {
    ...theme.textStyles.body,
    color: theme.colors.success,
    fontWeight: 'bold',
  },
});
