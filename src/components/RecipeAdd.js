import React, { Component } from 'react';
import ContainerView from './ContainerView';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import Card from './Card';
import RecipeInput from './RecipeInput';

const RecipeAdd = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <ScrollView style={styles.scroll}>
      <Card>
        <Text>Add a recipe!</Text>
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Title'}
          name={'title'}
          required
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Ingredients'}
          name={'ingredients'}
          required
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Instructions'}
          name={'instructions'}
          height={150}
          multiline
          required
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Prep-time'}
          name={'prep'}
          required
        />
        <Button title="Add" onPress={() => props.onSubmit()} />
      </Card>
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flex: 1
  }
});

export default RecipeAdd;
