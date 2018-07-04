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
import RecipeButton from './RecipeButton';

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
          value={props.values.title}
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Ingredients'}
          name={'ingredients'}
          required
          value={props.values.ingredients}
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Instructions'}
          name={'instructions'}
          height={150}
          multiline
          required
          value={props.values.instructions}
        />
        <RecipeInput
          onChange={props.onChange}
          placeholder={'Prep-time'}
          name={'prep'}
          required
          value={props.values.prep}
        />
        <RecipeButton width={116} title="Add" onPress={() => props.onSubmit()} />
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
