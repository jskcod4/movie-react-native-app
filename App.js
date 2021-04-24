import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import MovieDetail from './screens/movie-detail';

import HeaderOption, { HeaderBack } from './components/header/header-option';
import GlobalContextProvider from './context/global';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              ...headerOptions,
              title: 'Movie',
            }}
          />

          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{
              ...headerOptions,
              headerTitleContainerStyle: {
                display: 'none',
              },
              headerLeft: () => <HeaderBack />,
              headerRight: () => <HeaderOption></HeaderOption>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

const headerOptions = {
  animationEnabled: false,
  headerTitleStyle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  headerStyle: { backgroundColor: '#000', borderBottomColor: 'none' },
};
