import React from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Valuation from '../components/movie/valuation';

import CinemaElement from '../components/movie/cinema-element';

const MovieDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.headerTitle}>The Nun</Text>

        <View style={styles.containerResume}>
          <View style={{ position: 'relative', marginLeft: -30 }}>
            <Image
              style={{
                width: 200,
                height: 300,
                backgroundColor: 'gray',
              }}
              source={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr1PxIwMvIDPUKQHpRbXDnnjJWIUo4qrkTQ&usqp=CAU'
              }
            />

            <View style={{ position: 'absolute', top: 0, right: 0 }}>
              <Valuation style={{ backgroundColor: '#C8C8C8', opacity: 0.8 }} />
            </View>
          </View>

          <View style={styles.containerRight}>
            <Text style={styles.textDuration}>1h 5m </Text>
            <Text style={styles.textGender}>Mystery Thriller</Text>

            <View style={styles.containerCinema}>
              <CinemaElement text="3D/MAX" />
              <CinemaElement text="4D" />
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollContainer: {
    paddingHorizontal: 30,
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
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  containerResume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    padding: 20,
  },
  containerCinema: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDuration: {
    color: 'gray',
    fontSize: 22,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
});
