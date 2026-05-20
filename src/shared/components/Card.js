import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const Card = ({ children, style, padding = true }) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.cardBackground,
      borderRadius: theme.borderRadius.medium,
      borderWidth: 2,
      borderColor: theme.colors.border,
      padding: padding ? theme.spacing.lg : 0,
      marginVertical: theme.spacing.md,
    },
  });

  return <View style={[styles.card, style]}>{children}</View>;
};
