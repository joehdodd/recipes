import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RecipeButton = props => (
  <TouchableOpacity
    style={[styles.button, { width: props.width }]}
    onPress={() => props.onPress()}
  >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderColor: 'transparent',
    backgroundColor: '#75A1D0',
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#666666',
    shadowOpacity: 1,
    elevation: 1
  },
  text: {
    fontSize: 16,
    color: '#f7f7f7'
  }
});

export default RecipeButton;
