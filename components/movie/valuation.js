import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Valuation = ({ style = {} }) => {
  return (
    <View style={[styles.containerValuation, { ...style }]}>
      <Icon style={styles.iconStar} name="star" size={20} color="#000" />
      <Text style={styles.textValuation}>6.0</Text>
    </View>
  );
};

export default Valuation;

const styles = StyleSheet.create({
  containerValuation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 5,
    backgroundColor: 'orange',
  },
  iconStar: {
    fontSize: 16,
  },
  textValuation: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
