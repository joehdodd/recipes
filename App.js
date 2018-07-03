import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/configureStore';
import { isiPhoneX } from './isiPhoneX';
// import Navigator from './src/Navigator';
import HomeContainer from './src/components/HomeContainer';
import RecipesContainer from './src/components/RecipesContainer';
import RecipesNavigator from './src/components/RecipesNavigator';
import Account from './src/components/Account';
import Recipe from './src/components/Recipe';
import {
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Loading from './src/components/Loading';
import SignUp from './src/components/SignUp';
import Login from './src/components/Login';
import { Ionicons } from '@expo/vector-icons';
// import Main from './src/components/Main';

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeContainer },
    Recipes: { screen: RecipesContainer },
    Account: { screen: Account }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let platform = Platform.OS;
        switch (routeName) {
          case 'Home':
          iconName =
            platform === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
          break;
          case 'Recipes':
          iconName =
            platform === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
          break;
          case 'Account':
          iconName =
            platform === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
          break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
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
