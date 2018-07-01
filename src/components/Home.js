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
import ContainerView from './ContainerView';

const Card = props => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => props.navigation.navigate('Recipes')}
    // shadowOffset={{ width: 10, height: 10 }}
    // shadowColor="black"
    // shadowOpacity="1.0"
  >
    <Text>Recipes</Text>
  </TouchableOpacity>
);

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <ContainerView>
        <Card {...this.props} />
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowRadius: 6,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 0.5
  }
});

export default Home;
