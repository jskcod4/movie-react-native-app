import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.1 - 10;

const MovieCarousel = () => {
  const movies = new Array(25).fill(Math.random());

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
            {index}
            <Image
              style={styles.image}
              source={{
                uri: 'https://pics.filmaffinity.com/Venom-539453192-large.jpg',
              }}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    margin: 5,
    borderRadius: 15,
  },
  image: {
    width: 160,
    height: 200,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 4,
    fontWeight: 'bold',
  },
});
