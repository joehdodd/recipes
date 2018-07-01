import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/configureStore';
import { isiPhoneX } from './isiPhoneX';
// import Navigator from './src/Navigator';
import Home from './src/components/Home';
import Recipes from './src/components/Recipes';

import { createBottomTabNavigator } from 'react-navigation';

export const Navigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Recipes: { screen: Recipes }
  },
  {
    initialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#e9ebee'
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold'
    //   }
    // },
    tabBarOptions: {
      style: {
        backgroundColor: '#e9ebee',
        borderTopWidth: 0
      },
      inactiveTintColor: 'gray'
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator/>
      </Provider>
    );
  }
}
