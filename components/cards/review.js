import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const CardReview = ({ title, description }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default CardReview;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  description: {
    fontWeight: '400',
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
});
