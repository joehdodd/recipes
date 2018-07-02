import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { fb } from '../../firebase.js';

export default class Loading extends Component {
  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'MainNavigator' : 'Login')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
