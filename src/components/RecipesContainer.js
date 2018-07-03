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
import {
  fetchRecipes,
  setRecipeInputValues,
  addRecipe
} from '../Actions/recipes';
import ContainerView from './ContainerView';
import RecipeMenu from './RecipeMenu';
import RecipeList from './RecipeList';
import RecipeAdd from './RecipeAdd';
import Recipe from './Recipe';

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
      recipe: null,
      active: 'All'
    };
  }
  componentDidMount() {
    this.props.fetchRecipes();
  }
  renderRecipe = id => {
    const recipe = this.props.recipes.recipes.find(rec => rec.id === id);
    console.log(recipe);
    this.setState({ recipe: recipe, showRecipe: true });
  };
  onNav = nav => {
    this.setState({ active: nav });
  };
  onChange = (value, name) => {
    this.props.onSetRecipeInputValues(value, name);
  };
  onSubmitRecipe = () => {
    const { inputValues } = this.props.recipes;
    this.props.onSubmitRecipe(this.props.recipes.inputValues);
  };
  onGoBack = () => {
    this.setState({ showRecipe: false });
  };
  render() {
    const { active, recipe, showRecipe } = this.state;
    return (
      <View style={{ backgroundColor: 'transparent', flex: 1 }}>
        <RecipeMenu onNav={this.onNav} active={active} />
        <View style={styles.container}>
          {active === 'All' &&
            !showRecipe && (
              <ScrollView
                style={{
                  width: '100%',
                  flex: 1,
                  paddingTop: 5
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
            )}
          {active === 'Add' &&
            !showRecipe && (
              <RecipeAdd
                onSubmit={this.onSubmitRecipe}
                onChange={this.onChange}
              />
            )}
          {showRecipe && <Recipe recipe={recipe} onGoBack={this.onGoBack}/>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e9ebee',
    padding: 16,
    paddingTop: 0
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
  },
  onSetRecipeInputValues(value, name) {
    dispatch(setRecipeInputValues(value, name));
  },
  onSubmitRecipe(values) {
    dispatch(addRecipe(values));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
