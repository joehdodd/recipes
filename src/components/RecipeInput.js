import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const RecipeInput = props => (
  <TextInput
    multiline={props.multiline}
    required={props.required}
    style={[styles.textInput, { height: !!props.height ? props.height : 50 }]}
    autoCapitalize="none"
    placeholder={props.placeholder}
    onChangeText={(text) => props.onChange(text, props.name)}
    value={''}
  />
);

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginBottom: 10,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1
  }
});

export default RecipeInput;
