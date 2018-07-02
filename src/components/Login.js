import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ContainerView from './ContainerView';
import { fb } from '../../firebase.js';

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;
    fb
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Loading'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <ContainerView>
        <Text style={styles.bigText}>Family Recipes</Text>
        <View style={styles.container}>
          <Text style={styles.bigText}>Login</Text>
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Login" onPress={this.handleLogin} />
          <Button
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 8,
    alignSelf: 'center'
  },
  textInput: {
    height: 50,
    width: 350,
    marginBottom: 10,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1
  }
});
