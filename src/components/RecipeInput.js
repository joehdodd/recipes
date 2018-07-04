import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const RecipeInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    multiline={props.multiline}
    required={props.required}
    style={[styles.textInput, { height: !!props.height ? props.height : 50 }, Platform.OS === 'Android' ? { textAlignVertical: 'top'} : '']}
    autoCapitalize="none"
    placeholder={props.placeholder}
    onChangeText={(text) => props.onChange(text, props.name)}
    value={props.value}
  />
);

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginBottom: 10,
    textAlignVertical: 'top',
    paddingLeft: 5,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1
  }
});

export default RecipeInput;
