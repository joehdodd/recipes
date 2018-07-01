import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { isiPhoneX } from '../../isiPhoneX';
import db from '../../firebase.js';

class Home extends Component {
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
    const publicRecipesRef = db.collection('publicRecipes');
    const recipes = [];
    publicRecipesRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => recipes.push(doc.data()));
      this.setState({ recipes: [...recipes] });
    });
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
      <View>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={styles.bigText}>Recipes | 🌮</Text>
          <View style={{ width: '100%' }}>
            <TextInput
              style={styles.input}
              onChangeText={title => this.setState({ title })}
              value={this.state.title}
              placeholder="Recipe title..."
            />
            <TextInput
              style={styles.input}
              onChangeText={ingredients => this.setState({ ingredients })}
              value={this.state.ingredients}
              placeholder="Ingredient list..."
            />
            <Button
              buttonStyle={{ width: '15%' }}
              title="Add"
              onPress={() =>
                this.onAdd(this.state.title, this.state.ingredients)
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={filter => this.setState({ filter })}
              value={this.state.filter}
              placeholder="Search..."
            />
          </View>
        </View>
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
          {this.recipes(this.state.recipes)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

function mapStateToProps(state) {
  return {
    recipes: state
  }
}

export default connect(mapStateToProps)(Home);
