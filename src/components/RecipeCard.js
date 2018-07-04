import React from 'react';
import { View, StyleSheet } from 'react-native';

const RecipeCard = props => <View style={styles.card}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 2,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: 1
  }
});

export default RecipeCard;
