import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitProgress = ({ progress, total }) => {
  const completionPercentage = (progress / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${completionPercentage}%` }]} />
      <Text style={styles.progressText}>{`${completionPercentage.toFixed(1)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  progressText: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default HabitProgress;