import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/configureStore';
import { Home } from './src/components';
import { isiPhoneX } from './isiPhoneX';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={[styles.container, { paddingTop: isiPhoneX() ? 40 : 25 }]}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10
  }
});
