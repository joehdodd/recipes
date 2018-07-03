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
  <View style={styles.card}>
    <Text>{props.title}</Text>
  </View>
);

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

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowRadius: 6,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 0.5
  }
});

export default HomeContainer;
