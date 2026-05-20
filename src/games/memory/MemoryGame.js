import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { theme, textStyles } from '../../shared/styles/theme';
import { LargeButton } from '../../shared/components/LargeButton';
import { createMemoryCards, formatTime } from '../../shared/utils/gameUtils';
import MemoryCard from './MemoryCard';

const MemoryGame = ({ onGameEnd, difficulty = 'easy' }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Determine pair count based on difficulty
  const pairCount = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 8;

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  useEffect(() => {
    if (!gameStarted) return;
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, [gameStarted]);

  const initializeGame = () => {
    setCards(createMemoryCards(pairCount));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setGameStarted(true);
  };

  const handleCardPress = (id) => {
    if (matched.includes(id) || flipped.includes(id) || flipped.length >= 2) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      checkMatch(newFlipped);
    }
  };

  const checkMatch = (flippedCards) => {
    const [id1, id2] = flippedCards;
    const card1 = cards.find((c) => c.id === id1);
    const card2 = cards.find((c) => c.id === id2);

    if (card1.pairId === card2.pairId) {
      // Match found!
      setMatched([...matched, id1, id2]);
      setFlipped([]);
      checkGameOver([...matched, id1, id2]);
    } else {
      // No match, flip back after delay
      setTimeout(() => setFlipped([]), 800);
    }
  };

  const checkGameOver = (matchedCards) => {
    if (matchedCards.length === pairCount * 2) {
      setGameStarted(false);
      onGameEnd?.({
        score: 100 - moves * 2,
        moves,
        time,
        pairCount,
      });
    }
  };

  const gridSize = Math.ceil(Math.sqrt(pairCount * 2));
  const cardSize = (Dimensions.get('window').width - theme.spacing.lg * 2 - theme.spacing.md * (gridSize - 1)) / gridSize;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      justifyContent: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
    title: {
      ...textStyles.heading,
      marginBottom: theme.spacing.md,
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: theme.spacing.lg,
    },
    stat: {
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: theme.borderRadius.medium,
      minWidth: 100,
    },
    statLabel: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    statValue: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: '700',
      color: theme.colors.primary,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: theme.spacing.xl,
    },
    cardWrapper: {
      margin: theme.spacing.sm / 2,
    },
    buttons: {
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Memory Game</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Time</Text>
          <Text style={styles.statValue}>{formatTime(time)}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Moves</Text>
          <Text style={styles.statValue}>{moves}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Matched</Text>
          <Text style={styles.statValue}>{matched.length / 2}</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {cards.map((card) => (
          <View key={card.id} style={[styles.cardWrapper, { width: cardSize }]}>
            <MemoryCard
              card={card}
              isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
              onPress={() => handleCardPress(card.id)}
              size={cardSize}
            />
          </View>
        ))}
      </View>

      <View style={styles.buttons}>
        <LargeButton title="New Game" onPress={initializeGame} color="secondary" />
      </View>
    </View>
  );
};

export default MemoryGame;
