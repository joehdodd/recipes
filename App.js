import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/configureStore';
import { isiPhoneX } from './isiPhoneX';
// import Navigator from './src/Navigator';
import Home from './src/components/Home';
import RecipesContainer from './src/components/RecipesContainer';
import Recipe from './src/components/Recipe';
import {
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Loading from './src/components/Loading';
import SignUp from './src/components/SignUp';
import Login from './src/components/Login';
// import Main from './src/components/Main';

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Recipes: { screen: RecipesContainer }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        paddingBottom: 16,
        backgroundColor: '#e9ebee',
        borderTopWidth: 0
      },
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      inactiveTintColor: 'gray'
    }
  }
);

const Navigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    MainNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}
