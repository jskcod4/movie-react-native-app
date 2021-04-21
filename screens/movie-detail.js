import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MovieDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
      <TouchableOpacity style={styles.book}>
        <Icon style={styles.ticket} name="ticket" color="#000"></Icon>
        <Text style={styles.text}>Book ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  book: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgb(202, 132, 4);',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ticket: {
    position: 'absolute',
    left: 40,
    fontSize: 36,
    marginRight: 20,
  },
});
