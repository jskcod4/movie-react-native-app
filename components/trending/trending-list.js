import React, { useState, useEffect } from 'react';

import { View, StyleSheet } from 'react-native';

import GetTrending from '../../services/GetTrending';

import TrendingCard from './trending-card';

import MovieListLoader from '../loaders/movie-card-loader';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loaderElements = new Array(3).fill(1);

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

  if (loading) {
    return (
      <View style={styles.container}>
        {loaderElements.map((el, index) => (
          <MovieListLoader key={index} />
        ))}
      </View>
    );
  }

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
