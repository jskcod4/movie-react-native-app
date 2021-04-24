import React, { useState, useEffect } from 'react';

import { View, StyleSheet } from 'react-native';

import GetTrending from '../../services/GetTrending';

import TrendingCard from './trending-card';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetTrending().then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      {movies.map((movie, index) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </View>
  );
};

export default TrendingList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
