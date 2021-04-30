import React, { useContext } from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import { GlobalContext } from '../../context/global';

import FavoriteButton from '../movie/add-favorite';
import CinemaElement from '../movie/cinema-element';
import Valuation from '../movie/valuation';

import { IMAGE_PATH } from '../../settings';

import MovieListLoader from '../loaders/movie-card-loader';

const TrendingCard = ({ movie, loading }) => {
  const { genders } = useContext(GlobalContext);

  const genderName = (genderList = []) =>
    genders
      .filter((gender) => genderList.includes(gender.id))
      .map((gender) => gender.name)
      .slice(0, 2)
      .join('/ ');

  if (loading) {
    return <MovieListLoader />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: '100%',
        }}
        source={IMAGE_PATH + movie.poster_path}
      />

      <View style={styles.containerCenter}>
        <Text style={styles.textTitle}>{movie.original_title}</Text>
        <Text style={styles.textDuration}>2h 5m</Text>
        <Text style={styles.textGender}>{genderName(movie.genre_ids)}</Text>

        <View style={styles.containerCinema}>
          <CinemaElement text="3D/MAX" />
          <CinemaElement text="4D" />
        </View>

        <View style={styles.containerValuation}>
          <Valuation text={movie.vote_average} />
        </View>
      </View>

      <View style={styles.containerBookmark}>
        <FavoriteButton />
      </View>
    </View>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  containerCenter: {
    flex: 1,
    position: 'relative',
    padding: 25,
    paddingBottom: 50,
  },
  containerValuation: {
    position: 'absolute',
    bottom: 0,
    left: -10,
  },
  containerBookmark: {
    alignItems: 'flex-end',
    paddingTop: 25,
  },
  containerCinema: {
    position: 'absolute',
    bottom: 0,
    left: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDuration: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '400',
  },
});
