import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteButton = () => {
  return <Icon style={styles.bookmarkPlain} name="bookmark-o" color="#fff" />;
};

export default FavoriteButton;

const styles = StyleSheet.create({
  bookmarkPlain: {
    fontSize: 30,
  },
});
