import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme, textStyles } from '../shared/styles/theme';
import { LargeButton } from '../shared/components/LargeButton';
import { Card } from '../shared/components/Card';

const HomeScreen = ({ onSelectGame }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.xxl,
    },
    title: {
      ...textStyles.display,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
    },
    subtitle: {
      ...textStyles.body,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
    },
    gameCard: {
      marginBottom: theme.spacing.lg,
      alignItems: 'center',
      width: '100%',
      maxWidth: 400,
    },
    gameTitle: {
      ...textStyles.title,
      marginBottom: theme.spacing.md,
    },
    gameDescription: {
      ...textStyles.body,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
      color: theme.colors.text,
    },
    difficultyLabel: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      fontWeight: '600',
    },
    difficultyButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    difficultyButton: {
      backgroundColor: theme.colors.cardBackground,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.medium,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      minHeight: 48,
      justifyContent: 'center',
    },
    difficultyButtonActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    difficultyButtonText: {
      fontSize: theme.typography.button.fontSize,
      fontWeight: '600',
      color: theme.colors.text,
    },
    difficultyButtonTextActive: {
      color: '#FFFFFF',
    },
  });

  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const games = [
    {
      id: 'memory',
      name: 'Memory Game',
      description: 'Match pairs of cards to exercise your memory. Perfect for reminiscence therapy.',
    },
    {
      id: 'puzzle',
      name: 'Puzzle Game',
      description: 'Place puzzle pieces in the correct grid. Improves spatial reasoning and focus.',
    },
  ];

  const handleGameStart = (gameId) => {
    onSelectGame(gameId, selectedDifficulty);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Brain Bridge</Text>
          <Text style={styles.subtitle}>Therapeutic Games for Memory & Cognition</Text>
        </View>

        {games.map((game) => (
          <Card key={game.id} style={styles.gameCard}>
            <Text style={styles.gameTitle}>{game.name}</Text>
            <Text style={styles.gameDescription}>{game.description}</Text>

            <View>
              <Text style={styles.difficultyLabel}>Difficulty:</Text>
              <View style={styles.difficultyButtons}>
                {['easy', 'medium', 'hard'].map((diff) => (
                  <LargeButton
                    key={diff}
                    title={diff.charAt(0).toUpperCase() + diff.slice(1)}
                    onPress={() => setSelectedDifficulty(diff)}
                    color={selectedDifficulty === diff ? 'primary' : 'secondary'}
                    style={{
                      minWidth: 90,
                      marginVertical: 0,
                      paddingVertical: theme.spacing.sm,
                    }}
                  />
                ))}
              </View>

              <LargeButton
                title={`Play ${game.name}`}
                onPress={() => handleGameStart(game.id)}
                color="primary"
                style={{ marginTop: theme.spacing.lg }}
              />
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
