import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const ShipAction = ({
  styleContainer = {},
  iconName = 'star',
  styleIcon = {},
  styleText = {},
  text = 6.0,
}) => {
  return (
    <View style={[styles.container, { ...styleContainer }]}>
      <Icon
        style={[styles.iconStar, { ...styleIcon }]}
        name={iconName}
        size={20}
        color="#000"
      />
      <Text style={[styles.textValuation, { ...styleText }]}>{text}</Text>
    </View>
  );
};

export default ShipAction;

const styles = StyleSheet.create({
  container: {
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
