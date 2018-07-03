import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import RecipesContainer from './RecipesContainer';
import RecipeAdd from './RecipeAdd';

const DrawerContent = props => (
  <ScrollView>
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Reicpe Navigation</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const RecipesNavigator = createDrawerNavigator(
  {
    All: { screen: RecipesContainer },
    Add: { screen: RecipeAdd }
  },
  {
    initialRouteName: 'All',
    contentComponent: DrawerContent
  }
);

export default RecipesNavigator;
