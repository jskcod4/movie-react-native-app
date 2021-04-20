import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.1 - 10;

const MovieCarousel = () => {
  const movies = new Array(10).fill(Math.random());

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={{ width: SCREEN_WIDTH }}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
      >
        {movies.map((movie, index) => (
          <View key={index + 1} style={styles.card}>
            <Image
              style={styles.image}
              source={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr1PxIwMvIDPUKQHpRbXDnnjJWIUo4qrkTQ&usqp=CAU'
              }
            />
            <Text style={styles.text}>Venom</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 'auto',
    height: 300,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 280,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 24,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 4,
    fontWeight: 'bold',
  },
});
