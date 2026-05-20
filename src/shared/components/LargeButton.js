import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const LargeButton = ({
  title,
  onPress,
  color = 'primary',
  disabled = false,
  style,
  testID,
}) => {
  const colorValue = theme.colors[color] || theme.colors.primary;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colorValue,
      borderRadius: theme.borderRadius.large,
      padding: theme.spacing.lg,
      minHeight: theme.touchTarget,
      minWidth: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: theme.spacing.md,
      borderWidth: 2,
      borderColor: colorValue,
      opacity: disabled ? 0.6 : 1,
    },
    text: {
      color: '#FFFFFF',
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.button.fontWeight,
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      testID={testID}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
