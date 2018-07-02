import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { fb } from '../../firebase.js';

export default class SignUp extends React.Component {
  state = { email: null, password: null, displayName: null, errorMessage: null };

  handleSignUp = () => {
    const { email, password, displayName } = this.state;
    fb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('SIGN UP', user);
        const newUser = user.user;
        newUser
          .updateProfile({
            displayName: displayName,
          })
          .then(function() {
            console.log('success!');
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Display Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={displayName => this.setState({ displayName })}
          value={this.state.displayName}
          required
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          required
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          required
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
});
