import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

const TrendingCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 120,
        }}
        source={
          'https://cdn.mos.cms.futurecdn.net/acxCNCbz3BLdF5GRLCDqQU-320-80.jpg'
        }
      />

      <View style={styles.containerRight}>
        <Text style={styles.textTitle}>Interstellar</Text>
        <Text style={styles.textDuration}>2h 5m</Text>
        <Text style={styles.textGender}>Anime/Family</Text>
      </View>
    </View>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  containerRight: {
    padding: 20,
  },
  textTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDuration: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '300',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '300',
  },
});
