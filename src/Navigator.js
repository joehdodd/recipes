import React, { Component } from 'react'

import Home from './components/Home'
import Recipes from './components/Recipes'

import { createStackNavigator } from 'react-navigation';

export const Navigator =  createStackNavigator({
  Home: { screen: Home },
  Recipes: { screen: Recipes },
},{
  initialRouteName: 'Recipes',
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default Nav
