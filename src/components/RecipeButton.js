import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RecipeButton = props => (
  <TouchableOpacity
    style={[styles.button, { width: props.width }]}
    onPress={() => props.onPress}
  >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderColor: 'transparent',
    backgroundColor: '#75A1D0',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#f7f7f7'
  }
});

export default RecipeButton;
