import React from 'react';

import { StyleSheet, Text } from 'react-native';

const CinemaElement = ({ text }) => {
  return <Text style={styles.cinemaElement}>{text}</Text>;
};

export default CinemaElement;

const styles = StyleSheet.create({
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
    borderRadius: 2,
  },
});
