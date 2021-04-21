import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import MovieCarousel from '../components/movie/movie-carousel';
import TrendingList from '../components/trending/trending-list';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MovieCarousel />

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Trending</Text>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('MovieDetail')}
        >
          view all
        </Text>
      </View>

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
    paddingHorizontal: 30,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
