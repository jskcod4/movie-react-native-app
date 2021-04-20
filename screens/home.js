import React from 'react';
import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import MovieCarousel from '../components/movie-carousel';
import TrendingCard from '../components/trending-card';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MovieCarousel />

      <TrendingCard />
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '30px',
    paddingRight: '30px',
    overflow: 'hidden',
    maxWidth: '100%',
  },
});
