import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import CinemaElement from './cinema-element';

import { IMAGE_PATH } from '../../settings';

const MovieBasicCard = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={IMAGE_PATH + movie.poster_path} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 20,
        }}
      >
        <Text style={styles.text}>{movie.original_title}</Text>
        <CinemaElement text="3D/MAX" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MovieBasicCard;
