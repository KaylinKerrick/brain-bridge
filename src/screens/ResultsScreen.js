import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { theme, textStyles } from '../shared/styles/theme';
import { LargeButton } from '../shared/components/LargeButton';
import { Card } from '../shared/components/Card';
import { formatTime } from '../shared/utils/gameUtils';

const ResultsScreen = ({ gameResult, gameName, onPlayAgain, onGoHome }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.xxl,
    },
    title: {
      ...textStyles.display,
      marginBottom: theme.spacing.md,
      color: theme.colors.success,
      textAlign: 'center',
    },
    subtitle: {
      ...textStyles.heading,
      marginBottom: theme.spacing.lg,
      textAlign: 'center',
    },
    statsContainer: {
      width: '100%',
      marginBottom: theme.spacing.xl,
    },
    statRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.cardBackground,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.medium,
      marginBottom: theme.spacing.md,
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    statLabel: {
      ...textStyles.body,
      flex: 1,
    },
    statValue: {
      ...textStyles.title,
      fontWeight: '700',
      color: theme.colors.primary,
    },
    scoreHighlight: {
      ...textStyles.display,
      color: theme.colors.success,
      textAlign: 'center',
      marginVertical: theme.spacing.lg,
      backgroundColor: theme.colors.cardBackground,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.medium,
      borderWidth: 2,
      borderColor: theme.colors.success,
    },
    buttonsContainer: {
      width: '100%',
      marginTop: theme.spacing.xl,
    },
  });

  const stats = [
    { label: 'Moves', value: gameResult.moves || 'N/A' },
    { label: 'Time', value: gameResult.time ? formatTime(gameResult.time) : 'N/A' },
    { label: 'Pairs Matched', value: gameResult.pairCount || gameResult.gridSize || 'N/A' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🎉 Great Job!</Text>
          <Text style={styles.subtitle}>{gameName} Complete</Text>
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statRow}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.scoreHighlight}>Score: {gameResult.score}</Text>

        <View style={styles.buttonsContainer}>
          <LargeButton title="Play Again" onPress={onPlayAgain} color="primary" />
          <LargeButton title="Home" onPress={onGoHome} color="secondary" />
        </View>
      </View>
    </View>
  );
};

export default ResultsScreen;
