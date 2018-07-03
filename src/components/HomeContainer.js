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
import Card from './Card';

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <ContainerView>
        <ScrollView style={{flex: 1}}>
          <Card title="Favorites" />
          <Card title="Other" />
          <Card title="Stuff" />
        </ScrollView>
      </ContainerView>
    );
  }
}


export default HomeContainer;
