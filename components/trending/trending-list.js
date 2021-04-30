import React, { useState, useEffect } from 'react';

import { View, StyleSheet } from 'react-native';

import GetTrending from '../../services/GetTrending';

import TrendingCard from './trending-card';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    GetTrending()
      .then((res) => {
        setMovies(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {movies.map((movie, index) => (
        <TrendingCard key={movie.id} movie={movie} loading={loading} />
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
