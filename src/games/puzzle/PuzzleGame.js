import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { theme, textStyles } from '../../shared/styles/theme';
import { LargeButton } from '../../shared/components/LargeButton';
import { createPuzzlePieces } from '../../shared/utils/gameUtils';
import PuzzlePiece from './PuzzlePiece';

const PuzzleGame = ({ onGameEnd, difficulty = 'easy' }) => {
  const [pieces, setPieces] = useState([]);
  const [grid, setGrid] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Determine grid size based on difficulty
  const gridSize = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 5;

  React.useEffect(() => {
    initializeGame();
  }, [difficulty]);

  const initializeGame = () => {
    const newPieces = createPuzzlePieces(gridSize);
    setPieces(newPieces);
    setGrid(Array(gridSize * gridSize).fill(null));
    setMoves(0);
    setGameStarted(true);
  };

  const handlePiecePlaced = (pieceId, position) => {
    const piece = pieces.find((p) => p.id === pieceId);
    if (piece.correctPosition === position) {
      // Correct placement
      const newPieces = pieces.map((p) =>
        p.id === pieceId ? { ...p, placed: true } : p
      );
      setPieces(newPieces);

      const newGrid = [...grid];
      newGrid[position] = pieceId;
      setGrid(newGrid);

      setMoves((m) => m + 1);
      checkGameOver(newPieces);
    }
  };

  const checkGameOver = (placedPieces) => {
    if (placedPieces.every((p) => p.placed)) {
      setGameStarted(false);
      onGameEnd?.({
        score: 100 - moves * 2,
        moves,
        gridSize,
      });
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const pieceSize = (windowWidth - theme.spacing.lg * 2 - theme.spacing.md * (gridSize - 1)) / gridSize;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    title: {
      ...textStyles.heading,
      marginBottom: theme.spacing.md,
    },
    content: {
      flex: 1,
    },
    gridContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
      backgroundColor: theme.colors.cardBackground,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.medium,
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: windowWidth - theme.spacing.lg * 2,
    },
    gridPiece: {
      margin: theme.spacing.md / 2,
      backgroundColor: '#E8E8E8',
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.small,
      justifyContent: 'center',
      alignItems: 'center',
    },
    piecesLabel: {
      ...textStyles.body,
      marginBottom: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    piecesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    buttons: {
      alignItems: 'center',
      marginTop: theme.spacing.lg,
    },
    movesText: {
      ...textStyles.body,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Puzzle Game</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.movesText}>Moves: {moves}</Text>

        <Text style={styles.piecesLabel}>Place pieces in the grid:</Text>

        <View style={styles.gridContainer}>
          <View style={styles.grid}>
            {Array(gridSize * gridSize)
              .fill(null)
              .map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.gridPiece,
                    { width: pieceSize, height: pieceSize },
                  ]}
                >
                  {grid[index] !== null && (
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>✓</Text>
                  )}
                </View>
              ))}
          </View>
        </View>

        <Text style={styles.piecesLabel}>Available pieces:</Text>

        <View style={styles.piecesContainer}>
          {pieces
            .filter((p) => !p.placed)
            .map((piece) => (
              <PuzzlePiece
                key={piece.id}
                piece={piece}
                size={pieceSize * 0.8}
                onPress={() => handlePiecePlaced(piece.id, piece.correctPosition)}
              />
            ))}
        </View>
      </View>

      <View style={styles.buttons}>
        <LargeButton title="New Game" onPress={initializeGame} color="secondary" />
      </View>
    </ScrollView>
  );
};

export default PuzzleGame;
