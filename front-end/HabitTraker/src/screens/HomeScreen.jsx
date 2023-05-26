import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../components/Header';
import HabitItem from '../components/HabitItem';
import AddHabitForm from '../components/AddHabitForm';

const HomeScreen = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitName) => {
    const newHabit = {
      id: Math.random().toString(),
      name: habitName,
      progress: 0,
      total: 30,
    };

    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  return (
    <View>
      <Header />
      <FlatList
        data={habits}
        renderItem={({ item }) => <HabitItem habit={item} />}
        keyExtractor={(item) => item.id}
      />
      <AddHabitForm onAddHabit={addHabit} />
    </View>
  );
};

export default HomeScreen;
