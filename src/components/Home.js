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

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <ContainerView>
        <Text>Home!</Text>
      </ContainerView>
    );
  }
}

export default Home;
