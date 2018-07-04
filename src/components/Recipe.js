import React, { Component } from 'react';
// import ContainerView from './ContainerView';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import RecipeButton from './RecipeButton';
import RecipeCard from './RecipeCard';

class Recipe extends Component {
  render() {
    const { data } = this.props.recipe;
    return (
      <ScrollView>
        <View style={styles.view}>
          <RecipeCard>
            <Text style={{ fontSize: 48 }}>{data.title}</Text>
            <Text>{data.prep}</Text>
            <Text style={{ fontWeight: '700' }}>Instructions</Text>
            <Text>{data.instructions}</Text>
            <Text>{data.ingredients}</Text>
            <View
              style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}
            >
              <RecipeButton
                width={132}
                title="Back"
                onPress={this.props.onGoBack}
              />
            </View>
          </RecipeCard>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 5
  }
});

export default Recipe;
