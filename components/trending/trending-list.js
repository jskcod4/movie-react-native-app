import React from 'react';

import { View, StyleSheet } from 'react-native';

import TrendingCard from './trending-card';

const TrendingList = () => {
  const trendingList = new Array(50).fill(1);

  return (
    <View style={styles.container}>
      {trendingList.map((trending, index) => (
        <TrendingCard key={index}></TrendingCard>
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
