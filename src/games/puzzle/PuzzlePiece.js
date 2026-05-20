import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { theme } from '../../shared/styles/theme';

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

const PuzzlePiece = ({ piece, size, onPress }) => {
  const color = colors[piece.id % colors.length];

  const styles = StyleSheet.create({
    piece: {
      width: size,
      height: size,
      borderRadius: theme.borderRadius.small,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing.sm,
      borderWidth: 2,
      borderColor: 'rgba(0,0,0,0.2)',
    },
    text: {
      fontSize: size * 0.3,
      fontWeight: '700',
      color: '#FFFFFF',
    },
  });

  return (
    <TouchableOpacity style={styles.piece} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{piece.id + 1}</Text>
    </TouchableOpacity>
  );
};

export default PuzzlePiece;
