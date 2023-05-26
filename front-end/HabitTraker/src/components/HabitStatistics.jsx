import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitStatistics = ({ totalDays, streak, successRate }) => {
  return (
    <View style={styles.container}>
      <Text>Total Days: {totalDays}</Text>
      <Text>Streak: {streak}</Text>
      <Text>Success Rate: {successRate}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HabitStatistics;
