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
  StatusBar
} from 'react-native';
import { isiPhoneX } from '../../isiPhoneX';
import db from '../../firebase.js';
import { fetchRecipes } from '../Actions/recipes';
import ContainerView from './ContainerView';

class Recipes extends Component {
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
      filter: null
    };
  }
  componentDidMount() {
    this.props.fetchRecipes();
  }
  onAdd = (title, ingredients) => {
    return !!title && !!ingredients
      ? this.setState({
          recipes: [
            { title: title, ingredients: ingredients },
            ...this.state.recipes
          ],
          title: null,
          ingredients: null
        })
      : Alert.alert('Please fill out all fields!');
  };
  onAlert = () => {
    return Alert.alert('PFFF! 💻');
  };
  recipes = recipes => {
    let filtered = recipes.filter(recipe => {
      const { filter } = this.state;
      if (!!filter) {
        let lcf = filter.toLowerCase();
        let ing = recipe.ingredients.toLowerCase();
        let title = recipe.title.toLowerCase();
        let rec = ing.includes(lcf) || title.includes(lcf);
        return rec;
      }
      return true;
    });
    return !!filtered.length ? (
      filtered.map((recipe, i) => (
        <View
          key={i}
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 10,
            backgroundColor: '#fff',
            borderRadius: 6,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: 'grey',
            shadowOpacity: 0.5
          }}
        >
          <Text style={{ fontSize: 24 }} key={i} onPress={() => this.onAlert()}>
            Title: {recipe.title}
          </Text>
          <Text>Ingredients: {recipe.ingredients}</Text>
        </View>
      ))
    ) : (
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 32
        }}
      >
        No Results... 😢
      </Text>
    );
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
            {this.recipes(this.props.recipes.recipes)}
          </ScrollView>
        </View>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#e9ebee'
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
