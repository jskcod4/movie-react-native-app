import React from 'react';
import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import MovieCarousel from '../components/movie/movie-carousel';
import TrendingList from '../components/trending/trending-list';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MovieCarousel />

      <TrendingList />

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
