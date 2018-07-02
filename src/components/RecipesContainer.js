import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { isiPhoneX } from '../../isiPhoneX';
import db from '../../firebase.js';
import { fetchRecipes } from '../Actions/recipes';
import ContainerView from './ContainerView';
import RecipeList from './RecipeList';

class RecipesContainer extends Component {
  static navigationOptions = {
    title: 'Recipes'
  };
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: null,
      ingredients: null,
      recipes: [],
      filter: null,
      showRecipe: false,
      recipe: null
    };
  }
  componentDidMount() {
    this.props.fetchRecipes();
  }
  renderRecipe = id => {
    const recipe = this.props.recipes.recipes.find(rec => rec.id === id);
    console.log(recipe);
    this.setState({ recipe: recipe });
  };
  render() {
    return (
      <ContainerView>
        <View style={styles.container}>
          <ScrollView
            style={{
              paddingTop: 10,
              width: '100%',
              flex: 1
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <RecipeList
              {...this.props}
              renderRecipe={this.renderRecipe}
              recipes={this.props.recipes.recipes}
            />
          </ScrollView>
        </View>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  bigText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8
  },
  input: {
    height: 40,
    width: 250,
    marginBottom: 2.5,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1
  }
});

function mapStateToProps({ recipes }) {
  return {
    recipes
  };
}

const mapDispatchToProps = dispatch => ({
  fetchRecipes() {
    dispatch(fetchRecipes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
