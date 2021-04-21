import React from 'react';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import ButtonFavorite from '../movie/add-favorite';

const HeaderOption = () => {
  return (
    <View style={{ paddingRight: 30 }}>
      <ButtonFavorite />
    </View>
  );
};

export const HeaderBack = () => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingLeft: 30 }} onClick={() => navigation.goBack()}>
      <Icon
        style={{ fontSize: 46, fontWeight: 300 }}
        name="angle-left"
        color="#fff"
      />
    </View>
  );
};

export default HeaderOption;
