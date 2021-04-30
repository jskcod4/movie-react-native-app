import React from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';

import MovieBasicCard from './movie-basic';

import MovieCarouseLoader from '../loaders/movie-carousel-loader';

const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.1 - 10;

const MovieCarousel = ({ movies = [], loading = false }) => {
  const fakeMovies = new Array(10).fill(1);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={{ maxWidth: SCREEN_WIDTH, marginVertical: 15 }}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
      >
        {movies.map((movie) => (
          <MovieBasicCard movie={movie} key={movie.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 'auto',
    height: 300,
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 280,
    backgroundColor: 'gray',
  },
  text: {
    flex: 1,
    fontSize: 22,
    color: 'white',
    paddingRight: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
