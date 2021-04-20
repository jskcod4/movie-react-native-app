import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import FavoriteButton from '../movie/add-favorite';

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
          <Text style={styles.cinemaElement}>3D/MAX</Text>
          <Text style={styles.cinemaElement}>4D</Text>
        </View>

        <View style={styles.containerValuation}>
          <Icon style={styles.iconStar} name="star" size={20} color="#000" />
          <Text style={styles.textValuation}>6.0</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 18,
    paddingVertical: 5,
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
  cinemaElement: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'orange',
    borderWidth: 1,
    color: 'orange',
    textTransform: 'capitalize',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 12,
    marginRight: 10,
  },
  iconStar: {
    fontSize: 16,
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
  textValuation: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
