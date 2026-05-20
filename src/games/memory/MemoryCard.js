import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { theme } from '../../shared/styles/theme';

const MemoryCard = ({ card, isFlipped, onPress, size }) => {
  const styles = StyleSheet.create({
    card: {
      width: size,
      height: size,
      borderRadius: theme.borderRadius.medium,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isFlipped ? card.color : theme.colors.primary,
      borderWidth: 3,
      borderColor: isFlipped ? 'rgba(0,0,0,0.2)' : theme.colors.border,
    },
    cardText: {
      fontSize: size * 0.4,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isFlipped}
    >
      {isFlipped && <Text style={styles.cardText}>✓</Text>}
    </TouchableOpacity>
  );
};

export default MemoryCard;
