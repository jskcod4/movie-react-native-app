import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Movie',
            animationEnabled: true,
            headerTitleStyle: {
              color: '#fff',
              fontSize: 36,
              fontWeight: 'bold',
              paddingLeft: '12px',
            },
            headerStyle: { backgroundColor: '#000', borderBottomColor: 'none' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
