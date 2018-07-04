import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import RecipeCard from './RecipeCard';

const RecipeList = props => {
  return props.recipes.map((recipe, i) => (
    <TouchableOpacity
      onPress={() => {
        props.renderRecipe(recipe.id);
      }}
      key={i}
      style={styles.container}
    >
      <RecipeCard>
        <Text style={{ fontSize: 24 }}>Title: {recipe.data.title}</Text>
        <Text>Ingredients: {recipe.data.ingredients}</Text>
      </RecipeCard>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})


export default RecipeList;
