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
import { fb } from '../../firebase.js';

const AccountCard = props => (
  <View>
    {!!props.currentUser &&
      props.currentUser.displayName && (
        <Text style={styles.bigText}>Hi {props.currentUser.displayName}!</Text>
      )}
    <TextInput
      style={styles.textInput}
      autoCapitalize="none"
      placeholder="Change your display name..."
      onChangeText={displayName => props.onChangeText(displayName)}
      value={props.displayName}
    />
    <Button title="Change Display Name" onPress={props.handleDisplayName} />
    <Button title="Sign Out" onPress={props.handleSignOut} />
  </View>
);

class Account extends Component {
  state = { currentUser: null, displayName: null };
  componentDidMount() {
    const { currentUser } = fb.auth();
    this.setState({ currentUser });
  }
  static navigationOptions = {
    title: 'Account'
  };
  handleDisplayName = () => {
    const { displayName, currentUser } = this.state;
    console.log(displayName);
    !!displayName &&
      !!currentUser &&
      currentUser
        .updateProfile({
          displayName: displayName
        })
        .then(() => {
          this.setState({ displayName: displayName })
        })
        .catch(function(error) {
          console.log(error);
        });
  };
  handleSignOut = async () => {
    return await fb.auth().signOut();
  };
  onChangeText = text => {
    console.log(text);
    this.setState({ displayName: text});
  };
  render() {
    const { currentUser, displayName } = this.state;
    return (
      <ContainerView>
        <AccountCard
          styles={styles}
          currentUser={currentUser}
          displayName={displayName}
          handleDisplayName={this.handleDisplayName}
          handleSignOut={this.handleSignOut}
          onChangeText={this.onChangeText}
        />
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
  },
  bigText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8
  },
  textInput: {
    height: 50,
    width: 350,
    marginBottom: 5,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1
  }
});

export default Account;
