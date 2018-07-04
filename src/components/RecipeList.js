import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RecipeList = props => {
  return props.recipes.map((recipe, i) => (
    <TouchableOpacity
      onPress={() => {
        props.renderRecipe(recipe.id)
      }}
      key={i}
      style={{
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 2
      }}
    >
      <Text style={{ fontSize: 24 }}>Title: {recipe.data.title}</Text>
      <Text>Ingredients: {recipe.data.ingredients}</Text>
    </TouchableOpacity>
  ));
};

export default RecipeList;
