import React, { Component } from 'react';
import ContainerView from './ContainerView';
import { View, Text } from 'react-native';

class Recipe extends Component {
  static navigationOptions = {
  }
  render() {
    // const { recipe } = this.props;
    console.log(this.props);
    return (
      <ContainerView>
        <Text>Hi</Text>
      </ContainerView>
      // <ContainerView>
      //   <Text style={{fontSize: 48}}>{recipe.title}</Text>
      //   <Text>{recipe.prepTime}</Text>
      //   <Text style={{fontWeight: '700'}}>Instructions</Text>
      //   <Text>{recipe.instructions}</Text>
      //   <Text>{recipe.ingredients}</Text>
      // </ContainerView>
    );
  }
}

export default Recipe;
