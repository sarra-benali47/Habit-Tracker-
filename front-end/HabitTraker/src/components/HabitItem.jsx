import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitItem = ({ habit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{habit.name}</Text>
      <Text style={styles.progress}>{`${habit.progress}/${habit.total}`}</Text>
      {/* Additional options for tracking */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progress: {
    fontSize: 16,
    color: '#888',
  },
});

export default HabitItem;
