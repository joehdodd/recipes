import React, { Component } from 'react';
// import ContainerView from './ContainerView';
import { View, Text, Button } from 'react-native';

class Recipe extends Component {
  render() {
    const { data } = this.props.recipe;
    return (
      <View>
        <Button onPress={() => this.props.onGoBack()} title="Back"/>
        <Text style={{ fontSize: 48 }}>{data.title}</Text>
        <Text>{data.prepTime}</Text>
        <Text style={{ fontWeight: '700' }}>Instructions</Text>
        <Text>{data.instructions}</Text>
        <Text>{data.ingredients}</Text>
      </View>
    );
  }
}

export default Recipe;
