import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const RecipeMenu = props => (
  <View style={styles.outerContainer}>
    <ScrollView contentContainerStyle={styles.innerContainer} horizontal={true}>
      <Text style={styles.text}>All</Text>
      <Text style={styles.text}>Some</Text>
      <Text style={styles.text}>None</Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 0,
    flexGrow: 0,
    paddingTop: 28,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32,
    padding: 5
  },
  text: {
    fontWeight: '700'
  }
});

export default RecipeMenu;
