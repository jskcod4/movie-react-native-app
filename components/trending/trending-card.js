import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import FavoriteButton from '../movie/add-favorite';
import CinemaElement from '../movie/cinema-element';
import Valuation from '../movie/valuation';

const TrendingCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: '100%',
        }}
        source={
          'https://cdn.mos.cms.futurecdn.net/acxCNCbz3BLdF5GRLCDqQU-320-80.jpg'
        }
      />

      <View style={styles.containerCenter}>
        <Text style={styles.textTitle}>Interstellar</Text>
        <Text style={styles.textDuration}>2h 5m</Text>
        <Text style={styles.textGender}>Anime/Family</Text>

        <View style={styles.containerCinema}>
          <CinemaElement text="3D/MAX" />
          <CinemaElement text="4D" />
        </View>

        <View style={styles.containerValuation}>
          <Valuation />
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
